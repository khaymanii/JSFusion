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
  Button,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Feature", "Pricing", "About Us", "Contact", "Login"];

  return (
    <Navbar className="bg-black" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-customPurple"
        />
        <NavbarBrand>
          <Image src="./images/logo.svg" alt="logo" width={50} height={50} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 " justify="center">
        <NavbarItem>
          <Link className="text-white text-xs" href="#">
            Feature
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-xs" href="#" aria-current="page">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-xs" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-xs" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            radius="full"
            variant="bordered"
            href="#"
            size="sm"
            className="text-white border-customPurple text-xs px-6"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            radius="full"
            href="#"
            size="sm"
            className="text-white bg-customPurple text-xs px-4"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" bg-customPurple">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white text-xs" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
