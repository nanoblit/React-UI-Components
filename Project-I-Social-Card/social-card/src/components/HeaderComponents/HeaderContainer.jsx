import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import "./Header.less";

const HeaderContainer = ({ image, alt, title, timestamp, children }) => (
  <div className="header-container">
    <ImageThumbnail image={image} alt={alt} />
    <div>
      <HeaderTitle timestamp={timestamp}>{title}</HeaderTitle>
      <HeaderContent>{children}</HeaderContent>
    </div>
  </div>
);

export default HeaderContainer;
