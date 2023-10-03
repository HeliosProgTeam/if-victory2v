import React from "react";
import BgImg from "../../../public/images/sunflower-bg.webp";
import Img from "../../components/Image";
import { useMediaQuery, useTheme } from "@mui/material";

export const MainSection = ({ ...props }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className="home" id="mainhome" {...props}>
      <div className="home__bg">
        <div className="home__info-wrapper">
          <div className="home__info">
            <div className="home__info-inner">
              <h1 className="home__title">
                Прикарпат Гарант
                <span style={{fontSize:"30px"}}> Благодiйний фонд</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="home__img-bg">
          {smDown ? (
            <Img src={BgImg} alt="image" width="600px" />
          ) : (
            <Img src={BgImg} alt="image" />
          )}
        </div>
        <div className="home__bottom" id="aboutsection"></div>
      </div>
    </section>
  );
};
