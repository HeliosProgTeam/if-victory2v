import React from "react";
import Divider from "../../components/divider/Divider";
import Img from "../../components/Image";
import AboutImg1 from "../../../public/images/about1.webp";
import AboutImg2 from "../../../public/images/about2.webp";
import AboutImg3 from "../../../public/images/about3.webp";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const About = () => {
  return (
    <section className={"about"}>
      <div className="about__goal">
        <div className="about__goal-inner">
          <h2 className={"about__title"}>Про нас</h2>
          <Divider />
          <div className="about__info">
          <Slider {...sliderSettings} className="about__slider">
            <div className="about__image">
              <Img src={AboutImg1} alt={"Team"} />
            </div>
            <div className="about__image">
              <Img src={AboutImg2} alt={"Team"} />
            </div>
            <div className="about__image">
              <Img src={AboutImg3} alt={"Team"} />
            </div>
          </Slider>
            <div className="about__text">
              <p className={"about__desc"}>
                Прикарпат Гарант – це спілка волонтерів, які взяли на себе
                зобов&rsquo;язання працювати на максимум для досягнення перемоги
                України та повернення окупованих територій.
              </p>
              <p className={"about__desc"}>
                Наша організація зосереджена на гуманітарній допомозі біженцям і
                підтримці Збройних Сил України. Ми забезпечуємо необхідні
                ресурси, спрямовані на вирішення нагальних потреб.
              </p>
              <p className={"about__desc"}>
                <b>Наш фонд</b> – це теплі серця людей, які об&rsquo;єднують
                зусилля для зміни життя та забезпечення безпеки тим, хто
                потребує допомоги. Ми віримо, що спільні дії можуть стати міцним
                кроком у відновленні надії в найтяжчі моменти. Разом ми ткаємо
                переплетену мережу турботи, де кожен внесок відкриває двері до
                кращого майбутнього, адже тільки разом ми переможемо!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;