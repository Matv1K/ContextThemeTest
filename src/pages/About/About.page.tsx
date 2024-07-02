import React, { useContext } from "react";

import "./About.page.scss";

import { AppContext } from "../../contexts/AppContext";

const About: React.FC = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <main
      className="main"
      style={{ backgroundColor: darkTheme ? "black" : "#fff" }}
    >
      <h1>About Page</h1>
    </main>
  );
};

export default About;
