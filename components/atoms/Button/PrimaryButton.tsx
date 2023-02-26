import { FaArrowRight } from "react-icons/fa";
import React from "react";

type Props = {
  title: String;
};

const PrimaryButton = (props: Props) => {
  return (
    <button className="ease-out duration-150 hover:bg-stone-700 hover:text-white px-4 py-2 rounded-[4px] border-2 border-gray-200">
      <p className="font-semibold flex gap-2 items-center">
        {props.title} <FaArrowRight className="mt-[2px]" />
      </p>
    </button>
  );
};

export default PrimaryButton;
