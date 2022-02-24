import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>This is About</h1>
      <Link to="Dogs"> Dogs</Link>
      <Link to="Cats">Cats</Link>
      <Outlet />
    </div>
  );
};
