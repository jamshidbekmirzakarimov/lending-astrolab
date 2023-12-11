import React from "react";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Playmarket from "../../assets/icons/playmarket.svg" 
const Social = () => {
  return (
    <>
      <section className="pt-[60px] pb-[43px]">
        <div className="container">
          <ul className="flex items-center justify-between">
            <li className="flex items-center gap-[12px]">
              <img src={Facebook} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                Facebook
              </h3>
            </li>
            <li className="flex items-center gap-[12px]">
              <img src={Instagram} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                Instagram
              </h3>
            </li>
            <li className="flex items-center gap-[12px]">
              <img src={Telegram} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                Telegram
              </h3>
            </li>
            <li className="flex items-center gap-[12px]">
              <img src={Youtube} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                Youtube
              </h3>
            </li>
            <li className="flex items-center gap-[12px]">
              <img src={Playmarket} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                PlayMarket
              </h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Social;
