import Link from "next/link";
import React from "react";
import { Button } from "../../../../ui";
import { Download, Send } from "lucide-react";

import {
  RiTeamFill,
  RiBracesFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiBriefcase4Fill,
} from "react-icons/ri";
import { BadgeCustom, DevImage } from "../../../../shared/ui";
import { Socials } from "@/components/shared";

export function Hero() {
  return (
    <section className=" py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className=" container mx-auto">
        <div className=" flex justify-between gap-x-8">
          <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className=" text-sm uppercase font-semibold md-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className=" h1 mb-4"> Hello, my name is Natthaphon</h1>
            <p className=" subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo
              molestias sit ipsam, nostrum dignissimos similique soluta nemo
              cum, rerum reiciendis, velit eaque a excepturi iusto earum
              inventore accusamus ratione.
            </p>
            <div className=" flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className=" gap-x-2">
                  Contact me
                  <Send size={18} />
                </Button>
              </Link>
              <Button variant={"secondary"} className=" gap-x-2">
                Downlead CV
                <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles=" flex gap-x-6 mx-auto xl:mx-0"
              iconStyles=" text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className=" hidden xl:flex relative">
            <BadgeCustom
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of Experience"
              containerStyles=" absolute top-[24%] -left-[5rem] "
            />
            <div className=" bg-hero_shape2_light dark:bg-hero_shape2_dark bg-no-repeat w-[500px] h-[500px]  absolute -top-1 -right-2"></div>
            <DevImage
              containerStyles="bg-hero_shape w-[510px] h-[462px] relative bg-no-repeat bg-bottom"
              imgSrc="/about/minimal-profile.png"
            />
          </div>
        </div>
        <div className=" hidden md:flex absolute left-2/4 bttom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className=" text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}
