import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { SendFromWebForm } from "./schema";

type Message = {
  email: string;
  name: string;
  surname: string;
  phone: string;
  company: string;
  message: string;
};

export type InputType = z.infer<typeof SendFromWebForm>;
export type ReturnType = ActionState<InputType, Message>;
