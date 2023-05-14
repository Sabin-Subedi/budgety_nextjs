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
      <ChakraProvider
        theme={appTheme}
        toastOptions={{
          defaultOptions: {
            duration: 3000,
            position: "top-right",
            isClosable: false,
            variant: "solid",
          },
        }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

export default ThemeProvider;
