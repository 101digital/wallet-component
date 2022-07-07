import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const HelpCenterFAQIcon: React.FC<Props> = ({
  width,
  height,
  color = '#FF9800',
}) => {
  return (
    <SvgCss
      xml={`<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.48462 26.4913L7.52359 22.9103L7.93928 22.4946L8.40295 22.9424L8.0992 23.2461L7.42774 25.5322L9.6817 24.8607L9.98546 24.557L10.4332 25.0045L10.0175 25.4362L6.48462 26.4913Z" fill="#F8981D"/>
      <path d="M21.8955 9.1145L23.6539 10.905L10.2415 24.4933L8.4831 22.7029L21.8955 9.1145ZM21.8955 8.20322L7.58789 22.7026L10.2416 25.4043L24.5492 10.9049L21.8955 8.20322Z" fill="#F8981D"/>
      <path d="M9.25635 23.2479L22.8153 9.5191L23.2702 9.96837L9.71128 23.6972L9.25635 23.2479Z" fill="#F8981D"/>
      <path d="M25.5241 9.73807L25.0765 9.29051L25.8599 8.49118L24.2612 6.8766L23.4778 7.66L23.0303 7.21243L23.8455 6.38125C23.9415 6.26931 24.0853 6.22131 24.2451 6.22131C24.421 6.22131 24.5807 6.30119 24.7088 6.42907L26.3074 8.04366C26.5632 8.29941 26.5791 8.66711 26.3554 8.90693L25.5241 9.73807Z" fill="#F8981D"/>
      <path d="M24.0857 11.8159L23.622 11.3684L24.9808 9.99361L22.7748 7.75557L21.416 9.13034L20.9683 8.68278L22.7748 6.8443L25.8761 9.99361L24.0857 11.8159Z" fill="#F8981D"/>
      <path d="M10.9449 15.8606L8.70689 13.5906H7.30005V6.10895H15.7725V13.5906H10.9445L10.9449 15.8606ZM7.93947 12.9511H8.96264L10.3055 14.31V12.9511H15.1336V6.74828H7.93982V12.9511H7.93947Z" fill="#F8981D"/>
      <path d="M26.1634 26.891H17.6909V19.4094H22.5189V17.1394L24.757 19.4094H26.1638V26.891H26.1634ZM18.3303 26.2515H25.524L25.5239 20.0491H24.5007L23.1578 18.6902V20.0491H18.3302L18.3303 26.2515Z" fill="#F8981D"/>
      <path d="M11.3283 12.0081C10.1454 12.0081 9.17017 11.0329 9.17017 9.83404C9.17017 8.63499 10.1454 7.65977 11.3283 7.65977C12.5113 7.65977 13.4865 8.63499 13.4865 9.83387C13.4865 11.0329 12.5113 12.0081 11.3283 12.0081ZM11.3283 8.28322C10.4971 8.28322 9.80958 8.9706 9.80958 9.81794C9.80958 10.6653 10.497 11.3527 11.3283 11.3527C12.1595 11.3527 12.8471 10.6653 12.8471 9.81794C12.8471 8.9706 12.1597 8.28322 11.3283 8.28322Z" fill="#F8981D"/>
      <path d="M11.7646 10.8163L12.2196 10.367L13.3429 11.5044L12.888 11.9536L11.7646 10.8163Z" fill="#F8981D"/>
      <path d="M20.1212 25.2446L19.5615 24.9249L22.0075 20.6245L24.4694 24.9408L23.9099 25.2446L22.0075 21.9194L20.1212 25.2446Z" fill="#F8981D"/>
      <path d="M20.5049 23.6617H23.5103V24.3011H20.5049V23.6617Z" fill="#F8981D"/>
      </svg>      
`}
      width={width}
      height={height}
      fill={color}
    />
  );
};

export { HelpCenterFAQIcon };
