import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Player from "../../assets/icons/player.svg";
import HeroBg from "../../assets/images/hero-bg.png";
import { motion } from "framer-motion";
import Dashboard from "../../assets/icons/dashboard.svg";
const Hero = () => {
  let easeing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: easeing,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: easeing,
      },
    },
  };

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const firstName = {
    initial: {
      y: -20,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const lastName = {
    initial: {
      y: -20,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
  };

  const btnGroup = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.6, ease: easeing },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easeing,
      },
    },
  };
  const star = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.8, ease: easeing },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easeing,
      },
    },
  };

  const header = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.05, ease: easeing },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easeing,
      },
    },
  };
  return (
    <>
      <section className="hero-section grid place-items-center h-[90vh]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: easeing }}
            className="flex items-center    relative"
          >
            <motion.div >
              <motion.div
                variants={firstName}
                initial="initial"
                animate="animate"
                className="first"
              >
                <motion.h1
                  variants={letter}
                  className="mulish text-[64px] font-medium text-white leading-tight w-full max-w-[646px] mb-[12px]"
                >
                  Xodimlarni boshqarishni avtomatlashtiring!!
                </motion.h1>
                <motion.p
                  variants={letter}
                  className="mulish font-medium text-[24px] leading-normal text-white mb-[60px]"
                >
                  Astrolab tizimi - harakatlaringizni va vaqtingizni tejaydi.
                </motion.p>
              </motion.div>
              <div
                variants={firstName}
                className="grid grid-cols-2 items-center w-full"
              >
                <motion.div variants={letter} className="bg-white  py-[12px] rounded-[4px] text-black text-center">
                  <Link
                    to="/admin"
                    className="mulish text-[20px] font-semibold"
                  >
                    Demodan bepul foydalanish
                  </Link>
                </motion.div>
                <motion.div variants={firstName}>
                  <motion.button
                    variants={letter}
                    className="flex items-center mulish text-white text-[18px] font-semibold leading-normal "
                  >
                    <img src={Player} alt="" />
                    Tizim qanday ishlaydi
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
            <img
              className=""
              src={Dashboard}
              alt="hero bg"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
