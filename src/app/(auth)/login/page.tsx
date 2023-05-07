import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/icons";
import AuthLoginForm from "@/lib/forms/AuthLoginForm";
import { AppButton, AppContainer, AppFlex } from "ui";
import { PAGE_ROUTES } from "@/constants/pageRoutes";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Login to your account",
};

function LoginPage() {
  return (
    <AppContainer display="flex" flexDirection="column" py="1rem" minH="100vh">
      <Link href={PAGE_ROUTES.home}>
        <AppButton
          colorScheme="gray"
          variant="ghost"
          leftIcon={<Icons.ChevronLeft />}
        >
          Back
        </AppButton>
      </Link>
      <AppFlex flex={1} alignItems="center" justifyContent="center">
        <AuthLoginForm />
      </AppFlex>
    </AppContainer>
  );
}

export default LoginPage;
