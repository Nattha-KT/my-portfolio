"use client";

import { projectedData } from "@/constant";
import Link from "next/link";
import { Button } from "../ui";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ProjectedCard } from "../shared";

export function Works() {
  return (
    <section className=" relative mb-12 xl:mb-48">
      <div className=" container mx-auto">
        {/* text */}
        <div
          className=" max-w-[400px] mx-auto xl:ml-0 text-center
        xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
        xl:items-start"
        >
          <h2 className=" section-title mb-6">Lastest Projects</h2>
          <p className=" subtitle mb-8">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aut voluptate porro pariatur autem modi laboriosam explicabo facilis
            voluptatibus sunt!
          </p>
          <Link href={"/projects"}>
            <Button>All Project</Button>
          </Link>
        </div>
        {/* slider */}
        <div className=" xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectedData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectedCard projected={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
