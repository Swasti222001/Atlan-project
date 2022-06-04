import React from "react";
import "./button.css";

const ButtonCustom = ({
  btnText,
  primary,
  secondary,
  leftIcon,
  rightIcon,
  customStyle,
  onClick,
}) => {
  return (
    <button
      className={
        "buttonClass" +
        ` ${primary ? "primaryBtn" : secondary ? "secondaryBtn" : " "
        }`
      }
      style={customStyle}
      onClick={onClick}
    >
      {leftIcon}
      <span className="text">{btnText}</span>
      {rightIcon}
    </button>
  );
};

export default ButtonCustom;
