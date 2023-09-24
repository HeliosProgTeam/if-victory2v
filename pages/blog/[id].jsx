import React from "react";
import Img from "../../src/components/Image";
import { withLayout } from "../../src/layout/Layout";
import BlogImageOne from "../../public/images/blog_image_1.webp";
import BlogImageTwo from "../../public/images/blog_image_2.webp";

const blogItems = [
  {
    id: 1,
    img: BlogImageOne,
    title: "Прикарпат Гарант. Історія створення організації та наша мета.",
    text: "22 Лютого 2022 року - Російське вторгнення в Україну. Неприпинне бомбардування міст та сіл України. Гинуть люди, гинуть діти, гине все живе внаслідок російських ракет. Люди починають обєднуватися та ставати на захист своєї країни.\nЙшов пятий місяць війни. Я, Лікаренко Петро Васильович регіструю свою благодійну організацію, щоб мати можливість допомогти країні. 21 Липня 2022 року, в місті Івано-Франківськ була офіційно зарегістрована благодійна організація «Прикарпат Гарант».\nМета нашої організації чітка і непохитна: розширювати можливость спільнот та створювати позитивні зміни для людей та нашої країни.",
    date: "16.09.2023",
  },
  {
    id: 2,
    img: BlogImageTwo,
    title: "Аграрний сектор України.",
    text: "Оскільки основною задачою нашого фонду є допомога серед інших аграрним підприємствам, яке в наслідок російської агресії зазнали шкоди та перебувають в складному становищі через брак коштів, мобілізованих працівників, смерть чи калітство внаслідок бойових дій, знищення техніки або спец техніки, відсутність збуту продукції, експорт та інші.\nДля аграрного сектору вкрай важливі забезпечення як добривами так і паливно-мастильні матеріали. На все ціна зростає, з метою реалізації своїх цілей, організація співпрацює з двома виробниками.\nВиробник мікродобрив: ТЗОВ «ЕКОХІМІФ» ти виробник пального та паливних матеріалів: ПП «ПРИКАРПАТКОМПЛЕКТ».\nВищевказані виробники підтримують економіку держави у складний період.",
    date: "20.09.2023",
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
