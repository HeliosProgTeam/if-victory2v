import React from "react";
import { withLayout } from "../../src/layout/Layout";

const receivedHelp = [
  {
    src: "/videos/video2.mp4",
    lastname: "",
    name: "Оксана",
    surname: "Миколаївна",
    desc:
      "Provided resources: Oksana recieved a financial help form the \n" +
      "charitable organization Prykarpat Garant in a sum of 500grn for the \n" +
      "food and basic needs supplies.",
    date: "",
  },
  {
    src: "/videos/video1.mp4",
    lastname: "",
    name: "Ігор",
    surname: "Зіновійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video3.mp4",
    lastname: "Захаров",
    name: "Олег",
    surname: "Генадійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video4.mp4",
    lastname: "",
    name: "Василь",
    surname: "Васильович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video5.mp4",
    lastname: "Базилюк",
    name: "Людмила",
    surname: "Миколаївна",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video6.mp4",
    lastname: "",
    name: "Агрофірма",
    surname: "БУКІВНЯНСЬКА",
    desc: "",
    date: "",
  },

  {
    src: "/videos/video7.mp4",
    lastname: "",
    name: "Валерій",
    surname: "Валерійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video8.mp4",
    lastname: "",
    name: "Михайло",
    surname: "Ілліч",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video9.mp4",
    lastname: "",
    name: "Олександр",
    surname: "Іванович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video10.mp4",
    lastname: "",
    name: "Іван",
    surname: "Іванович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video11.mp4",
    lastname: "",
    name: "Юрій",
    surname: "Юрійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video12.mp4",
    lastname: "",
    name: "Василь",
    surname: "Сергійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video13.mp4",
    lastname: "",
    name: "Володимир",
    surname: "Богданович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video14.mp4",
    lastname: "",
    name: "Сергій",
    surname: "Олександрович",
    desc: "",
    date: "",
  },
];

const ReportPage = () => {
  return (
    <div className={"report-page"}>
      <h1 className="report-page__title">Report 2022-23</h1>
      {receivedHelp.map((person) => {
        return (
          <>
            <div className="people-card">
              <div className="people-card__inner">
                <div className="people-card__info">
                  <h3 className={"people-card__name"}>
                    {person.name} {person.surname}
                  </h3>
                  <p className="people-card__desc">
                    Provided resources: {person.desc}
                  </p>
                  <p className="people-card__date">Date: {person.date}</p>
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  controls
                  src={person?.src}
                  style={{
                    width: "233px",
                    height: "390px",
                  }}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default withLayout(ReportPage);
