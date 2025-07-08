"use client";
import React from "react";
import { FloatingNav } from "./floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo({ refs }) {
  const scrollToRef = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      name: "Home",
      onClick: () => scrollToRef(refs.homeRef),
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      onClick: () => scrollToRef(refs.projectRef),
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Coding profile",
      onClick: () => scrollToRef(refs.codingRef),
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      onClick: () => scrollToRef(refs.contactRef),
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full z-50">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
