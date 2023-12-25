import React from "react";

import WorkTime from "../../assets/icons/work-time.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Calc from "../../assets/icons/calc.svg";
import Tele from "../../assets/icons/bi_telegram.svg";
import ProductCard2 from "../../components/Cards/ProductCard2/ProductCard2";
const AstroProduct = () => {
  const benefitsData = [
    {
      icon: WorkTime,
      title: "Ish jadvalini rejalashtirish",
      description:
        "Mijozlarimizning tajribasiga ko‘ra Astrolab tizimining asosiy mahsulotlarini joriy etishga 1-2 kun talab qilinadi.",
    },
    {
      icon: Calendar,
      title: "Tabelni shakllantirish",
      description:
        "Mijozlarimizning tajribasiga ko‘ra Astrolab tizimining asosiy mahsulotlarini joriy etishga 1-2 kun talab qilinadi.",
    },
    {
      icon: Calc,
      title: "Ta’lim muassasalari",
      description:
        "Mijozlarimizning tajribasiga ko‘ra Astrolab tizimining asosiy mahsulotlarini joriy etishga 1-2 kun talab qilinadi.",
    },
    {
      icon: Tele,
      title: "Ishlab chiqarish Sa’noat",
      description:
        "Mijozlarimizning tajribasiga ko‘ra Astrolab tizimining asosiy mahsulotlarini joriy etishga 1-2 kun talab qilinadi.",
    },
  ];
  return (
    <>
      <section id="astroproduct" className="pt-[60px] pb-[60px] bg-white max-[600px]:pt-[30px] max-[375px]:pt-[20px]">
        <div className="container">
          <h2 className="mb-[60px] mulish font-bold text-[40px] text-[#000] leading-normal max-[600px]:text-[35px] max-[600px]:mb-[30px] max-[420px]:text-[30px] max-[375px]:text-[24px] max-[375px]:mb-[20px]">
            Astrolab mahsulotlari
          </h2>
          <ul className="w-full justify-between flex items-center flex-wrap gap-[30px]">
            {benefitsData.map((benefit, index) => (
              <ProductCard2
                className={"bg-[black]"}
                key={index}
                icon={benefit.icon}
                title=  {benefit.title}
                description={benefit.description}
                DescCClassName={"text-[#000] max-w-[412px]"}
                ImgClassName={"w-[60px] h-[60px]"}
              />
            ))}
          </ul>
       
        </div>
      </section>

    </>
  );
};

export default AstroProduct;
