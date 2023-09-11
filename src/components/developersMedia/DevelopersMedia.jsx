import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";

const FoundationMedia = () => {
  return (
    <div className={"foundation"}>
      <span className={"foundation__rights"}>
        © {new Date().getFullYear()} БО &quot;ПРИКАРПАТГАРАНТ&quot;, All Rights reserved
      </span>
      <div className="foundation__media">
        <div className="foundation__item">
          <a
            href="https://www.facebook.com/profile.php?id=100091625511309"
            className={"foundation__icon "}
            aria-label={"Фейсбук фонду"}
          >
            <FacebookIcon style={{ fontSize: "inherit" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoundationMedia;
