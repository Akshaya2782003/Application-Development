import React, { useState } from "react";
import "../css/button.css";
import check from '../assets/check.png';

import uncheck from '../assets/uncheck.png'
export const Button = ({ leftIcon, textComponent = "", rightIcon }) => 
{
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="button"
      style={{
        border: clicked ? "1px solid  #63bafb" : "1px solid  #dce3ea",
        boxShadow: clicked && "0 8px 20px 0 rgba(127, 156, 230, 0.2)",
      }}
    >
       <label class="radio-img">
    <input type="radio" name="layout" value="M|M" />
  </label>
      <img className="left-icon" src={leftIcon} alt="button left icon" />
      <div style={{ minWidth: "6vw", maxWidth: "6vw" }}>{textComponent}</div>
      
    </div>
  );
};
