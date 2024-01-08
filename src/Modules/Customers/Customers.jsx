import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Intel from "../../assets/icons/intel.svg";
import "./Customers.scss";
import Customers1 from "../../assets/images/customers1.jpg";
import Customers2 from "../../assets/images/customers2.jpg";
import VidePlayer from "../../assets/icons/video-player.svg";
import Modal from "../../components/Modal/Modal";
import AstroVideo from "../../assets/Videos/AstroVideo.mp4";
import ReactPlayer from "react-player/file";
const Customers = () => {
  const data = [
    { id: 1, image: Customers1 },
    { id: 2, image: Customers2 },
    { id: 3, image: Customers1 },
    { id: 4, image: Customers2 },
  ];

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
  return (
    <>
      <section className="pb-[60px]">
        <div className="container">
          <h2 className="mb-[40px] mulish font-semibold text-[40px] text-[#000] leading-normal max-[660px]:text-[32px] max-[660px]:mb-[30px] max-[450px]:text-[28px] max-[375px]:text-[24px] max-[375px]:mb-[20px]">
            Mijozlarimizni biz haqimizda fikri
          </h2>

          <div className="customer">
            <Swiper
              slidesPerView={2}
              spaceBetween={27}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                200: {
                  slidesPerView: 1,
                },
              }}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="max-w-[585px] h-[318px] max-[800px]:h-[250px] max-[600px]:h-[318px] max-[520px]:h-[260px] max-[420px]:h-[220px] rounded-[12px] border-[1px] border-[#D5D5D8] flex items-center justify-center">
                    <img
                      className="w-full h-full relative rounded-[12px]"
                      src={item.image}
                      alt=""
                    />

                    <img
                      onClick={openModal}
                      className="absolute cursor-pointer max-[520px]:w-[50px] max-[520px]:h-[50px] "
                      src={VidePlayer}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <div>
        {modalOpen && (
          <div className="overlay" onClick={handleOverlayClick}>
            <Modal isOpen={modalOpen} onClose={closeModal}>
              <div className="flex items-center justify-center">
                <ReactPlayer
                  width="80%"
                  height="80%"
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

export default Customers;
