import { extendBaseTheme } from "@chakra-ui/react";
import ContainerTheme from "./components/container";
import { defaultThemeSettings } from "./default";
import { globalStyles } from "./default/styles.default";
import { BREAKPOINT_TOKEN } from "./tokens/breakpoint.token";
import { COLOR_TOKENS } from "./tokens/color.token";
import { FONT_TOKENS } from "./tokens/fonts.token";
import ButtonTheme from "./components/button";

export const appTheme = extendBaseTheme(
  {
    styles: globalStyles,
    colors: COLOR_TOKENS,
    fonts: FONT_TOKENS,
    breakpoints: BREAKPOINT_TOKEN,
    components: {
      Container: ContainerTheme,
      Button: ButtonTheme,
    },
  },
  defaultThemeSettings()
);
