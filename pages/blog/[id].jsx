import React from "react";
import Img from "../../src/components/Image";
import { withLayout } from "../../src/layout/Layout";
import SampleImage from "../../public/images/sample_blog_image.webp";

const blogItems = [
  {
    id: 1,
    img: SampleImage,
    title: "Прикарпат Гарант. Історія створення організації та наша мета.",
    text: "22 Лютого 2022 року - Російське вторгнення в Україну. Неприпинне бомбардування міст та сіл України. Гинуть люди, гинуть діти, гине все живе внаслідок російських ракет. Люди починають обєднуватися та ставати на захист своєї країни.\nЙшов пятий місяць війни. Я, Лікаренко Петро Васильович, реєструю свою благодійну організацію, щоб мати можливість допомогти країні.\n21 Липня 2022 року, в місті Івано-Франківськ була офіційно зарегістрована благодійна організація «Прикарпат Гарант».\nМета нашої організації чітка і непохитна: розширювати можливость спільнот та створювати позитивні зміни для людей та нашої країни.",
    date: "16.09.2023",
  }
];

const BlogEntry = ({ blogItem }) => {
  return (
    <div className="blog-entry">
      <div className="blog-entry-header">
        <h1 className="blog-entry-header__title">{blogItem.title}</h1>
        <p className="blog-entry-header__date">{blogItem.date}</p>
        <Img src={blogItem.img} alt={"Зображення"} className="blog-entry-header__image" />
      </div>
      <div className="blog-entry-content">
        {blogItem.text.split("\n").map((line, index) => (
          <p key={index} className="blog-entry-content__text">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = blogItems.map((blogItem) => {
    return {
      params: {
        id: blogItem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const blogItem = blogItems.find((obj) => obj.id === parseInt(params.id));
  return {
    props: {
      blogItem,
    },
  };
}

export default withLayout(BlogEntry);
