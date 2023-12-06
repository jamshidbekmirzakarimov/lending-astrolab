import React from "react";
import Intizom from "../../assets/icons/intizom.svg";
import "./ManageMobileWorker.scss";
import WorkersImg from "../../assets/images/workers-img.jpg";
const ManageMobileWorker = () => {
  return (
    <>
      <section className="py-[60px] bg-[#F4F4FF]">
        <div className="container">
          <h2 className="w-full max-w-[726px] mulish text-[32px] text-black font-semibold leading-[38px] mb-[49px]">
            Xodimlarni mobil telefondan boshqarish uchun eng zamonaviy tizim.
          </h2>
          <div className="flex items-start justify-between">
            <div>
              <ul className="max-w-[626px] bg-white pt-[20px] pb-[38px] ps-[28px] rounded-[12px] mb-[40px]">

                <li className="w-full flex items-center group duration-300 mb-[30px]">
                  <div className="w-[60px] flex items-center justify-center flex-col me-[38px]">
                    <div className="text-[#3A3A3A] duration-300 group-hover:text-[#000]">
                      <svg
                        width="61"
                        height="60"
                        viewBox="0 0 61 60"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.125 7.5C22.8969 7.5 17 13.3969 17 20.625C17 25.0856 19.2688 29.0325 22.6831 31.4062C14.9863 34.41 9.5 41.91 9.5 50.625H13.25C13.25 42.3787 19.2331 35.4862 27.0781 34.0425L28.25 37.5H32L33.1719 34.0425C41.0169 35.4862 47 42.3787 47 50.625H50.75C50.75 41.91 45.2637 34.41 37.5669 31.4062C40.9794 29.0325 43.25 25.0856 43.25 20.625C43.25 13.3969 37.3531 7.5 30.125 7.5ZM30.125 11.25C35.3244 11.25 39.5 15.4256 39.5 20.625C39.5 25.8244 35.3244 30 30.125 30C24.9256 30 20.75 25.8244 20.75 20.625C20.75 15.4256 24.9256 11.25 30.125 11.25ZM28.25 39.375L26.375 50.625H33.875L32 39.375H28.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mulish text-[16px] duration-300 font-semibold text-[#3A3A3A] border-b-[2px] border-transparent group-hover:border-b-[2px] group-hover:border-[#000] group-hover:text-[#000]">
                      Intizom
                    </h3>
                  </div>
                  <p className="mulish w-full max-w-[451px] text-[#3A3A3A] text-[20px] font-normal leading-[24px] tracking-[0.5px] duration-300 group-hover:text-[#000] ">
                    Ishga kelmaslik holatlari, kechikishlar va ish joyidan erta
                    ketishlarning kamayishi.
                  </p>
                </li>


                <li className="w-full flex items-center group duration-300 mb-[30px]">
                  <div className="w-[60px] flex items-center flex-col justify-center me-[38px]">
                    <div className=" text-[#3A3A3A] duration-300 group-hover:text-[#000]">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 61 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44.248 16.25L57.998 22.5V55L40.498 47.5M40.498 47.5L20.498 55M40.498 47.5V30M20.498 55L2.99805 47.5V15L15.498 20M20.498 55V30M30.498 40.6825C30.498 40.6825 15.498 28.75 15.498 17.5C15.498 8.125 22.998 2.5 30.498 2.5C37.998 2.5 45.498 8.125 45.498 17.5C45.498 28.75 30.498 40.6825 30.498 40.6825ZM32.998 17.5C32.998 16.837 32.7347 16.2011 32.2658 15.7322C31.797 15.2634 31.1611 15 30.498 15C29.835 15 29.1991 15.2634 28.7303 15.7322C28.2614 16.2011 27.998 16.837 27.998 17.5C27.998 18.163 28.2614 18.7989 28.7303 19.2678C29.1991 19.7366 29.835 20 30.498 20C31.1611 20 31.797 19.7366 32.2658 19.2678C32.7347 18.7989 32.998 18.163 32.998 17.5Z"
                          stroke="currentColor"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <h3 className="mulish text-[16px] duration-300 font-semibold text-[#3A3A3A] border-b-[2px] border-transparent group-hover:border-b-[2px] group-hover:border-[#000] group-hover:text-[#000]">
                      Mobillik
                    </h3>
                  </div>
                  <p className="mulish w-full max-w-[341px] text-[#3A3A3A] text-[20px] font-normal leading-[24px] tracking-[0.5px] duration-300 group-hover:text-[#000] ">
                    Dunyoning istalgan nuqtasidagi xodimlarni o‘z telefoningiz
                    orqali boshqaring
                  </p>
                </li>
              </ul>


              <button className="mulish rounded-[8px] bg-[black] text-white py-[18px] px-[20px] text-[20px] font-semibold">
                Demodan bepul foydalanish
              </button>
            </div>
            <img
              className="rounded-[12px]"
              src={WorkersImg}
              width={504}
              height={537}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageMobileWorker;
