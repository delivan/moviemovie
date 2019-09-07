import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  height: 180px;
  border-radius: 4px;
  transition: opacity 0.2s ease-in-out;
`;

const Rating = styled.span`
  bottom: 5px;
  left: 3px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;

  &:hover {
    ${Image} {
      opacity: 0.3;
    }

    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imgUrl, rating, title, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w500${imgUrl}`
              : "/assets/noposter.jpg"
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: Proptypes.number.isRequired,
  imgUrl: Proptypes.string,
  rating: Proptypes.number,
  title: Proptypes.string.isRequired,
  year: Proptypes.string,
  isMovie: Proptypes.bool
};

export default Poster;
