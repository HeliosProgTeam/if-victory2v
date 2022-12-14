import React from "react";
import BannerImg from "../../components/bannerImg/BannerImg";
import SocialImg from "./social_help.jpg";
import ArmyImg from "./army_help.jpg";
import MedicImg from "./medic_help.png";

const About = () => {
  return (
    <section className={"about"}>
      <div className="about__top">
        <div className="about__banners">
          <BannerImg
            desc={"Пiдтримка аграрної сфери України"}
            alt={"Пiдтримка аграрної сфери України"}
            src={SocialImg}
          />
          <BannerImg
            desc={"Допомога Збройним Силам України"}
            alt={"Допомога Збройним Силам України"}
            src={ArmyImg}
          />
          <BannerImg
            desc={"Соцiальна допомога громадянам"}
            alt={"Соцiальна допомога громадянам"}
            src={MedicImg}
          />
        </div>
      </div>
      <div className="about__goal">
        <div className="about__goal-inner">
          <h2 className={"about__title"}>Наша мета</h2>
          <p className={"about__desc"}>
            Основною задачею нашого фонду, серед інших, є допомога аграрним
            підприємствам, які внаслідок російської агресії зазнали шкоди та
            перебувають у скрутному становищі через брак коштів, мобілізованих
            працівників, смерть чи каліцтво працівників внаслідок бойових дій на
            території адміністративної одиниці де розташоване підприємство,
            заміновані або окуповані посівні землі, знищення техніки
            (спецтехніки), відсутність збуту продукції (експорт) та інщі
            труднощі.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
