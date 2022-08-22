import React from "react";
import Divider from "../../components/divider/Divider";
import Img from "../../components/Image";
import SecImage from "./second.jpg";
import FirImage from "./first.jpg";

const Contacts = () => {
  return (
    <section className={"contacts"}>
      <div className="contacts__row">
        <div className="contacts__img contacts__img--left">
          {/*<div className="contacts__img-inner">*/}
          <Img src={FirImage} alt="first item" />
          {/*</div>*/}
        </div>
        <p className="contacts__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Divider />
      <div className="contacts__row">
        <p className="contacts__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="contacts__img contacts__img--right">
          {/*<div className="contacts__inner-img">*/}
          <Img src={SecImage} alt="second item" />
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
