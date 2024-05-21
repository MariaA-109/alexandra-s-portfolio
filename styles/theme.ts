import { DEFAULT_THEME, createTheme } from "@mantine/core";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const theme = createTheme({
  ...DEFAULT_THEME,
  colors: {
    navy: [
      "#e0efff",
      "#b1ceff",
      "#80adff",
      "#4f8cfe",
      "#226bfd",
      "#0e51e4",
      "#053fb2",
      "#002d80",
      "#001b4f",
      "#00091f",
    ],
  },
  fontFamily: poppins.style.fontFamily,
  fontFamilyMonospace: poppins.style.fontFamily,
  primaryColor: "navy",
  primaryShade: {
    light: 7,
    dark: 8,
  },
  defaultGradient: {
    from: "#A5D8FF",
    to: "#B197FC",
    deg: 25,
  },
  breakpoints: {
    xs: "37em",
    sm: "50em",
    md: "62em",
    lg: "75em",
    xl: "87em",
  },
});

// #002466
