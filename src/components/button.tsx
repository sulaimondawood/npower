import React from "react";
import { ArrowLeft } from "./svg/arrow-left";

export const Button = ({
  children,
  scrollTo,
}: {
  children: string;
  scrollTo: () => void;
}) => {
  return (
    <button
      onClick={scrollTo}
      className="flex items-center gap-3 border border-[#288855] p-4 rounded-[6px] text-cus-green font-bold"
    >
      <span>{children}</span>
      <ArrowLeft />
    </button>
  );
};
