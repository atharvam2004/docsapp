import React, { useRef } from "react";
import Card from "./card";
import { motion } from "framer-motion";

export default function foreground() {
  const data = [
    {
      desc: "Financial Report Q1 2024: This document contains detailed financial analysis and performance metrics for the first quarter of 2024",
      filesize: "2.5MB",
      close: true,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Marketing Strategy Presentation: A comprehensive presentation outlining the marketing strategies and tactics for the upcoming product launch. Inclu",
      filesize: "5.8MB",
      close: false,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Employee Handbook 2024: The updated employee handbook provides guidelines, policies, and procedures for all employees.",
      filesize: "1.2MB",
      close: true,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Project Proposal Template: This customizable template simplifies the process of creating project proposals. ",
      filesize: "0.7MB",
      close: false,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Customer Satisfaction Survey Results: An analysis of the recent customer satisfaction survey responses. ",
      filesize: "1.5MB",
      close: true,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  const refrr = useRef(null);
  return (
    <div
      ref={refrr}
      className=" w-full h-screen fixed top-0 left-0 z-[10] flex flex-wrap gap-9"
    >
      {data.map((item, index) => (
        <Card data={item} refrr={refrr} />
      ))}
    </div>
  );
}
