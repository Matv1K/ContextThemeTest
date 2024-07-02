import React from "react";
import "./Header.scss";

import { Routes, Route } from "react-router";

import { Link } from "react-router-dom";

import About from "../../pages/About.page";

const Header: React.FC = () => {
  return (
    <header className="header">
      <ul className="list">
        <Link to="/about" className="list__item">
          About
        </Link>
        <li className="list__item">Contact</li>
        <li className="list__item">Shop</li>
      </ul>
    </header>
  );
};

export default Header;
