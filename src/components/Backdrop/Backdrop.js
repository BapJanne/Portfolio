import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  return (
    <div
      className={`backdrop ${props.menuIsOpen && "backdrop-menu-open"}`}
      onClick={props.onClose}
    ></div>
  );
};

export default Backdrop;
