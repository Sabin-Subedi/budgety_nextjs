import { defineStyleConfig } from "@chakra-ui/react";

export const TextTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "body",
    fontWeight: "normal",
  },
  sizes: {
    sm: {
      fontSize: "0.8rem", // 12.8px
    },
    base: {
      fontSize: "1rem", // 16px
    },
    lg: {
      fontSize: "1.25rem", // 20px
    },
    xl: {
      fontSize: "1.5rem", // 24px
    },
    "2xl": {
      fontSize: "1.875rem", // 30px
    },
  },
  variants: {
    subtitle: {
      fontSize: "1em", // 20px
      lineHeight: "1.875em",
      fontWeight: 500,
      color: "gray.600",
    },
    caption: {
      fontSize: "0.875em", // 14px
      lineHeight: "1.25em",
      fontWeight: 400,
      color: "gray.600",
    },
  },
});
