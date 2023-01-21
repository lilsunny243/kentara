import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[1300px] h-[455px] -z-10 mx-auto"
      >
        <Image
          className="w-full object-contain"
          width={1500}
          height={500}
          src={image}
          alt={title}
        />
      </motion.figure>
      <div className="absolute flex flex-col w-full gap-10 mt-12 ml-10">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[16px] font-medium uppercase"
          >
            {tag}
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[72px] font-light w-7/12 leading-none"
          >
            {title}
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[14px] font-thin w-5/12"
        >
          {desc}
        </motion.p>
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
