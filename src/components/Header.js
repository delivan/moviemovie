import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.7);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${props => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => (
  <Nav>
    <List>
      <ListItem current={pathname === "/"}>
        <SLink to="/">영화</SLink>
      </ListItem>
      <ListItem current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </ListItem>
      <ListItem current={pathname === "/search"}>
        <SLink to="/search">검색</SLink>
      </ListItem>
    </List>
  </Nav>
);

export default withRouter(Header);
