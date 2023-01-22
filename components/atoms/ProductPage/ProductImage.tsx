import Image from "next/image";
import React from "react";

type Props = {};

const ProductImage = (props: Props) => {
  return (
    <figure className="w-[590px] h-[885px] bg-slate-500">
      <Image src="/" alt="" width={590} height={885} />
    </figure>
  );
};

export default ProductImage;
