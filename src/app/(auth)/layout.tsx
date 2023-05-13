import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { AppBox } from "ui";

const GuestGuard = dynamic(() => import("@/utils/route-guard/GuestGuard"), {
  ssr: false,
});
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <AppBox minHeight="100vh">
      <Suspense fallback={<div>Loading...</div>}>
        <GuestGuard>{children}</GuestGuard>
      </Suspense>
    </AppBox>
  );
}
