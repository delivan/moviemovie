import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "components/Section";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Poster from "../../components/Poster";
import TranslatedString from "components/TranslatedString";

const Container = styled.div`
  padding: 0 20px;
  padding-bottom: 30px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title={<TranslatedString string="popular" />}>
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
        <Section title={<TranslatedString string="nowPlaying" />}>
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
        <Section title={<TranslatedString string="upcoming" />}>
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
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
