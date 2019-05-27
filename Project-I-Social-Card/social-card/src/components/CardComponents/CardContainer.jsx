import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import "./Card.css";

const CardContainer = ({ image, alt, content }) => (
  <div className="card-container">
    <CardBanner image={image} alt={alt} />
    <CardContent content={content} />
  </div>
);

export default CardContainer;
