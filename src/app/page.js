"use client";
import { useEffect, useState, useRef } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import { TimelineDemo } from "./components/ui/TimelineDemo";
import { BackgroundBeamsWithCollisionDemo } from "./components/ui/BackgroundBeamsWithCollisionDemo";

import SplashCursor from "./components/ui/SplashCursor";
import { FloatingNavDemo } from "./components/ui/FloatingNavDemo";
import { HoverBorderGradientDemo } from "./components/ui/HoverBorderGradientDemo";
import SplineContactSection from "./components/ui/SplineContactSection";
import Footer from "./components/ui/Footer";
import Tech_Stack from "./components/ui/Tech_Stack";
import SelectedProjects from "./components/ui/SelectedProjects";

import Certification from "./components/ui/Certification";
import HeroSection from "./components/ui/HeroSection";

export default function Home() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const codingRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative">
      {/* <LoadingScreen /> */}

      <FloatingNavDemo refs={{ homeRef, projectRef, codingRef, contactRef }} />
      <SplashCursor />
      <div ref={homeRef}>
        {/* <BackgroundBeamsWithCollisionDemo /> */}
        <HeroSection/>
      </div>
      <div ref={projectRef}>
        <TimelineDemo />
      </div>
      <div ref={codingRef}>
        <SelectedProjects />
      </div>
      <Tech_Stack />
      <Certification />
      <div ref={contactRef}>
        <SplineContactSection />
      </div>
      <Footer />
    </div>
  );
}
