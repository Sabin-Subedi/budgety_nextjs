import { defineStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

const DividerTheme = defineStyleConfig({
  baseStyle: {
    borderColor: "gray.300",
    borderRadius: "md",
  },
});

export default DividerTheme;
