import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

const ReceivedHelp = () => {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    carouselRef.current?.slickPlay();
  }, []);

  const receivedPeople = [
    {
      src: "/videos/video1.webm",
      lastname: "",
      name: "Ігор",
      surname: "Зіновійович",
    },
    {
      src: "/videos/video2.webm",
      lastname: "",
      name: "Оксана",
      surname: "Миколаївна",
    },
    {
      src: "/videos/video3.webm",
      lastname: "Захаров",
      name: "Олег",
      surname: "Генадійович",
    },
    {
      src: "/videos/video4.webm",
      lastname: "",
      name: "Василь",
      surname: "Васильович",
    },
    {
      src: "/videos/video5.webm",
      lastname: "Базилюк",
      name: "Людмила",
      surname: "Миколаївна",
    },
    {
      src: "/videos/video6.webm",
      lastname: "",
      name: "Агрофірма",
      surname: "БУКІВНЯНСЬКА",
    },

    {
      src: "/videos/video7.webm",
      lastname: "",
      name: "Валерій",
      surname: "Валерійович",
    },
    {
      src: "/videos/video8.webm",
      lastname: "",
      name: "Михайло",
      surname: "Ілліч",
    },
    {
      src: "/videos/video9.webm",
      lastname: "",
      name: "Олександр",
      surname: "Іванович",
    },
    {
      src: "/videos/video10.webm",
      lastname: "",
      name: "Іван",
      surname: "Іванович",
    },
    {
      src: "/videos/video11.webm",
      lastname: "",
      name: "Юрій",
      surname: "Юрійович",
    },
    {
      src: "/videos/video12.webm",
      lastname: "",
      name: "Василь",
      surname: "Сергійович",
    },
    {
      src: "/videos/video13.webm",
      lastname: "",
      name: "Володимир",
      surname: "Богданович",
    },
    {
      src: "/videos/video14.webm",
      lastname: "",
      name: "Сергій",
      surname: "Олександрович",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={"received-help"}>
      <h2 className={"received-help__title"}>
        <span style={{ color: "#2CDC48" }}>Вже</span> отримали допомогу
      </h2>
      <div className="people-carousel-wrap">
        <Slider className="people-carousel" {...carouselSettings}>
          {receivedPeople?.map((people) => {
            return (
              <>
                <div className="people-card-wrap">
                  <div className="people-card">
                    <div className="people-card__top">
                      <p>{people.name}</p>
                      <p>{people.surname}</p>
                    </div>
                    <video
                      controls
                      src={people?.src}
                      style={{
                        width: "233px",
                        height: "411px",
                      }}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ReceivedHelp;
