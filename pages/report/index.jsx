import React from "react";
import { withLayout } from "../../src/layout/Layout";

const receivedHelp = [
  {
    src: "/videos/video2.webm",
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
    src: "/videos/video1.webm",
    lastname: "",
    name: "Ігор",
    surname: "Зіновійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video3.webm",
    lastname: "Захаров",
    name: "Олег",
    surname: "Генадійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video4.webm",
    lastname: "",
    name: "Василь",
    surname: "Васильович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video5.webm",
    lastname: "Базилюк",
    name: "Людмила",
    surname: "Миколаївна",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video6.webm",
    lastname: "",
    name: "Агрофірма",
    surname: "БУКІВНЯНСЬКА",
    desc: "",
    date: "",
  },

  {
    src: "/videos/video7.webm",
    lastname: "",
    name: "Валерій",
    surname: "Валерійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video8.webm",
    lastname: "",
    name: "Михайло",
    surname: "Ілліч",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video9.webm",
    lastname: "",
    name: "Олександр",
    surname: "Іванович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video10.webm",
    lastname: "",
    name: "Іван",
    surname: "Іванович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video11.webm",
    lastname: "",
    name: "Юрій",
    surname: "Юрійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video12.webm",
    lastname: "",
    name: "Василь",
    surname: "Сергійович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video13.webm",
    lastname: "",
    name: "Володимир",
    surname: "Богданович",
    desc: "",
    date: "",
  },
  {
    src: "/videos/video14.webm",
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
      <h1 className="report-page__title">Звіт 2022-23</h1>
      <p className={"report-page__subtitle"}>
        Людям які звернулися за допомогою в звязку з різними життєвими
        ситуаціями до благодійного фонду Прикарпат Гарант була надана
        матеріальна підтримка:{" "}
      </p>
      <div className="people-card-box">
        {receivedHelp.map((person) => {
          return (
            <>
              <div className="people-card-wrap">
                <div className="people-card">
                  <div className="people-card__top">
                    <p>{person.name}</p>
                    <p>{person.surname}</p>
                  </div>
                  <video
                    controls
                    src={person?.src}
                    className="people-card__video"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default withLayout(ReportPage);
