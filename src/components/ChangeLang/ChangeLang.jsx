import React, { useState } from "react";
import UzbekistanFlag from "../../assets/icons/uz.svg";
import RussiaFlag from "../../assets/icons/ru.svg";
import UKFlag from "../../assets/icons/eng.svg";

const ChangeLang = () => {
  const [selectedLang, setSelectedLang] = useState("uz");

  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
  };

  const getFlagIcon = (lang) => {
    switch (lang) {
      case "uz":
        return <img src={UzbekistanFlag} alt="Uzbekistan Flag" />;
      case "ru":
        return <img src={RussiaFlag} alt="Russia Flag" />;
      case "en":
        return <img src={UKFlag} alt="UK Flag" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center">
        <div>{getFlagIcon(selectedLang)}</div>
        <select
          id="small"
          className="block w-[60px] max-[400px]:w-[70px] h-[40px] outline-none p-2 text-sm text-gray-900 rounded-lg bg-white"
          value={selectedLang}
          onChange={handleLangChange}
        >
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    </>
  );
};

export default ChangeLang;
