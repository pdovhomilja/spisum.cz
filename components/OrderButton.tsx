"use client";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ComputerDesktopIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  title: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  account: string;
  job: string;
  email: string;
  phone: string;
};

const OrderButton = ({ title }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    account: z.string().min(2).max(50),
    job: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(9).max(14),
  });

  const form = useForm<FormData>({ resolver: zodResolver(schema) }); // initialise the hook

  const onValid = useCallback(
    (data: FormData) => {
      setSending(true);
      fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        setTimeout(() => {
          router.push("/");
        }, 3000);
        setOpen(false);
        setSending(false);
      });
    },
    [router]
  );

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white w-11/12 lg:w-1/2 h-2/3 md:h-1/2 rounded-md overflow-hidden">
              <div
                className="px-5 pr-9 justify-center  py-3 border w-3 rounded-br-md cursor-pointer hover:bg-slate-900 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="w-5 h-5" />
              </div>

              <div className="flex flex-col items-center justify-center p-10 h-full ">
                {sending && (
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-extrabold tracking-tight lg:text-5xl">
                      Odesílám...
                    </p>
                  </div>
                )}
                {!sending && (
                  <div className="h-full ">
                    <h1 className="text-xl font-extrabold tracking-tight lg:text-5xl">
                      Chci přístup na Demo
                    </h1>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onValid)}
                        className=" w-full pt-10 overflow-auto h-full"
                      >
                        <div className="flex flex-row w-full space-x-2">
                          <div className="w-1/2">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Jméno</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="w-1/2">
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Přijmení</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <FormField
                          control={form.control}
                          name="account"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Firma</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="job"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pozice</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex flex-row w-full space-x-2">
                          <div className="w-1/2">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>E-mail</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="w-1/2">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Telefon</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className="flex space-x-5 pt-5">
                          <Button type="submit" className="bg-[#FE9601]">
                            Odeslat
                          </Button>
                          <Button onClick={() => setOpen(false)}>Zavřít</Button>
                        </div>
                        <div className="w-full pt-10 lg:px-20">
                          <p className="w-full text-xs ">
                            * Odesláním tohoto formuláře souhlasíte se
                            zpracováním osobních údajů. Více o ochraně osobních
                            údajů a Vašich právech naleznete{" "}
                            <Link
                              href="/consent"
                              target="_blank"
                              className="underline hover:text-blue-500"
                            >
                              ZDE
                            </Link>
                            .
                          </p>
                        </div>
                      </form>
                    </Form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        <Button className="bg-[#FE9601] hover:bg-[#4154B3] gap-2">
          <ComputerDesktopIcon className="w-5 h-5" />
          {title}
        </Button>
      </div>
    </div>
  );
};

export default OrderButton;
