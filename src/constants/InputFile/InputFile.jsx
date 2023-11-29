import React from "react";

const InputFile = ({ label, placeholder, onChange, type }) => {
  return (
    <div className="flex flex-col mb-[14px]">
      <h3 className="font-bold text-[14px] mb-[6px] leading-[20px] tracking-[-0.5px]">
        {label} <span className="text-[#E92424]">*</span>
      </h3>
      <label htmlFor="filed" className=" bg-[#F5F5F5] py-[14px] ps-[14px] w-full italic font-extralight text-[#999] text-[14px] mb-[6px]">
      Выберите файл
      </label>
      <input
        className="hidden"
        type="file"
        placeholder={placeholder}
        onChange={onChange} 
        id="filed"
      />
      <p className="text-[10px] text-[#999] font-normal">Размер файла не должен превышать 10 МБ, (JPEG, PNG)</p>
    </div>
  );
};

export default InputFile;
