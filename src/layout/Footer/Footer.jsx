import React from "react";
import DevelopersMedia from "../../components/developersMedia/DevelopersMedia";
import Links from "../../components/links/Links";

export const Footer = ({ ...props }) => {
  return (
    <footer className={"footer"} id={"contactssection"} {...props}>
      <Links />
      <hr />
      <DevelopersMedia />
    </footer>
  );
};
