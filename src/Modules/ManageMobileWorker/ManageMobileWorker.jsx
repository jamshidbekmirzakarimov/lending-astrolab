import React from "react";
import Intizom from "../../assets/icons/intizom.svg";
import "./ManageMobileWorker.scss";
import WorkersImg from "../../assets/images/workers-img.jpg";
import DemoButton from "../../UI/DemoButton/DemoButton";
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
              <ul className="max-w-[626px] h-[528px] flex items-center justify-between flex-col bg-white pt-[20px] pb-[38px] ps-[28px] rounded-[12px] mb-[40px]">
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
                      Tejamkorlik
                    </h3>
                  </div>
                  <p className="mulish w-full max-w-[341px] text-[#3A3A3A] text-[20px] font-normal leading-[24px] tracking-[0.5px] duration-300 group-hover:text-[#000] ">
                    Dunyoning istalgan nuqtasidagi xodimlarni o‘z telefoningiz
                    orqali boshqaring
                  </p>
                </li>{" "}
                <li className="w-full flex items-center group duration-300 mb-[30px]">
                  <div className="w-[60px] flex items-center flex-col justify-center me-[38px]">
                    <div className=" text-[#3A3A3A] duration-300 group-hover:text-[#000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="61"
                        height="60"
                        viewBox="0 0 61 60"
                        fill="currentColor"
                      >
                        <path
                          d="M30.5 5C16.75 5 5.5 16.25 5.5 30C5.5 43.75 16.75 55 30.5 55C44.25 55 55.5 43.75 55.5 30C55.5 16.25 44.25 5 30.5 5ZM30.5 50C19.475 50 10.5 41.025 10.5 30C10.5 18.975 19.475 10 30.5 10C41.525 10 50.5 18.975 50.5 30C50.5 41.025 41.525 50 30.5 50ZM31.75 17.5H28V32.5L41 40.5L43 37.25L31.75 30.5V17.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mulish text-[16px] duration-300 font-semibold text-[#3A3A3A] border-b-[2px] border-transparent group-hover:border-b-[2px] group-hover:border-[#000] group-hover:text-[#000]">
                      Tejamkorlik
                    </h3>
                  </div>
                  <p className="mulish w-full max-w-[341px] text-[#3A3A3A] text-[20px] font-normal leading-[24px] tracking-[0.5px] duration-300 group-hover:text-[#000] ">
                    Mehnatga haq to‘lash fondini haqiqatdan ham ishlangan vaqtni
                    to‘lash hisobidan kamaytiring.
                  </p>
                </li>{" "}
                <li className="w-full flex items-center group duration-300">
                  <div className="w-[60px] flex items-center flex-col justify-center me-[38px]">
                    <div className=" text-[#3A3A3A] duration-300 group-hover:text-[#000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="61"
                        height="60"
                        viewBox="0 0 61 60"
                        fill="currentColor"
                      >
                        <g clip-path="url(#clip0_7_1083)">
                          <path
                            d="M15.5 26.25H26.75V60H15.5V26.25ZM19.25 56.25H23V30H19.25V56.25ZM30.5 33.75H41.75V60H30.5V33.75ZM34.25 56.25H38V37.5H34.25V56.25ZM0.5 41.25H11.75V60H0.5V41.25ZM4.25 56.25H8V45H4.25V56.25ZM45.5 18.75H56.75V60H45.5V18.75ZM49.25 56.25H53V22.5H49.25V56.25ZM41.1934 18.1934C41.5645 18.9941 41.75 19.8047 41.75 20.625C41.75 21.4062 41.6035 22.1387 41.3105 22.8223C41.0176 23.5059 40.6172 24.1016 40.1094 24.6094C39.6016 25.1172 39.0059 25.5176 38.3223 25.8105C37.6387 26.1035 36.9062 26.25 36.125 26.25C35.3438 26.25 34.6113 26.1035 33.9277 25.8105C33.2441 25.5176 32.6484 25.1172 32.1406 24.6094C31.6328 24.1016 31.2324 23.5059 30.9395 22.8223C30.6465 22.1387 30.5 21.4062 30.5 20.625V20.2734C30.5 20.1562 30.5098 20.0391 30.5293 19.9219L25.0215 17.168C24.5137 17.6758 23.918 18.0664 23.2344 18.3398C22.5508 18.6133 21.8477 18.75 21.125 18.75C20.3047 18.75 19.4941 18.5645 18.6934 18.1934L11.1934 25.6934C11.5645 26.4941 11.75 27.3047 11.75 28.125C11.75 28.9062 11.6035 29.6387 11.3105 30.3223C11.0176 31.0059 10.6172 31.6016 10.1094 32.1094C9.60156 32.6172 9.00586 33.0176 8.32227 33.3105C7.63867 33.6035 6.90625 33.75 6.125 33.75C5.34375 33.75 4.61133 33.6035 3.92773 33.3105C3.24414 33.0176 2.64844 32.6172 2.14062 32.1094C1.63281 31.6016 1.23242 31.0059 0.939453 30.3223C0.646484 29.6387 0.5 28.9062 0.5 28.125C0.5 27.3438 0.646484 26.6113 0.939453 25.9277C1.23242 25.2441 1.63281 24.6484 2.14062 24.1406C2.64844 23.6328 3.24414 23.2324 3.92773 22.9395C4.61133 22.6465 5.34375 22.5 6.125 22.5C6.94531 22.5 7.75586 22.6855 8.55664 23.0566L16.0566 15.5566C15.6855 14.7559 15.5 13.9453 15.5 13.125C15.5 12.3438 15.6465 11.6113 15.9395 10.9277C16.2324 10.2441 16.6328 9.64844 17.1406 9.14062C17.6484 8.63281 18.2441 8.23242 18.9277 7.93945C19.6113 7.64648 20.3438 7.5 21.125 7.5C21.9062 7.5 22.6387 7.64648 23.3223 7.93945C24.0059 8.23242 24.6016 8.63281 25.1094 9.14062C25.6172 9.64844 26.0176 10.2441 26.3105 10.9277C26.6035 11.6113 26.75 12.3438 26.75 13.125V13.4766C26.75 13.5938 26.7402 13.7109 26.7207 13.8281L32.2285 16.582C32.7363 16.0742 33.332 15.6836 34.0156 15.4102C34.6992 15.1367 35.4023 15 36.125 15C36.9453 15 37.7559 15.1855 38.5566 15.5566L46.0566 8.05664C45.6855 7.25586 45.5 6.44531 45.5 5.625C45.5 4.84375 45.6465 4.11133 45.9395 3.42773C46.2324 2.74414 46.6328 2.14844 47.1406 1.64062C47.6484 1.13281 48.2441 0.732422 48.9277 0.439453C49.6113 0.146484 50.3438 0 51.125 0C51.9062 0 52.6387 0.146484 53.3223 0.439453C54.0059 0.732422 54.6016 1.13281 55.1094 1.64062C55.6172 2.14844 56.0176 2.74414 56.3105 3.42773C56.6035 4.11133 56.75 4.84375 56.75 5.625C56.75 6.40625 56.6035 7.13867 56.3105 7.82227C56.0176 8.50586 55.6172 9.10156 55.1094 9.60938C54.6016 10.1172 54.0059 10.5176 53.3223 10.8105C52.6387 11.1035 51.9062 11.25 51.125 11.25C50.3047 11.25 49.4941 11.0645 48.6934 10.6934L41.1934 18.1934ZM6.125 30C6.63281 30 7.07227 29.8145 7.44336 29.4434C7.81445 29.0723 8 28.6328 8 28.125C8 27.6172 7.81445 27.1777 7.44336 26.8066C7.07227 26.4355 6.63281 26.25 6.125 26.25C5.61719 26.25 5.17773 26.4355 4.80664 26.8066C4.43555 27.1777 4.25 27.6172 4.25 28.125C4.25 28.6328 4.43555 29.0723 4.80664 29.4434C5.17773 29.8145 5.61719 30 6.125 30ZM51.125 3.75C50.6172 3.75 50.1777 3.93555 49.8066 4.30664C49.4355 4.67773 49.25 5.11719 49.25 5.625C49.25 6.13281 49.4355 6.57227 49.8066 6.94336C50.1777 7.31445 50.6172 7.5 51.125 7.5C51.6328 7.5 52.0723 7.31445 52.4434 6.94336C52.8145 6.57227 53 6.13281 53 5.625C53 5.11719 52.8145 4.67773 52.4434 4.30664C52.0723 3.93555 51.6328 3.75 51.125 3.75ZM21.125 15C21.6328 15 22.0723 14.8145 22.4434 14.4434C22.8145 14.0723 23 13.6328 23 13.125C23 12.6172 22.8145 12.1777 22.4434 11.8066C22.0723 11.4355 21.6328 11.25 21.125 11.25C20.6172 11.25 20.1777 11.4355 19.8066 11.8066C19.4355 12.1777 19.25 12.6172 19.25 13.125C19.25 13.6328 19.4355 14.0723 19.8066 14.4434C20.1777 14.8145 20.6172 15 21.125 15ZM36.125 22.5C36.6328 22.5 37.0723 22.3145 37.4434 21.9434C37.8145 21.5723 38 21.1328 38 20.625C38 20.1172 37.8145 19.6777 37.4434 19.3066C37.0723 18.9355 36.6328 18.75 36.125 18.75C35.6172 18.75 35.1777 18.9355 34.8066 19.3066C34.4355 19.6777 34.25 20.1172 34.25 20.625C34.25 21.1328 34.4355 21.5723 34.8066 21.9434C35.1777 22.3145 35.6172 22.5 36.125 22.5Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7_1083">
                            <rect
                              width="60"
                              height="60"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="mulish text-[16px] duration-300 font-semibold text-[#3A3A3A] border-b-[2px] border-transparent group-hover:border-b-[2px] group-hover:border-[#000] group-hover:text-[#000]">
                      Tejamkorlik
                    </h3>
                  </div>
                  <p className="mulish w-full max-w-[341px] text-[#3A3A3A] text-[20px] font-normal leading-[24px] tracking-[0.5px] duration-300 group-hover:text-[#000] ">
                    Siz hisobotlar va ish jadvalini tuzish ishlariga yiliga
                    yuzlab soatni tejaysiz
                  </p>
                </li>
              </ul>

              <DemoButton />
            </div>
            <img
              className="rounded-[12px]"
              src={WorkersImg}
              width={504}
              height={528}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageMobileWorker;
