import React, { useContext } from "react";

import { AppContext } from "../../contexts/AppContext";

const Contact: React.FC = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <main style={{ backgroundColor: darkTheme ? "black" : "#fff" }}>
      <h1>Contact Page</h1>
    </main>
  );
};

export default Contact;
