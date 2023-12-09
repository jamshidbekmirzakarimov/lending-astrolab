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
const Customers = () => {
  const data = [
    { id: 1, image: Customers1 },
    { id: 2, image: Customers2 },
    { id: 3, image: Customers1 },
    { id: 4, image: Customers2 },
  ];

  return (
    <>
      <section className="pb-[60px]">
        <div className="container">
          <h2 className="mb-[40px] mulish font-semibold text-[40px] text-[#000] leading-normal">
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
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="w-[585px] h-[318px] rounded-[12px] border-[1px] border-[#D5D5D8] flex items-center justify-center">
                    <img
                      className="relative rounded-[12px]"
                      src={item.image}
                      alt=""
                    />
                    <img className="absolute" src={VidePlayer} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
