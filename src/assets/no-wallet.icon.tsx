import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  size?: number;
}

const BNoWalletIcon: React.FC<Props> = ({ size }) => {
  return (
    <SvgCss
      xml={`<svg xmlns="http://www.w3.org/2000/svg" width="103.853" height="103.84" viewBox="0 0 103.853 103.84">
      <defs>
          <style>
              .cls-1{fill:#007ef2}.cls-3,.cls-4{fill:#78c57a}.cls-4{opacity:.3}
          </style>
      </defs>
      <g id="saving_money" transform="translate(.013)">
          <g id="Group_7876" transform="translate(11.327 11.336)">
              <path id="Path_7843" d="M87.1 21.711C44.908 5.857 47.877 6.814 47.017 7.106L8.07 21.711c-1.412.552-1.055.957-1.055 11.262A1.623 1.623 0 0 0 8.638 34.6h77.894a1.623 1.623 0 0 0 1.623-1.623c0-10.337.357-10.727-1.055-11.262zm-2.191 9.639H10.261v-6.993l37.324-13.989 37.324 13.989z" class="cls-1" transform="translate(-6.975 -6.986)"/>
              <path id="Path_7844" d="M82.026 22h-71.4A1.623 1.623 0 0 0 9 23.623v6.491a1.623 1.623 0 0 0 1.623 1.623h71.4a1.623 1.623 0 0 0 1.623-1.623v-6.491A1.623 1.623 0 0 0 82.026 22zM80.4 28.491H12.246v-3.245H80.4z" class="cls-1" transform="translate(-5.714 2.365)"/>
              <path id="Path_7845" d="M50.815 59.36H8.623A1.623 1.623 0 0 1 7 57.737v-8.114A1.623 1.623 0 0 1 8.623 48h42.192a1.623 1.623 0 0 1 1.623 1.623v8.114a1.623 1.623 0 0 1-1.623 1.623zm-40.57-3.246h38.948v-4.868H10.246z" class="cls-1" transform="translate(-6.96 18.558)"/>
              <path id="Path_7846" d="M49.57 53.737H10.623A1.623 1.623 0 0 1 9 52.114v-6.491A1.623 1.623 0 0 1 10.623 44H49.57a1.623 1.623 0 0 1 1.623 1.623v6.491a1.623 1.623 0 0 1-1.623 1.623zm-37.324-3.246h35.7v-3.245h-35.7z" class="cls-1" transform="translate(-5.714 16.067)"/>
              <path id="Path_7847" d="M28.851 26H12.623A1.623 1.623 0 0 0 11 27.623v3.246a4.868 4.868 0 0 0 3.246 4.576c1.055.406.8.292 11.36.292a4.868 4.868 0 0 0 4.868-4.868v-3.246A1.623 1.623 0 0 0 28.851 26zm-1.623 4.868a1.623 1.623 0 0 1-1.623 1.623h-9.737a1.623 1.623 0 0 1-1.623-1.623v-1.622h12.983z" class="cls-1" transform="translate(-4.469 4.857)"/>
              <path id="Path_7848" d="M28.851 49.737H12.623A1.623 1.623 0 0 1 11 48.114v-3.246A4.868 4.868 0 0 1 15.868 40h9.737a4.868 4.868 0 0 1 4.868 4.868v3.246a1.623 1.623 0 0 1-1.622 1.623zm-14.605-3.246h12.982v-1.623a1.623 1.623 0 0 0-1.623-1.623h-9.737a1.623 1.623 0 0 0-1.623 1.623z" class="cls-1" transform="translate(-4.469 13.576)"/>
              <path id="Path_7849" d="M22.737 43.4v2.824a9.249 9.249 0 0 1 3.051.227zM24.36 30h-9.737A1.623 1.623 0 0 0 13 31.623v16.228a1.623 1.623 0 0 0 1.623 1.623h9.737a1.623 1.623 0 0 0 1.623-1.623V31.623A1.623 1.623 0 0 0 24.36 30zm-8.114 16.228V33.246h6.491v12.982z" class="cls-1" transform="translate(-3.223 7.348)"/>
              <path id="Path_7850" d="M58.851 26H42.623A1.623 1.623 0 0 0 41 27.623v3.246a4.868 4.868 0 0 0 3.246 4.576c1.055.406.8.292 11.36.292a4.657 4.657 0 0 0 1.72-.325c3.651-1.3 3.148-4.836 3.148-7.789A1.623 1.623 0 0 0 58.851 26zm-1.623 4.868a1.623 1.623 0 0 1-1.623 1.623h-9.737a1.623 1.623 0 0 1-1.623-1.623v-1.622h12.983z" class="cls-1" transform="translate(14.215 4.857)"/>
              <path id="Path_7851" d="M54.36 30h-9.737A1.623 1.623 0 0 0 43 31.623v17.85a1.623 1.623 0 0 0 1.623 1.627h9.737a1.623 1.623 0 0 0 1.623-1.623V31.623A1.623 1.623 0 0 0 54.36 30zm-8.114 17.851V33.246h6.491v14.605z" class="cls-1" transform="translate(15.461 7.348)"/>
              <path id="Path_7852" d="M35.114 11a8.114 8.114 0 1 0 8.114 8.114A8.114 8.114 0 0 0 35.114 11zm0 12.982a4.868 4.868 0 1 1 4.868-4.868 4.868 4.868 0 0 1-4.868 4.868z" class="cls-1" transform="translate(5.496 -4.485)"/>
              <circle id="Ellipse_124" cx="4.868" cy="4.868" r="4.868" fill="#007ef2" opacity="0.5" transform="translate(35.742 9.76)"/>
          </g>
          <path id="Path_7853" d="M49.234 42.623V41h-11.36a4.868 4.868 0 0 0-4.868 4.868v6.492h1.623a1.623 1.623 0 0 1 1.623 1.623v-8.115a1.623 1.623 0 0 1 1.623-1.623h12.981a1.623 1.623 0 0 1-1.622-1.622zM67.084 41h-29.21a4.868 4.868 0 0 0-4.868 4.868c0 17.413-.114 16.78.292 17.851a4.868 4.868 0 0 0 4.576 3.246h29.21a4.868 4.868 0 0 0 4.869-4.865V45.868A4.868 4.868 0 0 0 67.084 41zm1.623 21.1a1.623 1.623 0 0 1-1.623 1.623h-29.21a1.623 1.623 0 0 1-1.525-1.1c-.1-.357-.1.99-.1-16.747a1.623 1.623 0 0 1 1.623-1.623h29.21a1.623 1.623 0 0 1 1.623 1.623z" class="cls-3" transform="translate(20.555 25.534)"/>
          <path id="Path_7854" d="M47.491 57.982a6.491 6.491 0 1 1 6.491-6.491 6.491 6.491 0 0 1-6.491 6.491zm0-9.737a3.246 3.246 0 1 0 3.246 3.246 3.246 3.246 0 0 0-3.246-3.245z" class="cls-3" transform="translate(25.543 28.026)"/>
          <path id="Path_7855" d="M54.246 49.623A1.623 1.623 0 1 1 52.623 48a1.623 1.623 0 0 1 1.623 1.623z" class="cls-3" transform="translate(31.77 29.894)"/>
          <path id="Path_7856" d="M40.246 49.623A1.623 1.623 0 1 1 38.623 48a1.623 1.623 0 0 1 1.623 1.623z" class="cls-3" transform="translate(23.051 29.894)"/>
          <path id="Path_7857" d="M31 46.228V31.623a1.623 1.623 0 0 1 3.246 0v14.605a1.623 1.623 0 0 1-3.246 0z" class="cls-3" transform="translate(19.315 18.684)"/>
          <path id="Path_7858" d="M39.362 38.118c-.893 0-.876-.211-4.868-4.2l-3.716 3.732a1.629 1.629 0 0 1-2.3-2.3l4.868-4.868a1.623 1.623 0 0 1 2.3 0l4.868 4.868a1.623 1.623 0 0 1-1.152 2.775z" class="cls-3" transform="translate(17.444 18.68)"/>
          <path id="Path_7859" d="M21.1 51.637c0 1.022 2.207 2.921-14.605-13.907C-7.505 23.741 2.637 0 22.11 0 32.9 0 37.641 6.378 45.073 13.81 9.923 27 11.368 25.965 11.368 27.587v9.737a1.623 1.623 0 0 0 1.623 1.623h1.623v4.868a1.623 1.623 0 0 0 1.623 1.623h1.623v1.623a4.868 4.868 0 0 0 3.24 4.576z" class="cls-4"/>
          <path id="Path_7860" d="M73.863 77.561a22.1 22.1 0 0 1-31.255 0l-4.868-4.869h26.387a4.868 4.868 0 0 0 4.868-4.868V51.6a4.868 4.868 0 0 0-4.868-4.868h-4.869V31.83c.195 0-1.185-1.314 14.605 14.492a22.1 22.1 0 0 1 0 31.239z" class="cls-4" transform="translate(23.512 19.807)"/>
      </g>
  </svg>
  `}
      width={size}
      height={size}
    />
  );
};
export { BNoWalletIcon };
