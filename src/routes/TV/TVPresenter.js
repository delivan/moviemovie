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

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(tvShow => (
            <Poster 
              key={tvShow.id}
              id={tvShow.id} 
              imgUrl={tvShow.poster_path}
              rating={tvShow.vote_average}
              title={tvShow.original_name}
              year={tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(tvShow => (
            <Poster 
              key={tvShow.id}
              id={tvShow.id} 
              imgUrl={tvShow.poster_path}
              rating={tvShow.vote_average}
              title={tvShow.original_name}
              year={tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(tvShow => (
            <Poster 
              key={tvShow.id}
              id={tvShow.id} 
              imgUrl={tvShow.poster_path}
              rating={tvShow.vote_average}
              title={tvShow.original_name}
              year={tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)}
            />
          ))}
        </Section> 
      )}
      {error && <ErrorMessage text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: Proptypes.array,
  popular: Proptypes.array,
  airingToday: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired
};

export default TVPresenter;
