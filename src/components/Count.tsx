"use client";
import CountUp from "react-countup";

export const Count = ({ end }: { end: number }) => (
  <CountUp start={end - end / 2} end={end} duration={2} />
);
