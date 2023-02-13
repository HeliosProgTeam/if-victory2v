import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

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
        <div className="developers__item">
          <a
            href="#"
            className={"developers__icon "}
            aria-label={"Твіттер розробника"}
          >
            <TwitterIcon style={{ fontSize: "inherit" }} />
          </a>
        </div>
        <div className="developers__item">
          <a
            href="#"
            className={"developers__icon developers__icon--telegram"}
            aria-label={"Телеграм розробника"}
          >
            <TelegramIcon style={{ fontSize: "inherit" }} />
          </a>
        </div>
        <div className="developers__item">
          <a
            href="#"
            className={"developers__icon "}
            aria-label={"Гітхаб розробника"}
          >
            <GitHubIcon style={{ fontSize: "inherit" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevelopersMedia;
