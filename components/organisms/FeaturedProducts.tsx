import Image from "next/image";
import React from "react";
import ProductCards from "../molecules/Cards/ProductCards";
import FeaturedHeader from "../molecules/Section/FeaturedHeader";

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

type Props = {};

const FeaturedProducts = ({ products }: any) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

  const demo = [
    {
      id: 1,
      image: "/",
      productTitle: "Blue Starter Logo T-Shirt",
      productPrice: "Rp. 150.000",
    },
    {
      id: 2,
      image: "/",
      productTitle: "Blue Starter Logo T-Shirt",
      productPrice: "Rp. 160.000",
    },
    {
      id: 3,
      image: "/",
      productTitle: "Blue Starter Logo T-Shirt",
      productPrice: "Rp. 170.000",
    },
    {
      id: 4,
      image: "/",
      productTitle: "Blue Starter Logo T-Shirt",
      productPrice: "Rp. 180.000",
    },
    {
      id: 5,
      image: "/",
      productTitle: "Blue Starter Logo T-Shirt",
      productPrice: "Rp. 190.000",
    },
    {
      id: 6,
      image: "/",
      productTitle: "Blue Starter Logo T-Shirt",
      productPrice: "Rp. 200.000",
    },
  ];

  return (
    <section className="w-full mt-20">
      <div className="w-[1170px] mx-auto flex flex-col border-b-[1px] border-gray pb-28">
        <FeaturedHeader />
        <div className="flex flex-row gap-8 ">
          <Swiper
            slidesPerView={4}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}
            className="max-w-[1170px] h-[500px]"
          >
            {demo.map((v: any) => (
              <SwiperSlide key={v.id}>
                <ProductCards
                  productType={{
                    image: v.image,
                    productPrice: v.productPrice,
                    productTitle: v.productTitle,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
