import React from "react";

type ProductTitle = {
  title: string;
};

type Props = {
  title: ProductTitle;
};

const ProductTitle = ({ title }: Props) => {
  return <h3>{title.title}</h3>;
};

export default ProductTitle;
