import { defineStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

const ButtonTheme = defineStyleConfig({
  ...theme.components.Button,
  variants: {
    ...theme.components.Button.variants,
  },
});

export default ButtonTheme;
