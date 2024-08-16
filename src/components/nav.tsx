"use client";
import { links } from "@/constant/link-page";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";

export type NavProps = ComponentPropsWithoutRef<"nav"> & {
  containerStyles: string;
  linkStyles: string;
  underLineStyles: string;
};

export function Nav({ containerStyles, linkStyles,underLineStyles }: Partial<NavProps>) {
  const path = usePathname();

  return (
    <nav className={cn("", containerStyles)}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={` capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{type:"tween"}}
              layoutId="underline"
              className={` ${underLineStyles}`}
            ></motion.span>
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
