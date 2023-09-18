import React from "react";
import BlogItem from "../components/blogItem/blogItem";

const BlogList = ({ blogItems }) => {
  return (
    <div className="blog-list">
      {blogItems.map((item) => (
        <BlogItem
          key={item.id}
          img={item.img}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
