import { extendBaseTheme } from "@chakra-ui/react";
import { COLOR_TOKENS } from "./tokens/color.token";
import { FONT_TOKENS } from "./tokens/fonts.token";

export const appTheme = extendBaseTheme({
  colors: COLOR_TOKENS,
  fonts: FONT_TOKENS,
});
