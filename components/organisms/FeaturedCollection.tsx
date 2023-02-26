import React from "react";
import Image from "next/image";
import PrimaryButton from "../atoms/Button/PrimaryButton";
import SectionHeader from "../molecules/Section/SectionHeader";
import {
  FaRegStar,
  FaRegStarHalf,
  FaStar,
  FaStarAndCrescent,
  FaStarHalf,
  FaStarHalfAlt,
} from "react-icons/fa";

type Props = {};

const FeaturedCollection = (props: Props) => {
  return (
    <section className="w-full mt-10">
      <div className="w-[1170px] mx-auto flex flex-row border-b-[1px] border-gray gap-28">
        <div className=" flex flex-col mb-20 w-6/12">
          <figure className="h-[720px] w-full bg-transparent relative">
            <Image className="absolute " src={"https://klbtheme.com/clotya/wp-content/uploads/2022/05/image-01.jpg"} alt="" width={450} height={600}/>
            <Image className="absolute bottom-[30px] right-0 border-[20px] border-[#f4f4ed]" src={"https://klbtheme.com/clotya/wp-content/uploads/2022/05/image-02.jpg"} alt="" width={300} height={400}/>
          </figure>
        </div>
        <div className=" mb-20 w-6/12 p-2">
          <SectionHeader
            category={"New Collections"}
            title={"Best Sweatshirts and tracksuits for everyone!"}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis.`}
          />
          <PrimaryButton title={"Shop Now!"} />
          <div className="flex border-b-2 border-gray-300 mt-24"></div>

          <div className="flex flex-col">
            <div className="flex gap-1 mt-20 items-center ">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStarHalfAlt className="text-yellow-400" />
              <FaRegStar className="text-yellow-400" />
              <p className="text-light text-[14px] text-gray-600 ml-6">
                4.5 (10.000+) Rating
              </p>
            </div>
            <div className="">
            <p className="font-light text-[16px] text-slate-600 mt-8">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <p className="font-bold mt-6">Petra van der Meer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
