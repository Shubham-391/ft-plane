import React from "react";
import rajubg from "../assets/images/rajubg.webp";
import raju from "../assets/images/raju.webp";
import zaire from "../assets/images/zaire.webp";
import zairebg from "../assets/images/zairebg.webp";
import marcus from "../assets/images/marcus.webp";
import marcusbg from "../assets/images/marcusbg.webp";
import davis from "../assets/images/davis.webp";
import davisbg from "../assets/images/davisbg.webp";
import map from "../assets/images/map.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jaylon from "../assets/images/jaylon.webp";
import rating from "../assets/images/rating.webp";
import jack from "../assets/images/jack.webp";
import john from "../assets/images/john.webp";
import lucy from "../assets/images/lucy.webp";
import mark from "../assets/images/mark.webp";
import sakura from "../assets/images/sakura.webp";
import silva from "../assets/images/silva.webp";
import allen from "../assets/images/allen.webp";
import memoriesbg1 from "../assets/images/memoriesbg1.webp";
import memoriesbg2 from "../assets/images/memoriesbg2.webp";
import memoriesbg3 from "../assets/images/memoriesbg3.webp";
import memoriesbg4 from "../assets/images/memoriesbg4.webp";

function Section3() {
  const slider = React.useRef(null);
  const settings = {
    fade: true,
    slickNext: true,
    slickPrev: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          autoplay: true,
        },
      },
    ],
  };
  const travelor = [
    {
      id: 0,
      img1: rajubg,
      img2: raju,
      heading: "Raju Mullah",
      para: "@rajumulllah",
    },
    {
      id: 1,
      img1: zairebg,
      img2: zaire,
      heading: "Zaire Vetrovs",
      para: "@zairevetrovs",
    },
    {
      id: 2,
      img1: marcusbg,
      img2: marcus,
      heading: "Marcus Dias",
      para: "@marcusdias",
    },
    {
      id: 3,
      img1: davisbg,
      img2: davis,
      heading: "Davis Schleifer",
      para: "@davisschleifer",
    },
  ];
  const item = [
    {
      id: 0,
      image: jaylon,
      heading: "Jaylon Vaccaro",
    },
    {
      id: 1,
      image: jack,
      heading: "Jack",
    },
    {
      id: 2,
      image: john,
      heading: "John",
    },
    {
      id: 3,
      image: lucy,
      heading: "Lucy",
    },
    {
      id: 4,
      image: mark,
      heading: "Mark",
    },
    {
      id: 5,
      image: sakura,
      heading: "Sakura",
    },
    {
      id: 6,
      image: silva,
      heading: "Silva",
    },
    {
      id: 7,
      image: allen,
      heading: "Allen",
    },
  ];
  const memory = [
    {
      id: 0,
      image: memoriesbg1,
    },
    {
      id: 1,
      image: memoriesbg2,
    },
    {
      id: 2,
      image: memoriesbg3,
    },
    {
      id: 3,
      image: memoriesbg4,
    },
  ];
  return (
    <>
      <div className="bg-white py-12 md:py-[100px]">
        <div className="max-w-[1224px] mx-auto px-3">
          <h2 className="text-[#011736] font-montserrat text-[30px] sm:text-[40px] not-italic font-bold leading-[150%] tracking-[0.6px] capitalize text-center mb-10">
            Best travelars of this month
          </h2>
          <div className="flex justify-center min-[1200px]:justify-between flex-wrap gap-6 min-[1200px]:gap-0">
            {travelor.map((travelor) => (
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                className="w-[282px] h-[420px] rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center group"
                key={travelor.id}
              >
                <img src={travelor.img1} alt="background" />
                <img
                  className="mt-[-20px]"
                  src={travelor.img2}
                  alt="person image"
                />
                <h3 className="text-[#011736] text-center font-montserrat text-[24px] not-italic font-semibold leading-[150%] mt-2">
                  {travelor.heading}
                </h3>
                <p className="text-[#AEB5BF] duration-300 group-hover:text-[#979797] text-center font-montserrat text-base not-italic font-medium leading-[150%] mt-1">
                  {travelor.para}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[#313EF7] text-center font-montserrat text-xl not-italic font-semibold leading-[24px] mt-12 md:mt-[100px] mb-2">
            What's our customer saying
          </h3>
          <h2 className="text-[#011736] text-center font-montserrat text-[30px] sm:text-[40px] not-italic font-bold leading-[150%] tracking-[0.6px] capitalize mb-[60px]">
            Our Customer Feedback
          </h2>
          <div className="min-h-[354px] flex flex-wrap gap-y-6">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              className="w-full min-[1200px]:w-[56%]"
            >
              <img className="w-full" src={map} alt="map" />
            </div>
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-duration="1000"
              className="w-full min-[1200px]:w-[44%] relative flex justify-center min-[1200px]:justify-end sm:min-h-[354px]"
            >
              <div className="max-w-[500px] w-full">
                <div className="w-full px-[30px] py-[21px] rounded-[20px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10)]">
                  <Slider ref={slider} {...settings}>
                    {item.map((item) => (
                      <div key={item.id}>
                        <div className="flex gap-4">
                          <div>
                            <img
                              className="w-[60px] h-[60px]"
                              src={item.image}
                              alt="person"
                            />
                          </div>
                          <div className="flex items-center">
                            <div className="flex flex-col gap-2 items-start">
                              <h4 className="text-[#011736] font-montserrat text-xl not-italic font-semibold leading-[24px] opacity-90">
                                {item.heading}
                              </h4>
                              <img src={rating} alt="rating" />
                            </div>
                          </div>
                        </div>
                        <p className="text-[#1B1B1C] font-montserrat text-[18px] italic font-medium leading-[34px] mt-4">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don
                        </p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="gap-4 absolute bottom-0 left-[42%] hidden sm:flex">
                <button
                  className="duration-300 group w-[50px] h-[50px] rounded-[50%] bg-[rgba(49,62,247,0.10)] hover:bg-[#313EF7] hover:shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25)] flex justify-center items-center"
                  onClick={() => slider?.current?.slickPrev()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                  >
                    <path
                      className="group-hover:stroke-white duration-300"
                      d="M11.9171 1.00006L1.91711 11.0001L11.9171 21.0001"
                      stroke="#010223"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button
                  className="duration-300 group w-[50px] h-[50px] rounded-[50%] bg-[rgba(49,62,247,0.10)] hover:bg-[#313EF7] hover:shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25)] flex justify-center items-center"
                  onClick={() => slider?.current?.slickNext()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                  >
                    <path
                      className="group-hover:stroke-white duration-300"
                      d="M0.916748 21L10.9167 11L0.91675 0.999999"
                      stroke="#010223"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <h3 className="text-[#011736] text-center font-montserrat text-[30px] sm:text-[40px] not-italic font-bold leading-[150%] tracking-[0.6px] capitalize mt-12 md:mt-[100px] mb-[40px]">
            Make memories with us
          </h3>
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            className="min-h-[440px] flex justify-center gap-6 min-[1100px]:gap-0 min-[1100px]:justify-between flex-wrap"
          >
            {memory.map((memory) => (
              <img
                key={memory.id}
                className={`w-[262.5px] h-[390px] rounded-[200px] ${
                  memory.id == 1 ? "min-[1100px]:translate-y-[50px]" : ""
                } ${memory.id == 3 ? "min-[1100px]:translate-y-[50px]" : ""}`}
                src={memory.image}
                alt="city"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[rgba(49,62,247,0.05)] min-h-[406px]">
        <div className="max-w-[558px] mx-auto px-3">
          <h2 className="text-[#011736] text-center font-montserrat text-[30px] sm:text-[40px] not-italic font-bold leading-[150%] tracking-[0.6px] capitalize pt-[100px] mb-10">
            Subscribe Newsletter & get letest news
          </h2>
          <div className="bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10)] rounded-[150px] py-[11px] pr-[11px] pl-[20px] flex">
            <input
              className="text-[#AEB5BF] font-rubik text-[13px] min-[380px]:text-base min-[450px]:text-xl not-italic font-normal leading-[24px] opacity-90 w-full outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <button className="shrink-0 w-[110px] min-[350px]:w-[132px] h-[48px] rounded-[56px] bg-[#313EF7] text-white hover:text-black duration-300 text-center font-montserrat text-base not-italic font-semibold leading-[28px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
