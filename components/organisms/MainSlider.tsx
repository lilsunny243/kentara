import React from "react";
// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainSlides from "../molecules/Slides/MainSlides";

import slide1 from "/public/img/slide1.jpg";

type Props = {};

const MainSlider = (props: Props) => {
  const slider = [
    {
      id: 1,
      image:
        "https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-06.jpg",
      tag: "Winter 2022 Collection",
      title: " Valentine Paul Essentials Collection",
      desc: "Lorem ipsum sit dolor amet...",
      link: "/",
    },
    {
      id: 2,
      image:
        "https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-04.jpg",
      tag: "Spring 2022 Collection",
      title: " Valentine Paul Essentials Collection",
      desc: "Lorem ipsum sit dolor amet...",
      link: "/",
    },
  ];

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
      }}
      navigation
      modules={[Pagination]}
      loop={true}
      className="max-w-[1170px]"
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
  );
};

export default MainSlider;
