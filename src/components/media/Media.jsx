import React from 'react';
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Media = () => {
    return (
        <div className="media">
            <ul className={"media__list"}>
                <li className={"media__item"}>
                    <div className="media__icon">
                        <EmailIcon/>
                    </div>
                    <span className={"media__text"}>
                        examplemailchamp@gmail.com
                    </span>
                </li>
                <li className={"media__item"}>
                    <div className="media__icon">
                        <LocationOnIcon/>
                    </div>
                    <span className={"media__text"}>
                        76000 example adress 9a
                    </span>
                </li>
                <li className={"media__item"}>
                    <div className="media__icon">
                        <PhoneIcon/>
                    </div>
                    <span className={"media__text"}>
                        099 745 00 00
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Media;