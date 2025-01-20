"use client";
import { toast } from "sonner";

import { sendFromDemoForm } from "@/actions/send-demo-request";
import { useAction } from "@/hooks/use-action";

import { FormInput } from "../ui/form/form-input";
import { FormSubmit } from "../ui/form/form-submit";
import { BadgeCheck, Loader2 } from "lucide-react";
import { FormTextarea } from "../ui/form/form-textarea";
import { useRouter } from "next/navigation";

type Props = {
  setOpen: (open: boolean) => void;
};

const DemoRequestForm = ({ setOpen }: Props) => {
  const router = useRouter();

  const { execute, fieldErrors, isLoading } = useAction(sendFromDemoForm, {
    onSuccess: (data) => {
      toast.success("Děkujeme za zájem o demo verzi Spisum.cz");
      setOpen(false);
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

export default DemoRequestForm;
