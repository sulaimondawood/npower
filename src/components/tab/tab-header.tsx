import React from "react";
import { ITabData } from "./tab";

export const TabHeader = ({
  data,
  active,
  handleTab,
}: {
  handleTab: (index: number) => void;
  active: number;
  data: ITabData[];
}) => {
  return (
    <div className=" mt-12 mb-4 p-2 flex gap-4 bg-[#F8F8F8] w-fit rounded-full justify-center items-center">
      {data.map((data, index) => {
        return (
          <button
            onClick={() => handleTab(index)}
            key={data.title + index}
            className={`rounded-full py-2 px-4 text-sm leading-6 ${
              active === index ? "bg-[#ECF3EF]" : "bg-transparent"
            }`}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};
