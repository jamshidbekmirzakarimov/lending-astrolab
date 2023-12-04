import React from "react";
import { Link, useLocation } from "react-router-dom";
import AstrolabOq from "../../../assets/icons/astrolab-tizim-oq.svg";
import Information from "../../../assets/icons/information.svg";
import News from "../../../assets/icons/news.svg";
import Logout from "../../../assets/icons/logout-icon.svg";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-[316px] bg-black h-screen pt-[30px] relative">
      <div className="flex items-center justify-center">
        <Link to="/information">
          <img src={AstrolabOq} alt="" />
        </Link>
      </div>
      <ul className="pt-[55px]">
        <li className="mb-[5px]">
          <Link
            to="/information"
            className={`flex items-center py-[15px] gap-[9px] ps-[45px] hover:bg-[#3a3a3a] duration-300 ${
              location.pathname === "/information" ? "bg-[#3a3a3a]" : ""
            }`}
          >
            <img src={Information} alt="" />
            <h3 className="text-white text-[14px] font-normal leading-[20px]">
              Список тест-драйвов
            </h3>
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            className={`flex items-center py-[15px] gap-[9px] ps-[45px] hover:bg-[#3a3a3a] duration-300 ${
              location.pathname === "/news" ? "bg-[#3a3a3a]" : ""
            }`}
          >
            <img src={News} alt="" />
            <h3 className="text-white text-[14px] font-normal leading-[20px]">
              Новости
            </h3>
          </Link>
        </li>
      </ul>
      <Link className="absolute bottom-[20px] w-full ps-[45px] hover:bg-[#3a3a3a] duration-300" to="/login">
        <button className="flex items-center gap-[9px] text-white py-[15px]">
          <img src={Logout} alt="logout" />
          Выход
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;