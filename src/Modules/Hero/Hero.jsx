import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Player from "../../assets/icons/player.svg";
import HeroBg from "../../assets/images/hero-bg.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="flex items-center  relative">
            <div className="pt-[120px]">
              <h1 className="mulish text-[64px] font-medium text-white leading-normal w-full max-w-[646px] mb-[12px]">
                Xodimlarni boshqarishni avtomatlashtiring!!
            
              </h1>
              <p className="mulish font-medium text-[24px] leading-normal text-white mb-[60px]">
                Astrolab tizimi - harakatlaringizni va vaqtingizni tejaydi.
              </p>
              <div className="flex items-center gap-[36px]">
                <Link
                  to="/admin"
                  className="mulish text-[20px] font-semibold py-[18px] px-[20px] rounded-[4px] text-black bg-white"
                >
                  Demodan bepul foydalanish
                </Link>
                <button className="flex items-center mulish text-white text-[18px] font-semibold leading-normal ">
                  <img src={Player} alt="" />
                  Tizim qanday ishlaydi
                </button>
              </div>
            </div>
            <img
              className="absolute right-[-50px] top-[100px]"
              src={HeroBg}
              alt="hero bg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
