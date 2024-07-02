import React, { useContext } from "react";

import "./About.page.scss";

import { AppContext } from "../contexts/AppContext";

const About: React.FC = () => {
  const { darkTheme, setDarkTheme } = useContext(AppContext);

  const handleThemeChange = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <main
      className="main"
      style={{ backgroundColor: darkTheme ? "black" : "#fff" }}
    >
      <button onClick={handleThemeChange}>Change theme</button>
    </main>
  );
};

export default About;
