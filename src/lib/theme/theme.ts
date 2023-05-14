import { extendTheme } from "@chakra-ui/react";
import { AlertTheme } from "./components/alert";
import ButtonTheme from "./components/button";
import ContainerTheme from "./components/container";
import DividerTheme from "./components/divider";
import HeadingTheme from "./components/heading";
import InputTheme from "./components/input";
import { TextTheme } from "./components/text";
import { defaultColorScheme } from "./default/colorScheme.default";
import { defaultProps } from "./default/props.default";
import { defaultSize } from "./default/size.default";
import { globalStyles } from "./default/styles.default";
import { defaultVariant } from "./default/variant.default";
import { BREAKPOINT_TOKEN } from "./tokens/breakpoint.token";
import { COLOR_TOKENS } from "./tokens/color.token";
import { FONT_TOKENS } from "./tokens/fonts.token";

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
      Alert: AlertTheme,
    },
  },
  defaultSize(),
  defaultColorScheme(),
  defaultVariant(),
  defaultProps()
);
