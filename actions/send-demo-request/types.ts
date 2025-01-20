import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { SendFromDemoForm } from "./schema";

type Message = {
  email: string;
  name: string;
  surname: string;
  phone: string;
  company: string;
  message: string;
};

export type InputType = z.infer<typeof SendFromDemoForm>;
export type ReturnType = ActionState<InputType, Message>;
