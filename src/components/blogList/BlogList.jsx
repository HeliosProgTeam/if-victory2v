import React from "react";
import BlogItem from "../blogItem/BlogItem";

const BlogList = ({ blogItems }) => {
  return (
    <div className="blog-list">
      {blogItems.map((item) => (
        <BlogItem
          key={item.id}
          id={item.id}
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
