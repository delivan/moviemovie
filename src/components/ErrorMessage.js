import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Text = styled.span`
  color: #e74c3c;
  font-size: 20px;
`;

const ErrorMessage = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

ErrorMessage.propTypes = {
  text: Proptypes.string.isRequired
};

export default ErrorMessage;
