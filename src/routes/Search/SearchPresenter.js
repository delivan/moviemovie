import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading
}) => {
  return <div>Search</div>;
};

SearchPresenter.propTypes = {
  movieResults: Proptypes.array,
  tvResults: Proptypes.array,
  searchTerm: Proptypes.string,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired
};

export default SearchPresenter;
