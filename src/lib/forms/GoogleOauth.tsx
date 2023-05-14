"use client";
import { REACT_BASE_URL } from "@/constants/env";
import useAppMutation from "@/hooks/useAppMutation";
import { getAPIRouteByName } from "@/utils/route-handler";
import { Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AppButton } from "ui";

function GoogleOauth() {
  const router = useRouter();
  return (
    <AppButton
      onClick={() => {
        router.replace(REACT_BASE_URL + getAPIRouteByName("google_oauth"));
      }}
      w="full"
      leftIcon={<Icon as={FcGoogle} fontSize="1rem" />}
      iconSpacing="0.5rem"
      size="md"
      colorScheme="gray"
      variant="outline"
      borderColor="gray.400"
    >
      Continue with Google
    </AppButton>
  );
}

export default GoogleOauth;
