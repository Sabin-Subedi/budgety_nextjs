"use client";
import FullPageLoader from "@/components/ui/FullPageLoader";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

function GuestGuard() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/"); // redirect to home page if logged in
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn) return <FullPageLoader />;

  return <div>GuestGuard</div>;
}

export default GuestGuard;
