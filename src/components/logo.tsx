"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/logo.svg"
        width={120}
        height={120}
        priority
        alt="logo-image"
      />
    </Link>
  );
}
