import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ContactCopyIcon: React.FC<Props> = ({
  width,
  height,
  color = '#5E0CBC',
}) => {
  return (
    <SvgCss
      xml={`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 5.625H6.875C6.18464 5.625 5.625 6.18464 5.625 6.875V12.5C5.625 13.1904 6.18464 13.75 6.875 13.75H12.5C13.1904 13.75 13.75 13.1904 13.75 12.5V6.875C13.75 6.18464 13.1904 5.625 12.5 5.625Z" stroke="#F8981D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.125 9.375H2.5C2.16848 9.375 1.85054 9.2433 1.61612 9.00888C1.3817 8.77446 1.25 8.45652 1.25 8.125V2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H8.125C8.45652 1.25 8.77446 1.3817 9.00888 1.61612C9.2433 1.85054 9.375 2.16848 9.375 2.5V3.125" stroke="#F8981D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
      width={width ?? 19}
      height={height ?? 14}
      fill={color}
    />
  );
};

export { ContactCopyIcon };
