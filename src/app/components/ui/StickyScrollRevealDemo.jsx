"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import leetcode from "../../asset/leetcode.png";
import Image from "next/image";
import codeforce from "../../asset/codeforce.png";
import github from "../../asset/github.png";

const content = [
  {
    title: "Leet Code",
    description:
      "Programming isn't about what you know; it's about what you can figure out.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] opacity-80 z-10"></div>
        <Image
          src={leetcode}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />
      </div>
    ),
  },
  {
    title: "codeforces",
    description:
      "Programming isn't just about writing code. It's about solving problems, thinking logically, and building something meaningful from nothing. I'm not a great programmer; I'm just a good programmer with great habits.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] opacity-80 z-10"></div>
        <Image
          src={codeforce}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Without version control, coding is chaos. With it, you can experiment freely, fix mistakes confidently, and collaborate like a pro — even as a student.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] opacity-80 z-10"></div>
        <Image
          src={github}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />
      </div>
    ),
  },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div
  //       className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
