import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Enter a valid Email"),
    password: z.string().nonempty("Password is required"),
  })
  .required();
