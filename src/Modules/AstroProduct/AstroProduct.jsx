import React from "react";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";

import WorkTime from "../../assets/icons/work-time.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Calc from "../../assets/icons/calc.svg";
import Tele from "../../assets/icons/bi_telegram.svg";
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
      <section className="pt-[60px] pb-[60px] bg-white">
        <div className="container">
          <h2 className="mb-[60px] mulish font-bold text-[40px] text-[#000] leading-normal">
            Astrolab mahsulotlari
          </h2>
          <ul className="w-full justify-between flex items-center flex-wrap gap-[30px]">
            {benefitsData.map((benefit, index) => (
              <ProductCard
                className={"bg-[black]"}
                key={index}
                icon={benefit.icon}
                title={benefit.title}
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
