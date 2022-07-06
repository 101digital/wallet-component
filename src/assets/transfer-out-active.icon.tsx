import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const TransferoutActiveIcon: React.FC<Props> = ({
  width,
  height,
  color = 'blue',
}) => {
  return (
    <SvgCss
      xml={`<svg width="67" height="74" viewBox="0 0 67 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.62798 67V60.052H8.09998V58.996H1.94398V60.052H4.42798V67H5.62798ZM9.44595 67V62.968C9.69795 62.536 10.43 62.128 10.97 62.128C11.114 62.128 11.234 62.14 11.342 62.164V61.072C10.574 61.072 9.88995 61.516 9.44595 62.092V61.204H8.36595V67H9.44595ZM17.0766 67V63.088C17.0766 61.612 16.0086 61.06 14.7486 61.06C13.8126 61.06 13.0206 61.372 12.3726 62.008L12.8406 62.752C13.3566 62.236 13.9206 61.984 14.5806 61.984C15.4086 61.984 15.9966 62.416 15.9966 63.136V64.096C15.5526 63.58 14.8806 63.328 14.1006 63.328C13.1286 63.328 12.0846 63.904 12.0846 65.224C12.0846 66.496 13.1406 67.144 14.1006 67.144C14.8806 67.144 15.5406 66.868 15.9966 66.364V67H17.0766ZM15.9966 65.728C15.6726 66.16 15.1086 66.388 14.5086 66.388C13.7286 66.388 13.1766 65.92 13.1766 65.236C13.1766 64.552 13.7286 64.084 14.5086 64.084C15.1086 64.084 15.6726 64.312 15.9966 64.744V65.728ZM23.7994 67V62.932C23.7994 61.708 23.1634 61.06 21.9394 61.06C21.0394 61.06 20.2714 61.552 19.8874 62.02V61.204H18.8074V67H19.8874V62.86C20.1994 62.428 20.8114 62.02 21.4834 62.02C22.2274 62.02 22.7194 62.332 22.7194 63.292V67H23.7994ZM25.0065 66.244C25.5945 66.844 26.4465 67.144 27.4185 67.144C28.9425 67.144 29.7585 66.364 29.7585 65.368C29.7585 64.036 28.5585 63.76 27.5505 63.532C26.8305 63.364 26.2065 63.196 26.2065 62.692C26.2065 62.224 26.6625 61.936 27.3945 61.936C28.1265 61.936 28.7745 62.236 29.1105 62.644L29.5905 61.888C29.0985 61.42 28.3785 61.06 27.3825 61.06C25.9665 61.06 25.1745 61.852 25.1745 62.776C25.1745 64.024 26.3265 64.288 27.3105 64.516C28.0545 64.684 28.7145 64.876 28.7145 65.452C28.7145 65.944 28.2825 66.28 27.4665 66.28C26.6865 66.28 25.9185 65.884 25.5225 65.452L25.0065 66.244ZM33.6438 62.152V61.204H32.4678V60.82C32.4678 60.124 32.7918 59.764 33.3318 59.764C33.5238 59.764 33.7038 59.812 33.8478 59.896L34.0998 59.092C33.8478 58.948 33.5238 58.876 33.1518 58.876C32.1198 58.876 31.3878 59.572 31.3878 60.82V61.204H30.4278V62.152H31.3878V67H32.4678V62.152H33.6438ZM34.3145 64.096C34.3145 65.92 35.5865 67.144 37.3145 67.144C38.2505 67.144 39.0665 66.844 39.6425 66.28L39.1385 65.572C38.7065 66.016 38.0345 66.256 37.4225 66.256C36.2585 66.256 35.5385 65.44 35.4545 64.456H40.0385V64.192C40.0385 62.416 38.9585 61.06 37.2185 61.06C35.5265 61.06 34.3145 62.416 34.3145 64.096ZM37.2185 61.948C38.4425 61.948 38.9585 62.908 38.9825 63.676H35.4425C35.5025 62.884 36.0545 61.948 37.2185 61.948ZM42.4694 67V62.968C42.7214 62.536 43.4534 62.128 43.9934 62.128C44.1374 62.128 44.2574 62.14 44.3654 62.164V61.072C43.5974 61.072 42.9134 61.516 42.4694 62.092V61.204H41.3894V67H42.4694ZM47.8201 64.564V63.628H44.9401V64.564H47.8201ZM51.6097 67.144C53.4217 67.144 54.5377 65.776 54.5377 64.096C54.5377 62.428 53.4217 61.06 51.6097 61.06C49.8097 61.06 48.6817 62.428 48.6817 64.096C48.6817 65.776 49.8097 67.144 51.6097 67.144ZM51.6097 66.184C50.4577 66.184 49.8097 65.2 49.8097 64.096C49.8097 63.004 50.4577 62.02 51.6097 62.02C52.7737 62.02 53.4097 63.004 53.4097 64.096C53.4097 65.2 52.7737 66.184 51.6097 66.184ZM60.9009 67V61.204H59.8209V65.368C59.4969 65.8 58.8849 66.184 58.2129 66.184C57.4689 66.184 56.9889 65.896 56.9889 64.936V61.204H55.9089V65.296C55.9089 66.52 56.5209 67.144 57.7569 67.144C58.6449 67.144 59.3769 66.688 59.8209 66.208V67H60.9009ZM64.208 67.144C64.772 67.144 65.108 66.988 65.336 66.772L65.06 65.956C64.952 66.076 64.724 66.184 64.472 66.184C64.1 66.184 63.908 65.884 63.908 65.476V62.152H65.084V61.204H63.908V59.62H62.828V61.204H61.868V62.152H62.828V65.716C62.828 66.628 63.296 67.144 64.208 67.144Z" fill="white"/>
      <circle cx="33" cy="23" r="23" fill="#F8981D"/>
      <path d="M23.8 23V32.2C23.8 32.81 24.0423 33.395 24.4736 33.8263C24.905 34.2577 25.49 34.5 26.1 34.5H39.9C40.51 34.5 41.095 34.2577 41.5263 33.8263C41.9577 33.395 42.2 32.81 42.2 32.2V23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.6 16.1L33 11.5L28.4 16.1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33 11.5V26.45" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
      width={width}
      height={height}
      // fill={color}
    />
  );
};
export { TransferoutActiveIcon };
