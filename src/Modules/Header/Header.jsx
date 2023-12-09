import React from "react";
import AstrolabLogo from "../../assets/icons/astrolab-logo.svg";

import ChangeLang from "../../components/ChangeLang/ChangeLang";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
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
    <motion.div initial="initial" animate="animate">
      <motion.header variants={stagger} className="py-[16px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <motion.img
              variants={header}
                className="me-[40px]"
                src={AstrolabLogo}
                alt="astrolab logo"
                width={137}
                height={50}
              />
              <motion.ul variants={stagger} className="flex items-center gap-[60px]">
                <motion.li variants={header}>
                  <a
                    className="mulish text-[16px] leading-normal font-normal text-[#464646] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-[#000] after:w-[0%] after:hover:w-[60%] after:duration-300"
                    href="#"
                  >
                    About us
                  </a>
                </motion.li>
                <motion.li variants={header}>
                  <a
                    className="mulish text-[16px] leading-normal font-normal text-[#464646] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-[#000] after:w-[0%] after:hover:w-[60%] after:duration-300"
                    href="#"
                  >
                    Benefits
                  </a>
                </motion.li>
                <motion.li variants={header}>
                  <a
                    className="mulish text-[16px] leading-normal font-normal text-[#464646] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-[#000] after:w-[0%] after:hover:w-[60%] after:duration-300"
                    href="#"
                  >
                    Products
                  </a>
                </motion.li>
                <motion.li variants={header}>
                  <a
                    className="mulish text-[16px] leading-normal font-normal text-[#464646] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-[#000] after:w-[0%] after:hover:w-[60%] after:duration-300"
                    href="#"
                  >
                    Reviews
                  </a>
                </motion.li>
              </motion.ul>
            </div>
            <motion.div className="flex items-center gap-[12px]" variants={stagger}>
              <motion.div variants={header}>
              <ChangeLang />
              </motion.div>
              <Link to="/login">
                <motion.button variants={header} className="px-[24px] border h-[40px] rounded-[8px] mulish font-semibold text-[18px] tracking-[0.9px] border-[#313131]">
                  Login
                </motion.button>
              </Link>
              <motion.button variants={header} className="mulish font-semibold text-[18px] tracking-[0.9px] bg-[#000] text-white px-[24px] rounded-[8px] h-[40px]">
                Request a Demo
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>
    </motion.div>
  );
};

export default Header;
