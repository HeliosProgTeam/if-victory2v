import React from "react";
import { withLayout } from "../../src/layout/Layout";
import BlogList from "../../src/components/blogList/BlogList";
import SampleImage from "../../public/images/sample_blog_image.webp"

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
