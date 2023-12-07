import React from "react";
import Facebook from "../../assets/icons/facebook.svg";
const Social = () => {
  return (
    <>
      <section className="pt-[60px] pb-[43px]">
        <div className="container">
          <ul className="flex items-center justify-between">
            <li className="flex items-center gap-[12px]">
              <img src={Facebook} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">Facebook</h3>
            </li>
            <li className="flex items-center gap-[12px]">
              <img src={Facebook} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">Instagram</h3>
            </li>
            <li className="flex items-center gap-[12px]">
              <img src={Facebook} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">Telegram</h3>
            </li>
            <li className="flex items-center gap-[12px]">
              <img src={Facebook} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">Youtube</h3>
            </li>
            <li className="flex items-center gap-[12px]">
              <img src={Facebook} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">PlayMarket</h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Social;
