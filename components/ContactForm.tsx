"use client";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "./ui/checkbox";

const FormSchema = z.object({
  firstname: z.string().min(2, {
    message: "firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "lastname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  brandname: z.string().min(2, {
    message: "brandname must be at least 2 characters.",
  }),
  consent: z.boolean().default(false).optional(),
});

function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      brandname: "",
      consent: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "We have received your details.",
      description: <>We will get back to you as soon as possible.</>,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-4/5 space-y-6 text-base"
      >
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name *</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name *</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brandname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Yes, please email me to follow up on my enquiry
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}

function ContactForm() {
  return (
    <div id="contact" className="w-full flex items-center py-16 md:py-24">
      <div className="flex flex-col md:flex-row lg:max-w-5xl mx-auto w-full px-5 ">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10 mt-16">
            Lets Collaborate
          </h2>
          <div className="flex flex-col">
            <a
              href="mailto:jackmkimbo@gmail.com"
              className="text-gray-700 dark:text-gray-300 mb-5 w-[80%] underline text-lg"
            >
              fpvdrones@gmail.com
            </a>
            <div className="flex flex-row mb-10">
              <a href="mailto:jackmkimbo@gmail.com">
                <FaInstagram className="w-7 h-7 mr-2" />
              </a>
              <a href="mailto:jackmkimbo@gmail.com">
                <FaYoutube className="w-7 h-7" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
