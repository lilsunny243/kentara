import Image from "next/image";
import React from "react";

type ProductCard = {
  image: string;
  productTitle: string;
  productPrice: string;
};

type Props = {
  productType: ProductCard;
};

const ProductCards = ({ productType }: Props) => {
  return (
    <div className="flex flex-col">
      <figure className="w-[270px] h-[400px] bg-slate-500">
        <Image
          src={productType.image}
          alt={productType.productTitle}
          width={270}
          height={400}
        />
      </figure>
      <div>
        <h3>{productType.productTitle}</h3>
        <h4>{productType.productPrice}</h4>
      </div>
    </div>
  );
};

export default ProductCards;
