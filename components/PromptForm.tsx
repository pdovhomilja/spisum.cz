"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

type Props = {};

const PromptForm = (props: Props) => {
  const [prompt, setPrompt] = useState("");
  const { toast } = useToast();

  const handleSubmit = async () => {
    const response = await fetch("/api/prompts", {
      method: "POST",
      body: JSON.stringify({
        prompt: prompt,
      }),
    });
    const data = await response.json();
  };

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
            handleSubmit();
            toast({
              title: "Added prompt",
              description: prompt,
            });
            setPrompt("");
          }}
        >
          Add prompt
        </Button>
      </div>
    </div>
  );
};

export default PromptForm;
