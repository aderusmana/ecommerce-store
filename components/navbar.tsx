import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./mainNav";
import getCategories from "@/actions/getCategories";
import NavbarAction from "./navbarAction";
import Image from "next/image";


export const revalidate = 0;
const Navbar = async () => {
    const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <Image 
            src="/logo.png" alt="logo" width={75} height={75} />
          </Link>
          <MainNav data = {categories}  />
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
