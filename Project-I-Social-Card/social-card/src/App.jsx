import React from "react";
import moment from "moment";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";
import "./App.less";

const App = () => {
  return (
    <div className="app">
      <HeaderContainer
        image="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
        alt="Lambda School logo"
        title="@LambdaSchool"
        timestamp={moment().format('D MMMM')}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget purus porttitor, euismod
        metus nec, ultrices lacus. Donec vitae elit.
      </HeaderContainer>
      <CardContainer
        image="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
        alt="React logo"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </CardContainer>
      <Footer retweets={15} likes={17} />
    </div>
  );
};

export default App;
