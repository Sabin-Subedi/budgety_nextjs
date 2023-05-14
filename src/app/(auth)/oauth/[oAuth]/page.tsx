"use client";
import FullPageLoader from "@/components/ui/FullPageLoader";
import { DEFAULT_HOME_ROUTE, DEFAULT_LOGIN_ROUTE } from "@/config/site";
import useAppMutation from "@/hooks/useAppMutation";
import { LoginSuccessResponse } from "@/types/response/auth";
import { setLocalStorageItem } from "@/utils/storage/localstorage";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

async function OAuthProviderPage({
  params,
  searchParams,
}: {
  params: {
    oAuth: string;
  };
  searchParams: Record<string, any>;
}) {
  const { oAuth } = params;
  const router = useRouter();
  const toast = useToast();
  const { mutate } = useAppMutation<{}, LoginSuccessResponse>({
    name: `${oAuth}_oauth`,
    method: "get",
    requestConfig: {
      params: searchParams,
    },
    onSuccess: ({ data: { data } }) => {
      console.log(data);
      data.access_token &&
        setLocalStorageItem("accessToken", data.access_token);
      data.refresh_token &&
        setLocalStorageItem("refreshToken", data.refresh_token);
      router.push(DEFAULT_HOME_ROUTE);
    },
    onError: (error) => {
      toast({
        title: `Could not login with ${oAuth}. Please try again.`,
        status: "error",
      });
      router.push(DEFAULT_LOGIN_ROUTE);
    },
  });

  useEffect(() => {
    mutate({});
  }, [mutate]);

  return <FullPageLoader />;
}

export default OAuthProviderPage;
