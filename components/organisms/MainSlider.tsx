import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainSlides from "../molecules/Slides/MainSlides";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const MainSlider = (props: Props) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

  const slider = [
    {
      id: 1,
      image:
        "https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-06.jpg",
      tag: "Winter 2022 Collection",
      title: " Valentine Paul Essentials Collection",
      desc: "Light up your Valentine's Day with our exclusive candle promotion. Treat your loved one to the soothing scents and warm ambiance of our hand-poured candles. From now until February 14th, buy one candle and get the second 50% off",
      link: "/",
    },
    {
      id: 2,
      image:
        "https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-04.jpg",
      tag: "Spring 2022 Collection",
      title: " Spring Paul Essentials Collection",
      desc: "Light up your Valentine's Day with our exclusive candle promotion. Treat your loved one to the soothing scents and warm ambiance of our hand-poured candles. From now until February 14th, buy one candle and get the second 50% off",
      link: "/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full bg-slate-500"
    >
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination]}
        loop={true}
        className="w-full"
      >
        {slider.map((v, i) => (
          <SwiperSlide key={i}>
            <MainSlides
              id={v.id}
              image={v.image}
              tag={v.tag}
              title={v.title}
              desc={v.desc}
              link={v.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default MainSlider;
