import React from "react";
import globe from "../assets/images/globe.webp";
import Slider from "react-slick";
import ticket from "../assets/images/ticket.webp";
import ticket2 from "../assets/images/ticket2.webp";
import ticketline from "../assets/images/ticketline.webp";

function Section2() {
  const slider1 = React.useRef(null);
  const settings = {
    arrows: false,
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <div id="third" className="w-full bg-[#010223] py-12 min-[1100px]:py-0 overflow-hidden">
        <div className="max-w-[1134px] px-3 mx-auto min-h-[665px] flex items-center flex-wrap">
          <div data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000" className="w-full flex justify-center min-[1100px]:block min-[1100px]:w-[53%]">
            <div className="max-w-[496px] w-full flex flex-col items-center min-[1100px]:block">
              <h2 className="text-white font-montserrat text-[40px] not-italic font-bold leading-[150%] tracking-[0.6px] capitalize mb-4 min-[1100px]:text-start text-center">
                Book Popular Flight Tickets
              </h2>
              <p className="text-[rgba(255,255,255,0.65)] font-montserrat text-base not-italic font-normal leading-[150%] mb-6 min-[1100px]:text-start text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <img className="w-[315px] h-[315px]" src={globe} alt="globe" />
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-once="true" data-aos-duration="1000" className="w-full min-[1100px]:w-[47%] relative flex justify-center min-[1100px]:block">
            <div className="max-w-[520px] w-full min-[1100px]:max-w-full relative">
              <Slider className="slider1" ref={slider1} {...settings}>
                <div className="ticket">
                  <img src={ticket} alt="ticket" />
                </div>
                <div className="ticket">
                  <img src={ticket2} alt="ticket" />
                </div>
                <div className="ticket">
                  <img src={ticket} alt="ticket" />
                </div>
                <div className="ticket">
                  <img src={ticket2} alt="ticket" />
                </div>
                <div className="ticket">
                  <img src={ticket} alt="ticket" />
                </div>
                <div className="ticket">
                  <img src={ticket2} alt="ticket" />
                </div>
              </Slider>
              <div className="h-[91px] hidden min-[576px]:flex flex-col justify-between absolute right-0 bottom-[6%]">
                <button
                  className="duration-300 w-[40px] h-[40px] rounded-[50%] bg-[rgba(255,255,255,0.10)] hover:bg-[#313EF7] hover:shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25)] flex justify-center items-center"
                  onClick={() => slider1?.current?.slickPrev()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                  >
                    <path d="M10 1L2 9L10 17" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
                <button
                  className="duration-300 w-[40px] h-[40px] rounded-[50%] bg-[rgba(255,255,255,0.10)] hover:bg-[#313EF7] hover:shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25)] flex justify-center items-center"
                  onClick={() => slider1?.current?.slickNext()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                  >
                    <path
                      d="M1 17L9 9L1 0.999999"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
              <img className="absolute hidden min-[576px]:block right-[24px] bottom-[181px]"
                src={ticketline}
                alt="line"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
