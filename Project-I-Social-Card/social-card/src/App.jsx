import React from "react";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import "./App.css";

const App = () => {
  return (
    <div>
      <HeaderContainer
        image="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
        alt="Lambda School logo"
        title="@LambdaSchool timestamp"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget purus porttitor, euismod metus nec, ultrices lacus. Donec vitae elit."
      />
      <CardContainer
        image="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
        alt="React logo"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default App;
