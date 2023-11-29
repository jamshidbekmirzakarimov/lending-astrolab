import React from "react";
import Add from "../../assets/icons/add.svg"
const Button = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex SFPro items-center text-[14px] font-normal bg-[#DF1211] text-white rounded-[5px] py-[7px] px-[14px]  ${className}`}
    >
      <img className="me-[13px]" src={Add} alt="arrow" />
      {children}
    </button>
  );
};

export default Button;