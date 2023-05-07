import React from "react";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import { appTheme } from "./theme";

function ThemeProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <ChakraBaseProvider theme={appTheme}>{children}</ChakraBaseProvider>;
}

export default ThemeProvider;
