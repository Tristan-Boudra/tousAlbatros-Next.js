"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { emailContact } from "../contact/form.action";

export const FormContact = () => {
  const form = useZodForm({
    schema: z.object({
      emailTo: z.string().min(2, {
        message: "Votre nom doit contenir au moins 2 caractères.",
      }),
      subject: z.string().min(2, {
        message: "Le sujet doit contenir au moins 2 caractères.",
      }),
      message: z.string().min(2, {
        message: "Le message doit contenir au moins 2 caractères.",
      }),
    }),
  });

  interface ValuesProps {
    emailTo: string;
    subject: string;
    message: string;
  }

  const onSubmit = async (values: ValuesProps) => {
    await emailContact(values.emailTo, values.subject, values.message);
    form.reset();
  };

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          control={form.control}
          name="emailTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mail</FormLabel>
              <FormControl>
                <Input placeholder="Mail" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sujet</FormLabel>
              <FormControl>
                <Input placeholder="Sujet" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Message" type="textarea" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button
        type="submit"
        className="mt-5 w-max mx-auto"
        onClick={form.handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </Form>
  );
};
