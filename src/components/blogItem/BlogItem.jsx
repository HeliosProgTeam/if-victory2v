import React from "react";
import Img from "../Image";

const BlogItem = ({ img, title, text, date }) => {
  return (
    <div className="blog-item">
      <div className="blog-item-header">
        <Img src={img} alt={title} className="blog-item-header__image" />
      </div>
      <div className="blog-item-content">
        <h2 className="blog-item-content__title"><strong>{title}</strong> {text}</h2>
        <p className="blog-item-content__date">{date}</p>
      </div>
    </div>
  );
};

export default BlogItem;
