import React from "react";
import CharityImg from "./charity.jpg";
import ImageNext from "next/image";
import Image from "../../components/Image";

export const MainSection = ({ ...props }) => {
  return (
    <section className="home" {...props}>
      <div className="home__bg">
        <div className="home__info">
          <div className="home__info-inner">
            <h2 className="home__subtitle">Вiтя гей</h2>
            <h1 className="home__title">Благодiйний фонд IФ-ВIКТОРI</h1>
            <p className="home__desc">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
        <div className="home__img">
          {/*<Image width={300} height={200} src={MainImg} alt="image"/>*/}
          <ImageNext src={CharityImg} alt="image" />
        </div>
      </div>
    </section>
  );
};
