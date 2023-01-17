import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainMenu from "../molecules/Navigation/MainMenu";
import TopMenu from "../molecules/Navigation/TopMenu";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <TopMenu />
      <MainMenu />
    </header>
  );
};

export default Header;
