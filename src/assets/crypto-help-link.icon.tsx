import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const CryptoHelpLinkIcon: React.FC<Props> = ({ width, height, color = 'white' }) => {
  return (
    <SvgCss
      xml={`<svg width="83" height="78" viewBox="0 0 83 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="44" cy="39" r="39" fill="#1EBCE8"/>
<path d="M4.18323 36.2292C3.79283 36.424 3.47313 36.736 3.26895 37.1216C3.06477 37.5071 2.98633 37.9469 3.04463 38.3793C3.86642 38.0256 4.74941 37.8361 5.64392 37.8212" fill="#E0E0E0"/>
<path d="M3.61683 36.6416C3.20652 37.0314 4.09894 36.0056 4.46617 35.8907C4.84274 35.8081 5.23429 35.8244 5.60272 35.9379C7.32601 36.3113 9.09033 36.7052 10.5613 37.6838C12.0856 38.7096 13.1503 40.2605 14.1761 41.7869C14.388 42.0542 14.5342 42.3677 14.6028 42.7018C14.6438 43.0383 14.4777 43.4281 14.1515 43.5225C13.9885 43.5553 13.8202 43.5511 13.6591 43.5102L11.2465 43.0752C10.1489 42.8701 9.00212 42.6649 8.11791 41.9777C7.10445 41.194 6.60592 39.9261 6.15253 38.7342C5.80582 37.8171 4.92161 37.3371 4.41078 36.4918C4.41078 36.4877 4.05791 36.2292 3.61683 36.6416Z" fill="#EBEBEB"/>
<path d="M18.8392 45.9207C18.7826 45.8997 18.7277 45.8743 18.6751 45.8448L18.2155 45.6109C17.8196 45.4058 17.2452 45.1042 16.5476 44.7103C15.7292 44.2512 14.9355 43.7492 14.1699 43.2065C13.7411 42.8967 13.3 42.5521 12.8672 42.1807C12.4343 41.8094 12.0096 41.3806 11.5357 41.0032C11.3029 40.8155 11.056 40.6461 10.7972 40.4964C10.5433 40.3571 10.2776 40.2404 10.0032 40.1477C9.73242 40.0513 9.46162 39.963 9.20723 39.8461C8.95616 39.7319 8.72212 39.5834 8.51176 39.405C8.13574 39.0669 7.80601 38.6806 7.53112 38.2562C7.26442 37.8684 7.03055 37.4971 6.78641 37.1832C6.42272 36.6691 5.93225 36.2578 5.36265 35.9892C5.14811 35.9043 4.92319 35.8484 4.69385 35.823C4.75397 35.8194 4.81426 35.8194 4.87438 35.823C5.04718 35.8423 5.2168 35.8837 5.37906 35.9461C5.96459 36.2042 6.47088 36.6135 6.84591 37.1319C7.0962 37.4479 7.33418 37.8171 7.60293 38.2028C7.87646 38.6179 8.20341 38.9952 8.57536 39.325C8.77856 39.4975 9.0051 39.6405 9.24826 39.7497C9.49855 39.8625 9.76525 39.9548 10.0381 40.0451C10.322 40.1379 10.5967 40.2567 10.8587 40.4C11.1229 40.5514 11.3747 40.7236 11.6116 40.9149C12.0937 41.2965 12.5164 41.7192 12.9472 42.0987C13.378 42.4782 13.8109 42.8208 14.2376 43.1245C15.0931 43.7399 15.9055 44.2384 16.5969 44.6426C17.2882 45.0467 17.8545 45.3545 18.2381 45.5719L18.6874 45.8243C18.7402 45.8529 18.7909 45.8851 18.8392 45.9207Z" fill="#E0E0E0"/>
<path d="M77.3658 4.88184H63.8913C63.1018 4.88184 62.3447 5.19547 61.7864 5.75372C61.2282 6.31198 60.9146 7.06913 60.9146 7.85862V13.7096C60.9146 14.4991 61.2282 15.2563 61.7864 15.8145C62.3447 16.3728 63.1018 16.6864 63.8913 16.6864H64.2688V19.0046L66.587 16.6864H77.372C78.1617 16.6864 78.919 16.3728 79.4776 15.8146C80.0362 15.2564 80.3503 14.4993 80.3508 13.7096V7.85862C80.3505 7.46709 80.2731 7.07945 80.1229 6.71788C79.9727 6.35631 79.7527 6.02789 79.4754 5.75142C79.1982 5.47494 78.8692 5.25584 78.5072 5.10663C78.1452 4.95742 77.7574 4.88103 77.3658 4.88184Z" fill="#FF9800"/>
<path d="M67.5776 11.8407C67.9424 11.8407 68.2382 11.545 68.2382 11.1801C68.2382 10.8153 67.9424 10.5195 67.5776 10.5195C67.2128 10.5195 66.917 10.8153 66.917 11.1801C66.917 11.545 67.2128 11.8407 67.5776 11.8407Z" fill="white"/>
<path d="M67.5778 11.9433C67.4263 11.9437 67.2781 11.8991 67.1519 11.8152C67.0258 11.7312 66.9274 11.6118 66.8692 11.4719C66.811 11.3319 66.7957 11.1779 66.8252 11.0293C66.8546 10.8806 66.9275 10.7441 67.0347 10.637C67.1418 10.5298 67.2784 10.4569 67.427 10.4274C67.5756 10.398 67.7296 10.4133 67.8696 10.4715C68.0095 10.5297 68.129 10.6281 68.2129 10.7542C68.2968 10.8804 68.3414 11.0286 68.341 11.1801C68.3404 11.3824 68.2599 11.5762 68.1169 11.7192C67.9739 11.8622 67.7801 11.9427 67.5778 11.9433ZM67.5778 10.62C67.467 10.6196 67.3585 10.6521 67.2661 10.7134C67.1737 10.7747 67.1016 10.8621 67.0589 10.9644C67.0162 11.0667 67.0048 11.1793 67.0262 11.2881C67.0476 11.3969 67.1008 11.4969 67.179 11.5754C67.2573 11.6539 67.357 11.7075 67.4657 11.7293C67.5744 11.751 67.6872 11.7401 67.7896 11.6977C67.8921 11.6554 67.9797 11.5836 68.0413 11.4915C68.1029 11.3993 68.1358 11.291 68.1358 11.1801C68.1361 11.1067 68.1219 11.0339 68.094 10.9659C68.066 10.898 68.025 10.8362 67.9731 10.7842C67.9213 10.7322 67.8597 10.6909 67.7918 10.6627C67.724 10.6345 67.6513 10.62 67.5778 10.62Z" fill="#FAFAFA"/>
<path d="M70.6284 11.81C70.9932 11.81 71.289 11.5142 71.289 11.1494C71.289 10.7845 70.9932 10.4888 70.6284 10.4888C70.2635 10.4888 69.9678 10.7845 69.9678 11.1494C69.9678 11.5142 70.2635 11.81 70.6284 11.81Z" fill="white"/>
<path d="M70.6283 11.9145C70.4775 11.9141 70.3301 11.869 70.2049 11.7849C70.0796 11.7008 69.9821 11.5815 69.9247 11.442C69.8672 11.3025 69.8524 11.1491 69.8821 11.0012C69.9118 10.8533 69.9846 10.7175 70.0914 10.611C70.1983 10.5045 70.3342 10.432 70.4822 10.4027C70.6302 10.3734 70.7836 10.3886 70.9229 10.4465C71.0622 10.5043 71.1813 10.6021 71.2651 10.7276C71.3488 10.853 71.3935 11.0005 71.3935 11.1514C71.393 11.3539 71.3121 11.5481 71.1687 11.6911C71.0252 11.8342 70.8309 11.9145 70.6283 11.9145ZM70.6283 10.5933C70.518 10.5937 70.4103 10.6268 70.3188 10.6884C70.2274 10.7499 70.1562 10.8372 70.1142 10.9392C70.0723 11.0412 70.0615 11.1534 70.0833 11.2615C70.1051 11.3696 70.1584 11.4688 70.2365 11.5466C70.3146 11.6245 70.4141 11.6774 70.5222 11.6988C70.6304 11.7202 70.7425 11.709 70.8444 11.6667C70.9462 11.6244 71.0332 11.5529 71.0945 11.4612C71.1557 11.3694 71.1884 11.2616 71.1884 11.1514C71.1887 11.0777 71.1743 11.0048 71.1463 10.9367C71.1182 10.8686 71.077 10.8068 71.0249 10.7547C70.9729 10.7027 70.911 10.6614 70.843 10.6334C70.7749 10.6053 70.7019 10.591 70.6283 10.5913V10.5933Z" fill="#FAFAFA"/>
<path d="M73.6791 11.81C74.044 11.81 74.3397 11.5142 74.3397 11.1494C74.3397 10.7845 74.044 10.4888 73.6791 10.4888C73.3143 10.4888 73.0186 10.7845 73.0186 11.1494C73.0186 11.5142 73.3143 11.81 73.6791 11.81Z" fill="white"/>
<path d="M73.6791 11.9145C73.5282 11.9141 73.3809 11.869 73.2557 11.7849C73.1304 11.7008 73.0329 11.5815 72.9755 11.442C72.918 11.3025 72.9032 11.1491 72.9329 11.0012C72.9626 10.8533 73.0354 10.7175 73.1422 10.611C73.249 10.5045 73.385 10.432 73.533 10.4027C73.681 10.3734 73.8343 10.3886 73.9737 10.4465C74.113 10.5043 74.2321 10.6021 74.3158 10.7276C74.3996 10.853 74.4443 11.0005 74.4443 11.1514C74.4438 11.3539 74.3629 11.5481 74.2195 11.6911C74.076 11.8342 73.8817 11.9145 73.6791 11.9145ZM73.6791 10.5933C73.5688 10.5937 73.4611 10.6268 73.3696 10.6884C73.2781 10.7499 73.2069 10.8372 73.165 10.9392C73.1231 11.0412 73.1123 11.1534 73.1341 11.2615C73.1559 11.3696 73.2092 11.4688 73.2873 11.5466C73.3654 11.6245 73.4648 11.6774 73.573 11.6988C73.6812 11.7202 73.7933 11.709 73.8952 11.6667C73.997 11.6244 74.084 11.5529 74.1453 11.4612C74.2065 11.3694 74.2392 11.2616 74.2392 11.1514C74.2394 11.0777 74.2251 11.0048 74.1971 10.9367C74.169 10.8686 74.1278 10.8068 74.0757 10.7547C74.0237 10.7027 73.9618 10.6614 73.8937 10.6334C73.8257 10.6053 73.7527 10.591 73.6791 10.5913V10.5933Z" fill="#FAFAFA"/>
<path d="M9.90283 25.2864C10.5819 26.1399 11.7308 26.6466 11.6056 27.3236C11.4928 27.9268 10.9553 29.7506 11.0045 30.3619C11.0681 31.1579 11.7985 31.7119 12.4714 32.1386C13.1443 32.5653 13.8931 33.072 14.0305 33.8578C14.1495 34.5368 13.7597 35.2323 13.8931 35.9093C14.0592 36.7668 14.9619 37.2428 15.7682 37.5772C17.1454 38.1503 18.5439 38.6666 19.9636 39.1261C20.1176 38.3996 20.0787 37.6454 19.8509 36.9385C19.6231 36.2317 19.2142 35.5967 18.6649 35.0969C18.1439 34.6373 17.4976 34.2927 17.1283 33.7039C16.6873 33.0002 16.7386 32.1119 16.6811 31.2851C16.6237 30.4584 16.3508 29.5208 15.5917 29.1864C15.1691 28.9997 14.6398 29.0243 14.3095 28.7043C13.8992 28.3084 14.0223 27.6375 13.8992 27.0815C13.7269 26.306 13.0273 25.7337 12.2703 25.4854C11.5133 25.2372 10.7009 25.2598 9.90488 25.2803" fill="#FF9800"/>
<path d="M22.0991 41.0299C21.1554 39.4994 21.5493 37.6571 22.3371 36.0405C23.1249 34.4239 24.444 33.1335 25.7714 31.921C27.0987 30.7086 28.7399 29.4182 30.5638 29.5864C29.5175 30.1136 29.0887 31.3692 28.8671 32.5221C28.6456 33.6751 28.504 34.9183 27.7306 35.8046C27.3429 36.2477 26.791 36.6109 26.6699 37.1873C26.5612 37.7105 26.8484 38.2623 26.711 38.7773C26.4874 39.6143 25.3241 39.8502 24.9651 40.638C24.7907 41.0196 24.8277 41.4874 24.5835 41.8259C24.2717 42.2567 23.6111 42.2936 23.1475 42.0515C22.6838 41.8095 22.3474 41.3643 22.0355 40.9355" fill="#FF9800"/>
<path d="M22.4501 45.3545C22.27 45.0832 22.1109 44.7986 21.9741 44.5031C21.6992 43.9368 21.3587 43.0916 20.973 42.0412C20.7678 41.514 20.5627 40.9375 20.3267 40.3241C20.0798 39.6686 19.7949 39.0281 19.4733 38.4059C19.3023 38.0721 19.0907 37.7606 18.8435 37.4786C18.5652 37.2015 18.2562 36.9571 17.9223 36.7503C17.5859 36.5308 17.231 36.3236 16.8966 36.0753C16.5445 35.8297 16.2383 35.5242 15.9919 35.1727C15.7545 34.8084 15.6205 34.3865 15.6041 33.952C15.5733 33.5314 15.6041 33.1191 15.5651 32.7211C15.5464 32.3319 15.4315 31.9534 15.2307 31.6194C15.1262 31.4642 14.9881 31.3345 14.8266 31.2399C14.6673 31.1467 14.498 31.0716 14.3219 31.0163C13.9793 30.8952 13.608 30.7947 13.3392 30.5362C13.2192 30.4061 13.1266 30.2531 13.067 30.0863C13.0074 29.9196 12.9821 29.7426 12.9925 29.5658C12.9925 29.2314 13.0294 28.9155 13.0192 28.6139C13.0082 28.3245 12.9471 28.0392 12.8386 27.7707C12.6433 27.3083 12.3524 26.8923 11.9852 26.5501C11.7091 26.2899 11.4112 26.0538 11.0948 25.8443C10.8363 25.67 10.6291 25.5407 10.4896 25.4525L10.3317 25.352C10.3125 25.3409 10.2947 25.3278 10.2783 25.313L10.3358 25.3417L10.4999 25.434C10.6435 25.5161 10.8548 25.6392 11.1153 25.8095C11.4383 26.0147 11.7424 26.2481 12.0242 26.507C12.4024 26.8499 12.7032 27.2695 12.9063 27.7379C13.0213 28.0135 13.0866 28.3073 13.0992 28.6057C13.1115 28.9175 13.0725 29.2355 13.0787 29.5617C13.0695 29.7262 13.0935 29.8909 13.1492 30.0459C13.2049 30.201 13.2911 30.3433 13.4028 30.4644C13.6469 30.7003 14.0039 30.7988 14.3527 30.9178C14.5355 30.9761 14.7116 31.0539 14.8779 31.1496C15.0492 31.2532 15.1956 31.3933 15.3066 31.5599C15.5175 31.9069 15.6381 32.3012 15.6575 32.7067C15.6923 33.117 15.6677 33.5273 15.7005 33.9377C15.7152 34.3537 15.8429 34.758 16.0698 35.107C16.3097 35.4482 16.6076 35.7447 16.9499 35.983C17.2823 36.2272 17.6372 36.4344 17.9757 36.658C18.3158 36.8686 18.6304 37.1178 18.9132 37.4006C19.1658 37.6914 19.3821 38.0117 19.5574 38.3546C19.8773 38.9817 20.1602 39.627 20.4047 40.2872C20.6427 40.9026 20.8478 41.4812 21.0407 42.0084C21.4223 43.0629 21.7444 43.9102 22.007 44.4805C22.1424 44.7616 22.2449 44.9831 22.3291 45.1247C22.366 45.1924 22.3947 45.2478 22.4193 45.2909C22.4324 45.3106 22.4427 45.332 22.4501 45.3545Z" fill="#263238"/>
<path d="M30.5207 29.5576C30.4699 29.5926 30.4156 29.6221 30.3587 29.6458C30.252 29.6992 30.094 29.7812 29.8991 29.8982C29.3469 30.2287 28.8435 30.6347 28.4036 31.1045C28.1016 31.428 27.8322 31.7805 27.5994 32.1569C27.4707 32.3675 27.3529 32.5846 27.2465 32.8073C27.1378 33.037 27.0413 33.2791 26.91 33.5212C26.7879 33.7745 26.6356 34.0121 26.4566 34.229C26.2613 34.4507 26.0243 34.632 25.7591 34.7624C25.4914 34.8903 25.2324 35.0356 24.9836 35.1973C24.7388 35.3689 24.5606 35.6196 24.479 35.9071C24.3066 36.4918 24.399 37.1257 24.2 37.7022C24.001 38.2787 23.6276 38.728 23.3793 39.1896C23.1384 39.6341 22.9891 40.1224 22.9403 40.6257C22.8961 41.0662 22.905 41.5105 22.967 41.9489C23.0667 42.585 23.2198 43.2115 23.4245 43.822C23.4922 44.0271 23.5455 44.1994 23.5845 44.3225C23.6064 44.3797 23.6229 44.4387 23.6337 44.499C23.6252 44.4862 23.6183 44.4724 23.6132 44.4579C23.6009 44.4224 23.5845 44.3793 23.564 44.3287C23.5209 44.2179 23.4594 44.0497 23.3855 43.8343C23.1639 43.2258 22.999 42.5981 22.8931 41.9592C22.8249 41.5153 22.8111 41.0647 22.8521 40.6175C22.8974 40.1003 23.0475 39.5977 23.2932 39.1403C23.5517 38.6603 23.9086 38.2151 24.1138 37.6673C24.3189 37.1196 24.2102 36.4939 24.3887 35.8743C24.4778 35.5649 24.6695 35.295 24.9324 35.1091C25.1859 34.9453 25.4498 34.798 25.7222 34.668C25.9761 34.5435 26.2033 34.3707 26.391 34.1592C26.5654 33.9493 26.7142 33.7192 26.8341 33.474C26.9552 33.236 27.0619 32.996 27.1747 32.7642C27.2835 32.5392 27.404 32.32 27.5358 32.1077C27.7735 31.7285 28.0484 31.3739 28.3564 31.0491C28.804 30.5794 29.3191 30.179 29.8848 29.8612C30.0377 29.7742 30.1952 29.6955 30.3566 29.6253C30.4098 29.5992 30.4646 29.5766 30.5207 29.5576Z" fill="#263238"/>
<path d="M53.4772 36.7768C55.4015 36.6107 57.3566 36.4445 59.2707 36.6743C61.1848 36.904 63.0804 37.5913 64.1185 38.7894C64.9904 39.7967 65.1607 41.0461 65.3084 42.2257L66.5762 52.4116C66.685 53.2753 66.7814 54.1718 66.3998 54.9924C65.5546 56.7875 62.4424 57.6348 59.9621 57.0747C58.8608 56.8312 57.827 56.3469 56.935 55.6567C56.0429 54.9664 55.3147 54.0873 54.8025 53.0825C53.9183 51.2976 53.8054 49.3651 53.7028 47.4694L53.1387 37.1482L53.389 36.984" fill="#263238"/>
<path d="M0 54.3772L0.596997 56.4759L57.6051 73.0318L77.2137 60.0907V58.3264L0 54.3772Z" fill="#263238"/>
<path d="M20.4497 44.8784L77.2137 58.3262L57.6051 71.1217L0 54.377L20.4497 44.8784Z" fill="#455A64"/>
<path d="M50.398 56.4246L39.5412 61.6725L19.6372 56.2441L29.4087 50.906L50.398 56.4246Z" fill="#263238"/>
<path d="M38.4271 56.2032L41.3095 57.1551L43.9786 55.7046L39.537 54.2788L36.9438 55.6246L38.4271 56.2032Z" fill="#455A64"/>
<path d="M17.1035 41.5879C17.1938 41.949 19.6372 56.2441 19.6372 56.2441L39.5371 61.6724L36.9173 46.3803L17.1035 41.5879Z" fill="#263238"/>
<path d="M38.0932 53.2305C38.1219 53.2305 38.4707 55.1117 38.8707 57.4423C39.2708 59.7728 39.5724 61.6684 39.5416 61.6725C39.5108 61.6766 39.1662 59.7913 38.7661 57.4607C38.3661 55.1302 38.0645 53.2346 38.0932 53.2305Z" fill="#455A64"/>
<path d="M28.8569 51.2527C29.099 51.8784 28.8569 52.5533 28.3194 52.7626C27.7819 52.9718 27.1501 52.6333 26.908 52.0076C26.6659 51.3819 26.908 50.707 27.4434 50.4977C27.9789 50.2884 28.6149 50.6269 28.8569 51.2527Z" fill="#455A64"/>
<path d="M36.9175 46.3804C37.8037 45.3546 38.3187 38.3794 38.3187 38.3794L44.8836 39.1179C44.8836 39.1179 43.9378 49.3367 40.9385 50.5635L37.9371 51.7944" fill="#FFBE9D"/>
<path d="M58.485 48.5692C58.485 48.5692 61.39 51.825 61.2156 54.5372L56.0601 53.3062L58.048 48.561" fill="#FF9800"/>
<path d="M62.6274 39.4583C62.5002 33.7571 60.2476 30.967 60.1553 30.6059C59.3215 29.6954 58.307 28.9686 57.1767 28.472C56.0464 27.9754 54.825 27.7197 53.5904 27.7214L47.4706 27.8199C45.8987 28.0073 44.3691 28.4559 42.9449 29.1473L42.7931 29.1903V29.2211C41.0616 30.1258 39.2029 31.5332 38.9096 33.9068L38.1689 38.5289L42.4238 38.7341C41.991 40.281 41.513 40.4799 42.0135 42.0063L43.6342 44.6959C43.6342 46.8397 43.4906 45.5411 42.8321 50.1919L59.269 54.0898C60.223 53.1502 59.4967 50.6022 56.9528 45.9719C56.5733 45.2785 58.5448 38.3033 58.5448 38.3033L62.2171 39.5773" fill="#FF9800"/>
<path d="M43.3839 36.9658C43.3431 37.067 43.2937 37.1644 43.2362 37.2571C43.1336 37.4418 42.9859 37.7044 42.8116 38.0347C42.4751 38.6932 42.0053 39.6472 41.9602 40.7858C41.9336 41.3168 42.0297 41.8469 42.2412 42.3347C42.4245 42.7298 42.6582 43.0994 42.9367 43.4343C43.1726 43.7236 43.3778 43.9452 43.5173 44.1031C43.5929 44.1796 43.6616 44.2627 43.7224 44.3514C43.638 44.2817 43.5591 44.2056 43.4865 44.1236C43.3388 43.9759 43.1234 43.7605 42.8711 43.4733C42.5787 43.1403 42.3342 42.7681 42.1448 42.3675C41.9201 41.8674 41.8175 41.3211 41.8453 40.7735C41.8698 40.2306 41.9813 39.6952 42.1756 39.1876C42.3323 38.7753 42.5202 38.3754 42.7377 37.9916C42.9203 37.6633 43.0803 37.4049 43.1911 37.2284C43.2483 37.1359 43.3128 37.0481 43.3839 36.9658Z" fill="#263238"/>
<path d="M62.0302 34.5266L61.983 34.5676C61.9501 34.5922 61.903 34.6332 61.8373 34.6804C61.6401 34.8128 61.4253 34.9171 61.1993 34.9902C60.6146 35.1954 59.6791 35.2261 58.6205 34.9061C58.0912 34.7502 57.5311 34.5204 56.93 34.2906C56.2984 34.0272 55.6325 33.8552 54.9523 33.7798C54.1995 33.7217 53.4423 33.7981 52.7162 34.0055C51.9335 34.2286 51.1631 34.493 50.4082 34.7974C49.6495 35.1043 48.8709 35.3593 48.0776 35.5605C47.3327 35.7461 46.5597 35.7906 45.7984 35.6918C45.1183 35.5691 44.456 35.3624 43.8269 35.0764C43.2319 34.822 42.6842 34.5758 42.1631 34.4055C41.6987 34.2495 41.2159 34.155 40.727 34.1245C40.3569 34.104 39.9859 34.1414 39.6274 34.2352C39.3225 34.3246 39.0342 34.4632 38.7739 34.6455C38.7739 34.6455 38.7883 34.6312 38.8211 34.6045C38.8539 34.5778 38.9032 34.5409 38.9709 34.4958C39.1715 34.3697 39.3882 34.271 39.6151 34.2024C39.9775 34.0986 40.3544 34.0543 40.7311 34.0711C41.2279 34.0943 41.7193 34.1847 42.1918 34.3399C42.719 34.506 43.2709 34.7502 43.8658 35.0005C44.4894 35.2842 45.1453 35.4909 45.8189 35.6159C46.5684 35.7101 47.3289 35.6635 48.0612 35.4785C48.8497 35.2778 49.6236 35.0236 50.3774 34.7173C51.1352 34.4114 51.9091 34.147 52.6957 33.9255C53.434 33.7161 54.2038 33.6404 54.9688 33.7018C55.6565 33.7804 56.3295 33.9573 56.967 34.227C57.5701 34.4609 58.124 34.6927 58.6472 34.8528C59.6935 35.1769 60.6125 35.1543 61.1931 34.9697C61.4944 34.8686 61.7772 34.7189 62.0302 34.5266Z" fill="#263238"/>
<path d="M56.9838 44.7186C56.9421 44.7407 56.898 44.7579 56.8525 44.7699L56.4668 44.893C55.9916 45.0435 55.5062 45.1594 55.0143 45.2397C54.6751 45.2932 54.3316 45.3138 53.9885 45.3013C53.5912 45.2805 53.1978 45.2116 52.8171 45.0961C52.0108 44.8622 51.1943 44.4335 50.3019 44.0929C49.8661 43.9322 49.419 43.8039 48.9643 43.7093C48.5394 43.6278 48.1098 43.5737 47.678 43.5472C46.945 43.5107 46.2102 43.5609 45.489 43.697C45.0001 43.7888 44.5198 43.9212 44.0529 44.0929C43.8867 44.1463 43.7616 44.2057 43.6754 44.2365C43.6322 44.2568 43.5868 44.2719 43.54 44.2817C43.5812 44.2575 43.6237 44.2356 43.6672 44.216C43.7513 44.1791 43.8724 44.1155 44.0386 44.0539C44.5027 43.8658 44.9835 43.7215 45.4746 43.6231C46.2005 43.4746 46.9419 43.416 47.6821 43.4487C48.1193 43.4727 48.5545 43.5255 48.9848 43.6067C49.4453 43.7015 49.898 43.8311 50.3388 43.9944C51.2415 44.337 52.0519 44.7658 52.8458 45.0017C53.2187 45.1149 53.6036 45.1837 53.9926 45.2069C54.3353 45.2236 54.6787 45.2078 55.0184 45.1597C55.5079 45.0861 55.9923 44.9819 56.4688 44.8479L56.8607 44.7432C56.9007 44.7307 56.942 44.7225 56.9838 44.7186Z" fill="#263238"/>
<path d="M49.5306 50.7376C49.4388 50.7401 49.347 50.7304 49.2577 50.7089C49.011 50.6663 48.7671 50.6087 48.5274 50.5366C47.9119 50.3683 47.1118 50.0196 46.1927 49.7488C45.4139 49.4982 44.5836 49.453 43.7822 49.6175C43.4564 49.7054 43.1448 49.8394 42.8569 50.0155C42.8569 50.0155 42.8713 49.995 42.9082 49.9662C42.9604 49.9222 43.0159 49.8825 43.0744 49.8472C43.2872 49.7113 43.5197 49.6089 43.7637 49.5436C44.3792 49.361 45.2901 49.3733 46.2256 49.6462C47.1611 49.9191 47.9509 50.2781 48.552 50.4668C48.8515 50.5632 49.0977 50.6309 49.268 50.672C49.3573 50.6859 49.4452 50.7079 49.5306 50.7376Z" fill="#263238"/>
<g opacity="0.1">
<path opacity="0.1" d="M57.1171 38.1987C57.1171 38.1987 54.4378 44.1051 56.7745 47.9661L57.87 47.5558L56.9529 45.9556C56.8907 45.7129 56.8803 45.4599 56.9222 45.2129C57.0576 44.3718 57.3181 42.9993 57.6669 41.6166L57.1171 38.1987Z" fill="black"/>
</g>
<path d="M52.6445 16.8792C53.9657 18.0321 54.5545 19.8457 54.5976 21.5977C54.6407 23.3497 54.4868 25.3377 54.5278 27.1656L57.2071 27.1123C58.9776 27.1656 60.984 26.9789 62.6786 26.8476C62.9619 26.8503 63.2411 26.7796 63.489 26.6424C63.8788 26.3778 63.967 25.8506 64.0203 25.3828C64.1044 24.6463 64.1844 23.8852 63.9731 23.1754C63.7618 22.4655 63.1751 21.8111 62.4365 21.7577C62.176 21.7393 61.9031 21.7947 61.661 21.6962C61.5236 21.6265 61.4046 21.5253 61.3137 21.4009C61.2228 21.2764 61.1626 21.1323 61.1379 20.9802C61.0702 20.6807 61.0805 20.3647 61.0353 20.0652C60.9612 19.6121 60.7664 19.1872 60.4715 18.8353C60.1766 18.4834 59.7924 18.2173 59.3592 18.065C58.8094 17.8783 58.1468 17.8598 57.7857 17.4003C57.3467 16.8484 57.6339 16.0504 57.6585 15.3487C57.6744 14.8609 57.5506 14.3787 57.3016 13.959C57.0526 13.5392 56.6888 13.1994 56.2531 12.9794C55.8174 12.7595 55.3279 12.6688 54.8423 12.7178C54.3568 12.7668 53.8953 12.9536 53.5123 13.2562" fill="#263238"/>
<path d="M50.5724 31.0778C49.7648 31.0759 48.9891 30.7626 48.4067 30.2032C47.8244 29.6437 47.4802 28.8812 47.4459 28.0744C47.3884 26.7245 47.3412 25.4443 47.3412 25.4443C47.3412 25.4443 44.7583 25.2043 44.5737 22.6583C44.3891 20.1124 44.467 14.2347 44.467 14.2347C45.8769 13.5224 47.4515 13.1996 49.0279 13.2995C50.6044 13.3994 52.1256 13.9184 53.4343 14.803L53.8302 15.0717L53.7133 27.9677C53.7057 28.7955 53.3714 29.5869 52.7831 30.1694C52.1949 30.7519 51.4003 31.0784 50.5724 31.0778Z" fill="#FFBE9D"/>
<path d="M45.5993 19.064C45.6512 19.0121 45.6865 18.9459 45.7009 18.8739C45.7152 18.8019 45.7078 18.7272 45.6797 18.6594C45.6516 18.5915 45.604 18.5336 45.543 18.4928C45.4819 18.452 45.4101 18.4302 45.3367 18.4302C45.2632 18.4302 45.1914 18.452 45.1304 18.4928C45.0693 18.5336 45.0217 18.5915 44.9936 18.6594C44.9655 18.7272 44.9581 18.8019 44.9725 18.8739C44.9868 18.9459 45.0221 19.0121 45.0741 19.064C45.1084 19.0988 45.1493 19.1264 45.1944 19.1452C45.2395 19.164 45.2878 19.1737 45.3367 19.1737C45.3855 19.1737 45.4339 19.164 45.4789 19.1452C45.524 19.1264 45.5649 19.0988 45.5993 19.064Z" fill="#263238"/>
<path d="M44.6845 18.2844C44.7276 18.3275 44.9656 18.1183 45.3164 18.0957C45.6672 18.0731 45.9318 18.2372 45.9688 18.1901C46.0057 18.1429 45.9421 18.0916 45.8252 18.0136C45.6682 17.9159 45.4843 17.8706 45.2999 17.8842C45.1155 17.8979 44.9402 17.9698 44.7994 18.0895C44.6968 18.1839 44.664 18.2742 44.6845 18.2844Z" fill="#263238"/>
<path d="M48.7444 18.5019C48.6843 18.5441 48.6381 18.6032 48.6115 18.6717C48.585 18.7402 48.5793 18.8151 48.5953 18.8868C48.6113 18.9585 48.6482 19.0238 48.7014 19.0745C48.7545 19.1252 48.8215 19.1591 48.8939 19.1717C48.9663 19.1843 49.0407 19.1752 49.1079 19.1455C49.1751 19.1158 49.232 19.0668 49.2713 19.0048C49.3107 18.9428 49.3307 18.8704 49.329 18.797C49.3272 18.7236 49.3037 18.6523 49.2614 18.5922C49.2048 18.5117 49.1186 18.457 49.0216 18.4401C48.9247 18.4232 48.825 18.4454 48.7444 18.5019Z" fill="#263238"/>
<path d="M48.5126 18.3623C48.5557 18.4054 48.7937 18.1961 49.1445 18.1735C49.4953 18.151 49.76 18.3151 49.7969 18.2679C49.8338 18.2207 49.7702 18.1694 49.6553 18.0915C49.4986 17.9934 49.3145 17.9481 49.1301 17.9622C48.9455 17.9748 48.7699 18.0468 48.6296 18.1674C48.5249 18.2618 48.4921 18.3438 48.5126 18.3623Z" fill="#263238"/>
<path d="M47.2675 21.0891C47.0822 21.0287 46.888 21.0002 46.6931 21.0049C46.6008 21.0049 46.5269 20.9844 46.5187 20.9352C46.5093 20.8434 46.5264 20.7509 46.568 20.6685C46.6439 20.4305 46.7198 20.1905 46.8018 19.9382C47.1219 18.898 47.3393 18.0425 47.286 18.0261C47.2327 18.0097 46.9311 18.8467 46.609 19.8725C46.5351 20.1269 46.4633 20.369 46.3915 20.607C46.3395 20.7288 46.3301 20.8647 46.3649 20.9926C46.3802 21.0267 46.4031 21.0569 46.432 21.0807C46.4608 21.1045 46.4947 21.1214 46.531 21.1301C46.5831 21.1401 46.6361 21.1435 46.689 21.1404C47.046 21.1465 47.2675 21.1178 47.2675 21.0891Z" fill="#263238"/>
<path d="M48.4327 21.407C48.7855 21.167 47.4582 22.004 46.7422 22.0225C46.8723 22.1994 47.0587 22.3269 47.2709 22.3839C47.483 22.441 47.7082 22.4242 47.9095 22.3363C48.6563 22.0019 48.4327 21.407 48.4327 21.407Z" fill="white"/>
<path d="M47.3271 25.4074C48.5045 25.3575 49.6403 24.9575 50.5891 24.2585C50.5891 24.2585 49.9182 26.1419 47.362 26.068L47.3271 25.4074Z" fill="#EB996E"/>
<path d="M53.6517 20.3257C52.7306 21.0684 51.6145 19.1461 51.1201 17.9419C50.6257 16.7376 50.4739 15.4041 50.4021 14.0891C50.3775 13.6582 50.3734 13.1864 50.6236 12.8479C50.8739 12.5094 50.9786 12.9053 51.2945 12.5935C51.8382 12.056 51.3212 12.0539 51.8648 12.1196C52.7942 12.2324 54.819 13.8429 54.9893 14.8174C55.1596 15.7918 55.0221 16.793 54.8847 17.7736C54.8211 18.2209 54.7575 18.6702 54.6959 19.1174C54.6739 19.4354 54.5829 19.7448 54.4292 20.0242C54.259 20.2868 53.9246 20.457 53.6517 20.3257Z" fill="#263238"/>
<path d="M53.6848 18.2187C53.6847 18.1196 53.7228 18.0242 53.7912 17.9524C53.8595 17.8805 53.953 17.8378 54.052 17.8331C54.528 17.8208 55.3055 18.0095 55.3794 19.3225C55.484 21.1955 53.6807 20.7278 53.6745 20.6744C53.6684 20.6211 53.6807 18.9491 53.6848 18.2187Z" fill="#FFBE9D"/>
<path d="M54.0869 19.9381C54.0869 19.9381 54.1217 19.9587 54.1771 19.9812C54.2158 19.9974 54.2573 20.0058 54.2992 20.0058C54.3411 20.0058 54.3826 19.9974 54.4213 19.9812C54.6162 19.8971 54.7659 19.5709 54.7557 19.2365C54.752 19.0751 54.712 18.9167 54.6387 18.7729C54.6174 18.7155 54.5826 18.6642 54.5372 18.6231C54.4919 18.5821 54.4373 18.5525 54.3782 18.5369C54.3402 18.5285 54.3004 18.534 54.2661 18.5524C54.2318 18.5709 54.2054 18.6011 54.1915 18.6375C54.1689 18.6908 54.1915 18.7277 54.173 18.7318C54.1546 18.7359 54.13 18.7011 54.1423 18.6231C54.1495 18.5764 54.1727 18.5336 54.2079 18.5021C54.2575 18.4601 54.3216 18.4395 54.3864 18.4446C54.4641 18.4554 54.5378 18.4859 54.6003 18.5333C54.6628 18.5808 54.7121 18.6435 54.7434 18.7154C54.8331 18.8733 54.8824 19.0509 54.887 19.2324C54.887 19.6099 54.7208 19.9751 54.4541 20.0674C54.405 20.0853 54.3524 20.0916 54.3005 20.0859C54.2486 20.0802 54.1986 20.0626 54.1546 20.0346C54.093 19.9833 54.0807 19.9422 54.0869 19.9381Z" fill="#EB996E"/>
<path d="M50.6134 12.8602C50.344 13.7232 49.8832 14.5141 49.2655 15.1741C48.6478 15.8341 47.889 16.3462 47.0457 16.672C46.9776 16.7084 46.9015 16.7275 46.8242 16.7275C46.7469 16.7275 46.6708 16.7084 46.6026 16.672C46.4467 16.5489 46.5062 16.2904 46.6375 16.1406C46.7688 15.9909 46.9514 15.8863 47.0478 15.7119L46.0938 16.2514C45.943 16.3482 45.7764 16.4176 45.6015 16.4566C45.5134 16.4753 45.422 16.471 45.3361 16.444C45.2502 16.417 45.1727 16.3684 45.1111 16.3027C45.0829 16.2686 45.0621 16.229 45.05 16.1864C45.0379 16.1438 45.0349 16.0992 45.041 16.0554C45.0472 16.0115 45.0625 15.9695 45.0859 15.9319C45.1092 15.8943 45.1402 15.862 45.1768 15.837C44.9614 16.1899 44.4095 16.2227 44.0915 15.9581C43.9418 15.8146 43.8347 15.6324 43.7822 15.4318C43.7297 15.2312 43.7338 15.0199 43.7941 14.8215C43.9204 14.4255 44.1515 14.0711 44.4629 13.7957C45.782 12.5115 47.7002 12.0458 49.5363 11.9206C50.1024 11.863 50.6739 11.8878 51.2329 11.9945C51.7868 12.1176 52.6444 12.0724 53.6435 13.1659" fill="#263238"/>
<path d="M46.1041 17.3264C46.0836 17.3859 45.7492 17.31 45.3368 17.3264C44.9245 17.3429 44.5901 17.4188 44.5675 17.3634C44.5449 17.308 44.8732 17.1213 45.3307 17.1131C45.7882 17.1049 46.1267 17.2752 46.1041 17.3264Z" fill="#263238"/>
<path d="M49.8521 17.3693C49.8316 17.4268 49.5074 17.355 49.1094 17.3365C48.7114 17.318 48.3832 17.3529 48.3668 17.2934C48.3504 17.2339 48.6848 17.1006 49.1197 17.1232C49.5546 17.1457 49.8726 17.316 49.8521 17.3693Z" fill="#263238"/>
<path d="M54.7576 16.2698C54.7268 16.2513 54.8273 16.0646 54.8992 15.7446C54.9948 15.3301 54.9713 14.8969 54.8315 14.4952C54.6825 14.0968 54.4253 13.7479 54.0888 13.4879C53.8283 13.2827 53.6313 13.2068 53.6436 13.174C53.6559 13.1412 53.8713 13.174 54.175 13.3648C54.5723 13.6105 54.8747 13.9836 55.0326 14.4233C55.1906 14.863 55.1949 15.3432 55.0448 15.7856C54.9279 16.12 54.7761 16.2841 54.7576 16.2698Z" fill="#455A64"/>
<path d="M57.1167 38.1987L58.5774 47.2932L46.8159 51.6855L48.7197 55.6122L61.0967 51.745C62.0716 51.4382 62.9012 50.7864 63.4299 49.9117C63.9587 49.037 64.1503 47.9995 63.9688 46.9937L62.3871 38.2028L57.1167 38.1987Z" fill="#FFBE9D"/>
<path d="M46.8881 51.6587C46.8881 51.6587 44.6991 50.9612 43.6487 50.6925C43.2384 50.5878 41.4884 51.5131 40.278 52.2804C40.278 52.2804 38.6122 53.2692 38.7476 53.5728C38.8953 53.9093 39.5107 53.8395 40.4893 53.38C40.4893 53.38 40.1467 54.3709 40.8196 54.3504C40.8196 54.3504 40.4852 55.4233 41.115 55.5341C41.7449 55.6449 41.8926 54.2765 42.4465 54.2026C43.0004 54.1288 44.1493 54.0549 44.1493 54.0549C44.1493 54.0549 45.1032 55.6367 45.8438 55.7475C46.5844 55.8582 48.7898 55.6079 48.7898 55.6079L46.8881 51.6587Z" fill="#FFBE9D"/>
<path d="M42.4565 52.0938C41.923 52.5142 41.3468 52.8772 40.7373 53.177C40.9905 52.9544 41.2654 52.7578 41.5579 52.5902C41.8395 52.3942 42.1406 52.2278 42.4565 52.0938Z" fill="#EB996E"/>
<path d="M42.6453 52.7031C42.3256 52.9087 41.9878 53.0845 41.6359 53.2283C41.2991 53.4029 40.9468 53.5457 40.5835 53.655C40.9017 53.4482 41.2391 53.2724 41.5908 53.1298C41.9282 52.9551 42.2813 52.8122 42.6453 52.7031Z" fill="#EB996E"/>
<path d="M42.3046 54.176C42.0793 54.2599 41.8429 54.3104 41.603 54.3258C41.3663 54.3792 41.123 54.3979 40.8809 54.3812C41.1058 54.2958 41.3423 54.2446 41.5825 54.2293C41.8192 54.1759 42.0626 54.1579 42.3046 54.176Z" fill="#EB996E"/>
</svg>
`}
      width={width}
      height={height}
    />
  );
};
export { CryptoHelpLinkIcon };