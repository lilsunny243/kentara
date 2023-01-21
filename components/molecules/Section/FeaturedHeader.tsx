import React from "react";

type Props = {};

const FeaturedHeader = (props: Props) => {
  return (
    <div className="flex mb-12 justify-between">
      <div className="w-4/12">
        <h2>Featured Products</h2>
      </div>
      <div className="w-8/12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
    </div>
  );
};

export default FeaturedHeader;
