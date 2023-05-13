"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import React from "react";

function AuthGuard() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  return <div>AuthGuard</div>;
}

export default AuthGuard;
