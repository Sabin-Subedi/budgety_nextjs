"use client";
import React from "react";
import { AppBox, AppFlex } from "./chakra-ui-wrapper";
import { Spinner } from "@chakra-ui/react";

function FullPageLoader() {
  return (
    <AppFlex
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Spinner size="lg" color="primary.main" />
    </AppFlex>
  );
}

export default FullPageLoader;
