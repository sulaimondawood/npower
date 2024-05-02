"use client";

import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { ArrowLeftNav } from "@/components/svg/arrow-left-nav";
import { Tab } from "@/components/tab/tab";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current!.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main>
      <Container>
        <div className="flex justify-start pl-24 gap-3 items-center pt-[136px]">
          <p className="text-[#32A96A] text-sm leading-6 font-bold">Home</p>
          <ArrowLeftNav />
          <p className="text-[#32A96A] text-sm leading-6 font-bold">
            Programme Category
          </p>
          <ArrowLeftNav />
          <p>N-Power Graduate</p>
        </div>
        <Hero
          title=" N-Power Volunteer Corps"
          desc="This is the post-tertiary engagement initiative for Nigerians between
          18 and 35. It is a paid volunteering programme of a 2-year duration..."
          scrollTo={scrollToAbout}
        />
        <div ref={aboutRef} className="mt-[136px]">
          <h1 className="text-[44px] leading-[62px] text-center font-semibold">
            About Category
          </h1>
          <p className="text-lg leading-8 text-center w-[1060px] mx-auto pt-2">
            The N-Power Volunteer Corps is the post-tertiary engagement
            initiative for Nigerians between 18 and 35. It is a paid
            volunteering programme of a 2-year duration. The graduates will
            undertake their primary tasks in identified public services within
            their proximate communities. All N-Power Volunteers are entitled to
            computing devices that will contain information necessary for their
            specific engagement, as well as information for their continuous
            training and development. N-Power volunteers will provide teaching,
            instructional, and advisory solutions in 4 key areas.
          </p>
        </div>
        <div className="pt-[120px] px-[120px]">
          <p className="text-[#32A96A] font-light text-sm leading-8 uppercase">
            N-Power volunteer
          </p>
          <h1 className="text-[44px] leading-[62px] font-semibold">
            Programmes
          </h1>
          <Tab />
        </div>
      </Container>
    </main>
  );
}
