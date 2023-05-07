import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const ContainerTheme = defineStyleConfig({
  baseStyle: {
    mx: "auto",
  },
  sizes: {
    sm: defineStyle({
      maxWidth: "container.sm",
      fontSize: "sm",
    }),
    lg: defineStyle({
      maxWidth: "container.lg",
      fontSize: "md",
    }),
    xl: defineStyle({
      maxWidth: "container.xl",
      fontSize: "md",
    }),
    "2xl": defineStyle({
      maxWidth: "1400px",
      fontSize: "md",
    }),
    "3xl": defineStyle({
      maxWidth: "106em",
      fontSize: "md",
    }),
  },
});

export default ContainerTheme;
