"use client";
import React, { useRef, useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./Textarea";
import { cn } from "../../lib/util";
import emailjs from "@emailjs/browser";

export function SignupFormDemo() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tkjqs3a",    
        "template_18laqe9",    
        form.current,
        "65K9U1YH9sH3iwgaK"   
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="mt-30 shadow-input mx-auto w-full max-w-md rounded-none bg-black p-4 md:rounded-2xl md:p-8 dark:bg-black">
      {/* <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
        Interested in collaborating with me.
      </h2> */}
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        I'm always open to discussing coding challenges, debugging technical issues, or exploring collaboration on development projects.
      </p>

      <form ref={form} className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="First Name" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Last Name" type="text" required />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="sendyourquery@gmail.com"
            type="email"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message here"
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-black placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
            rows={4}
            required
          />
        </LabelInputContainer>

        <button
          disabled={loading}
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-60"
          type="submit"
        >
          {loading ? "Sending..." : "Send →"}
          <BottomGradient />
        </button>

        {sent && (
          <p className="mt-4 text-sm text-green-500">
            Message sent successfully!
          </p>
        )}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
