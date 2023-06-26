"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
import { addPrompt } from "@/lib/actions/addPrompt";
import { useRouter } from "next/navigation";

type Props = {};

const PromptForm = (props: Props) => {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const { toast } = useToast();

  return (
    <div className="grid w-full gap-2 p-10">
      <Label htmlFor="message">New prompt</Label>
      <Textarea
        placeholder="Type your prompt here."
        id="message"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex w-full justify-end pr-10">
        <Button
          className="w-1/3"
          onClick={() => {
            addPrompt(prompt);
            toast({
              title: "Added prompt",
              description: prompt,
            });
            setPrompt("");
            router.refresh();
          }}
        >
          Add prompt
        </Button>
      </div>
    </div>
  );
};

export default PromptForm;
