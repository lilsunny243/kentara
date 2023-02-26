import Image from "next/image";
import React from "react";
import PrimaryButton from "../atoms/Button/PrimaryButton";
import SectionHeader from "../molecules/Section/SectionHeader";

type Props = {};

const NewCollection = (props: Props) => {
  return (
    <section className="w-full mt-10">
      <div className="w-[1170px] mx-auto flex flex-row border-b-[1px] border-gray gap-28">
        <div className=" flex flex-col mb-10 w-6/12">
          <figure className="">
            <Image
              src={
                "https://klbtheme.com/clotya/wp-content/uploads/2022/05/image-01.jpg"
              }
              alt="Kucing"
              width={620}
              height={120}
            />
          </figure>
          <div className="relative flex flex-col">
            <div className="absolute right-0 w-10/12 text-justify">
              <p className="font-light text-[16px] text-slate-600 mt-8 flex flex-col">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida.
              </p>
              <p className="font-bold mt-6">Petra van der Meer</p>
            </div>
          </div>
        </div>
        <div className=" mb-10 w-6/12 p-2">
          <SectionHeader
            category={"New Collections"}
            title={"Best Sweatshirts and tracksuits for everyone!"}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis.`}
            
          />
          <PrimaryButton title={"Shop Now!"} />
          <figure className="mt-24">
            <Image
              src={
                "https://klbtheme.com/clotya/wp-content/uploads/2022/05/image-02.jpg"
              }
              alt="Kucing"
              width={507}
              height={480}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
