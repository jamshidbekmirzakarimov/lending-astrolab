import React, { useState } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Player from "../../assets/icons/player.svg";
import HeroBg from "../../assets/images/hero-bg.png";
import { motion } from "framer-motion";
import Dashboard from "../../assets/icons/dashboard.svg";
import mediaDashboard from "../../assets/icons/media-dashboard.svg";
import Modal from "../../components/Modal/Modal";
import AstroVideo from "../../assets/Videos/AstroVideo.mp4";
import ReactPlayer from "react-player/file";
const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleOverlayClick = () => {
    closeModal();
  };
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
      <section className="hero-section grid place-items-center max-[1090px]:place-items-start h-[100vh] max-[1090px]:h-full ">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: easeing }}
            className="flex items-center justify-center max-[1090px]:flex-col-reverse w-full"
          >
            <motion.div className="max-[1090px]:hidden">
              <motion.div
                variants={firstName}
                initial="initial"
                animate="animate"
                className="first "
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
                <motion.div
                  variants={letter}
                  className="bg-white  py-[12px] rounded-[4px] text-black text-center"
                >
                  <Link
                    to="/admin"
                    className="mulish text-[20px] font-semibold"
                  >
                    Demodan bepul foydalanish
                  </Link>
                </motion.div>

                <button
                  variants={letter}
                  className="flex items-center mulish text-white text-[18px] font-semibold leading-normal "
                  onClick={openModal}
                >
                  <img src={Player} alt="" />
                  Tizim qanday ishlaydi
                </button>
              </div>
            </motion.div>
            <motion.div>
              <motion.img
                className="w-full max-[1090px]:mb-[20px] max-[700px]:w-[400px] max-[1090px]:w-[500px]"
                initial={{x:200, opacity:0}} animate={{x:0, opacity: 1}} transition={{duration:.5, delay:0.8}}
                alt="image alt text"
                src={Dashboard}
                srcset={mediaDashboard}
                sizes="(max-width: 450px)"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="hero-start pt-[60px] pb-[65px] hidden max-[1090px]:block">
          <div className="container">
            <motion.div
              variants={firstName}
              initial="initial"
              animate="animate"
              className="first "
            >
              <motion.h1
                variants={letter}
                className="mulish text-[64px] max-[700px]:text-[40px] max-[450px]:text-[30px] max-[375px]:text-[24px] font-medium text-white leading-tight w-full max-w-[646px] mb-[12px]"
              >
                Xodimlarni boshqarishni avtomatlashtiring!!
              </motion.h1>
              <motion.p
                variants={letter}
                className="mulish font-medium text-[24px] max-[450px]:text-[20px] max-[375px]:text-[16px] leading-normal text-white mb-[60px]"
              >
                Astrolab tizimi - harakatlaringizni va vaqtingizni tejaydi.
              </motion.p>
            </motion.div>
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 max-[600px]:grid-cols-1 items-center w-full"
            >
              <motion.div
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white max-[600px]:order-2  py-[12px] rounded-[4px] text-black text-center"
              >
                <Link to="/admin" className="mulish text-[20px] font-semibold">
                  Demodan bepul foydalanish
                </Link>
              </motion.div>

              <motion.button
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center mulish text-white text-[18px] font-semibold leading-normal "
              >
                <img src={Player} alt="" />
                Tizim qanday ishlaydi
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div>
        {modalOpen && (
          <div className="overlay" onClick={handleOverlayClick}>
            <Modal isOpen={modalOpen} onClose={closeModal}>
              <div className="flex items-center justify-center">
                <ReactPlayer
                  width="70%"
                  height="70%"
                  url={AstroVideo}
                  controls={true}
                  playing={true}
                />
              </div>
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
