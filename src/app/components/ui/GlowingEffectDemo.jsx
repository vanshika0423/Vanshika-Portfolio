import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GlowingEffect } from "../ui/glowing-effect";
import amazone1 from "../../asset/ama.png";
import amazone2 from "../../asset/ama1.png";
import morgan from "../../asset/jp.png";
import goo from "../../asset/google.png"

export function GlowingEffectDemo() {
  return (
    <div className="mt-20 mb-20 px-6 py-10 md:px-10 lg:px-16 xl:px-24">
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Introduction to Generative AI—By Google."
          description="Running out of copy so I'll write anything."
          img={goo}
          link="https://www.cloudskillsboost.google/public_profiles/8c3f7f85-b261-46cf-80b0-68973ffaf140/badges/8004039"
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="AWS Cloud Practitioner Essentials."
          description="AWS Cloud Course link"
          img={amazone1}
          link="https://drive.google.com/file/d/1eSBEjE2A5IimIer6afYcEX9kAabQQDHO/view"
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Certification"
        //   description="It's the best money you'll ever spend"
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Quantitative Research Job Simulation — JPMorgan Chase & Co."
          description="Job Simulation Link"
          img={morgan}
          link="https://drive.google.com/file/d/1xNfst3FxTMQyw7b__AWBTAWQ01qF3pWp/view"
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="AWS Skills Centers: Becoming a Cloud Practitioner - Part 1 - Cloud Basics."
          description="AWS Skills Center course"
          img={amazone2}
          link="https://drive.google.com/file/d/1tRpdAsRFOUk6J6yYOJTqmxvuiFWU6Ga9/view"
        />
      </ul>
    </div>
  );
}const GridItem = ({ area, icon, title, description, img, link }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          {img && link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src={img}
                alt={title}
                className="rounded-xl mb-4 object-cover"
                width={500}
                height={300}
              />
            </Link>
          ) : (
            img && (
              <Image
                src={img}
                alt={title}
                className="rounded-xl mb-4 object-cover"
                width={500}
                height={300}
              />
            )
          )}
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

