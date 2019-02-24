import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  background-color: rgba(20, 20, 20, 0.7);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.5);
`;

const Footer = ({ location: { pathname } }) => (
  <Container>
    <Copyright>Copyright © Jeonghyeok Yoo</Copyright>
  </Container>
);

export default withRouter(Footer);
