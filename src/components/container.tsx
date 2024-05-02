import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="max-w-[1440px] mx-auto">{children}</section>;
};
