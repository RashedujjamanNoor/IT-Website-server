const { z } = require("zod");

const signupSchema = z.object({
  // username: z
  //   .string({ required_error: "Name must be at least 4 cahareacters" })
  //   .trim()
  //   .min(4, { message: "Name must be at least 4 charecters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(4, { message: "Email must be at least of 4 charecters" })
    .max(255),
  phone: z
    .string({ required_error: "Number is required" })
    .trim()
    .min(10, { message: "Number must be at least 10 charecters" })
    .max(255),
  password: z
    .string({ required_error: "Password is required " })
    .trim()
    .min(5, { message: "Password must be at least 5 charecters" })
    .max(255),
});

module.exports = signupSchema;
