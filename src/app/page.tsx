import Link from "next/link";
import React from "react";
import { AppButton } from "ui";

function HomePage() {
  return (
    <div>
      HomePage
      <AppButton as={Link} href="/login">
        Login
      </AppButton>
    </div>
  );
}

export default HomePage;
