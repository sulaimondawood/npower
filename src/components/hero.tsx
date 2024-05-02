import React from "react";
import { Button } from "./button";
import { Container } from "./container";

export const Hero = ({
  scrollTo,
  title,
  desc,
}: {
  scrollTo: () => void;
  title: string;
  desc: string;
}) => {
  return (
    <section className="px-[120px] flex justify-between items-center pt-9">
      <div className="w-[576px]">
        <h1 className="capitalize w-[480px] text-[56px] leading-[78.4px] font-bold text-cus-black">
          {title}
        </h1>
        <p className="text-cus-black text-[18px] leading-8 pt-4 pb-8">{desc}</p>
        <Button scrollTo={scrollTo}>Read More</Button>
      </div>
      <div className="relative h-[507px] w-[480px] bg-black rounded-[10px]"></div>
    </section>
  );
};
