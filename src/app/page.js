import { TimelineDemo } from "./components/ui/TimelineDemo";
import { BackgroundBeamsWithCollisionDemo } from "./components/ui/BackgroundBeamsWithCollisionDemo";
import { HeroHighlightDemo } from "./components/ui/HeroHighlightDemo";
import { StickyScrollRevealDemo } from "./components/ui/StickyScrollRevealDemo";
import { TextHoverEffectDemo } from "./components/ui/TextHoverEffectDemo";
import { SignupFormDemo } from "./components/ui/SignupFormDemoo";
import SplashCursor from "./components/ui/SplashCursor";
import { FloatingNavDemo } from "./components/ui/FloatingNavDemo";
export default function Home() {
  return (
    <div className="relative">
      {/* <FloatingNavDemo/> */}
      <SplashCursor/>
      <BackgroundBeamsWithCollisionDemo />
      <TimelineDemo/>
      <HeroHighlightDemo/>
       <TextHoverEffectDemo/>
       <StickyScrollRevealDemo/>
       <SignupFormDemo/>
    </div>
  );
}
