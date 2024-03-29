import React from "react";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import Ofis from "../../assets/images/Ofis.jpg";
import Kilinikalar from "../../assets/images/Kilinikalar.jpg";
import Talim from "../../assets/images/Talim.jpg";
import Sanoat from "../../assets/images/Sanoat.jpg";
import Ovqat from "../../assets/images/Ovqat.jpg";
import Other from "../../assets/images/Other.jpg";
const Business = () => {
  const benefitsData = [
    {
      icon: Ofis,
      title: "Ofis",
      description:
        "Mijozlarimizning tajribasiga ko‘ra Astrolab tizimining asosiy mahsulotlarini joriy etishga 1-2 kun talab qilinadi.",
    },
    {
      icon: Kilinikalar,
      title: "Kilinikalar",
      description:
        "Siz bizning tizimimizdan hohlagan manzillingizda foydalanishingiz mumkin.",
    },
    {
      icon: Talim,
      title: "Ta’lim muassasalari",
      description:
        "Mijozlarimizning tajribasiga ko‘ra Astrolab tizimining asosiy mahsulotlarini joriy etishga 1-2 kun talab qilinadi.",
    },
    {
      icon: Sanoat,
      title: "Ishlab chiqarish Sa’noat",
      description:
        "Siz bizning tizimimizdan hohlagan manzillingizda foydalanishingiz mumkin.",
    },
    {
      icon: Ovqat,
      title: "Ovqatlanish muassasalari ",
      description:
        "Mijozlarimizning tajribasiga ko‘ra Astrolab tizimining asosiy mahsulotlarini joriy etishga 1-2 kun talab qilinadi.",
    },
    {
      icon: Other,
      title: "Va boshqalar",
      description:
        "Siz bizning tizimimizdan hohlagan manzillingizda foydalanishingiz mumkin.",
    },
  ];
  return (
    <>
      <section className="py-[60px] bg-[#fff]">
        <div className="container">
          <h2 className="w-full max-w-[717px] mulish text-black text-[32px] font-semibold leading-[38px] mb-[40px]">
            Astrolab tizim har qanday biznes sohasi uchun to’g’ri keladi.
          </h2>

          <ul className="w-full justify-between flex items-center flex-wrap gap-[30px]">
            {benefitsData.map((benefit, index) => (
              <ProductCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Business;
