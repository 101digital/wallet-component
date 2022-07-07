import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ContactClockIcon: React.FC<Props> = ({
  width,
  height,
  color = '#F8981D',
}) => {
  return (
    <SvgCss
      xml={`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z" stroke="#F8981D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.5 3.75V7.5L10 8.75" stroke="#F8981D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
      width={width ?? 19}
      height={height ?? 14}
      fill={color}
    />
  );
};

export { ContactClockIcon };
