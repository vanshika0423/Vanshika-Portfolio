"use client";
import { useEffect, useState, useRef } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import { TimelineDemo } from "./components/ui/TimelineDemo";
import { BackgroundBeamsWithCollisionDemo } from "./components/ui/BackgroundBeamsWithCollisionDemo";
import { StickyScrollRevealDemo } from "./components/ui/StickyScrollRevealDemo";
import { SignupFormDemo } from "./components/ui/SignupFormDemoo";
import SplashCursor from "./components/ui/SplashCursor";
import { FloatingNavDemo } from "./components/ui/FloatingNavDemo";
import { HoverBorderGradientDemo } from "./components/ui/HoverBorderGradientDemo";
import SplineContactSection from "./components/ui/SplineContactSection";
import Footer from "./components/ui/Footer";
import BlurText from "./components/ui/BlurText";
import Coding_profiles from "./components/ui/Coding_profiles";
import SplitText from "./components/ui/SplitText/SplitText";
import Tech_Stack from "./components/ui/Tech_Stack";
import SelectedProjects from "./components/ui/SelectedProjects";
import { GlowingEffectDemo } from "./components/ui/GlowingEffectDemo";
import Certification from "./components/ui/Certification";



export default function Home() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const codingRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative">
      {/* <LoadingScreen /> */}

      <FloatingNavDemo
        refs={{ homeRef, projectRef, codingRef, contactRef }}
      />
      <SplashCursor />
      <div ref={homeRef}>
        <BackgroundBeamsWithCollisionDemo />
      </div>
      <div ref={projectRef}>
        <TimelineDemo />
      </div>
      {/* <div ref={codingRef}>
        <Coding_profiles />
      </div> */}
      <div ref={codingRef}>
        <SelectedProjects/>
      </div>
      <Tech_Stack/>
      <Certification/>
      {/* <GlowingEffectDemo /> */}
      <div ref={contactRef}>
        <SplineContactSection />
      </div>
      <Footer />
    </div>
  );
}
