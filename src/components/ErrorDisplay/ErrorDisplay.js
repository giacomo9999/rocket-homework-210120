import React from "react";
import "./ErrorDisplay.style.scss";

const ErrorDisplay = (props) => {
  return (
    <div className="error-card">
      <h2 className="error-text">{props.errorText}</h2>
    </div>
  );
};

export default ErrorDisplay;
