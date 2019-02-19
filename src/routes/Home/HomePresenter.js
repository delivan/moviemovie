import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import Section from "components/Section";
import Loader from "../../components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {nowPlaying.map(movie => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {nowPlaying.map(movie => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
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
