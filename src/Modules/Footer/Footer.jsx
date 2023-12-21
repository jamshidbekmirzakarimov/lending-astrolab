import React from "react";
import AstrolabLogo from "../../assets/icons/astrolab-logo.svg";
import Call from "../../assets/icons/call.svg";
import Sms from "../../assets/icons/Sms.svg";
import TelegramChat from "../../assets/icons/telegram-chat.svg";
const Footer = () => {
  return (
    <footer className="py-[40px] bg-[#F4F4FF]">
      <div className="container">
        <div className="flex items-center justify-between mb-[20px]">
          <div className="flex items-center">
            <img
              className="me-[40px]"
              src={AstrolabLogo}
              alt="astrolab logo"
              width={137}
              height={50}
            />
            <ul className="flex items-center gap-[60px]">
              <li>
                <a
                  className="mulish text-[16px] leading-normal font-normal before:content-[''] "
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="mulish text-[16px] leading-normal font-normal before:content-[''] "
                  href="#"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  className="mulish text-[16px] leading-normal font-normal before:content-[''] "
                  href="#"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="mulish text-[16px] leading-normal font-normal before:content-[''] "
                  href="#"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-[12px]">
          <a
              className="flex items-center gap-[6px]"
              href="+998712000321"
            >
              <img src={Call} alt="call" />
              <p>+998 71 200-03-21</p>
            </a>
            <a
              className="flex items-center gap-[6px]"
              href="mailto:info@astrolab.uz"
            >
              <img src={Sms} alt="call" />
              <p>info@astrolab.uz</p>
            </a>
            <a
              className="flex items-center gap-[6px]"
              href="https://t.me/jamshidbek_mirzakarimov"
            >
              <img src={TelegramChat} alt="call" />
              <p> Telegram Chat</p>
            </a>
          </div>
        </div>
        <p>Astrolab jamoasi uzoq yillar davomida sizga qulay va foydali dastur yaratish uchun xizmat qilib kelmoqda. Bizni tanlaganingiz uchun rahmat!!!  </p>

      </div>
    </footer>
  );
};

export default Footer;
