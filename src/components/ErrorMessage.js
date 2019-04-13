import React from "react";
import PropTypes from "prop-types";
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

const ErrorMessage = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};

export default ErrorMessage;
