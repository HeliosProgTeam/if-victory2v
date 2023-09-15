import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogItems }) => {
  return (
    <div className="blog-list">
      {blogItems.map((item, index) => (
        <BlogItem
          key={index}
          imgPath={item.imgPath}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
