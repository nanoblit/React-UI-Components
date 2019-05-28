import React from "react";
import "./Footer.less";

const Footer = ({ retweets, likes }) => (
  <div className="footer">
    <button />
    <div>
      <button />
      <span>{retweets}</span>
    </div>
    <div>
      <button />
      <span>{likes}</span>
    </div>
    <button />
  </div>
);

export default Footer;
