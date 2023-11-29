import React, { useState } from "react";
import Button from "../../constants/Button/Button";
import Modal from "../../constants/Modal/Modal";
import InputFile from "../../constants/InputFile/InputFile";
import InputField from "../../constants/InputField/InputField";
import ModalBtn from "../../constants/ModalBtn/ModalBtn";
import "./News.scss"
const News = () => {
  const [open, setOpen] = useState();
  return (
    <>
      <div className="w-full pt-[44px] px-[39px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[24px] text-black leading-[20px] font-bold">
            Новости
          </h2>
          <Button onClick={() => setOpen((prev) => !prev)}>Добавить Новости</Button>
        </div>
      </div>
    <Modal open={open} setOpen={setOpen}>
        <div>
          <form>
            <InputFile
              type={"file"}
              label="Загрузите свой файл"
              placeholder="Введите"
            />
            <InputField
              type={"text"}
              label="Введите название"
              placeholder="Введите"
            />
            <ModalBtn>
            Добавить баннер
            </ModalBtn>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default News;
