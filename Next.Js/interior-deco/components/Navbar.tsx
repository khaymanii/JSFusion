"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Product", "Category", "About"];

  return (
    <Navbar className="bg-white shadow-sm" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="./images/logo.svg" alt="logo" width={150} height={150} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 " justify="center">
        <NavbarItem isActive>
          <Link className="text-customGreen text-sm" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-600 text-sm" href="#" aria-current="page">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-600 text-sm" href="#">
            Category
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-600 text-sm" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="gap-8" justify="end">
        <NavbarItem className="lg:flex">
          <div className="w-8 h-8 rounded-full bg-customGreen1 flex items-center justify-center">
            <Image
              src="./icons/search.svg"
              alt="search icon"
              width={15}
              height={15}
            />
          </div>
        </NavbarItem>
        <NavbarItem>
          <div className="w-8 h-8 rounded-full bg-customGreen1 flex items-center justify-center">
            <Image
              src="./icons/cart.svg"
              alt="search icon"
              width={15}
              height={15}
            />
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-gray-600 text-sm" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
