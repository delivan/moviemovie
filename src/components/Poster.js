import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.img``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imgUrl, rating, title, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imgUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.proptypes = {
  id: Proptypes.string.isRequired,
  imgUrl: Proptypes.string,
  rating: Proptypes.number,
  title: Proptypes.string.isRequired,
  year: Proptypes.string,
  isMovie: Proptypes.bool
};

export default Poster;
