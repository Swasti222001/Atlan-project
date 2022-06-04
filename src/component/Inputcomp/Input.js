// import { useState, useEffect } from 'react'
import "./input.css";
const Input = ({ inputFieldData }) => {

  return (
    <div className="inputmain">
      <p>
        <b>INPUT</b>
      </p>
      <div className="inputCont">
        <textarea
          value={inputFieldData}
          className="inputfield"
        />

      </div>
    </div>
  );
};

export default Input;
