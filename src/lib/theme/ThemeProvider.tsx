"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { appTheme } from "./theme";

function ThemeProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={appTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

export default ThemeProvider;
