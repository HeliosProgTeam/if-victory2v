import React from "react";
import FoundationMedia from "../../components/foundationMedia/FoundationMedia";
import Links from "../../components/links/Links";

export const Footer = ({ ...props }) => {
  return (
    <footer className={"footer"} id={"contactssection"} {...props}>
      <Links />
      <hr />
      <FoundationMedia />
    </footer>
  );
};
