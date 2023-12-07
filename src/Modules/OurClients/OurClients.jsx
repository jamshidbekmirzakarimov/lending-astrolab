import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Intel from "../../assets/icons/intel.svg";
import "./OurClients.scss"
const OurClients = () => {
  const data = [
    { id: 1, image: Intel },
    { id: 2, image: Intel },
    { id: 3, image: Intel },
    { id: 4, image: Intel },
    { id: 5, image: Intel },
    { id: 6, image: Intel },
  ];

  return (
    <>
      <section className="py-[60px]">
        <div className="container">
            <h2 className="mb-[40px] mulish font-bold text-[40px] text-[#000] leading-normal">Biz bilan hamkor kompaniyalar</h2>
        <div className="OurClients">
        <Swiper
            slidesPerView={4}
            spaceBetween={25}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
          {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="w-[278px] h-[128px] rounded-[12px] border-[1px] border-[#D5D5D8] flex items-center justify-center">
                  <img src={item.image} alt="" />
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

export default OurClients;