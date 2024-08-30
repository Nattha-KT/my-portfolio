"use client";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactElement } from "react";
import CountUp from "react-countup";

export type BadgeProps = ComponentPropsWithoutRef<"nav"> & {
  containerStyles: string;
  icon: ReactElement;
  endCountNum: number;
  endCountText: string;
  badgeText: string;
};

export function Badge({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}: Partial<BadgeProps>) {
  return (
    <div className={cn(` badge `, containerStyles)}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className=" flex items-center gap-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum ?? 0} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="leading-none max-w-[70px] text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
}
