import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";

const Button = ({ label, onClick, type = "button", className = "", icon }) => {
  return (
    <button
      className={`custom-button ${className}`}
      type={type}
      onClick={onClick}
    >
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

Button.prototypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  icon: PropTypes.element, // Svg ya da React Component olabilir
};

export default Button;
