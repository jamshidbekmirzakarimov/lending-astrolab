import React from "react";
import "./Auth.scss";
import ImgLogin from "../../assets/images/login-img.jpg";
import AstrolabLogo from "../../assets/icons/tizim-logo.svg";
const Auth = () => {
  return (
    <div className="w-full h-[100vh] flex items-center">
      <img className="w-[50%] h-[100vh]" src={ImgLogin} alt="" />
      <div className="w-[50%] flex items-center justify-center flex-col">
        <form>
          <img src={AstrolabLogo} alt="" />
          <h2 className="font-bold text-[24px] text-[#000] leading-normal">ДОБРО ПОЖАЛОВАТЬ В АДМИН-ПАНЕЛЬ</h2>
        </form>
      </div>
    </div>
  );
};

export default Auth;
