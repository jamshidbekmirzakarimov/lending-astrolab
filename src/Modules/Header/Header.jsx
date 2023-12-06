import React from "react";
import AstrolabLogo from "../../assets/icons/astrolab-logo.svg";

import ChangeLang from "../../components/ChangeLang/ChangeLang";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-[16px]">
        <div className="container">
          <div className="flex items-center justify-between">
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
              <ChangeLang />
           <Link to="/login">
           <button className="px-[24px] border h-[40px] rounded-[8px] mulish font-semibold text-[18px] tracking-[0.9px] border-[#313131]">Login</button>
           </Link>
           <button className="mulish font-semibold text-[18px] tracking-[0.9px] bg-[#000] text-white px-[24px] rounded-[8px] h-[40px]">Request a Demo</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
