import React, { useCallback, useContext } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";

import { Button } from "../index";

import { AppContext } from "../../contexts/AppContext";

const Header: React.FC = () => {
  const { darkTheme, setDarkTheme } = useContext(AppContext);

  const handleThemeChange = useCallback(() => {
    setDarkTheme((prev) => !prev);
  }, [darkTheme]);

  return (
    <header className="header">
      <ul className="list">
        <Link to="/about" className="list__item">
          About
        </Link>
        <Link to="/contact" className="list__item">
          Contact
        </Link>
        <li className="list__item">Shop</li>
      </ul>

      <Button onClick={handleThemeChange}>Change Theme</Button>
    </header>
  );
};

export default Header;
