import React from "react";
import Money from "../../assets/icons/money.svg";
import Good from "../../assets/icons/good.svg";
import UiwLoading from "../../assets/icons/uiw_loading.svg";
import Location from "../../assets/icons/location.svg";
import InfoCard from "../../components/Cards/InfoCard/InfoCard";

const Benefits = () => {
  // Define an array of benefits
  const benefitsData = [
    {
      icon: Money,
      title: "Mehnatga haq to‘lash fondi va Mehnat harajatlarining kamayishi",
      description:
        "Mijozlarimizning tajribasiga ko‘ra, xodimlarga sarflanadigan harajatlarni 5-8%ga kamaytiradi va yiliga ketadigan minglab soatni tejaydi.",
    },
    {
      icon: Good,
      title: "Bepul foydalanish imkoniyati",
      description: "Siz 14 kunga Workly tizimining to‘liq funktsionalidan bepul foydalanish imkoniyatini olasiz.",
    },
    {
      icon: UiwLoading,
      title: "Tez ishga tushirish",
      description: "Mijozlarimizning tajribasiga ko‘ra Astrolab tizimining asosiy mahsulotlarini joriy etishga 1-2 kun talab qilinadi.",
    },
    {
      icon: Location,
      title: "Hohlagan jozingizda",
      description: "Siz bizning tizimimizdan hohlagan manzillingizda foydalanishingiz mumkin.",
    },
  ];

  return (
    <>
      <section className="pt-[62px] pb-[60px]">
        <div className="container">
          <h2 className="mulish font-bold text-[40px] text-black leading-[20px] tracking-[0.5px] mb-[18px]">
            Astrolab afzalliklari
          </h2>
          <p className="mulish text-[32px] font-semibold leading-normal text-black w-full max-w-[711px] mb-[40px]">
            Xodimlarni boshqarishni manfaatli shartlarda avtomatlashtiring.
          </p>

          <ul className="w-full justify-between flex items-center flex-wrap gap-[30px]">
            {benefitsData.map((benefit, index) => (
              <InfoCard
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

export default Benefits;