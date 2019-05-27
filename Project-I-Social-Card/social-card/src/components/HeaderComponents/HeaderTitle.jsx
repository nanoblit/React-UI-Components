import React from "react";
import "./Header.less";

const HeaderTitle = ({ children, timestamp }) => <h1>{children} {timestamp}</h1>;
export default HeaderTitle;
