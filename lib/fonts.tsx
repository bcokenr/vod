import { Zen_Maru_Gothic, Google_Sans, Antonio, Montserrat } from "next/font/google";

import localFont from 'next/font/local'

export const univers = localFont({
  src: [
    { path: '../public/fonts/UniversRegular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/UniversBold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/UniversLight.ttf', weight: '100', style: 'normal' },
  ],
  variable: '--font-univers',
  display: 'swap',
})

export const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-google",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-montserrat",
});

export const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-zenMaruGothic",
});

export const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-antonio",
});