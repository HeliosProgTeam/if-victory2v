import React from 'react';
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Phone from "../phone/Phone";

const Media = () => {
    return (
        <div className="media">
            <ul className={"media__list"}>
                <li className={"media__item"}>
                    <div className="media__icon">
                        <EmailIcon/>
                    </div>
                    <a className={"media__text"} href="mailto:examplemailchamp@gmail.com">
                        ifvictorybf@gmail.com
                    </a>
                </li>
                <li className={"media__item"}>
                    <Phone phone="068 163 30 37"/>
                </li>
            </ul>
        </div>
    );
};

export default Media;