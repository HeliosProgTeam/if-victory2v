import React from "react";
import { withLayout } from "../../src/layout/Layout";
import BlogList from "../../src/components/blogList/BlogList";
import BlogImageOne from "../../public/images/blog_image_1.webp";
import BlogImageTwo from "../../public/images/blog_image_2.webp";
import BlogImageThree from "../../public/images/blog_image_3.webp";
import BlogImageFour from "../../public/images/blog_image_4.webp";
import BlogImageFive from "../../public/images/blog_image_5.webp";

const blogItems = [
  {
    id: 1,
    img: BlogImageOne,
    title: "Прикарпат Гарант. Історія створення організації та наша мета.",
    text: "Йшов пятий місяць війни. Я, Лікаренко Петро Васильович, реєструю свою благодійну організацію, щоб мати можливість допомогти країні.",
    date: "16.09.2023",
  },
  {
    id: 2,
    img: BlogImageThree,
    title: "Біженці в сьогоденній політиці. ",
    text: "Проблема біженців є питанням номер один у всіх державах світу, а також їхнє правове положення, визначення статусу міжнародних документів, вирішенню питань в нормативному визначенні поняття «біженець».",
    date: "20.09.2023",
  },
  {
    id: 3,
    img: BlogImageTwo,
    title: "Аграрний сектор України. ",
    text: "Організація співпрацію з двома виробниками. Виробник мікродобрив: ТЗОВ «ЕКОХІМІФ» ти виробник пального та паливних матеріалів: ПП «ПРИКАРПАТКОМПЛЕКТ».",
    date: "24.09.2023",
  },
  {
    id: 4,
    img: BlogImageFour,
    title: "Наші цінності. ",
    text: "Наша місія ґрунтується на низці основних цінностей, якими керуємося в усіх наших діях: емпатія, співпраця, сталість, прозорість, інновації.",
    date: "25.09.2023",
  },
  {
    id: 5,
    img: BlogImageFive,
    title: "Розширення можливостей спільнот. ",
    text: "Ми віримо в внутрішній потенціал кожної спільноти для створення позитивних змін. Наш підхід полягає в наданні інструментів, ресурсів і підтримки, необхідних для розкриття цього потенціалу.",
    date: "26.09.2023",
  }
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-page__title">Блог фонду</h1>
      <BlogList blogItems={blogItems} />
    </div>
  );
};

export default withLayout(BlogPage);
