import React from "react";
import Img from "../Image";

const BlogItem = ({ imgPath, title, text, date }) => {
  <div className="blog-item">
    <Img src={imgPath} alt={title} className="blog-item__image" />
    <div className="blog-item__content">
      <h2 className="blog-item__title">{title}</h2>
      <p className="blog-item__text">{text}</p>
      <p className="blog-item__date">{date}</p>
    </div>
  </div>;
};

export default BlogItem;
