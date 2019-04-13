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

const TVPresenter = ({ onTheAir, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title={<TranslatedString string="popular" />}>
          {popular.map(tvShow => (
            <Poster
              key={tvShow.id}
              id={tvShow.id}
              imgUrl={tvShow.poster_path}
              rating={tvShow.vote_average}
              title={tvShow.name}
              year={
                tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)
              }
            />
          ))}
        </Section>
      )}
      {onTheAir && onTheAir.length > 0 && (
        <Section title={<TranslatedString string="onTheAir" />}>
          {onTheAir.map(tvShow => (
            <Poster
              key={tvShow.id}
              id={tvShow.id}
              imgUrl={tvShow.poster_path}
              rating={tvShow.vote_average}
              title={tvShow.name}
              year={
                tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)
              }
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title={<TranslatedString string="airingToday" />}>
          {airingToday.map(tvShow => (
            <Poster
              key={tvShow.id}
              id={tvShow.id}
              imgUrl={tvShow.poster_path}
              rating={tvShow.vote_average}
              title={tvShow.name}
              year={
                tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)
              }
            />
          ))}
        </Section>
      )}
      {error && <ErrorMessage text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  onTheAir: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
