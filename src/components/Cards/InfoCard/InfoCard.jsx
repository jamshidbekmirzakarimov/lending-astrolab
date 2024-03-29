import React from "react";

const InfoCard = ({ icon, title, description, className, DesclassName }) => {
  return (
    <li className={`flex max-[500px]:flex-col w-[48%] max-[780px]:w-full min-h-[175px] overflow-hidden h-full rounded-[12px] border-[1px] border-[#D5D5D8] duration-300 hover:border-[#000] hover:shadow-[#00000040] hover:shadow-lg ${className}`}>
      <div className="flex items-center justify-center min-h-[175px] w-[133px] max-[500px]:w-full max-[500px]:min-h-[75px] bg-[#000]">
        <img src={icon} alt="icon" />
      </div>
      <div className="pt-[20px] ps-[16px] max-[500px]:mb-[20px]">
        <h3 className="mulish leading-normal max-w-[416px] font-semibold text-black text-[20px] pb-[12px]">
          {title}
        </h3>
        <p className={`mulish max-w-[416px] leading-[24px] text-[#00000099] text-[16px] font-normal ${DesclassName}`}>
          {description}
        </p>
      </div>
    </li>
  );
};

export default InfoCard;