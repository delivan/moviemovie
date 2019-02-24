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

const TVPresenter = ({ onTheAir, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title="인기">
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
        <Section title="현재 방영중">
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
        <Section title="오늘 방영 예정">
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
  onTheAir: Proptypes.array,
  popular: Proptypes.array,
  airingToday: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired
};

export default TVPresenter;
