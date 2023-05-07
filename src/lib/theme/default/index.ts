import { withDefaultSize } from "@chakra-ui/react";
import { defaultColorScheme } from "./colorScheme.default";

export const defaultThemeSettings = () => (
  defaultColorScheme(),
  withDefaultSize({
    size: {
      base: "sm",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
      "3xl": "3xl",
    },
    components: ["Container"],
  })
);
