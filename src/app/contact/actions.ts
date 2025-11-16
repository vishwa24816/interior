"use server";

import { z } from "zod";

const formSchema = z.object({
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
  // We'll validate the data on the server side as well for security
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    // This won't be sent to the client, but it's good practice for logging
    console.error("Invalid form data received:", parsedData.error);
    throw new Error("Invalid data submitted.");
  }

  console.log("Form submitted:", parsedData.data);
  // Here you would typically send an email or save to a database.
  // We'll simulate a delay.
  await new Promise(resolve => setTimeout(resolve, 1000));
}
