import ProductImage from "@/components/atoms/ProductCard/ProductImage";
import ProductPrice from "@/components/atoms/ProductCard/ProductPrice";
import ProductTitle from "@/components/atoms/ProductCard/ProductTitle";
import Image from "next/image";
import Link from "next/link";
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
      <Link href="/product">
        <ProductImage
          image={productType.image}
          title={productType.productTitle}
        />
      </Link>
      <div>
        <Link href="/product">
          <ProductTitle title={{ title: productType.productTitle }} />
        </Link>
        <ProductPrice price={{ price: productType.productPrice }} />
      </div>
    </div>
  );
};

export default ProductCards;
