import Link from "next/link";
import React from "react";

type Props = {};

const Breadchumb = (props: Props) => {
  return (
    <section className="max-w-[1170px] mx-auto my-5">
      <div className="flex gap-2 text-[13px]">
        <Link href="/">
          <p className="text-gray-500 hover:text-black hover:underline duration-150 ease-out">
            Home{" "}
          </p>
        </Link>
        {` / `}
        <Link href="/">
          <p className="text-gray-500 hover:text-black hover:underline duration-150 ease-out">
            Category
          </p>
        </Link>
        {` / `}
        <p>Product</p>
      </div>
    </section>
  );
};

export default Breadchumb;
