import React from "react";

type ProductPrice = {
  price: string;
};

type Props = {
  price: ProductPrice;
};

const ProductPrice = ({ price }: Props) => {
  return <h4>{price.price}</h4>;
};

export default ProductPrice;
