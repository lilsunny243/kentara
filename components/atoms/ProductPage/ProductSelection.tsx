import React from "react";

type Props = {};

const ProductSelection = ({ title }: any) => {
  return (
    <button className="border-[1px] h-[50px] w-[120px] mr-3 focus:bg-red-500 rounded-sm focus:text-white duration-200 ease-out">
      {title}
    </button>
  );
};

export default ProductSelection;
