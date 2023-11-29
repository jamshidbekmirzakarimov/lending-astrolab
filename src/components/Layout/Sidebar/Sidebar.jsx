import React from "react";
import AstrolabOq from "../../../assets/icons/astrolab-tizim-oq.svg";
import Information from "../../../assets/icons/information.svg";
import { Link } from "react-router-dom";
import News from "../../../assets/icons/news.svg"
import Logout from "../../../assets/icons/logout-icon.svg"
const Sidebar = () => {
  return (
    <div className="w-[316px] bg-black h-screen pt-[44px] relative">
      <div className="flex items-center justify-center">
       <Link to="/information">
       <img src={AstrolabOq} alt="" />
       </Link>
      </div>    
      <ul className="ps-[45px] pt-[55px]">
        <li>
          <Link to="/information" className="flex items-center py-[15px] gap-[9px]">
            <img src={Information} alt="" />
            <h3 className="text-white text-[14px] font-normal leading-[20px]">Список тест-драйвов</h3>
          </Link>
        </li>
        <li>
        <Link to="/news" className="flex items-center py-[15px] gap-[9px]">
            <img src={News} alt="" />
            <h3 className="text-white text-[14px] font-normal leading-[20px]">Новости</h3>
          </Link>
        </li>
      </ul>
      <Link to="/">
      <button className="flex items-center gap-[9px] ps-[45px] text-white absolute bottom-[20px] py-[15px]">
        <img src={Logout} alt="logout" />
        Выход
      </button>
      </Link>
    </div>
  );
};

export default Sidebar;
