import React from "react";
import BgImg from "../../../public/images/sunflower-bg.webp";
import Img from "../../components/Image";
import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";

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
                ПРИКАРПАТ ГАРАНТ
              </h1>
              <h3 className="home__subtitle">Благодiйний фонд</h3>
              <Link href='/donate'>
                <a>
                  <button className="home__donation-btn">Підтримати нас</button>
                </a>
              </Link>
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
