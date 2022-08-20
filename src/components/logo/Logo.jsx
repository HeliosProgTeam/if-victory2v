import React from "react";
import LogoImage from "./logo.svg";

const Logo = () => {
  return (
    <div className={"logo"}>
      <div className="logo__img">
        <LogoImage />
      </div>
      <span className="logo__title">IF-Victory</span>
    </div>
  );
};

export default Logo;
