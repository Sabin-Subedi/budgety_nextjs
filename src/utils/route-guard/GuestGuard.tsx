"use client";
import FullPageLoader from "@/components/ui/FullPageLoader";
import { DEFAULT_HOME_ROUTE } from "@/config/site";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

function GuestGuard({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push(DEFAULT_HOME_ROUTE); // redirect to home page if logged in
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn) return <FullPageLoader />;

  return <>{children}</>;
}

export default GuestGuard;
