import React, { useEffect, useState } from "react";
import AstrolabLogo from "../../assets/icons/astrolab-logo.svg";
import ChangeLang from "../../components/ChangeLang/ChangeLang";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Burger from "../../assets/icons/burger.svg";
import "./Header.scss";
import WhiteLogo from "../../assets/icons/white-logo.svg";
import CloseBurger from "../../assets/icons/close-burger.svg";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import useScroll from "../../hooks/useScroll";
import useJavaScript from "../../hooks/useJavaScript";
const Header = () => {
  const { onActive } = useJavaScript();
  const [scrollNumber] = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lang, setLang] = useLocalization();
  const [activeItem, setActiveItem] = useState("Главная");

  const handleClick = (item) => {
    setActiveItem(item);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setHasScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollNumber, "bu scroll ekan");

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

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    if (isOpen) {
      handleCloseMenu();
    }
  };

  return (
    <motion.div initial="initial" animate="animate">
      <motion.header
      id="header"
        variants={stagger}
        className={`py-[16px] bg-[#fff] flex items-center justify-center fixed w-full z-[9999] ${
          hasScrolled ? "Headershadow" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#">
                <motion.img
                  variants={header}
                  className="me-[40px]"
                  src={AstrolabLogo}
                  alt="astrolab logo"
                  width={137}
                  height={50}
                />
              </a>
              <motion.ul
                variants={stagger}
                className="flex items-center max-[1090px]:hidden gap-[60px]"
              >
                <motion.li variants={header}>
                  <p
                    className="nav-title mulish text-[16px] leading-normal cursor-pointer font-normal text-[#464646] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-[#000] after:w-[0%] after:hover:w-[60%] after:duration-300"
                    onClick={(e) => onActive(e, "#header")}
                  >
                    {languages[lang].about}
                  </p>
                </motion.li>
                <motion.li variants={header}>
                  <p
                    className="nav-title mulish text-[16px] leading-normal cursor-pointer font-normal text-[#464646] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-[#000] after:w-[0%] after:hover:w-[60%] after:duration-300 "
                    onClick={(e) => onActive(e, "#Benefits")}
                  >
                    {languages[lang].benefits}
                  </p>
                </motion.li>
                <motion.li variants={header}>
                  <p
                    className="nav-title mulish text-[16px] leading-normal cursor-pointer font-normal text-[#464646] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-[#000] after:w-[0%] after:hover:w-[60%] after:duration-300"
                    onClick={(e) => onActive(e, "#AstroProduct")}
                  >
                    {languages[lang].products}
                  </p>
                </motion.li>
                <motion.li variants={header}>
                  <p
                    className="nav-title mulish text-[16px] leading-normal cursor-pointer font-normal text-[#464646] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-[#000] after:w-[0%] after:hover:w-[60%] after:duration-300"
                    onClick={(e) => onActive(e, "#price")}

                  >
                    {languages[lang].price}
                  </p>
                </motion.li>
              </motion.ul>
            </div>
            <motion.div
              className="flex items-center gap-[12px]"
              variants={stagger}
            >
              <motion.div variants={header}>
                <ChangeLang />
              </motion.div>
              <div className="max-[670px]:hidden">
                <Link to="/login">
                  <motion.button
                    variants={header}
                    className="px-[24px] border h-[40px] rounded-[8px] mulish font-semibold text-[18px] tracking-[0.9px] border-[#313131] me-[12px]"
                  >
                    {languages[lang].login}
                  </motion.button>
                </Link>
                <p onClick={(e) => onActive(e, "#requesdemo")} className="inline-block">
                  <motion.button
                    variants={header}
                    className="mulish font-semibold text-[18px] tracking-[0.9px] bg-[#000] text-white px-[24px] rounded-[8px] h-[40px]"
                  >
                    {languages[lang].Request_a_Demo}
                  </motion.button>
                </p>
              </div>
              <button
                className="bg-black p-[8px] rounded-[50%] hidden max-[1090px]:block"
                onClick={handleOpenMenu}
              >
                <img src={Burger} alt="" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <div
        onClick={handleOverlayClick}
        className={`menu hidden max-[1090px]:block h-[100vh]   ${
          isOpen ? "active" : ""
        }`}
      >
        <div className=" bg-black">
          <div className="container">
            <div className="flex items-center justify-between py-[10px]">
              <img src={WhiteLogo} alt="" />
              <button className="text-white" onClick={handleCloseMenu}>
                <img src={CloseBurger} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <motion.ul
            variants={stagger}
            className="flex  flex-col  gap-[10px] pt-[20px]"
          >
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
          <div className="flex items-center justify-center pt-[100px]">
            <motion.button
              variants={header}
              className="mulish flex items-center justify-center font-semibold text-[18px] tracking-[0.9px] bg-[#000] text-white px-[24px] rounded-[8px] h-[40px]"
            >
              Request a Demo
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
