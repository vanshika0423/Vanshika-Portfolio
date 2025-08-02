import React from "react";
import { Timeline } from "./Timeline";
import Image from "next/image";
import freg from "../../asset/memory_freg.png";
import fre1 from "../../asset/memory_freg1.jpg";
import freq2 from "../../asset/memory_freg3.png";
import freq3 from "../../asset/memory_freg4.png";
import compiler1 from "../../asset/comp1.png";
import compiler2 from "../../asset/comp2.png";
import compiler3 from "../../asset/comp3.jpg";
import compiler4 from "../../asset/comp4.jpg";
import craditcard1 from "../../asset/cradit1.png";
import craditcard2 from "../../asset/cradit2.jpg";
import craditcard3 from "../../asset/cardit3.jpg";
import craditcard4 from "../../asset/cradit4.jpg";

import mail1 from "../../asset/coldmain.png"
import mail2 from "../../asset/coldmain1.png"
import mail3 from "../../asset/coldmain2.png"
import mail4 from "../../asset/coldmain3.png"

export function TimelineDemo() {
  const data = [
    {
      title: "Cold Email Genius",
      content: (
        <a
          href="https://cold-email-ai-agent-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <div>
            <p className="mb-8 text-xs font-normal  md:text-sm text-neutral-200">
              Cold Email Genius is your smart AI-powered assistant that crafts personalized, high-converting cold emails in seconds.
              Just drop in a job description or target profile, and let the AI handle the rest — tone, structure, and persuasion optimized.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={mail1}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
              <Image
                src={mail2}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
              <Image
                src={mail4}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
              <Image
                src={mail3}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </a>
      ),
    },
        {
      title: "Memory Fragmentation Visualizer",
      content: (
        <a
          href="https://memory-fragmentation-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
              A Memory Fragmentation Visualizer is a tool designed to
              graphically represent how memory is allocated and used within a
              system, highlighting the presence and extent of fragmentation. It
              provides a visual layout of memory blocks, showing allocated,
              free, and fragmented regions, making it easier to understand how
              inefficient memory usage can occur over time due to allocation and
              deallocation patterns.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={freg}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
              <Image
                src={fre1}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
              <Image
                src={freq3}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
              <Image
                src={freq2}
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </a>
      ),
    },
    {
      title: "Multi Language Compiler",
      content: (
        <a
          href="https://multi-lang-compiler-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
              Developed a fully responsive and user-friendly frontend interface
              for seamless code editing, compilation, and output visualization.
            </p>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              build my own compiler for compile the code.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={compiler1}
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <Image
                src={compiler4}
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <Image
                src={compiler3}
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <Image
                src={compiler2}
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        </a>
      ),
    },
    {
      title: "Credit Card Fraud Detection ",
      content: (
                <a
          href="https://github.com/MayankGEHU/Credit-Card-Fraud-Detection"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            Developed a machine learning model to detect fraudulent credit card
            transactions using real-world, imbalanced datasets.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ Machine learning
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ Python
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ SMOTE
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ Random Forest algorithm
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300">
              ✅ GridSearchCV
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={craditcard1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={craditcard2}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={craditcard3}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={craditcard4}
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
        </a>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
