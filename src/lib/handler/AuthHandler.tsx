"use client";
import FullPageLoader from "@/components/ui/FullPageLoader";
import useAuth from "@/hooks/useAuth";
import { ReactNode, useEffect } from "react";

function AuthHandler({ children }: { children: ReactNode }) {
  const { initialized, loginUser, logOutUser } = useAuth();

  useEffect(() => {
    // do something
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken) {
      // call api to get user data
      loginUser({
        name: "John Doe",
      });
    } else if (refreshToken) {
      // call api to get new access token
    } else {
      // redirect to login page
      logOutUser();
    }
  }, [loginUser, logOutUser]);

  if (!initialized) return <FullPageLoader />;

  return <>{children}</>;
}

export default AuthHandler;
