import React from "react";

const DevelopersMedia = () => {
  return (
    <div className={"developers"}>
      <span className={"developers__rights"}>
        © {new Date().getFullYear()} Helios, Inc. All Rights reserved
      </span>
      <div className="developers__media">
        <div className="developers__item">
          <a
            href="#"
            className={"developers__icon "}
            aria-label={"Інстаграм розробника"}
          >
            <InstagramIcon style={{ fontSize: "inherit" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevelopersMedia;
