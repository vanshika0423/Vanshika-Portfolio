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
export default function Home() {
  return (
    <div className="relative">
      {/* <FloatingNavDemo/> */}
      <SplashCursor/>
      <BackgroundBeamsWithCollisionDemo />
      <TimelineDemo/>
  
<div className="w-full px-4 py-16 flex justify-center">
  <BlurText
    text="Deep diving into competitive programming and learning the art of optimization."
    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center leading-snug max-w-6xl"
  />
</div>



       <StickyScrollRevealDemo/>
       <SplineContactSection/>
       <Footer/>
    </div>
  );
}
