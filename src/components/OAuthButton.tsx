"use client";
import { REACT_BASE_URL } from "@/constants/env";
import useAppMutation from "@/hooks/useAppMutation";
import { getAPIRouteByName } from "@/utils/route-handler";
import { Icon, IconProps, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { AppButton } from "ui";

interface OAuthButtonProps {
  icon: IconType;
  name: string;
  iconProps?: IconProps;
}
function OAuthButton({ icon, name, iconProps }: OAuthButtonProps) {
  const router = useRouter();
  return (
    <AppButton
      onClick={() => {
        router.replace(
          REACT_BASE_URL + getAPIRouteByName(`${name.toLowerCase()}_oauth`)
        );
      }}
      w="full"
      leftIcon={<Icon as={icon} fontSize="1rem" {...iconProps} />}
      iconSpacing="0.5rem"
      size="md"
      colorScheme="gray"
      variant="outline"
      borderColor="gray.400"
    >
      Continue with {name}
    </AppButton>
  );
}

export default OAuthButton;
