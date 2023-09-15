import React from "react";
import Img from "../Image";

const BlogItem = ({ imgPath, title, text, date }) => {
  return (
    <div className="blog-item">
      <Img src={imgPath} alt={title} className="blog-item__image" />
      <div className="blog-item-content">
        <h2 className="blog-item-content__title">{title}</h2>
        <p className="blog-item-content__text">{text}</p>
        <p className="blog-item-content__date">{date}</p>
      </div>
    </div>
  );
};

export default BlogItem;
