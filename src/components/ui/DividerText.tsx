"use client";
import React from "react";
import { AppFlex, AppText } from "./chakra-ui-wrapper";
import { Divider, Text, TextProps } from "@chakra-ui/react";
interface DividerTextProps {
  text: string;
  textProps?: TextProps;
}
function DividerText({ text }: DividerTextProps) {
  return (
    <AppFlex alignItems="center">
      <Divider />
      <AppText
        variant="caption"
        flex={1}
        minW="max-content"
        padding="2"
        textTransform="uppercase"
      >
        {text}
      </AppText>
      <Divider />
    </AppFlex>
  );
}

export default DividerText;
