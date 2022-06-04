import React from "react";
import "./button.css";

const ButtonCustom = ({
  btnText,
  primary,
  secondary,
  leftIcon,
  rightIcon,
  customStyle,
  inputFieldData,
  settable
}) => {
  const tname = "categories"

  return (
    <button
      className={
        // inputFieldData === "" ? "disabled" :
        "buttonClass" +
        ` ${primary ? "primaryBtn" : secondary ? "secondaryBtn" : ""}`
      }
      style={customStyle}
      // onClick={onClick}
      onClick={() => {
        settable(tname)
      }}
    >

      {leftIcon}
      <span className="text">{btnText}</span>
      {rightIcon}
    </button>
  );
};

export default ButtonCustom;
