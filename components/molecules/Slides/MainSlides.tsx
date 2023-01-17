import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

import slide1 from "/public/img/slide2.jpg";

type Slide = {
  id: number;
  image: string;
  tag: string;
  title: string;
  desc: string;
  link: string;
};

type Props = {};

const MainSlides = ({ id, image, tag, title, desc, link }: any) => {
  return (
    <div className="relative max-w-[1200px] mx-auto flex flex-col w-full">
      <div className="w-[1200px] -z-10 mx-auto bg-slate-400">
        <Image
          className="w-full object-contain"
          width={1500}
          height={500}
          src={image}
          alt={title}
        />
      </div>
      <div className="absolute flex flex-col w-full gap-10 mt-12 ml-10">
        <div>
          <h3 className="text-[16px] font-medium uppercase">{tag}</h3>
          <h1 className="text-[72px] font-light w-7/12 leading-none">
            {title}
          </h1>
        </div>
        <p className="text-[14px] font-thin w-5/12">{desc}</p>
        <Link href={link}>
          <button className="font-medium flex items-center gap-5">
            Shop Collection
            <span className="mt-[2px]">
              <FaArrowCircleRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainSlides;
