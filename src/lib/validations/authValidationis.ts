import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().email("Enter a valid Email"),
    password: z.string(),
  })
  .required();
