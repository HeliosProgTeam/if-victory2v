import React from "react";
import Img from "../../src/components/Image";
import { useRouter } from "next/router";
import { withLayout } from "../../src/layout/Layout";
import SampleImage from "../../public/images/sample_blog_image.webp";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat tortor at feugiat consectetur. Phasellus vestibulum nisl nibh, nec luctus ex ultrices eget. Aenean maximus, massa at condimentum volutpat, nisi ipsum finibus quam, sit amet finibus ipsum magna vitae erat. Proin vel tellus vitae nunc semper iaculis. Nunc volutpat pharetra purus, sit amet dapibus orci gravida sed. Nam tincidunt maximus consequat. Proin sed lobortis elit. Phasellus at sodales justo. Donec nulla sem, convallis sit amet venenatis eget, posuere sed arcu.\n Sed arcu magna, accumsan nec ligula in, hendrerit semper arcu.\nMorbi magna velit, rhoncus eget pulvinar sit amet, semper eu urna. Praesent ipsum elit, hendrerit eu tellus eu, rhoncus commodo ante. Sed bibendum, lorem sed auctor maximus, sapien sapien dignissim nisi, sed efficitur nunc odio ac lectus. Phasellus molestie, orci tempus tincidunt dictum, nulla felis posuere tortor, vel laoreet ante justo eget orci. Aliquam erat volutpat. Nulla faucibus interdum risus, eget rutrum arcu posuere ac. Aenean eu elementum neque. Integer rutrum semper eros sit amet pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ut nulla et dui interdum tincidunt. Aenean ex est, eleifend mollis tempus eu, viverra et mauris. Donec lacinia lectus neque, congue cursus sapien molestie in. ";

const BlogEntry = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="blog-entry">
      <div className="blog-entry-header">
        <h1 className="blog-entry-header__title">Blog title Blog title Blog title Blog title Blog title Blog title </h1>
        <p className="blog-entry-header__date">16.09.2023</p>
        <Img src={SampleImage} alt={id} className="blog-entry-header__image" />
      </div>
      <div className="blog-entry-content">
        {text.split("\n").map((line, index) => (
          <p key={index} className="blog-entry-content__text">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default withLayout(BlogEntry);
