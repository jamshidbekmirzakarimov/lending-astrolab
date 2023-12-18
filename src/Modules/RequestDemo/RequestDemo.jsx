import React, { useEffect, useState } from "react";
import Call from "../../assets/icons/call.svg";
import Sms from "../../assets/icons/Sms.svg";
import LenfingInput from "../../UI/LenfingInput/LenfingInput";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RequestDemo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSendMessage = () => {
    if (!firstName || !phoneNumber) {
      return alert("F.I.SH and Phone number required");
    }

    const bot = {
      TOKEN: "6343007118:AAGwbwQo1LteIjSszg1clg2ls0-59C4-7jM",
      chatID: "-1001800659362",
      message: `-FISH: ${firstName}
-Telefon nomer: ${phoneNumber.replace(/[\(\)]/g, "")},
-Kompaniya nomi: ${lastName}`,
    };

    const apiUrl = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: bot.chatID,
        text: bot.message,
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Message sent:", data);

        setFirstName("");
        setLastName("");
        setPhoneNumber("");

        setShowModal(true);

        toast.success("Message sent");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        if (error.message === "Unauthorized") {
          toast.error("Unauthorized: Could not send the message");
        } else {
          toast.error("Error sending message");
        }
      });
  };

  const handleLastNameKeyPress = (e) => {
    const charCode = e.which || e.keyCode;

    if (
      !(charCode >= 65 && charCode <= 90) &&
      !(charCode >= 97 && charCode <= 122) &&
      charCode !== 32
    ) {
      e.preventDefault();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section id="requesdemo" className="py-[20px] bg-[#F4F4FF]">
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
                <p className="mulish text-[24px] font-semibold text-[#343A40]">
                  +998 99 123 45 67
                </p>
              </a>
              <a
                className="flex items-center gap-[6px]"
                href="mailto:astrolab@gmail.com"
              >
                <img src={Sms} alt="call" />
                <p className="mulish text-[24px] font-semibold text-[#343A40]">
                  astrolab@gmail.com
                </p>
              </a>
            </div>
            <div className="w-[556px] bg-[#fff] rounded-[12px] pt-[30px] px-[40px] pb-[40px]">
              <form className="gap-[20px]">
                <LenfingInput
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={"F.I.SH*"}
                  type={"text"}
                />
                <InputMask
                  mask="+\9\9\8\ (99) 999-99-99"
                  maskChar=" "
                  required={true}
                  value={phoneNumber}
                  placeholder="Telefon Raqami*"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="ps-[20px] h-[50px] w-full border-[1px] border-[#000] rounded-[4px] outline-none mb-[20px]"
                  type="tel"
                />
                <LenfingInput
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={"Kompaniya nomi*"}
                  type={"text"}
                />
              </form>
              <button
                onClick={handleSendMessage}
                className=" mulish text-[16px] font-semibold leading-[24px] h-[50px] bg-[#000] rounded-[4px] w-full text-[#fff]"
              >
                Yuborish
              </button>
            </div>
          </div>
        </div>

        <ToastContainer />
      </section>
    </>
  );
};

export default RequestDemo;
