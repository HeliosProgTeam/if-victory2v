import React from "react";
import Media from "../media/Media";

const Links = () => {

  const array = [
    {
      title: "Solutions",
      links: [
        {
          path: "#",
          lable: "Lorem ipsum",
        },
        {
          path: "#",
          lable: "Lorem ipsum",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          path: "#",
          lable: "Lorem ipsum",
        },
        {
          path: "#",
          lable: "Lorem ipsum",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          path: "#",
          lable: "Lorem ipsum",
        },
        {
          path: "#",
          lable: "Lorem ipsum",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          path: "#",
          lable: "Lorem ipsum",
        },
        {
          path: "#",
          lable: "Lorem ipsum",
        },
      ],
    },
  ];

  // return (
  //   <div className={"footer-nav"}>
  //     <Media />
  //     {array?.map((item, index) => {
  //       return (
  //         <div key={index} className={"footer-nav__item"}>
  //           <h4>{item.title}</h4>
  //
  //           {item.links.map((link, index) => {
  //             return (
  //               <span key={index} className={"footer-nav__text"}>
  //                 <a href={link.path}>{link.lable}</a>
  //               </span>
  //             );
  //           })}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  // верхній варіант на випадок якщо буде меню навігації
  return (
        <Media />
  );
};

export default Links;
