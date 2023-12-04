import React from "react";
import "./Auth.scss";
import ImgLogin from "../../assets/images/login-img.jpg";
import AstrolabLogo from "../../assets/icons/tizim-logo.svg";
import { Link } from "react-router-dom";
import InputField from "../../constants/InputField/InputField";
const Auth = () => {
  return (
    <div className="w-full h-[100vh] flex items-center">
      <iframe  className="w-[50%] h-[100vh]" src="https://lottie.host/embed/b335ea8f-2ea3-4a37-a0a1-9208ad54e46c/YLPbu1qOTF.json"></iframe>
      <div className="w-[50%] flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <img src={AstrolabLogo} alt="" />
          <h2 className="font-bold text-[24px] text-[#000] leading-normal w-full text-center max-w-[294px] mb-[54px]">
            ДОБРО ПОЖАЛОВАТЬ В АДМИН-ПАНЕЛЬ
          </h2>
          <form className="w-[311px]">
            <InputField type={"text"} label="Имя пользователя" placeholder="Введите" />
            <InputField type={"password"} label="Пароль" placeholder="Введите" />
            <Link to="/information">
              <button className="text-[14px] w-[311px] py-[15px] text-[#fff] bg-[#000] font-bold leading-normal">
                Вход в аккаунт
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
