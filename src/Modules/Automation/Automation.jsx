import React from "react";
import HeroBg from "../../assets/images/hero-bg.png";
import InfoCard from "../../components/Cards/InfoCard/InfoCard";
import User from "../../assets/icons/mdi_user-tie.svg"
import DemoButton from "../../UI/DemoButton/DemoButton";
import TableUser from "../../assets/icons/solar_user-id-bold.svg"
import useJavaScript from "../../hooks/useJavaScript";
const Automation = () => {

  const benefitsData = [
    {
      icon: User,
      title: "Rahbarlar uchun afzalliklar",
      description:
        "Xodimlarning samaradorligi va jalb etilganligini oshirish hisobidan qo‘yilgan maqsadlarga tezroq erishasiz.",
    },
    {
      icon: TableUser,
      title: "HR uchun afzalliklar",
      description:
        "Astrolab xodimlarning samarali ishlashini baholash uchun shaffof  tizimni taklif etadi, bu oyiga o‘nlab soatlarni tejaydi.",
    }
  ];
  return (
    <>
      <section className="py-[60px] bg-[#F4F4FF]">
        <div className="container">
          <h2 className="mb-[37px] w-full max-w-[717px] mulish text-black text-[32px] font-semibold leading-[38px]">
            Xodimlar bilan ishlash bo‘yicha qiyin jarayonlarni
            avtomatlashtiring.
          </h2>
          <div className="flex justify-between">
            <div>
              <img className="mb-[30px]" src={HeroBg} alt="" width={436} height={380} />

              <DemoButton/>
  
            </div>
            <ul className=" flex items-center flex-col gap-[30px]" >
              {benefitsData.map((benefit, index) => (
                <InfoCard
                className={"w-[585px] h-[150px] bg-white"}
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  DesclassName={"max-w-[373px] text-[#000]"}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Automation;
