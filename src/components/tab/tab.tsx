"use client";
import React, { useState } from "react";
import { TabHeader } from "./tab-header";
import { TabContent } from "./tab-content";
import Tab1 from "@/components/assets/images/tab1.png";
export interface ITabData {
  title: string;
  content: string;
  image: any;
  action: string;
  id: number;
}

export const Tab = () => {
  const [activetab, setActiveTab] = useState(0);
  const tab: ITabData[] = [
    {
      id: 0,
      title: "N-Power Agro",
      content:
        "The Federal Government is engaging 100,000 qualified young Nigerians through the N-Power Agro programme.",
      image: Tab1,
      action: "",
    },
    {
      id: 0,
      title: "N-Power Teach",
      content:
        "The Federal Government is engaging 100,000 qualified young Nigerians through the N-Power Agro programme.",
      image: Tab1,
      action: "",
    },
    {
      id: 0,
      title: "N-Power Health",
      content:
        "The Federal Government is engaging 100,000 qualified young Nigerians through the N-Power Agro programme.",
      image: Tab1,
      action: "",
    },
    {
      id: 0,
      title: "N-Power Tax",
      content:
        "The Federal Government is engaging 100,000 qualified young Nigerians through the N-Power Agro programme.",
      image: Tab1,
      action: "",
    },
  ];

  const handleTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <section className="">
      <TabHeader active={activetab} data={tab} handleTab={handleTab} />
      <TabContent active={activetab} data={tab} />
    </section>
  );
};
