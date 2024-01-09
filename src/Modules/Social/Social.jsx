import React from "react";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Playmarket from "../../assets/icons/playmarket.svg";
const Social = () => {
  return (
    <>
      <section className="pt-[60px] pb-[43px]">
        <div className="container">
          <ul className="flex items-center justify-between max-[1100px]:flex-wrap max-[1100px]:justify-start max-[1100px]:gap-[20px] max-[1100px]:items-start">
            <li>
              <a
                className="flex items-center gap-[12px]"
                href="https://www.facebook.com/profile.php?id=100069572972332"
                target="blank"
              >
                <img src={Facebook} alt="" />
                <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                  Facebook
                </h3>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-[12px]"
                href="https://www.instagram.com/jamshidbek_codes/"
                target="blank"
              >
                <img src={Instagram} alt="" />
                <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                  Instagram
                </h3>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-[12px]"
                href="https://t.me/jamshidbek_mirzakarimov"
                target="blank"
              >
                <img src={Telegram} alt="" />
                <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                  Telegram
                </h3>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-[12px]"
                href="https://www.instagram.com/jamshidbek_codes/"
                target="blank"
              >
                <img src={Youtube} alt="" />
                <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                  Youtube
                </h3>
              </a>
            </li>
            <li>
             <a className="flex items-center gap-[12px]" href="#" target="blank">
             <img src={Playmarket} alt="" />
              <h3 className="mulish text-[#343A40] font-bold leading-[24px]">
                PlayMarket
              </h3>
             </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Social;
