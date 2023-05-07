import { Form } from "@/Form";
import React from "react";
import { loginSchema } from "../validations/authValidationis";

function AuthLoginForm() {
  return (
    <Form validationSchema={loginSchema}>
      <input type="text" name="email" />
    </Form>
  );
}

export default AuthLoginForm;
