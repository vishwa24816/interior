"use server";

import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export type FormData = z.infer<typeof formSchema>;

export async function handleFormSubmission(data: FormData) {
  console.log("Form submitted:", data);
  // Here you would typically send an email or save to a database.
  // We'll simulate a delay.
  await new Promise(resolve => setTimeout(resolve, 1000));
}
