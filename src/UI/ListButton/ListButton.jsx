import React  from "react";

const ListButton = ({ onClick, children }) => {
  return (
    <button
      className="mulish mb-[20px] flex items-center rounded-[4px] w-[160px] justify-center h-[40px] py-[11px] border-[1px] border-[#000] text-[16px] text-[#fff] bg-[#000] duration-300 hover:border-[1px] hover:border-[#000] hover:text-[#000] hover:bg-[#fff]"
      onClick={onClick}
    >
     {children}
    </button>
  );
};

export default ListButton;