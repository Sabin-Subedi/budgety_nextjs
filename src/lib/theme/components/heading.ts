import { defineStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

const HeadingTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "semibold",
  },
  sizes: {
    sm: {
      fontSize: "1.25em", // 20px
      lineHeight: "1.875em",
      fontWeight: 500,
    },
    md: {
      fontSize: "1.5em", // 24px
      lineHeight: "2em",
      fontWeight: 700,
    },
    lg: {
      fontSize: "1.875em", // 30px
      lineHeight: "2.25em",
      fontWeight: 700,
    },
    xl: {
      fontSize: "2.25em", // 36px
      lineHeight: "2.5em",
      fontWeight: 700,
    },
    "2xl": {
      fontSize: "3em", // 48px
      lineHeight: "2.625em",
      fontWeight: 700,
    },
    "3xl": {
      fontSize: "3.75em", // 60px
      lineHeight: "2.875em",
      fontWeight: 700,
    },
  },
});

export default HeadingTheme;
