import React from "react";
import { withLayout } from "../../src/layout/Layout";
import BlogList from "../../src/blogList/BlogList";

const blogItems = [
  {
    id: 1,
    imgPath: "blog-item-example.jpg",
    title: "Blog Post 1",
    text: "This is the content of Blog Post.",
    date: "2023-09-15",
  },
  {
    id: 2,
    imgPath: "blog-item-example.jpg",
    title: "Blog Post 1",
    text: "This is the content of Blog Post.",
    date: "2023-09-15",
  },
  {
    id: 3,
    imgPath: "blog-item-example.jpg",
    title: "Blog Post 1",
    text: "This is the content of Blog Post.",
    date: "2023-09-15",
  },
  {
    id: 4,
    imgPath: "blog-item-example.jpg",
    title: "Blog Post 1",
    text: "This is the content of Blog Post.",
    date: "2023-09-15",
  },
  {
    id: 5,
    imgPath: "blog-item-example.jpg",
    title: "Blog Post 1",
    text: "This is the content of Blog Post.",
    date: "2023-09-15",
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
