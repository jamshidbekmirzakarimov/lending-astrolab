import React from "react";
import "./Solutions.scss";
import Solution from "../../assets/images/solution-img.jpg";
import { useState } from "react";
const Solutions = () => {
  return (
    <section className=" pt-[146px] pb-[115px] max-[1090px]:pb-[30px] max-[1090px]:pt-[30px] bg-[#F4F4FF] max-[378px]:pt-[100px]">
      <div className="container">
        <div className="flex  justify-between max-[1090px]:justify-center bg-white max-[1090px]:bg-transparent rounded-[20px] min-h-[539px] relative max-[1090px]:flex-col-reverse">
          <img
            className="rounded-[20px] w-[504px] h-[539px] max-[1090px]:h-[800px] max-[850px]:h-[600px] max-[540px]:h-[400px] max-[400px]:h-[350px] max-[1090px]:w-full max-[600px]:mt-[30px]"
            src={Solution}
            alt=""
          />
          <div>
            <h2 className="mulish font-semibold text-[28px] max-w-[596px] leading-[33px] mb-[40px] pt-[60px] max-[1090px]:pt-[0px]">
              Xodimlar faoliyatini boshqarishni avtomatlashtirish uchun biznesga
              nima xalaqit beradi?
            </h2>
            <div className="static max-[700px]:mb-[30px] max-[600px]:mb-[0] max-[1090px]:mb-[30px]">
              <details>
                <summary className="mb-[-1px]">
                  <div className="flex items-center justify-between overflow-hidden">
                    <div className="flex items-center gap-[16px]">
                      <div className="one-line w-[30px] h-[30px]  rounded-[50%] flex items-center justify-center">
                        <p className="one-line-title font-semibold text-[12px] text-black">
                          1
                        </p>
                      </div>
                      <span class="summary-title">
                        Yechimlarning yuqori qiymati
                      </span>
                    </div>
                    <div class="summary-chevron-up">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M0.192383 6.45471C0.192383 6.25315 0.27207 6.04688 0.426758 5.89219C0.736133 5.58281 1.24238 5.58281 1.55176 5.89219L12.1408 16.4812L22.5752 6.04687C22.8846 5.7375 23.3908 5.7375 23.7002 6.04687C24.0096 6.35625 24.0096 6.8625 23.7002 7.17187L12.7033 18.1734C12.3939 18.4828 11.8877 18.4828 11.5783 18.1734L0.426758 7.02187C0.267383 6.8625 0.192383 6.66094 0.192383 6.45471Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </summary>

                <div class="summary-content">
                  Biometrik uskunalarni xarid qilish, ularning montaji va
                  dasturiy ta’minotiga ulkan mablag‘larni investitsiya qilish
                  zarurati.
                </div>
              </details>

              <details>
                <summary className="mb-[-1px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                      <div className="one-line w-[30px] h-[30px]  rounded-[50%] flex items-center justify-center">
                        <p className="one-line-title font-semibold text-[12px] text-black ">
                          2
                        </p>
                      </div>
                      <span class="summary-title">
                        Murakkab integratsiya jarayoni
                      </span>
                    </div>
                    <div class="summary-chevron-up">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M0.192383 6.45471C0.192383 6.25315 0.27207 6.04688 0.426758 5.89219C0.736133 5.58281 1.24238 5.58281 1.55176 5.89219L12.1408 16.4812L22.5752 6.04687C22.8846 5.7375 23.3908 5.7375 23.7002 6.04687C24.0096 6.35625 24.0096 6.8625 23.7002 7.17187L12.7033 18.1734C12.3939 18.4828 11.8877 18.4828 11.5783 18.1734L0.426758 7.02187C0.267383 6.8625 0.192383 6.66094 0.192383 6.45471Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </summary>

                <div class="summary-content">
                  Biometrik uskunalarni xarid qilish, ularning montaji va
                  dasturiy ta’minotiga ulkan mablag‘larni investitsiya qilish
                  zarurati.
                </div>
              </details>

              <details>
                <summary className="mb-[-1px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                      <div className="one-line w-[30px] h-[30px]  rounded-[50%] flex items-center justify-center">
                        <p className="one-line-title font-semibold text-[12px] text-black ">
                          3
                        </p>
                      </div>
                      <span class="summary-title">
                        Investitsiyalar qaytishining uzoq muddati
                      </span>
                    </div>
                    <div class="summary-chevron-up">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M0.192383 6.45471C0.192383 6.25315 0.27207 6.04688 0.426758 5.89219C0.736133 5.58281 1.24238 5.58281 1.55176 5.89219L12.1408 16.4812L22.5752 6.04687C22.8846 5.7375 23.3908 5.7375 23.7002 6.04687C24.0096 6.35625 24.0096 6.8625 23.7002 7.17187L12.7033 18.1734C12.3939 18.4828 11.8877 18.4828 11.5783 18.1734L0.426758 7.02187C0.267383 6.8625 0.192383 6.66094 0.192383 6.45471Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </summary>

                <div class="summary-content">
                  Biometrik uskunalarni xarid qilish, ularning montaji va
                  dasturiy ta’minotiga ulkan mablag‘larni investitsiya qilish
                  zarurati.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
