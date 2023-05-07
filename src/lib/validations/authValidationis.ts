import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string()
      .email("Enter a valid Email")
      .nonempty("Email is required"),
    password: z.string().nonempty("Password is required"),
  })
  .required();
