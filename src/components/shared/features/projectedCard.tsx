"use client";

import { ProjectedDataItem } from "@/model";
import { Badge, Card, CardHeader } from "../../ui";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export type ProjectedCardProps = {
  projected: ProjectedDataItem;
};

export function ProjectedCard({ projected }: ProjectedCardProps) {
  return (
    <Card className=" group overflow-hidden relative">
      <CardHeader className=" p-0">
        {/* image */}
        <div
          className=" relative w-full h-[300px] flex justify-center items-center
        bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light 
        xl:dark:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat overflow-hidden"
        >
          <Image
            src={projected.image}
            alt=" project-card-img"
            width={247}
            height={250}
            className=" absolute bottom-0 shadow-2xl"
            priority
          ></Image>
          <div className=" flex gap-x-4">
            <Link
              href={projected.link}
              className=" bg-secondary w-[54px] h-[54px] rounded-full flex items-center justify-center 
            opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400"
            >
              <Link2Icon className=" text-white" />
            </Link>
            <Link
              href={projected.github}
              className=" bg-secondary w-[54px] h-[54px] rounded-full flex items-center justify-center 
            opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <GitHubLogoIcon className=" text-white h-6 w-6" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className=" h-full px-8 py-6">
        <Badge className=" uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {projected.category}
        </Badge>
        <h4 className=" h4 mb-1">{projected.name}</h4>
        <p className=" text-muted-foreground text-lg">
          {projected.description}
        </p>
      </div>
    </Card>
  );
}
