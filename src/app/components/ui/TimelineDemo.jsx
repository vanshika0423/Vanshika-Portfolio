import React from "react";
import { Timeline } from "./Timeline";
import Image from "next/image";
import freg from "../../asset/fileSystem1.png";
import fre1 from "../../asset/fileSystem2.png";
import freq2 from "../../asset/fileSystem4.png";
import freq3 from "../../asset/fileSystem3.png";
import compiler1 from "../../asset/attendance1.png";
import compiler2 from "../../asset/attendance2.png";
import compiler3 from "../../asset/attendance3.png";
import compiler4 from "../../asset/attendance4.png";
import craditcard1 from "../../asset/compiler1.png";
import craditcard2 from "../../asset/compiler4.png";
import craditcard3 from "../../asset/compiler3.png";
import craditcard4 from "../../asset/compiler2.png";

import mail1 from "../../asset/cityMap1.png"
import mail2 from "../../asset/cityMap4.png"
import mail3 from "../../asset/cityMap2.png"
import mail4 from "../../asset/cityMap3.png"

export function TimelineDemo() {
  const data = [
    {
      title: "City Explorer Map",
      content: (
        <a
          href="https://city-explorer-map-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <div>
            <p className="mb-8 text-xs font-normal  md:text-sm text-neutral-200">
            The City-Explorer-Map Website is a responsive web application built with React, Leaflet, and OpenStreetMap APIs to help users discover nearby restaurants, parks, museums, and attractions.
            It features real-time distance and travel time calculations, interactive route visualization, advanced search and category filtering, and persistent favorites via local storage—offering a seamless and engaging user experience.
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
      title: "Virtual File System",
      content: (
        <a
          href="https://hybrid-file-system.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
              The Virtual File System project is a simulated file management platform that mimics real-world file system operations. It supports creating, reading, updating, and deleting files and folders, along with hierarchical directory structures, metadata tracking, and efficient file navigation.
               Designed with a user-friendly interface and optimized backend logic, it demonstrates core concepts of operating systems, including file allocation, indexing, and storage management, making it ideal for learning and showcasing system-level programming skills.
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
      title: "Facial Recognition Attendance System",
      content: (
        <a
          href="https://github.com/vanshika0423/face-attendance-system"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
              The Face Recognition Attendance System is an AI-powered application designed to automate attendance tracking using computer vision and machine learning. Built with technologies like OpenCV, Python, and deep learning models, it accurately detects and recognizes faces in real time, marking attendance without manual input.
              The system supports secure data storage, real-time logging, and report generation, making it ideal for classrooms, offices, or events where accuracy and efficiency are critical.
            </p>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
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
      title: "C Compiler Frontend",
      content: (
                <a
          href="https://github.com/vanshika0423/compiler_project"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            The C Compiler Frontend project is a custom-built compiler component that performs lexical analysis, syntax parsing, and semantic validation for C programs. Using Flex and Bison, it handles tokenization, grammar parsing, and AST generation, ensuring accurate interpretation of complex C constructs like functions, loops, arrays, and conditionals.
             The project also includes a robust symbol table to enforce type compatibility, scoping, and argument validation, providing a strong foundation for advanced compiler design and language processing tasks.
          </p>
          <div className="mb-8">
            {/*  */}
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
