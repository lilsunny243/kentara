import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="w-full mt-10 pb-20 ">
      <figure className=" w-full bg-[#f4f4ed]/10 h-[160px] relative overflow-hidden">
        <Image
          className="w-full h-[800px]   -top-[360px]  absolute"
          src={
            "https://img.herstory.co.id/articles/archive_20200921/wanita-20200921-181011.jpg"
          }
          alt=""
          width={1920}
          height={400}
        />
      </figure>
      <div className="w-[1170px] mx-auto flex mt-10 flex-row border-gray gap-28">
        <div className="flex justify-between w-full ">
          <div className="flex flex-col gap-6">
            <h3 className="uppercase font-semibold">Customer Care</h3>
            <ul className="flex flex-col gap-2">
              <li>Contact Us</li>
              <li>Delivery & Returns</li>
              <li>Track Your Order</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h3 className="uppercase font-semibold">
              Subscribe To Our Newsletter
            </h3>
            <input
              type="text"
              placeholder="Email Address"
              className="border-2 w-[300px] py-2 rounded-sm pl-3 focus:border-slate-400 focus:outline-none"
            />
            <button className="bg-slate-800 rounded-sm text-white px-8 py-2 hover:bg-slate-600 ease-out duration-150">
              Submit
            </button>
            <div className="flex gap-4 items-center">
              <input type="checkbox" className="mt-[2px]" />{" "}
              <label>
                I accept the terms & conditions of this subscription
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3>CONTACT</h3>
            <p>0812 - 0812 - 0812</p>
            <p>wisnubudi@gmail.com</p>
            <div className="flex flex-col gap-3">
              <h3 className="uppercase ">FOLLOW US</h3>
              <div className="flex flex-row gap-3">
                <FaFacebook size={30} />
                <FaTwitter size={30} />
                <FaInstagram size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
