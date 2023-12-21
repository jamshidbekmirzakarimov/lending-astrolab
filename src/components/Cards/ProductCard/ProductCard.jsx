import React from "react";
import ArrowRight from "../../../assets/icons/arrow-right.svg";
const ProductCard = ({ icon, title, description, className, DescCClassName, ImgClassName }) => {
  return (
    <>
      <li className="flex  w-[48%] max-[800px]:w-[100%] min-h-[175px] max-[400px]:min-h-[232px] h-full overflow-hidden rounded-[12px] border-[1px] border-[#D5D5D8] duration-300 hover:border-[#000] hover:shadow-[#00000040] hover:shadow-lg">
        <div className={`flex items-center justify-center min-h-[175px] w-[133px] max-[500px]:w-[200px] max-[400px]:w-[300px] ${className}`}>
          <img
            className={`h-[100%] w-[100%] rounded-[12px] rounded-e-[0] max-[450px]:object-cover ${ImgClassName}`}
            src={icon}
            alt="icon"
          />
        </div>
        <div className="flex flex-col justify-between pt-[20px] ps-[16px]">
          <div>
            <h3 className="mulish leading-normal max-w-[416px] font-bold text-black text-[20px] pb-[12px] max-[400px]:text-[16px]">
              {title}
            </h3>
            <p className={`mulish max-w-[416px] leading-[24px] text-[#00000099] text-[16px] font-normal mb-[12px] ${DescCClassName}`}>
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
