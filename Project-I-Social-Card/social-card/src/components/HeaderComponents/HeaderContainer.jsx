import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import "./Header.css";

const HeaderContainer = ({ image, alt, title, content }) => (
  <div className="headerContainer">
    <ImageThumbnail image={image} alt={alt} />
    <HeaderTitle title={title} />
    <HeaderContent content={content} />
  </div>
);

export default HeaderContainer;
