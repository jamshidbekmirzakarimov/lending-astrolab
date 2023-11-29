import React from "react";
const ModalBtn = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` text-[14px] font-normal bg-[#DF1211] text-center text-white rounded-[5px] py-[14px] mt-[11px] px-[14px] w-full  ${className}`}
    >
      {children}
    </button>
  );
};

export default ModalBtn;