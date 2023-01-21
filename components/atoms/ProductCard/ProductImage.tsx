import Image from "next/image";
import React from "react";

type Props = {};

const ProductImage = ({ image, title }: any) => {
  return (
    <figure className="w-[270px] h-[400px] bg-slate-500">
      <Image src={image} alt={title} width={270} height={400} />
    </figure>
  );
};

export default ProductImage;
