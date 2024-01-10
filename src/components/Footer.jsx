import React from "react";
import logo from "../assets/images/logo.webp";

function Footer() {
  return (
    <>
      <div id="fourth" className="w-full min-h-[454px] bg-footerbg bg-cover bg-no-repeat bg-center">
        <div className="max-w-[1224px] mx-auto px-3 flex justify-between pt-12 md:pt-[100px] flex-wrap gap-y-6 pb-[40px]">
          <div className="w-full md:w-[41%]">
            <div className="max-w-[300px] w-full">
              <img src={logo} alt="logo" />
              <p className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] my-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="max-w-[158px] w-full flex justify-between">
                <a href="https://www.facebook.com/" target="_blank">
                  <div className="w-[42px] h-[42px] rounded-[50%] bg-white shadow-[0px_6px_27px_0px_rgba(49,49,49,0.17)] flex justify-center items-center group hover:bg-slate-400 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="17"
                      viewBox="0 0 10 17"
                      fill="none"
                    >
                      <path
                        className="group-hover:fill-white duration-300"
                        d="M6.33184 16.0709V8.15025H8.72115L9.03786 5.36255H6.33184L6.33586 3.96718C6.33586 3.24008 6.40976 2.85068 7.52724 2.85068H9.02111V0.0625H6.63126C3.76063 0.0625 2.7504 1.41477 2.7504 3.6892V5.36277H0.960938V8.15072H2.7504V15.9586C3.44753 16.0884 4.16824 16.157 4.90618 16.157C5.38288 16.157 5.85909 16.1283 6.33184 16.0709V16.0709Z"
                        fill="#17181C"
                      />
                    </svg>
                  </div>
                </a>
                <a href="https://www.linkedin.com/home" target="_blank">
                  <div className="w-[42px] h-[42px] rounded-[50%] bg-white shadow-[0px_6px_27px_0px_rgba(49,49,49,0.17)] flex justify-center items-center group hover:bg-slate-400 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                    >
                      <path
                        className="group-hover:fill-white duration-300"
                        d="M0.923828 1.93206C0.923828 1.39015 1.11484 0.943081 1.49685 0.590855C1.87886 0.238613 2.3755 0.0625 2.98672 0.0625C3.58704 0.0625 4.07273 0.235898 4.44384 0.582726C4.82585 0.940382 5.01686 1.40641 5.01686 1.98083C5.01686 2.50106 4.83132 2.93457 4.46021 3.2814C4.0782 3.63906 3.57611 3.81788 2.95397 3.81788H2.9376C2.33728 3.81788 1.85159 3.63906 1.48048 3.2814C1.10937 2.92374 0.923828 2.47396 0.923828 1.93206ZM1.13667 16.157V5.29728H4.77128V16.157H1.13667ZM6.78505 16.157H10.4197V10.0931C10.4197 9.71377 10.4633 9.42114 10.5506 9.21523C10.7034 8.84673 10.9354 8.53513 11.2465 8.28045C11.5575 8.02575 11.9477 7.89841 12.4171 7.89841C13.6395 7.89841 14.2508 8.71668 14.2508 10.3532V16.157H17.8854V9.93054C17.8854 8.32651 17.5034 7.10994 16.7393 6.28083C15.9753 5.45172 14.9657 5.03716 13.7105 5.03716C12.3025 5.03716 11.2055 5.63868 10.4197 6.8417V6.87421H10.4033L10.4197 6.8417V5.29728H6.78505C6.80688 5.64409 6.8178 6.72247 6.8178 8.53243C6.8178 10.3424 6.80688 12.8839 6.78505 16.157Z"
                        fill="#17181C"
                      />
                    </svg>
                  </div>
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank">
                  <div className="w-[42px] h-[42px] rounded-[50%] bg-white shadow-[0px_6px_27px_0px_rgba(49,49,49,0.17)] flex justify-center items-center group hover:bg-slate-400 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        className="group-hover:fill-white duration-300"
                        d="M21.5 1.96784C20.7191 2.29097 19.8869 2.50515 19.0194 2.60915C19.9119 2.1065 20.5931 1.31663 20.9133 0.364581C20.0812 0.83256 19.1624 1.16312 18.1833 1.34758C17.3932 0.554001 16.2671 0.0625 15.0386 0.0625C12.6551 0.0625 10.7362 1.88737 10.7362 4.1245C10.7362 4.44639 10.7651 4.7559 10.8359 5.05056C7.25675 4.8859 4.08969 3.26778 1.96212 0.802847C1.59069 1.41072 1.37281 2.1065 1.37281 2.85551C1.37281 4.26193 2.14062 5.50863 3.28512 6.23041C2.59344 6.21803 1.91487 6.02861 1.34 5.73024C1.34 5.74262 1.34 5.75872 1.34 5.77481C1.34 7.74824 2.83231 9.38741 4.78925 9.76501C4.43881 9.85538 4.05687 9.89872 3.6605 9.89872C3.38487 9.89872 3.10662 9.88386 2.84544 9.82939C3.40325 11.4376 4.98613 12.6199 6.86825 12.6583C5.4035 13.7391 3.54369 14.3903 1.53031 14.3903C1.17725 14.3903 0.838625 14.3755 0.5 14.3346C2.40706 15.4947 4.66719 16.157 7.1045 16.157C15.0267 16.157 19.358 9.96681 19.358 4.60115C19.358 4.42163 19.3514 4.24831 19.3422 4.07622C20.1967 3.50425 20.9146 2.7899 21.5 1.96784Z"
                        fill="#17181C"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[59%] flex justify-between flex-wrap gap-x-8 gap-y-6">
            <ul>
              <li className="text-white font-montserrat text-2xl not-italic font-bold leading-[150%] capitalize mb-[10px]">
                Address
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Integrations
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Hello
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Intercom
                </a>
              </li>
              <li>
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Customer
                </a>
              </li>
            </ul>

            <ul>
              <li className="text-white font-montserrat text-2xl not-italic font-bold leading-[150%] capitalize mb-[10px]">
                About
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Our Blog
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Customers
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Our Team
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Integrations
                </a>
              </li>
            </ul>

            <ul>
              <li className="text-white font-montserrat text-2xl not-italic font-bold leading-[150%] capitalize mb-[10px]">
                Support
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Test Zoom
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Account
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Support Center
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Live Training
                </a>
              </li>
              <li>
                <a
                  className="text-[#A7A7A7] font-montserrat text-base not-italic font-normal leading-[150%] relative after:absolute after:w-0 hover:after:w-full after:h-[1px] after:bottom-[-3px] after:left-[50%] hover:after:left-0 after:bg-[#A7A7A7] after:duration-300"
                  href="#"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1224px] mx-auto px-3 w-full h-[3px] bg-[rgba(255,255,255,0.10)] rounded"></div>
        <p className="w-full text-white font-montserrat text-[14px] not-italic font-normal leading-normal tracking-[-0.28px] flex items-center pt-[40px] pb-[30px] justify-center">
          Copyright
          <span className="mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <g clipPath="url(#clip0_2_13574)">
                <path
                  d="M7.5 0.960938C3.63396 0.960938 0.5 4.09489 0.5 7.96094C0.5 11.827 3.63396 14.9609 7.5 14.9609C11.366 14.9609 14.5 11.827 14.5 7.96094C14.4957 4.09671 11.3642 0.96521 7.5 0.960938ZM7.5 14.261C4.02061 14.261 1.20004 11.4403 1.20004 7.96094C1.20004 4.48155 4.02061 1.66098 7.5 1.66098C10.9794 1.66098 13.8 4.48155 13.8 7.96094C13.796 11.4387 10.9778 14.2569 7.5 14.261V14.261Z"
                  fill="white"
                />
                <path
                  d="M7.50049 5.16102C8.31813 5.16508 9.09283 5.5276 9.61995 6.15255C9.74556 6.29952 9.96644 6.31704 10.1135 6.19154C10.2605 6.06603 10.278 5.84504 10.1525 5.69796C8.9026 4.22343 6.69406 4.04121 5.21953 5.29101C3.74489 6.54081 3.56267 8.74946 4.81257 10.224C6.06238 11.6985 8.27092 11.8807 9.74556 10.6309C9.8921 10.5067 10.0282 10.3706 10.1525 10.224C10.278 10.0769 10.2605 9.85603 10.1135 9.73042C9.96644 9.60491 9.74556 9.62243 9.61995 9.7694C8.61805 10.9432 6.85428 11.0824 5.68052 10.0804C4.50688 9.07855 4.3676 7.31477 5.36949 6.14102C5.90173 5.51766 6.68081 5.15931 7.50049 5.16102V5.16102Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_13574">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0.5 0.960938)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          FT PLANE 2022 All right reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
