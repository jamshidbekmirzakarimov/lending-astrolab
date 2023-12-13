import React from "react";

const ButtonStatik = ({ onClick, children }) => {
  return (
    <button
      className="mulish mb-[20px] flex items-center rounded-[4px] w-[160px] justify-center h-[40px] py-[11px] border-[1px] border-[#000] text-[16px] text-[#fff] bg-[#000]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonStatik;
