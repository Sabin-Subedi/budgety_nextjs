"use client";
import React from "react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { appTheme } from "./theme";
import { CacheProvider } from "@chakra-ui/next-js";

function ThemeProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={appTheme}>{children}</ChakraBaseProvider>
    </CacheProvider>
  );
}

export default ThemeProvider;
