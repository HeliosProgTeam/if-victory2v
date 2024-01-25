import React from "react";
import Link from "next/link";

const Nav = ({ ...other }) => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item" {...other}>
          <Link href="/" className="nav__link">
            <span className="nav__link">Головна</span>
          </Link>
        </li>
        <li className="nav__item" {...other}>
          <Link href="/report">
            <span className="nav__link">Звіт</span>
          </Link>
        </li>
        <li className="nav__item" {...other}>
          <a href="#contactssection" className="nav__link">
            Контакти
          </a>
        </li>
        <li className="nav__item" {...other}>
          <Link href="/blog">
            <span className="nav__link">Блог</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/donate">
            <span className="nav__link">Реквізити</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
