import React from "react";
import "./Icon.css";

function Icon(props) {
  return (
    <div className="Icon">
      <a href={props.href} target={props.target} rel={props.rel} id={props.id}>
        <img
          height={props.height}
          width={props.width}
          src={props.src}
          alt={props.alt}
        ></img>
      </a>
    </div>
  );
}

export default Icon;
