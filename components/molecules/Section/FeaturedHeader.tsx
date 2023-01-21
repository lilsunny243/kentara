import React from "react";
import { motion } from "framer-motion";

type Props = {};

const FeaturedHeader = (props: Props) => {
  return (
    <div className="flex mb-20 justify-between">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-4/12"
      >
        <h2 className="text-[32px] font-semibold">Featured Products</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-8/12"
      >
        <p className=" font-light text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </motion.div>
    </div>
  );
};

export default FeaturedHeader;
