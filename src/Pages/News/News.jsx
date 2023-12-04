import React, { useState } from "react";

import "./News.scss";
import {
  Button,
  InputField,
  InputFile,
  Modal,
  ModalBtn,
} from "../../constants";

const News = () => {
  const [open, setOpen] = useState();
  return (
    <>
      <div className="w-full pt-[44px] px-[39px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[24px] text-black leading-[20px] font-bold">
            Новости
          </h2>
          <Button onClick={() => setOpen((prev) => !prev)}>
            Добавить Новости
          </Button>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <div className="w-[650px]">
          <form>
            <InputFile
              type={"file"}
              label="Загрузите свой файл"
              placeholder="Введите"
            />
            <InputField
              type={"text"}
              label="Введите заголовок новости"
              placeholder="Введите"
            />

            <div className="flex flex-col mb-[14px]">
              <label htmlFor="textarea" className="font-bold text-[14px] mb-[6px] leading-[20px] tracking-[-0.5px]">
              Введите описание модели <span className="text-[#E92424]">*</span>
              </label>
           <textarea className="h-[162px] outline-none bg-[#F5F5F5] py-[14px] ps-[14px] w-full placeholder:italic placeholder:font-extralight placeholder:text-[#999] placeholder:text-[14px]" id="textarea" placeholder="Введите"></textarea>
            </div>

           <div className=" w-full flex items-center justify-end">
           <ModalBtn className="w-[159px]">Добавить модел</ModalBtn>
           </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default News;
