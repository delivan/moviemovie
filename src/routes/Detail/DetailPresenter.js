import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import Loader from "components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  height: 100%;
`;

const Data = styled.div`
  width: 70%;
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  margin-bottom: 10px;
`;

const InfoDivider = styled.span`
  margin: 0 10px;
`;

const Info = styled.span``;

const Overview = styled.p`
  line-height: 18px;
  margin-bottom: 120px;
`;

const VideoContainer = styled.div`
  display: inline-block;
`;

const Video = styled.iframe`
  width: 270px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const DetailPresenter = ({ result, isMovie, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImg={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : "/assets/noposter.jpg"
          }
        />
        <Data>
          <Title>{isMovie ? result.title : result.name}</Title>
          <InfoContainer>
            <Info>
              {isMovie
                ? result.release_date && result.release_date.substring(0, 4)
                : result.first_air_date &&
                  result.first_air_date.substring(0, 4)}
            </Info>
            <InfoDivider>·</InfoDivider>
            <Info>{`${
              isMovie
                ? result.runtime
                  ? result.runtime
                  : " - "
                : result.episode_run_time[0]
                ? result.episode_run_time[0]
                : " - "
            }분`}</Info>
            <InfoDivider>·</InfoDivider>
            <Info>
              {result.genres.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
            </Info>
            <InfoDivider>·</InfoDivider>
            <Info>{`⭐️${result.vote_average} / 10`}</Info>
          </InfoContainer>
          <Overview>{result.overview}</Overview>
          {result.videos.results && (
            <VideoContainer>
              {result.videos.results.map((video, index) => {
                return (
                  video.site === "YouTube" &&
                  index < 6 && (
                    <Video
                      key={video.id}
                      src={`https://www.youtube.com/embed/${video.key}`}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                  )
                );
              })}
            </VideoContainer>
          )}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: Proptypes.array,
  isMovie: Proptypes.bool,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired
};

export default DetailPresenter;
