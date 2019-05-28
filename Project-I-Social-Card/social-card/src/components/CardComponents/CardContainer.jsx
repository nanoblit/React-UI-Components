import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import "./Card.less";

const CardContainer = ({ image, alt, children }) => (
  <div className="card-container">
    <CardBanner image={image} alt={alt} />
    <CardContent>{children}</CardContent>
  </div>
);

export default CardContainer;
