import React, { useState, useEffect } from "react";
import UzbekistanFlag from "../../assets/icons/uz.svg";
import RussiaFlag from "../../assets/icons/ru.svg";
import UKFlag from "../../assets/icons/eng.svg";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";

const ChangeLang = () => {
  const [lang, setLang] = useLocalization();
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selectedLang") || "uz"
  );

  useEffect(() => {
    localStorage.setItem("selectedLang", selectedLang);
  }, [selectedLang]);

  const handleLangChange = (event) => {
    const langValue = event.target.value;
    setLang(langValue);
    setSelectedLang(langValue);
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
    <div className="flex items-center">
      <div>{getFlagIcon(selectedLang)}</div>
      <select
        id="small"
        className="block w-[60px] max-[400px]:w-[70px] h-[40px] outline-none p-2 text-sm text-gray-900 rounded-lg bg-white"
        name="language"
        value={selectedLang}
        onChange={handleLangChange}
      >
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default ChangeLang;
