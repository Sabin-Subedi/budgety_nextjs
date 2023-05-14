"use client";
import { Form } from "@/Form";
import FormField from "@/Form/FormField";
import Link from "@/components/Link";
import Logo from "@/components/Logo";
import ErrorBox from "@/components/ui/ErrorBox";
import useAppMutation from "@/hooks/useAppMutation";
import { LoginSuccessResponse } from "@/types/response/auth";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  AppBox,
  AppButton,
  AppFlex,
  AppHeading,
  AppText,
  DividerText,
} from "ui";
import OAuthButton from "../../components/OAuthButton";
import { loginSchema } from "../validations/authValidations";

interface AuthLoginFormInputs {
  email: string;
  password: string;
}

function AuthLoginForm() {
  const { mutateAsync, isLoading, error } = useAppMutation<
    AuthLoginFormInputs,
    LoginSuccessResponse
  >({
    name: "login",
    onSuccess: (data) => {},
  });
  return (
    <AppBox mt="1rem" minW="sm">
      <AppBox mb="1rem" textAlign="center">
        <Logo mb="1rem" />
        <AppHeading as="h2" size="md">
          Welcome back
        </AppHeading>
        <AppText variant="subtitle">
          Enter your email to sign in to your account
        </AppText>
      </AppBox>
      <Form<AuthLoginFormInputs>
        formName="login"
        containerStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        onSubmit={(data) => {
          mutateAsync(data);
        }}
        defaultValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
      >
        <FormField
          name="email"
          label="Email"
          placeholder="name@example.com"
          showLabel={false}
        />
        <FormField
          name="password"
          label="Password"
          placeholder="*********"
          showLabel={false}
        />
        <ErrorBox err={error?.message} />
        <AppButton isLoading={isLoading} type="submit" size="md" my="1rem">
          Login
        </AppButton>
      </Form>

      <DividerText text="or" />

      <AppFlex flexDir="column" gap="1rem" mt="1rem">
        <OAuthButton icon={FcGoogle} name="Google" />
        <OAuthButton
          icon={FaFacebook}
          name="Facebook"
          iconProps={{
            color: "facebook",
          }}
        />
      </AppFlex>
      <Link name="register">
        <AppText textAlign="center" mt="1rem" variant="link">
          Don&apos;t have an account? Sign Up
        </AppText>
      </Link>
    </AppBox>
  );
}

export default AuthLoginForm;
