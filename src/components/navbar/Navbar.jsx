import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  height: 50px;
  width: 100%;
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const InheritedLink = styled(Link)`
  font-size: 40px;
  text-decoration: 0;
  color: white;
  margin: 0 10px 0 10px;
  font-family: Arial, Helvetica, sans-serif;

  :hover {
    color: black;
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <InheritedLink to="About"> About</InheritedLink>
      <InheritedLink to="Contact">Contact</InheritedLink>
      <InheritedLink to="/">Home</InheritedLink>
    </Container>
  );
};
