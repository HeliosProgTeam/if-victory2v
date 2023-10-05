import React from "react";
import Img from "../Image";
import Link from "next/link";

const BlogItem = ({ id, img, title, text, date }) => {
  return (
    <Link href={`/blog/${id}`}>
      <a className="blog-item">
        <div className="blog-item-header">
          <Img src={img} alt={title} className="blog-item-header__image" />
        </div>
        <div className="blog-item-content">
          <h2 className="blog-item-content__title">
            <strong>{title}</strong> {text}
          </h2>
          <p className="blog-item-content__date">{date}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
