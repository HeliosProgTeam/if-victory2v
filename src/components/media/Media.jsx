import React from "react";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import Phone from "../phone/Phone";

const Media = () => {
  return (
    <div className="media">
      <ul className={"media__list"}>
        <li className={"media__item"}>
          <div className="media__icon">
            <EmailIcon />
          </div>
          <a href={'mailto:prykarpatgarant@gmail.com'} className={"media__text"}>prykarpatgarant@gmail.com</a>
        </li>
        <li className={"media__item"}>
            <Phone phone="+380 63 624 03 06"/>
        </li>
        <li className={"media__item"}>
            <Phone phone="+380 95 664 90 16"/>
        </li>
      </ul>
    </div>
  );

};

export default Media;
