import React from "react";
import Call from "../../assets/icons/call.svg";
import Sms from "../../assets/icons/Sms.svg";
import LenfingInput from "../../UI/LenfingInput/LenfingInput";
const RequestDemo = () => {
  return (
    <>
      <section className="py-[20px] bg-[#F4F4FF]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
            <h2 className="mb-[16px] mulish font-semibold text-[40px] text-[#000] leading-normal">
              Demoni so’rash
            </h2>
            <p className="w-full border-b-[1px] border-[#000] max-w-[562px] mulish font-medium text-[16px] leading-[24px] text-[#00000099] mb-[60px] pb-[60px]">
              Agar siz Astrolab tiziz haqida ko’proq ma’lumotga ega bo’lishni
              istasangiz, arizani to’ldiring va 14 kunlik bepul foydalanishga
              bepul foydalanishga ega bo’ling
            </p>
            <p className="mulish text-[20px] font-medium leading-[24px] text-[#000] mb-[23px]">
              Agar sizda biron bir savol bo’lsa,iltimos biz bilan bog’laning
            </p>
            <a
              className="flex items-center gap-[6px] mb-[23px]"
              href="tel:+998991234567"
            >
              <img src={Call} alt="call" />
              <p className="mulish text-[24px] font-semibold text-[#343A40]">+998 99 123 45 67</p>
            </a>
            <a
              className="flex items-center gap-[6px]"
              href="mailto:astrolab@gmail.com"
            >
              <img src={Sms} alt="call" />
              <p className="mulish text-[24px] font-semibold text-[#343A40]">astrolab@gmail.com</p>
            </a>
            </div>
            <div className="w-[556px] bg-[#fff] rounded-[12px] pt-[30px] px-[40px] pb-[40px]">
                <form className="gap-[20px]">
                <LenfingInput placeholder={"Ism*"} type={"text"}/>
                <LenfingInput placeholder={"Familya*"} type={"text"}/>
                <LenfingInput placeholder={"Telefon Raqami*"} type={"tel"}/>
                <LenfingInput placeholder={"Elektron pochta*"} type={"email"}/>
                <LenfingInput placeholder={"Kompaniya nomi*"} type={"text"}/>
                </form>
                <button className=" mulish text-[16px] font-semibold leading-[24px] h-[50px] bg-[#000] rounded-[4px] w-full text-[#fff]">Yuborish</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestDemo;
