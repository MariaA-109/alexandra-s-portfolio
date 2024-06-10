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
  fontFamily: poppins.style.fontFamily,
  fontFamilyMonospace: poppins.style.fontFamily,
  defaultGradient: {
    from: "#eeaeca",
    to: "#94bbe9",
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
