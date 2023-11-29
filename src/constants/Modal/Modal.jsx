import React from "react";
import { Modal as AntModal } from "antd";
const Modal = ({ open, setOpen, children }) => {
  return (
    <>
      <AntModal
        centered
        closable={false}
        open={open}
        onOk={() => setOpen((prev) => !prev)}
        onCancel={() => setOpen((prev) => !prev)}
        footer={null}
      >
        {children}
      </AntModal>
    </>
  );
};

export default Modal;