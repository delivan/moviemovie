import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import Section from "components/Section";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title="인기">
          {popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              title={movie.title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="상영중">
          {nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              title={movie.title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="개봉 예정">
          {upcoming.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              title={movie.title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <ErrorMessage text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: Proptypes.array,
  upcoming: Proptypes.array,
  popular: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired
};

export default HomePresenter;
