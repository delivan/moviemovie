import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import Section from "components/Section";

const Container = styled.div`
  padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {nowPlaying.map(movie => movie.title)}
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
