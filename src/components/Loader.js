import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 220px);
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-size: 28px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="loading">
      ⏰
    </span>
  </Container>
);
