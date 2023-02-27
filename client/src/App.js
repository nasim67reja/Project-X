import React from "react";
import Card from "./components/Card";
import body from "../src/images/body.png";
import logo from "../src/images/logo.svg";

const App = () => {
  return (
    <>
      <div className="container">
        <Card
          imageSrc={body}
          logoSrc={logo}
          title="Cycling"
          description="Perfect features for fitness & gym..."
        />
      </div>
    </>
  );
};

export default App;
