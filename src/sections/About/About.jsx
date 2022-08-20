import React from "react";
import BannerImg from "../../components/bannerImg/BannerImg";
import SocialImg from "./social_help.jpg";
import ArmyImg from "./army_help.jpg";
import MedicImg from "./medic_help.jpg";

const About = () => {
  return (
    <section className={"about"}>
      <div className="about__top">
        <div className="about__banners">
          <BannerImg
            desc={"Соцiальна допомога"}
            alt={"Соцiальна допомога"}
            src={SocialImg}
          />
          <BannerImg
            desc={"Допомога армiї України"}
            alt={"Допомога ЗСУ"}
            src={ArmyImg}
          />
          <BannerImg
            desc={"Допомога медицинськiй сферi"}
            alt={"Допомога медикам"}
            src={MedicImg}
          />
        </div>
      </div>
      <div className="about__goal">
        <div className="about__goal-inner">
          <h2 className={"about__title"}>Наша мета</h2>
          <p className={"about__desc"}>
            Здiйснення благодiйної дiяльностi в iнтересах громадян i
            суспiльства; Забеспечення i пiдтримка в органiзацiї i проведення
            роботи та посилення ролi соцiальних проектiв для розвитку
            суспiльства, зокрема й ромських спiльнот; Створення простору для
            розвитку та пiдтримки аграрної сфери, як на територiї регiону, так i
            країни; Фiнансування проектiв, створення нових i пiдтримку iснуючих
            проектiв у сферах пiдстримки осiб, що постраждали внаслiдок
            катастроф, збройних конфлiктiв i нещасних випадкiв, а також бiженцям
            та особам, якi перебувають у складних життевих обставинах.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
