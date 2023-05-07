import {
  extendBaseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import ContainerTheme from "./components/container";
import { defaultSize } from "./default/size.default";
import { globalStyles } from "./default/styles.default";
import { BREAKPOINT_TOKEN } from "./tokens/breakpoint.token";
import { COLOR_TOKENS } from "./tokens/color.token";
import { FONT_TOKENS } from "./tokens/fonts.token";
import ButtonTheme from "./components/button";
import InputTheme from "./components/input";
import HeadingTheme from "./components/heading";
import { TextTheme } from "./components/text";
import { defaultColorScheme } from "./default/colorScheme.default";
import DividerTheme from "./components/divider";
import { defaultVariant } from "./default/variant.default";
import { defaultProps } from "./default/props.default";

export const appTheme = extendTheme(
  {
    styles: globalStyles,
    colors: COLOR_TOKENS,
    fonts: FONT_TOKENS,
    breakpoints: BREAKPOINT_TOKEN,
    components: {
      Container: ContainerTheme,
      Button: ButtonTheme,
      Input: InputTheme,
      Heading: HeadingTheme,
      Text: TextTheme,
      Divider: DividerTheme,
    },
  },
  defaultSize(),
  defaultColorScheme(),
  defaultVariant(),
  defaultProps()
);
