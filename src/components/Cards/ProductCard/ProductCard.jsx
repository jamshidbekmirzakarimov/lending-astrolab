import React from "react";
import ArrowRight from "../../../assets/icons/arrow-right.svg";
const ProductCard = ({ icon, title, description }) => {
  return (
    <>
      <li className="flex  w-[48%] min-h-[175px] h-full rounded-[12px] border-[1px] border-[#D5D5D8] duration-300 hover:border-[#000] hover:shadow-[#00000040] hover:shadow-lg">
        <div className="flex items-center justify-center h-[175px] w-[133px] ">
          <img
            className="h-[100%] rounded-[12px] rounded-e-[0]"
            src={icon}
            alt="icon"
          />
        </div>
        <div className="flex flex-col justify-between pt-[20px] ps-[16px]">
          <div>
            <h3 className="mulish leading-normal max-w-[416px] font-semibold text-black text-[20px] pb-[12px]">
              {title}
            </h3>
            <p className="mulish max-w-[416px] leading-[24px] text-[#00000099] text-[16px] font-normal mb-[12px]">
              {description}
            </p>
          </div>
          <button className="flex items-center gap-[12px] text-[14.4px] text-black font-normal leading-[24px] tracking-[0.5px] mb-[16px]">
            Batafsil o’qish
            <img src={ArrowRight} alt="" />
          </button>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
