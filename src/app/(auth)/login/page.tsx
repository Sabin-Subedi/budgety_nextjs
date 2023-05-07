import { Form } from "@/Form";
import { Icons } from "@/components/icons";
// import AppContainer from "@/components/ui/AppContainer";
import Link from "next/link";
import { AppButton, AppContainer, AppIconButton } from "ui";

export const metadata = {
  title: "Login Page",
  description: "Login to your account",
};

function LoginPage() {
  return (
    <AppContainer py="1rem" minH="100vh">
      <Link href="/">
        <AppButton variant="ghost" leftIcon={<Icons.ChevronLeft />}>
          Back
        </AppButton>
      </Link>
    </AppContainer>
  );
}

export default LoginPage;
