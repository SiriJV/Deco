import React from "react";
import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "link" | "default";
  type?: "button" | "submit";
  className?: string;
};

const Button = ({ children, onClick, variant = "primary", type = "button", className = ""}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`button ${variant} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
