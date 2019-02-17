import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading }) => {
  return <div>Detail</div>;
};

DetailPresenter.propTypes = {
  result: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired
};

export default DetailPresenter;
