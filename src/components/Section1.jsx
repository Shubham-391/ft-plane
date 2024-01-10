import React, { useState } from "react";
import Section1img from "../assets/images/Section1img.webp";
import line from "../assets/images/line.webp";

function Section1() {
  const [currentTab, setCurrentTab] = useState("tab1");
  function handleTabClick(tab) {
    setCurrentTab(tab);
  }
  const feature = [
    {
      id: 0,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <g clipPath="url(#clip0_2_7419)">
            <path
              d="M32.5741 34.1517C32.5231 34.1517 32.4716 34.1463 32.4209 34.1362C32.3715 34.1258 32.3223 34.1112 32.2747 34.0916C32.2277 34.0721 32.1826 34.048 32.1404 34.0196C32.0974 33.9909 32.0574 33.9589 32.0214 33.922C31.9857 33.8862 31.9528 33.8463 31.9247 33.8042C31.8957 33.7611 31.8722 33.7157 31.8527 33.669C31.8331 33.622 31.8176 33.5728 31.8075 33.5228C31.7974 33.4721 31.7928 33.4212 31.7928 33.3696C31.7928 33.3189 31.7974 33.2673 31.8075 33.2173C31.8176 33.1673 31.8325 33.1181 31.8521 33.0711C31.8716 33.0235 31.8957 32.9783 31.9238 32.9362C31.9528 32.8932 31.9857 32.8532 32.0214 32.8172C32.0574 32.7815 32.0974 32.7486 32.1404 32.7205C32.1826 32.6924 32.2277 32.668 32.2747 32.6485C32.3223 32.6289 32.3715 32.6143 32.4209 32.6042C32.5225 32.5838 32.6254 32.5838 32.7264 32.6042C32.7764 32.6143 32.8256 32.6289 32.8723 32.6485C32.9199 32.668 32.9653 32.6924 33.0074 32.7205C33.0505 32.7486 33.0901 32.7815 33.1262 32.8172C33.1622 32.8532 33.1951 32.8932 33.2232 32.9362C33.2513 32.9783 33.2754 33.0235 33.2949 33.0711C33.3145 33.1181 33.3294 33.1673 33.3395 33.2173C33.3495 33.2673 33.355 33.3189 33.355 33.3696C33.355 33.4212 33.3495 33.4721 33.3395 33.5228C33.3294 33.5728 33.3145 33.622 33.2949 33.669C33.2754 33.7157 33.2513 33.7611 33.2232 33.8042C33.1951 33.8463 33.1622 33.8862 33.1262 33.922C33.0901 33.9589 33.0505 33.9909 33.0074 34.0196C32.9653 34.0477 32.9199 34.0721 32.8723 34.0916C32.8256 34.1112 32.7764 34.1261 32.7264 34.1362C32.6763 34.1463 32.6248 34.1517 32.5741 34.1517Z"
              fill="#030522"
            />
            <path
              d="M21.678 24.995H19.5085C19.2745 24.995 19.0526 24.89 18.9043 24.7087C18.756 24.5278 18.6965 24.2894 18.7426 24.0599L19.4728 20.4189H16.1428L15.0582 21.3225C14.9178 21.4397 14.7408 21.5035 14.5583 21.5035H12.3885C12.1294 21.5035 11.8871 21.375 11.7418 21.1605C11.5963 20.9456 11.567 20.6731 11.6631 20.4323L12.632 18.0104L11.6631 15.5886C11.567 15.3478 11.5963 15.0753 11.7418 14.8604C11.8871 14.6459 12.1294 14.5171 12.3885 14.5171H14.5583C14.7408 14.5171 14.9178 14.5812 15.0582 14.6984L16.1428 15.602H19.4728L18.7426 11.9609C18.6965 11.7311 18.756 11.4931 18.9043 11.3121C19.0526 11.1309 19.2745 11.0259 19.5085 11.0259H21.678C21.949 11.0259 22.2008 11.1663 22.343 11.397L24.9376 15.602H27.6445C28.9727 15.602 30.053 16.6823 30.053 18.0104C30.053 19.3386 28.9727 20.4189 27.6445 20.4189H24.9376L22.343 24.6239C22.2008 24.8546 21.949 24.995 21.678 24.995ZM20.4622 23.4325H21.2422L23.8369 19.2275C23.9791 18.9968 24.2308 18.8564 24.5018 18.8564H27.6445C28.1111 18.8564 28.4905 18.4771 28.4905 18.0104C28.4905 17.5438 28.1111 17.1645 27.6445 17.1645H24.5018C24.2308 17.1645 23.9794 17.0241 23.8369 16.7934L21.2422 12.5884H20.4622L21.1925 16.2294C21.2386 16.4592 21.1791 16.6973 21.0308 16.8785C20.8824 17.0595 20.6606 17.1645 20.4265 17.1645H15.8602C15.6774 17.1645 15.5004 17.1004 15.36 16.9835L14.2754 16.0796H13.5427L14.1988 17.7202C14.2733 17.9067 14.2733 18.1145 14.1988 18.3007L13.5427 19.9413H14.2754L15.36 19.0377C15.5004 18.9205 15.6774 18.8564 15.8602 18.8564H20.4265C20.6606 18.8564 20.8824 18.9617 21.0308 19.1426C21.1791 19.3236 21.2386 19.562 21.1925 19.7914L20.4622 23.4325Z"
              fill="#030522"
            />
            <path
              d="M29.128 33.7224H12.5292C12.098 33.7224 11.7479 33.3726 11.7479 32.9411V28.1367C11.7479 27.7052 12.098 27.3555 12.5292 27.3555H29.128C29.5595 27.3555 29.9092 27.7052 29.9092 28.1367V32.9411C29.9092 33.3726 29.5595 33.7224 29.128 33.7224ZM13.3104 32.1599H28.3467V28.918H13.3104V32.1599Z"
              fill="#030522"
            />
            <path
              d="M36.4834 1.56342H33.3563V0.78125C33.3563 0.349731 33.0062 0 32.575 0H7.39374C5.70551 0 4.33191 1.37329 4.33191 3.06152V36.9382C4.33191 38.6264 5.7052 40 7.39343 40H36.4834C36.9149 40 37.2647 39.6503 37.2647 39.2188V2.34467C37.2647 1.91315 36.9149 1.56342 36.4834 1.56342ZM31.7935 1.5625V10.9662L29.5919 9.92828C29.381 9.8288 29.1369 9.8288 28.926 9.92798L26.7184 10.9671V1.5625H31.7935ZM35.7022 38.4375H9.86505V6.74316C9.86505 6.31165 9.51532 5.96191 9.0838 5.96191C8.65228 5.96191 8.30255 6.31165 8.30255 6.74316V38.4375H7.39374C6.56702 38.4375 5.89441 37.7649 5.89441 36.9382V3.06152C5.89441 2.23511 6.56702 1.5625 7.39374 1.5625H25.1559V12.1985C25.1559 12.4658 25.2929 12.7145 25.5187 12.858C25.6457 12.9385 25.7913 12.9797 25.9374 12.9797C26.0507 12.9797 26.1642 12.955 26.2701 12.9053L29.2584 11.4984L31.7935 12.6938V29.5807C31.7935 30.0122 32.1435 30.3619 32.5747 30.3619C33.0062 30.3619 33.356 30.0122 33.356 29.5807V3.12592H35.7022V38.4375Z"
              fill="#030522"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_7419">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(0.816284)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Best Guide",
      para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
    },
    {
      id: 1,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <g clipPath="url(#clip0_2_7434)">
            <path
              d="M38.2783 20.5182C38.1173 20.1889 38.1173 19.8113 38.2783 19.4821L39.7701 16.4301C40.6008 14.7308 39.9426 12.7055 38.2719 11.819L35.2711 10.2268C34.9474 10.0551 34.7254 9.74946 34.662 9.38861L34.0752 6.04261C33.7484 4.17965 32.0251 2.92779 30.1527 3.19271L26.7892 3.66848C26.4262 3.71973 26.0672 3.60302 25.8038 3.34825L23.3623 0.986391C22.0029 -0.328758 19.8732 -0.328836 18.5139 0.986391L16.0723 3.34849C15.8089 3.60333 15.4499 3.71981 15.0869 3.66872L11.7234 3.19294C9.85039 2.92786 8.12775 4.17989 7.80095 6.04285L7.21408 9.38869C7.15072 9.74962 6.92877 10.0552 6.6051 10.227L3.60434 11.8191C1.93356 12.7055 1.27544 14.7311 2.10606 16.4304L3.59785 19.4822C3.75879 19.8115 3.75879 20.1892 3.59785 20.5184L2.10598 23.5702C1.27536 25.2695 1.93349 27.2949 3.60426 28.1814L6.60502 29.7736C6.92877 29.9453 7.15072 30.2509 7.21408 30.6118L7.80095 33.9578C8.09845 35.6537 9.55266 36.8431 11.224 36.8429C11.3886 36.8429 11.5556 36.8313 11.7235 36.8076L15.087 36.3318C15.4497 36.2803 15.809 36.3973 16.0724 36.652L18.5139 39.0139C19.1937 39.6716 20.0657 40.0003 20.9381 40.0002C21.8102 40.0002 22.6827 39.6714 23.3623 39.0139L25.8038 36.652C26.0672 36.3973 26.4263 36.2809 26.7892 36.3318L30.1527 36.8076C32.026 37.0726 33.7484 35.8206 34.0752 33.9577L34.6621 30.6118C34.7255 30.2509 34.9474 29.9454 35.2711 29.7736L38.2719 28.1814C39.9426 27.295 40.6008 25.2695 39.7701 23.5702L38.2783 20.5182ZM37.1905 26.1434L34.1898 27.7355C33.2331 28.2433 32.5769 29.1462 32.3898 30.2131L31.8029 33.559C31.6924 34.1893 31.1096 34.6127 30.4758 34.5232L27.1123 34.0474C26.0397 33.8955 24.9783 34.2407 24.1998 34.9938L21.7582 37.3556C21.2984 37.8004 20.5778 37.8004 20.1178 37.3556L17.6764 34.9937C17.0184 34.3572 16.1582 34.0123 15.2603 34.0123C15.0958 34.0123 14.9299 34.0239 14.7638 34.0474L11.4003 34.5231C10.767 34.6127 10.1838 34.1892 10.0732 33.5589L9.48625 30.2129C9.29907 29.1461 8.64298 28.243 7.68619 27.7355L4.68542 26.1433C4.12011 25.8434 3.89746 25.1581 4.17847 24.5832L5.67034 21.5313C6.14596 20.5582 6.14596 19.4421 5.67034 18.4689L4.17847 15.417C3.89746 14.8421 4.12011 14.1569 4.68542 13.8569L7.68619 12.2648C8.6429 11.757 9.29907 10.8541 9.48618 9.7872L10.073 6.44128C10.1837 5.81097 10.7663 5.38754 11.4001 5.47707L14.7636 5.95285C15.8359 6.10464 16.8977 5.75957 17.6762 5.00652L20.1178 2.64466C20.5776 2.19982 21.2981 2.19982 21.7581 2.64466L24.1996 5.00652C24.9781 5.75964 26.0397 6.10464 27.1122 5.95285L30.4757 5.47707C31.109 5.38746 31.6922 5.81097 31.8028 6.44128L32.3896 9.78728C32.5768 10.8541 33.2329 11.7572 34.1897 12.2648L37.1905 13.8569C37.7558 14.1569 37.9784 14.8421 37.6974 15.417L36.2055 18.4689C35.7299 19.4419 35.7299 20.5582 36.2055 21.5312L37.6974 24.583C37.9785 25.1581 37.7559 25.8434 37.1905 26.1434Z"
              fill="black"
            />
            <path
              d="M29.3679 11.5712C28.9175 11.1208 28.187 11.1208 27.7366 11.5712L12.5109 26.7969C12.0605 27.2474 12.0605 27.9778 12.5109 28.4283C12.7362 28.6535 13.0314 28.7661 13.3266 28.7661C13.6217 28.7661 13.917 28.6536 14.1422 28.4283L29.3678 13.2026C29.8184 12.7521 29.8184 12.0218 29.3679 11.5712Z"
              fill="black"
            />
            <path
              d="M16.3247 9.61841C13.9925 9.61841 12.0951 11.5158 12.0951 13.848C12.0951 16.1802 13.9925 18.0776 16.3247 18.0776C18.6569 18.0776 20.5543 16.1802 20.5543 13.848C20.5543 11.5158 18.6569 9.61841 16.3247 9.61841ZM16.3247 15.7705C15.2646 15.7705 14.4022 14.9081 14.4022 13.8479C14.4022 12.7878 15.2646 11.9254 16.3247 11.9254C17.3847 11.9254 18.2472 12.7878 18.2472 13.8479C18.2472 14.9081 17.3847 15.7705 16.3247 15.7705Z"
              fill="black"
            />
            <path
              d="M25.5531 21.9224C23.2209 21.9224 21.3235 23.8198 21.3235 26.1519C21.3235 28.4841 23.2209 30.3815 25.5531 30.3815C27.8852 30.3815 29.7827 28.4841 29.7827 26.1519C29.7827 23.8198 27.8852 21.9224 25.5531 21.9224ZM25.5531 28.0744C24.493 28.0744 23.6305 27.212 23.6305 26.1519C23.6305 25.0919 24.4929 24.2295 25.5531 24.2295C26.6131 24.2295 27.4756 25.0919 27.4756 26.1519C27.4756 27.212 26.6131 28.0744 25.5531 28.0744Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_7434">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(0.938721)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "More Discount",
      para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
    },
    {
      id: 2,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <path
            d="M33.7129 29.2668C34.2649 29.2668 34.7129 28.8188 34.7129 28.2668V19.5468C34.7115 18.4802 33.8462 17.6148 32.7795 17.6135H30.5275V10.8002C30.5222 5.0215 25.8395 0.338829 20.0609 0.333496C14.2822 0.338829 9.59954 5.0215 9.59421 10.8002V17.6068H7.34221C6.27554 17.6082 5.41021 18.4735 5.40887 19.5402V34.7922C5.41154 37.4828 7.59287 39.6642 10.2835 39.6668H29.8382C32.5289 39.6642 34.7102 37.4828 34.7129 34.7922C34.7129 34.2402 34.2649 33.7922 33.7129 33.7922C33.1609 33.7922 32.7129 34.2402 32.7129 34.7922C32.7102 36.3788 31.4249 37.6642 29.8382 37.6668H10.2835C8.69687 37.6642 7.41154 36.3788 7.40887 34.7922L7.34221 19.6068H10.5942C11.1462 19.6068 11.5942 19.1588 11.5942 18.6068V10.8002C11.9835 -0.40117 28.1382 -0.402504 28.5275 10.8002V17.6068H17.3942C16.8422 17.6068 16.3942 18.0548 16.3942 18.6068C16.3942 19.1588 16.8422 19.6068 17.3942 19.6068C19.9502 19.5935 30.3849 19.5562 32.7129 19.5402V28.2668C32.7129 28.8188 33.1609 29.2668 33.7129 29.2668Z"
            fill="#030522"
          />
          <path
            d="M17.8561 28.6359C17.9055 31.5346 22.2175 31.5346 22.2668 28.6359C22.2175 25.7372 17.9055 25.7372 17.8561 28.6359Z"
            fill="#030522"
          />
        </svg>
      ),
      heading: "Private",
      para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
    },
    {
      id: 3,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <g clipPath="url(#clip0_2_7471)">
            <path
              d="M37.9679 16.6531C37.1693 16.1596 36.2803 16.0591 35.4962 16.1363V15.3125C35.4962 6.8907 28.6045 0 20.1837 0C11.7619 0 4.87122 6.89172 4.87122 15.3125V16.1363C4.08715 16.0591 3.19809 16.1596 2.39958 16.6531C0.929185 17.5619 0.183716 19.4765 0.183716 22.3438C0.183716 25.2158 0.930591 27.1405 2.40364 28.0647C3.13536 28.5238 3.98989 28.6832 4.87122 28.6074V29.4531C4.87122 30.1003 5.3959 30.625 6.04309 30.625H10.7306C11.3778 30.625 11.9025 30.1003 11.9025 29.4531V15.3125C11.9025 14.6653 11.3778 14.1406 10.7306 14.1406H7.26848C7.86286 7.5368 13.4278 2.34375 20.1837 2.34375C26.9397 2.34375 32.5046 7.5368 33.0989 14.1406H29.6368C28.9897 14.1406 28.465 14.6653 28.465 15.3125V29.4531C28.465 30.1003 28.9897 30.625 29.6368 30.625H33.1525V31.7969C33.1525 33.7354 31.5754 35.3125 29.6368 35.3125H25.8415C25.3578 33.9486 24.0552 32.9688 22.5275 32.9688H20.1837C18.2452 32.9688 16.6681 34.5459 16.6681 36.4844C16.6681 38.4229 18.2452 40 20.1837 40H22.5275C24.0552 40 25.3578 39.0202 25.8415 37.6562H29.6368C32.8677 37.6562 35.4962 35.0277 35.4962 31.7969C35.4962 30.3695 35.4962 29.5337 35.4962 28.6073C36.3776 28.6831 37.2322 28.5236 37.9638 28.0646C39.4368 27.1405 40.1837 25.2158 40.1837 22.3438C40.1837 19.4765 39.4382 17.5619 37.9679 16.6531ZM4.87122 26.2485C4.49731 26.3136 4.02997 26.3181 3.64918 26.0792C2.92583 25.6255 2.52747 24.2988 2.52747 22.3438C2.52747 20.4074 2.91692 19.0962 3.62403 18.6516C4.00637 18.4112 4.48809 18.4284 4.87122 18.504V26.2485ZM9.55872 16.4844V28.2812H7.21497V16.4844H9.55872ZM22.5275 37.6562H20.1837C19.5375 37.6562 19.0118 37.1305 19.0118 36.4844C19.0118 35.8382 19.5375 35.3125 20.1837 35.3125H22.5275C23.1736 35.3125 23.6993 35.8382 23.6993 36.4844C23.6993 37.1305 23.1736 37.6562 22.5275 37.6562ZM33.1525 28.2812H30.8087V16.4844H33.1525V28.2812ZM36.7266 26.074C36.3479 26.3158 35.8754 26.3111 35.4962 26.2454V18.5041C35.8793 18.4284 36.361 18.4113 36.7434 18.6517C37.4505 19.0962 37.84 20.4074 37.84 22.3438C37.84 24.2909 37.4445 25.6156 36.7266 26.074Z"
              fill="#030522"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_7471">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(0.183716)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Online Support",
      para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal
        ? (document.body.classList.add("overflow-hidden"),
          (
            <>
              <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 bg-[rgba(0,0,0,0.7)] flex justify-center items-center">
                <div className="w-[300px] h-[200px] bg-white flex flex-col gap-5 justify-center items-center rounded">
                  <p className="text-center text-[#030303] font-montserrat text-[25px] not-italic font-bold sm:leading-[45px]">
                    Congratulations, your ticket is booked.
                  </p>
                  <button
                    className="w-[100px] h-[56px] rounded-[56px] duration-300 bg-[#313EF7] border-[2px] border-solid border-transparent shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25)] text-white text-center font-montserrat text-base not-italic font-semibold leading-[28px] hover:shadow-none hover:border-black"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          ))
        : document.body.classList.remove("overflow-hidden")}
      <div className="bg-[#FFF] max-w-[1224px] mx-auto px-3 py-12 md:py-[100px] min-[1200px]:py-0">
        <div className="min-[1200px]:translate-y-[-50%]">
          <div className="flex">
            <button
              onClick={() => handleTabClick("tab1")}
              className={`${
                currentTab == "tab1" &&
                "!bg-[#313EF7] text-white border-b-transparent"
              }border-b border-b-solid border-b-[#F3F4F6] duration-300 w-[173px] h-[60px] bg-white flex items-center justify-center text-[#030522] text-center font-montserrat text-base min-[400px]:text-lg not-italic leading-[28px] hover:bg-[#313EF7] hover:text-white hover:border-b-transparent rounded-tl-[20px] font-bold`}
            >
              Economy
            </button>
            <button
              onClick={() => handleTabClick("tab2")}
              className={`${
                currentTab == "tab2" &&
                "!bg-[#313EF7] text-white border-b-transparent"
              }border-b border-b-solid border-b-[#F3F4F6] duration-300 w-[173px] h-[60px] bg-white flex items-center justify-center text-[#030522] text-center font-montserrat text-base min-[400px]:text-lg not-italic leading-[28px] hover:bg-[#313EF7] hover:text-white hover:border-b-transparent font-semibold`}
            >
              Busniness
            </button>
            <button
              onClick={() => handleTabClick("tab3")}
              className={`${
                currentTab == "tab3" &&
                "!bg-[#313EF7] text-white border-b-transparent"
              }border-b border-b-solid border-b-[#F3F4F6] duration-300 w-[173px] h-[60px] bg-white flex items-center justify-center text-[#030522] text-center font-montserrat text-base min-[400px]:text-lg not-italic leading-[28px] hover:bg-[#313EF7] hover:text-white hover:border-b-transparent rounded-tr-[30px] font-medium`}
            >
              First
            </button>
          </div>

          <div className="w-full flex flex-col items-center sm:rounded-tr-[20px] rounded-b-[20px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10)]  px-[30px] min-[400px]:px-[70px] py-[40px]">
            <div className="flex justify-between items-center sm:items-start w-full gap-5 flex-wrap flex-col sm:flex-row">
              <div className="flex gap-2 items-center">
                <div className="w-[56px] h-[56px] bg-[rgba(49,62,247,0.05)] rounded-[50%] flex justify-center items-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.9989 13.4314C13.722 13.4314 15.1189 12.0345 15.1189 10.3114C15.1189 8.58828 13.722 7.19141 11.9989 7.19141C10.2758 7.19141 8.87891 8.58828 8.87891 10.3114C8.87891 12.0345 10.2758 13.4314 11.9989 13.4314Z"
                      stroke="#030522"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z"
                      stroke="#030522"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="w-[178px] flex flex-col">
                  <label
                    htmlFor="location"
                    className="text-[#030522] font-montserrat text-lg not-italic font-semibold leading-[150%]"
                  >
                    {`${currentTab == "tab1" ? "Location" : ""} ${
                      currentTab == "tab2" ? "B-Location" : ""
                    } ${currentTab == "tab3" ? "F-Location" : ""}`}
                  </label>
                  <input
                    id="location"
                    name="location"
                    className="text-[#AEB5BF] font-montserrat text-base not-italic font-normal leading-[28px] max-w-[178px] w-full"
                    type="text"
                    placeholder="Where are you going?"
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="w-[56px] h-[56px] bg-[rgba(49,62,247,0.05)] rounded-[50%] flex justify-center items-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6786 3.96C13.1586 4.67 13.4386 5.52 13.4386 6.44C13.4286 8.84 11.5386 10.79 9.15859 10.87C9.05859 10.86 8.93859 10.86 8.82859 10.87C6.44859 10.79 4.55859 8.84 4.55859 6.44C4.55859 3.99 6.53859 2 8.99859 2"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.4112 4C18.3512 4 19.9112 5.57 19.9112 7.5C19.9112 9.39 18.4113 10.93 16.5413 11C16.4613 10.99 16.3713 10.99 16.2812 11"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.15875 14.56C1.73875 16.18 1.73875 18.82 4.15875 20.43C6.90875 22.27 11.4188 22.27 14.1688 20.43C16.5888 18.81 16.5888 16.17 14.1688 14.56C11.4288 12.73 6.91875 12.73 4.15875 14.56Z"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-[178px] sm:max-w-[97px] min-[992px]:max-w-[83px] md:w-full flex flex-col">
                  <label
                    htmlFor="guest"
                    className="text-[#030522] font-montserrat text-lg not-italic font-semibold leading-[150%]"
                  >
                    Travelers
                  </label>
                  <input
                    id="guest"
                    name="guest"
                    className="text-[#AEB5BF] font-montserrat text-base not-italic font-normal leading-[28px] max-w-[83px] w-full"
                    type="text"
                    placeholder="Add guest"
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="w-[56px] h-[56px] bg-[rgba(49,62,247,0.05)] rounded-[50%] flex justify-center items-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 2V5"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V5"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 9.08984H20.5"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9941 13.6992H12.0031"
                      stroke="#030522"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29492 13.6992H8.3039"
                      stroke="#030522"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29492 16.6992H8.3039"
                      stroke="#030522"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-[178px] sm:max-w-[97px] min-[992px]:max-w-[83px] sm:w-full flex flex-col">
                  <label
                    htmlFor="check-in"
                    className="text-[#030522] font-montserrat text-lg not-italic font-semibold leading-[150%]"
                  >
                    Check-in
                  </label>
                  <input
                    id="check-in"
                    name="check-in"
                    className="text-[#AEB5BF] font-montserrat text-base not-italic font-normal leading-[28px] max-w-[83px] w-full"
                    type="text"
                    placeholder="Add date"
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="w-[56px] h-[56px] bg-[rgba(49,62,247,0.05)] rounded-[50%] flex justify-center items-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 2V5"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V5"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 9.08984H20.5"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17"
                      stroke="#030522"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9941 13.6992H12.0031"
                      stroke="#030522"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29492 13.6992H8.3039"
                      stroke="#030522"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29492 16.6992H8.3039"
                      stroke="#030522"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-[178px] sm:max-w-[97px] sm:w-full flex flex-col">
                  <label
                    htmlFor="check-out"
                    className="text-[#030522] font-montserrat text-lg not-italic font-semibold leading-[150%]"
                  >
                    Check-out
                  </label>
                  <input
                    id="check-out"
                    name="check-out"
                    className="text-[#AEB5BF] font-montserrat text-base not-italic font-normal leading-[28px] max-w-[97px] w-full"
                    type="text"
                    placeholder="Add date"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 w-[200px] h-[56px] rounded-[56px] duration-300 bg-[#313EF7] border-[2px] border-solid border-transparent shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25)] text-white text-center font-montserrat text-base not-italic font-semibold leading-[28px] hover:shadow-none hover:border-black"
            >
              Book Now
            </button>
          </div>
        </div>

        <div id="second" className="my-12 md:my-[100px] min-[1200px]:my-0">
          <h2 className="text-[#030522] text-center font-montserrat text-[40px] not-italic font-bold leading-[150%] tracking-[0.6px] capitalize mb-10">
            Our Features
          </h2>
          <div className="flex justify-center min-[1200px]:justify-between min-h-[410px] h-full flex-wrap gap-6 min-[1200px]:gap-0">
            {feature.map((feature) => (
              <div
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-duration="1000"
                key={feature.id}
                className={`w-[281px] h-[380px] py-[42px] px-[21px] rounded-[185px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10)] flex flex-col items-center ${
                  feature.id == 0 ? "min-[1200px]:translate-y-[30px]" : ""
                } ${feature.id == 2 ? "min-[1200px]:translate-y-[30px]" : ""}`}
              >
                <div className="shrink-0 w-[70px] h-[70px] bg-[rgba(49,62,247,0.05)] mb-4 rounded-[50%] flex justify-center items-center">
                  {feature.svg}
                </div>
                <h2 className="mb-[10px] text-[#030522] text-center font-montserrat text-2xl not-italic font-extrabold leading-[150%]">
                  {feature.heading}
                </h2>
                <p className="mb-8 text-[rgba(3,5,34,0.65)] text-center font-montserrat text-base not-italic font-normal leading-[150%]">
                  {feature.para}
                </p>
                <div className="shrink-0 w-[50px] h-[50px] bg-[#030522] flex justify-center items-center rounded-[50%] group hover:bg-[#313EF7] cursor-pointer duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="16"
                    viewBox="0 0 27 16"
                    fill="none"
                  >
                    <path
                      className="group-hover:fill-black"
                      d="M26.5843 9.04001C26.9748 8.64948 26.9748 8.01632 26.5843 7.6258L20.2204 1.26184C19.8298 0.871311 19.1967 0.871311 18.8061 1.26184C18.4156 1.65236 18.4156 2.28552 18.8061 2.67605L24.463 8.3329L18.8061 13.9898C18.4156 14.3803 18.4156 15.0134 18.8061 15.404C19.1967 15.7945 19.8298 15.7945 20.2204 15.404L26.5843 9.04001ZM25.8772 7.3329H0.421369L0.42137 9.3329H25.8772L25.8772 7.3329Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap min-[1200px]:my-[100px] overflow-hidden">
          <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" className="w-full min-[1200px]:w-[51%] flex justify-center min-[1200px]:justify-start">
            <div className="max-w-[560px] max-h-[456px]">
              <img className="w-full" src={Section1img} alt="travel image" />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" className="w-full min-[1200px]:w-[49%]">
            <p className="text-[#313EF7] font-montserrat text-xl not-italic font-black leading-[24px] mb-4">
              Let's Fly
            </p>
            <h3 className="text-[#030303] font-montserrat text-[25px] sm:text-[32px] not-italic font-bold sm:leading-[45px] mb-10">
              It's one of the leading online flight booking platforms in the
              world
            </h3>
            <ul className="list-image-bluelist pl-[16px] flex flex-col gap-y-[10px] mb-10 relative">
              <img
                className="absolute hidden min-[1200px]:block min-[1200px]:h-[140px] left-[5px] top-[13px]"
                src={line}
                alt="line"
              />
              <li className="text-[#030303] font-montserrat text-base not-italic font-medium leading-[28px] relative">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text
              </li>
              <li className="text-[#030303] font-montserrat text-base not-italic font-medium leading-[26px] relative">
                If you are going to use a passage of Lorem Ipsum
              </li>
              <li className="text-[#030303] font-montserrat text-base not-italic font-medium leading-[28px] relative">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
              </li>
              <li className="text-[#030303] font-montserrat text-base not-italic font-medium leading-[25px] relative">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </li>
            </ul>
            <button className="w-[200px] h-[56px] rounded-[56px] duration-300 bg-[#313EF7] border-[2px] border-solid border-transparent shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25)] text-white text-center font-montserrat text-base not-italic font-semibold leading-[28px] hover:shadow-none hover:border-black">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
