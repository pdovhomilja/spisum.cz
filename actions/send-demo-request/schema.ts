import { z } from "zod";

export const SendFromDemoForm = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Email must be a valid email",
    }),

  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),

  surname: z.string({
    required_error: "Surname is required",
    invalid_type_error: "Surname must be a string",
  }),

  phone: z.string({
    required_error: "Phone is required",
    invalid_type_error: "Phone must be a string",
  }),

  company: z.string({
    required_error: "Company is required",
    invalid_type_error: "Company must be a string",
  }),

  message: z.string({
    required_error: "Message is required",
    invalid_type_error: "Message must be a string",
  }),
});
