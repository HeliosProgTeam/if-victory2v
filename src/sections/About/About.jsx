import React from "react";
import BannerImg from "../../components/bannerImg/BannerImg";
import ArmyImg from "../../../public/images/army_help.webp";
import SocialImg from "../../../public/images/banner_donation.webp";
import Divider from "../../components/divider/Divider";
import Img from "../../components/Image";
import AboutImg from "../../../public/images/about.jpg";

const About = () => {
  return (
    <section className={"about"}>
      <div className="about__top">
        <div className="about__banners">
          <BannerImg
            desc={"Допомога Збройним Силам України"}
            alt={"Допомога Збройним Силам України"}
            src={ArmyImg}
          />
          <BannerImg
            desc={"Соцiальна допомога громадянам"}
            alt={"Соцiальна допомога громадянам"}
            src={SocialImg}
          />
        </div>
      </div>
      <div className="about__goal">
        <div className="about__goal-inner">
          <h2 className={"about__title"}>Про нас</h2>
          <Divider />
          <div className="about-image">
            <Img src={AboutImg} alt={'Team'}/>
          </div>
          <p className={"about__desc"}>
            Прикарпат Гарант – це спілка волонтерів, які взяли на себе
            зобов&rsquo;язання працювати на максимум для досягнення перемоги
            України та повернення окупованих територій.
          </p>
          <p className={"about__desc"}>
            Наша організація зосереджена на гуманітарній допомозі біженцям і
            підтримці Збройних Сил України. Ми забезпечуємо необхідні ресурси,
            спрямовані на вирішення нагальних потреб.
          </p>
          <p className={"about__desc"}>
            Наш фонд – це теплі серця людей, які об&rsquo;єднують зусилля для
            зміни життя та забезпечення безпеки тим, хто потребує допомоги. Ми
            віримо, що спільні дії можуть стати міцним кроком у відновленні
            надії в найтяжчі моменти. Разом ми ткаємо переплетену мережу
            турботи, де кожен внесок відкриває двері до кращого майбутнього,
            адже тільки разом ми переможемо!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;