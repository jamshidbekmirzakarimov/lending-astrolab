import React from "react";
import Info from "../../assets/icons/info.svg";
import ListButton from "../../UI/ListButton/ListButton";
import ButtonStatik from "../../UI/ButtonStatik/ButtonStatik";
import Close from "../../assets/icons/close.svg";
import Check from "../../assets/icons/check.svg";
const Price = () => {
  const simple = [
    { title: "", image: Close },
    { title: "1" },
    { title: "1" },
    { title: "50" },
    { title: "50" },
  ];

  const standart = [
    { title: "", image: Check },
    { title: "10" },
    { title: "5" },
    { title: "100" },
    { title: "100" },
  ];

  const premium = [
    { title: "", image: Check },
    { title: "∞" },
    { title: "∞" },
    { title: "∞" },
    { title: "∞" },
  ];

  const Data = [
    { title: "Statistika", image: Info },
    { title: "Ishchilar soni" },
    { title: "Omborlar soni" },
    { title: "Yetkazib beruvchi" },
    { title: "Mijozlar soni" },
  ];

  const [selectedType, setSelectedType] = React.useState("monthly");

  const handleClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <section className="pb-[60px] bg-[#F4F4FF]">
        <div className="pt-[60px] pb-[40px]">
          <div className="container">
            <h2 className="mb-[20px] mulish font-bold text-[40px] text-[#000] leading-normal">
              Narxlar
            </h2>
            <p className="mulish font-semibold leading-[38px] text-[32px] text-black max-w-[994px]">
              Tizimdan foydalanish uchun oylik to'lov tarif rejalariga mos
              ravishda belgilanadi. Agar 17% tejamoqchi bo'lsangiz, bir yilga
              to'lov qilishni tavsiya qilamiz.
            </p>
          </div>
        </div>
        <div className="bg-[#fff] pt-[60px] pb-[40px]">
          <div className="container">
            <div className="flex gap-[27px] justify-between">
              <div className="flex items-center justify-center flex-col ">
                <div className="h-[116px] flex items-center justify-start flex-col mb-[18px]">
                  <h3 className="mulish mb-[12px] text-black text-[20px] font-bold leading-[18px]">
                    To'lov muddati
                  </h3>

                  <div className="flex w-[240px]  border-[1px] border-[#000] rounded-[4px] overflow-hidden">
                    <button
                      className={`mulish w-[50%] py-[11px] text-[16px] ${
                        selectedType === "monthly"
                          ? "text-[#fff] bg-[#000]"
                          : "text-[#000] bg-[#fff]"
                      }`}
                      onClick={() => handleClick("monthly")}
                    >
                      Oylik
                    </button>
                    <button
                      className={`mulish w-[50%] py-[11px] text-[16px] ${
                        selectedType === "yearly"
                          ? "text-[#fff] bg-[#000]"
                          : "text-[#000] bg-[#fff]"
                      }`}
                      onClick={() => handleClick("yearly")}
                    >
                      Yillik
                    </button>
                  </div>
                </div>
                <ul className="mb-[20px]">
                  {Data.map((item, index) => (
                    <li
                      key={index}
                      className="w-[279px] min-h-[60px] border-[1px] border-[D5D5D8] flex items-center justify-center"
                    >
                      <div className="flex items-center gap-[6px]">
                        <p className="mulish text-[16px] font-normal leading-[40px]">
                          {item.title}
                        </p>
                        {item.image && <img src={item.image} alt="" />}
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  disabled
                  className="mulish mb-[20px] flex items-center rounded-[4px] w-[160px] justify-center bg-transparent h-[40px] py-[11px] text-[16px] text-transparent "
                ></button>
              </div>

              <div className="flex items-center justify-center flex-col ">
                <div className="h-[116px] flex items-center justify-start flex-col mb-[18px]">
                  <h3 className="mulish mb-[12px] text-black text-[16px] font-medium leading-[18px]">
                    Kichik biznes
                  </h3>
                  <div className="flex items-center justify-center flex-col">
                    <ButtonStatik>Simple</ButtonStatik>
                    <div className="flex items-center gap-[6px]">
                      <h4 className="mulish text-[24px] tracking-[-1px] leading-[36px] font-semibold">
                        {selectedType === "monthly" && "59.000"}
                        {selectedType === "yearly" && "780.000"}
                      </h4>
                      <p className="mulish text-[14px] font-medium leading-[18px] tracking-[-1px] uppercase">
                        {" "}
                        so'm / {selectedType === "monthly" && "Oyiga"}
                        {selectedType === "yearly" && "Yillik"}
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mb-[20px]">
                  {simple.map((item, index) => (
                    <li
                      key={index}
                      className="w-[279px] min-h-[60px] border-[1px] border-[D5D5D8] flex items-center justify-center"
                    >
                      <div className="flex items-center gap-[6px]">
                        <p className="mulish text-[16px] font-normal leading-[40px]">
                          {item.title}
                        </p>
                        {item.image && <img src={item.image} alt="" />}
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="#requesdemo">
                  <ListButton>Sinab ko'rish</ListButton>
                </a>
              </div>

              <div className="flex items-center justify-center flex-col ">
                <div className="h-[116px] flex items-center justify-start flex-col mb-[18px]">
                  <h3 className="mulish mb-[12px] text-black text-[16px] font-medium leading-[18px]">
                    O'rta biznes
                  </h3>
                  <div className="flex items-center justify-center flex-col">
                    <ButtonStatik>Standart</ButtonStatik>
                    <div className="flex items-center gap-[6px]">
                      <h4 className="mulish text-[24px] tracking-[-1px] leading-[36px] font-semibold">
                        {selectedType === "yearly" && "1.000.000"}{" "}
                        {selectedType === "monthly" && "99.000"}
                      </h4>
                      <p className="mulish text-[14px] font-medium leading-[18px] tracking-[-1px] uppercase">
                        {" "}
                        so'm / {selectedType === "monthly" && "Oyiga"}{" "}
                        {selectedType === "yearly" && "Yillik"}
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mb-[20px]">
                  {standart.map((item, index) => (
                    <li
                      key={index}
                      className="w-[279px] min-h-[60px] border-[1px] border-[D5D5D8] flex items-center justify-center"
                    >
                      <div className="flex items-center gap-[6px]">
                        <p className="mulish text-[16px] font-normal leading-[40px]">
                          {item.title}
                        </p>
                        {item.image && <img src={item.image} alt="" />}
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="#requesdemo">
                  <ListButton>Sinab ko'rish</ListButton>
                </a>
              </div>

              <div className="flex items-center justify-center flex-col ">
                <div className="h-[116px] flex items-center justify-start flex-col mb-[18px]">
                  <h3 className="mulish mb-[12px] text-black text-[16px] font-medium leading-[18px]">
                    Katta bizness
                  </h3>
                  <div className="flex items-center justify-center flex-col">
                    <ButtonStatik>Premium</ButtonStatik>
                    <div className="flex items-center gap-[6px]">
                      <h4 className="mulish text-[24px] tracking-[-1px] leading-[36px] font-semibold">
                        {selectedType === "yearly" && "1.200.000"}{" "}
                        {selectedType === "monthly" && "99.000"}
                      </h4>
                      <p className="mulish text-[14px] font-medium leading-[18px] tracking-[-1px] uppercase">
                        {" "}
                        so'm / {selectedType === "monthly" && "Oyiga"}{" "}
                        {selectedType === "yearly" && "Yillik"}
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mb-[20px]">
                  {premium.map((item, index) => (
                    <li
                      key={index}
                      className="w-[279px] min-h-[60px] border-[1px] border-[D5D5D8] flex items-center justify-center"
                    >
                      <div className="flex items-center gap-[6px]">
                        <p className="mulish text-[16px] font-normal leading-[40px]">
                          {item.title}
                        </p>
                        {item.image && <img src={item.image} alt="" />}
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="#requesdemo">
                  <ListButton>Sinab ko'rish</ListButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
