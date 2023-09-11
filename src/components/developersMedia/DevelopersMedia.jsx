import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";

const DevelopersMedia = () => {
  return (
    <div className={"developers"}>
      <span className={"developers__rights"}>
        © {new Date().getFullYear()} Helios, Inc. All Rights reserved
      </span>
      <div className="developers__media">
        <div className="developers__item">
          <a
            href="https://www.facebook.com/profile.php?id=100091625511309"
            className={"developers__icon "}
            aria-label={"Фейсбук розробника"}
          >
            <FacebookIcon style={{ fontSize: "inherit" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevelopersMedia;
