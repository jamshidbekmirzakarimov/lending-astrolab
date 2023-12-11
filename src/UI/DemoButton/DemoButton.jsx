import React from 'react';
import "./DemoButton.scss"
import "./DemoButton"
const DemoButton = () => {
  return (
  <div className='demoBtn'>
      <button className=" mulish rounded-[8px] bg-[black] text-white py-[18px] px-[20px] text-[20px] border-[1px] border-[#000] font-semibold duration-300 hover:border-[1px] hover:border-[#000] hover:text-[#000] hover:bg-[#fff]">
      <span>Demodan bepul foydalanish</span>
    </button>
  </div>
  );
};

export default DemoButton;