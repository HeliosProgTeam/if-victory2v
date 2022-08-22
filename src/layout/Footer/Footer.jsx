import React from "react";
import Media from "../../components/media/Media";
import DevelopersMedia from "../../components/developersMedia/DevelopersMedia";
import Links from "../../components/links/Links";

export const Footer = ({ ...props }) => {
  return (
    <footer className={"footer"} id={'contactssection'} {...props}>
      <Links />
      <hr />
      <DevelopersMedia />
    </footer>
  );
};
