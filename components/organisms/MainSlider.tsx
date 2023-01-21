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
        delay: 3000,
      }}
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
