"use client";
import React from "react";
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

  const menuItems = [
    "Home",
    "Products",
    "Solutions",
    "Services",
    "Testimonial",
    "Contact Us",
  ];

  return (
    <div className="bg-[#070527]">
      <Navbar
        className="bg-[#070527] py-2"
        isBordered
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-[#00C6C3]" // Show on mobile and tablet screens
          />
          <NavbarBrand>
            <h1 className="text-xl font-semibold text-white">Appnovia</h1>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-10" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                className="text-white text-xs hover:text-[#00C6C3]"
                href="#"
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="#"
              size="lg"
              variant="bordered"
              className="border-[#00C6C3] text-xs text-[#00C6C3] font-semibold rounded-sm px-8"
            >
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-[#070527] pt-8 w-full">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-white text-sm hover:text-[#00C6C3]"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
