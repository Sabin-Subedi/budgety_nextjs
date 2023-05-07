import { withDefaultSize } from "@chakra-ui/react";

export const defaultSize = () =>
  withDefaultSize({
    size: {
      base: "sm",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
      "3xl": "3xl",
    },
    components: ["Container"],
  });
