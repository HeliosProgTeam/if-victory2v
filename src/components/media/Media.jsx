import React from "react";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import FmdGoodIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneIcon from "@mui/icons-material/Phone";
import Phone from "../phone/Phone";

const Media = () => {
  return (
    <div className="media">
      <ul className={"media__list"}>
        <li className={"media__item"}>
          <div className="media__icon">
            <EmailIcon />
          </div>
          <a href={'mailto:examplemailchamp@gmail.com'} className={"media__text"}>examplemailchamp@gmail.com</a>
        </li>
        <li className={"media__item"}>
          <div className="media__icon">
            <FmdGoodIcon />
          </div>
          <a href={'https://goo.gl/maps/tbdC5sKcCbu7v6Vv5'} className={"media__text"}>76000 example adress 9a</a>
        </li>
        <li className={"media__item"}>
          <Phone phone={"099 745 00 00"} />
        </li>
      </ul>
    </div>
  );
};

export default Media;
