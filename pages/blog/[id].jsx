import React from "react";
import Img from "../../src/components/Image";
import { withLayout } from "../../src/layout/Layout";
import SampleImage from "../../public/images/sample_blog_image.webp";

const blogItems = [
  {
    id: 1,
    img: SampleImage,
    title: "Blog Post 1 This is the header of Blog Post. ",
    text: "This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.",
    date: "16.09.2023",
  },
  {
    id: 2,
    img: SampleImage,
    title: "Blog Post 1 This is the header of Blog Post. ",
    text: "of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.",
    date: "16.09.2023",
  },
  {
    id: 3,
    img: SampleImage,
    title: "Blog Post 1 This is the header of Blog Post. ",
    text: "This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.",
    date: "16.09.2023",
  },
  {
    id: 4,
    img: SampleImage,
    title: "Blog Post 1 This is the header of Blog Post. ",
    text: "This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.",
    date: "16.09.2023",
  },
  {
    id: 5,
    img: SampleImage,
    title: "Blog Post 1 This is the header of Blog Post. ",
    text: "This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.",
    date: "16.09.2023",
  },
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
