import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
// import { TracingBeamDemo } from "./components/ui/TracingBeamDemo";
import {CardDemo} from "./components/ui/CardDemo"
import { TimelineDemo } from "./components/ui/TimelineDemo";
import { TabsDemo } from "./components/ui/TabsDemo";
import { LayoutGridDemo } from "./components/ui/LayoutGridDemo";
import { BackgroundBeamsWithCollisionDemo } from "./components/ui/BackgroundBeamsWithCollisionDemo";
import { SparklesPreview } from "./components/ui/SparklesPreview";
import { HeroHighlightDemo } from "./components/ui/HeroHighlightDemo";
import { StickyScrollRevealDemo } from "./components/ui/StickyScrollRevealDemo";
import { TextHoverEffectDemo } from "./components/ui/TextHoverEffectDemo";
import { SignupFormDemo } from "./components/ui/SignupFormDemoo";
export default function Home() {
  return (
    <div className="relative">
      <BackgroundBeamsWithCollisionDemo />
      {/* <SparklesPreview/> */}
      {/* <TracingBeamDemo/> */}
      <TimelineDemo/>
      <HeroHighlightDemo/>
       {/* <LayoutGridDemo/> */}
       <TextHoverEffectDemo/>
       <StickyScrollRevealDemo/>
       <SignupFormDemo/>
       {/* <TabsDemo/> */}
        {/* <CardDemo/> */}
    </div>
  );
}
