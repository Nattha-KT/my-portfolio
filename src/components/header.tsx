"use client";
import { useEffect, useState } from "react";
import { Logo, MobileNav, Nav } from ".";
import { usePathname } from "next/navigation";
import {ThemeToggler} from './shared'

export function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${
        header
          ? " py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark: bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === '/' && ' bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className=" flex justify-between items-center">
          {" "}
          <Logo />
          <div className=" flex items-center gap-x-6">
            <Nav
              containerStyles=" hidden xl:flex gap-x-8 intems-conter"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles=" absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className=" xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
