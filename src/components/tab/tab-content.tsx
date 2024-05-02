import React from "react";
import { Button } from "../button";
import Image from "next/image";
import ImageTtab1 from "@/components/assets/images/tab1.png";
import { ITabData } from "./tab";

export const TabContent = ({
  active,
  data,
}: {
  active: number;
  data: ITabData[];
}) => {
  return (
    <div className="flex justify-between items-center pt-16">
      <div className="w-[520px]">
        <h1 className="pb-6 text-[32px] leading-[54px] font-bold text-cus-black capitalize">
          {data[active].title}
        </h1>
        <p className="text-cus-black text-base leading-6">
          {data[active].content}
        </p>
        <div className="mt-8">
          <Button>Programme Details</Button>
        </div>
      </div>
      <div className="relative w-[422px] h-[480px]">
        <Image
          className="object-cover rounded-[10px]"
          src={ImageTtab1.src}
          fill
          alt="tab image"
        />
      </div>
    </div>
  );
};
