import Image from "next/image";
import React from "react";
import ProductDesc from "../atoms/ProductPage/ProductDesc";
import ProductHeading2 from "../atoms/ProductPage/ProductHeading2";
import ProductImage from "../atoms/ProductPage/ProductImage";
import ProductPrice from "../atoms/ProductPage/ProductPrice";
import ProductSelection from "../atoms/ProductPage/ProductSelection";
import ProductTitle from "../atoms/ProductPage/ProductTitle";

type Props = {};

const MainProduct = (props: Props) => {
  const size: object[] = [
    {
      id: 1,
      name: "Mini",
    },
    {
      id: 2,
      name: "Tall",
    },
    { id: 3, name: "Venti" },
  ];

  const type: object[] = [
    {
      id: 1,
      name: "Lavender",
    },
    {
      id: 2,
      name: "Apple",
    },
    { id: 3, name: "Palm Tree" },
  ];

  return (
    <section className="flex flex-col max-w-[1170px] mx-auto">
      <div className="flex justify-between gap-10">
        <ProductImage />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <ProductTitle />
            <ProductPrice />
            <ProductDesc />
          </div>

          <div className="flex flex-col gap-3">
            <ProductHeading2 title={"Size"} />
            <div className="flex flex-wrap">
              {size.map((v: any, i: number) => (
                <ProductSelection key={v.id} title={v.name} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <ProductHeading2 title={"Type"} />
            <div className="flex flex-wrap">
              {type.map((v: any, i: number) => (
                <ProductSelection key={v.id} title={v.name} />
              ))}
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <div className="flex gap-3 border-[1px] h-[50px] w-[120px] items-center justify-between px-5 ">
              <button className="font-bold text-[20px]">-</button>
              <span></span>
              <button className="font-bold text-[20px]">+</button>
              {/* <span>{count != 0 && count}</span> */}
            </div>
            <button className="h-[50px] w-[200px] rounded-md bg-black text-white ">
              Add to cart
            </button>
            <button className="h-[50px] w-full rounded-md bg-red-500 text-white">
              Buy Now
            </button>
          </div>

          <div className="flex gap-5 border-b-[1px] py-6">
            <h3>Size Guide</h3>
            <h3>Add to whishlish</h3>
            <h3>Share this product</h3>
          </div>
        </div>
      </div>
      <div>deskripsi</div>
    </section>
  );
};

export default MainProduct;
