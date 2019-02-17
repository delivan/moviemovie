import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return <div>Home</div>;
};

HomePresenter.propTypes = {
  nowPlaying: Proptypes.array,
  upcoming: Proptypes.array,
  popular: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired
};

export default HomePresenter;
