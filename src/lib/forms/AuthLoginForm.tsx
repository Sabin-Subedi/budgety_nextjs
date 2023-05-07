"use client";
import { Form } from "@/Form";
import FormField from "@/Form/FormField";
import { AppBox, AppButton, AppHeading, AppText, DividerText } from "ui";
import { loginSchema } from "../validations/authValidationis";

function AuthLoginForm() {
  return (
    <AppBox mt="1rem" minW="sm">
      <AppBox mb="1rem" textAlign="center">
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
        <FormField name="email" label="Email" placeholder="name@example.com" />
        <FormField name="password" label="Password" placeholder="*********" />

        <AppButton type="submit" size="md" my="1rem">
          Login
        </AppButton>
      </Form>

      <DividerText text="or continue with" />
    </AppBox>
  );
}

export default AuthLoginForm;
