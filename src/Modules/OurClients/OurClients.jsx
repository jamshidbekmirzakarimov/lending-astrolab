import React, { useRef, useEffect } from "react";
import Intel from "../../assets/icons/intel.svg";
import "./OurClients.scss";
import Torrington from "../../assets/icons/torrington.svg";
import Salomor from "../../assets/icons/salomor.svg";
import Connect from "../../assets/icons/connect.svg";

const OurClients = () => {
  const data = [
    { id: 1, image: Intel },
    { id: 2, image: Torrington },
    { id: 3, image: Salomor },
    { id: 4, image: Connect },
    { id: 5, image: Intel },
    { id: 6, image: Torrington },
    { id: 7, image: Salomor },
    { id: 8, image: Connect },
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent =
      marqueeRef.current.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <>
      <section className="py-[60px] max-[500px]:py-[40px] overflow-hidden" id="ourclients">
      <div className="container">
      <h2 className="text-center mb-[40px] mulish font-bold text-[40px] text-[#000] leading-normal max-[600px]:text-[32px] max-[600px]:text-left max-[450px]:text-[28px] max-[450px]:mb-[0px] max-[375px]:text-[24px]">
          Biz bilan hamkor kompaniyalar
        </h2>
      </div>
        <div className="marquee" ref={marqueeRef}>
          <ul className="marquee-content max-[900px]:gap-5 gap-5 ">
            {data.map((item) => (
              <li key={item.id}>
                <div className="w-[278px] max-[900px]:max-w-[240px] p-[5px] h-[128px] max-[400px]:h-[90px] rounded-[12px] border-[1px] border-[#D5D5D8] flex items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurClients;
