"use client";

import { toast } from "sonner";

import { sendFromWebForm } from "@/actions/send-contact-form";
import { useAction } from "@/hooks/use-action";

import { FormInput } from "../ui/form/form-input";
import { FormSubmit } from "../ui/form/form-submit";
import { BadgeCheck, Loader2 } from "lucide-react";
import { FormTextarea } from "../ui/form/form-textarea";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter();

  const { execute, fieldErrors, isLoading } = useAction(sendFromWebForm, {
    onSuccess: (data) => {
      toast("Odesláno", {
        description: "Děkujeme za zprávu",
        unstyled: true,
        icon: <BadgeCheck className="my-2 size-6" />,
        classNames: {
          toast: "bg-[#00F0AF] min-w-[350px] rounded-lg p-2",
          title: "text-[#0E0E0E] py-2",
          description: "text-[#0E0E0E]/80",
        },
      });
      router.push("/thankyou");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    await execute({ email, name, surname, phone, company, message });
  };

  return (
    <form
      action={onSubmit}
      className="flex w-full flex-col gap-10 md:max-w-3xl"
    >
      <div className="flex flex-col gap-5">
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <FormInput
            id="name"
            label={"Jméno"}
            type="text"
            errors={fieldErrors}
            className="w-full text-black/60"
          />
          <FormInput
            id="surname"
            label={"Příjmení"}
            type="text"
            errors={fieldErrors}
            className="text-black/60"
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormInput
            id="email"
            label={"E-mail"}
            type="email"
            errors={fieldErrors}
            className="text-black/60"
          />
          <FormInput
            id="phone"
            label={"Telefon"}
            type="text"
            errors={fieldErrors}
            className="text-black/60"
          />
        </div>
        <div className="flex flex-col gap-5">
          <FormInput
            id="company"
            label={"Společnost"}
            type="text"
            errors={fieldErrors}
            className="text-black/60"
          />
          <FormTextarea
            id="message"
            label={"Zpráva"}
            errors={fieldErrors}
            className="text-black/60"
          />
        </div>
      </div>
      <FormSubmit className="w-full" variant="default">
        {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : "Odeslat"}
      </FormSubmit>
    </form>
  );
};

export default ContactForm;
