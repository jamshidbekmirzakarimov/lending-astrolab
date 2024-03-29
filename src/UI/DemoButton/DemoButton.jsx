import React from 'react';
import "./DemoButton.scss"
import "./DemoButton"
import useJavaScript from '../../hooks/useJavaScript';
const DemoButton = () => {
  const { onActive } = useJavaScript();
  return (
  <div className='demoBtn max-[400px]:w-full' onClick={(e) => onActive(e, "#requesdemo")}>
      <button className=" mulish rounded-[8px] bg-[black] text-white max-[400px]:w-full py-[18px] px-[20px] max-[600px]:py-[10px] max-[600px]:px-[10px] max-[400px]:px-[5px] max-[400px]:py-[5px] max-[600px]:text-[10px] text-[20px] border-[1px] border-[#000] font-semibold duration-300 hover:border-[1px] hover:border-[#000] hover:text-[#000] hover:bg-[#fff]">
      <span>Demodan bepul foydalanish</span>
    </button>
  </div>
  );
};

export default DemoButton;