import React from "react";

const LenfingInput = ({ className, type, placeholder, ...restProps }) => {
  return (
    <input
      className={`ps-[20px] h-[50px] w-full border-[1px] border-[#000] rounded-[4px] outline-none mb-[20px] ${className}`}
      type={type}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default LenfingInput;
