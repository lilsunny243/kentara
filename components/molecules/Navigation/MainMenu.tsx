import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/img/mainLogo.png";
import { motion } from "framer-motion";
import { FaUser, FaSearch, FaHeart, FaCartPlus } from "react-icons/fa";

type Menu = {
  id: number;
  menu: string;
  link: string;
};
type Props = {};

const MainMenu = (menuList: Props) => {
  const menu: Menu[] = [
    {
      id: 1,
      menu: "Home",
      link: "/",
    },
    { id: 2, menu: "Products", link: "/" },
    { id: 3, menu: "About Us", link: "/" },
    { id: 4, menu: "Articles", link: "/" },
    { id: 5, menu: "Contact", link: "/" },
  ];

  return (
    <div className="w-full border-b-[1px] border-gray py-7">
      <div className="max-w-[1170px] flex items-center justify-between mx-auto">
        <div className="flex items-center gap-10">
          <motion.figure
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-[120px]"
          >
            <Image src={logo} alt="Kentara" />
          </motion.figure>
          <nav>
            <ul className="flex font-medium text-[14px] gap-5 uppercase">
              {menu.map((v: Menu, i) => (
                <motion.li
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  key={v.id}
                >
                  <Link href={v.link}>{v.menu}</Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-5">
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <FaUser />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaSearch />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FaHeart />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaCartPlus />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;