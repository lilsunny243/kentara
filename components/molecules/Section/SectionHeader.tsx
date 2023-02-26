import React from "react";

type Props = {
  category: String;
  title: String;
  description: String;
  button?: String | JSX.Element;
};

const SectionHeader = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <h3 className="font-semibold tracking-wider uppercase">
        {props.category}
      </h3>
      <h1 className="text-4xl font-medium">{props.title}</h1>
      <p className="font-light text-[16px] text-slate-600">
        {props.description}
      </p>
      <button className="mt-4">{props.button}</button>
    </div>
  );
};

export default SectionHeader;
