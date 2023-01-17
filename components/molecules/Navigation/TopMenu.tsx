import React from "react";
import { FaInstagram, FaFolder, FaArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const TopMenu = (props: Props) => {
  return (
    <div className="w-full border-b-[1px] border-gray py-3">
      <div className="flex items-center justify-between max-w-[1170px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-5"
        >
          <div className="flex items-center gap-2">
            <IconContext.Provider value={{ size: "1.2em" }}>
              <FaInstagram />
              <h3 className="font-medium text-[13px]">3.1 M Followers</h3>
            </IconContext.Provider>
            <div className="mt-1">
              <IconContext.Provider value={{ size: "10px" }}>
                <FaArrowDown />
              </IconContext.Provider>
            </div>
          </div>
          <h3 className="text-[13px]">
            Free Shipping for all orders over $199.{" "}
            <Link href="/" className=" text-red-500 font-medium">
              Click and Shop Now.
            </Link>{" "}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex"
        >
          <ul className="flex gap-5 text-[13px]">
            <li>
              <Link href="/">Order Tracking</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default TopMenu;
