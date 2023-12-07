import React  from "react";

const ListButton = ({ onClick, children }) => {
  return (
    <button
      className="mulish mb-[20px] flex items-center rounded-[4px] w-[160px] justify-center h-[40px] py-[11px] text-[16px] text-[#fff] bg-[#000]"
      onClick={onClick}
    >
     {children}
    </button>
  );
};

export default ListButton;