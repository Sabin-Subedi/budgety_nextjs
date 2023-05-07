import { defineStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

const ButtonTheme = defineStyleConfig({
  ...theme.components.Button,
  baseStyle: {
    ...theme.components.Button.baseStyle,
    fontWeight: 500,
  },
});

export default ButtonTheme;
