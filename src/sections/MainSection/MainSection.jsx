import React from "react";
import BgImg from "./bg.png";
import ImageNext from "next/image";
import Img from "../../components/Image";

export const MainSection = ({ ...props }) => {
  return (
    <section className="home" id='mainhome' {...props}>
      <div className="home__bg">
        <div className="home__info-wrapper">
          <div className="home__info">
            <div className="home__info-inner">
              <p className="home__desc">
                Благодiйна органiзацiя
              </p>
              <h1 className="home__title">“Благодiйний фонд”
                “ПрикарпатГарант”</h1>
            </div>
          </div>
        </div>
        <div className="home__img-bg">
          {/*<Image width={300} height={200} src={MainImg} alt="image"/>*/}
          <Img src={BgImg} alt="image" />
        </div>
        <div className="home__bottom" id="aboutsection"></div>
      </div>
    </section>
  );
};
