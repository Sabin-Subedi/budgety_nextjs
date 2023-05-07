"use client";
import { Form } from "@/Form";
import FormField from "@/Form/FormField";
import { Icon } from "@chakra-ui/react";
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
import { loginSchema } from "../validations/authValidations";
import Logo from "@/components/Logo";

function AuthLoginForm() {
  async function googleSignIn() {}
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
      <Form
        containterStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
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

        <AppButton type="submit" size="md" my="1rem">
          Login
        </AppButton>
      </Form>

      <DividerText text="or" />

      <AppFlex flexDir="column" gap="1rem" mt="1rem">
        <AppButton
          w="full"
          leftIcon={<Icon as={FcGoogle} fontSize="1rem" />}
          iconSpacing="0.5rem"
          size="md"
          colorScheme="gray"
          variant="outline"
          borderColor="gray.400"
        >
          Continue with Google
        </AppButton>
        <AppButton
          w="full"
          leftIcon={<Icon as={FaFacebook} fontSize="1rem" color="facebook" />}
          iconSpacing="0.5rem"
          size="md"
          colorScheme="gray"
          variant="outline"
          borderColor="gray.400"
        >
          Continue with Facebook
        </AppButton>
      </AppFlex>
      <AppText textAlign="center" mt="1rem" variant="link">
        Don&apos;t have an account? Sign Up
      </AppText>
    </AppBox>
  );
}

export default AuthLoginForm;
