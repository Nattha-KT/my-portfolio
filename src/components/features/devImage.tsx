import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { Button } from "../ui";
import { Download, Send } from "lucide-react";

import {
  RiTeamFill,
  RiBracesFill,
  RiTodoFill,
  RiArrowDownLine,
} from "react-icons/ri";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type DevImageProps = ComponentPropsWithoutRef<"div"> & {
  containerStyles: string;
  imgSrc: string;
};

export function DevImage({
  containerStyles,
  imgSrc,
}: Partial<DevImageProps>) {
  return (
    <div className={`${cn(" ", containerStyles)}`}>
      <Image src={`${imgSrc}`} fill priority alt="bg-shape"  />
    </div>
  );
}
