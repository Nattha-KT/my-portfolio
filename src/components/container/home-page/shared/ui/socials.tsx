"use client";

import { ComponentPropsWithoutRef } from "react";
import { icons } from "../../../../features/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type SocialsProps = ComponentPropsWithoutRef<"div"> & {
  containerStyles: string;
  iconStyles: string;
  underLineStyles: string;
};

export function Socials({
  containerStyles,
  iconStyles,
}: Partial<SocialsProps>) {
  return (
    <div className={` ${cn(" ",containerStyles)} `}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
}
