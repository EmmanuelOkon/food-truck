"use client";

import { useState, useEffect } from "react";
import { Picture } from "../components/assets/Image";
import { Button } from "../components/assets/Button";
import Link from "next/link";

import { NavButtons, NavLinks } from "../utils/staticData";

import { GrClose } from "react-icons/gr";

import { TiThMenu } from "react-icons/ti";
// import { Slide } from 'react-awesome-reveal';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [scrollY, setScrollY] = useState(0)
  const [navBarColor, setNavBarColor] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className=" fixed left-0 top-0 z-50 mx-auto h-auto w-full overflow-x-hidden bg-transparent">
      <div>
        <nav
          className={`max-width h-20 w-full md:h-24 ${
            navBarColor ? "bg-white" : "bg-transparent"
          } lg:px24 md:px12 px8 flex items-center justify-between `}
        >
          <div className="w1/4">
            <Picture
              as="a"
              href="/"
              className="h-8 md:h-10 "
              image="/images/logo.png"
              alt="Logo"
            />
          </div>
          <div className="w-full ">
            <div className="flex1 hidden items-center justify-between gap-4 lg:flex  ">
              <ul className="itemscenter flex justify-end"></ul>
              <ul className="center flex items-center  justify-end gap-4 lg:w-full">
                {NavLinks.map((navlink, index) => (
                  <li className="wfull text-[14px] " key={index}>
                    <Link
                      href={navlink.url}
                      className=" hover:bg-color2 mx-2 overflow-hidden rounded-lg p-2 "
                    >
                      {navlink.name}
                    </Link>
                  </li>
                ))}
                {NavButtons.map((navbutton, index) => (
                  <li className="wfull" key={index}>
                    <Button
                      type="button"
                      className={`${
                        navbutton.name === "Sign Up"
                          ? "border-2 border-gray-700 "
                          : " border-b-2 border-transparent "
                      } hover:bg-color2 z-10 rounded-lg px-4 py-2 text-[14px] `}
                    >
                      {navbutton.name}
                    </Button>
                  </li>
                ))}
                
              </ul>
            </div>
            <div className="flex items-center justify-end gap-4 lg:hidden">
              
              <div
                className="hamburger cursor-pointer text-gray-950"
                onClick={handleToggle}
              >
                <TiThMenu size={30} color="currentColor" weight="fill" />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Nav  */}
      <nav
        className={`h[70vh] fixed top-0 flex w-full justify-end bg-orange-500/60 lg:hidden  ${
          open ? "right-0" : "-right-[120vw]"
        } transition-all duration-500 ease-out`}
      >
        <div
          className={`h[70vh] relative flex w-[70%] flex-col items-center justify-between bg-white ${
            open ? "right-0" : "-right-[120vw]"
          } transition-all delay-300 duration-500 ease-out`}
        >
          <div className="flex w-full flex-col gap-16 px-4 py-6">
            <div className="flex w-full items-center justify-between">
              <Picture
                as="a"
                href="/"
                className="h-8 md:h-10"
                image="/logo1.png"
                alt="Logo"
              />
              <div
                className="hamburger cursor-pointer text-gray-950"
                onClick={handleToggle}
              >
                <GrClose size={25} color="currentColor" weight="fill" />
              </div>
            </div>
            <ul className="flex flex-col gap-3 pl-2">
              {NavLinks.map((navlink, index) => (
                <li className="w-full text-base" key={index}>
                  <Link
                    href={navlink.url}
                    onClick={handleToggle}
                    className={`inlineblock overflow-hidden hover:bg-orange-500`}
                  >
                    {navlink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="wfull center my-6 flex flex-col items-center justify-start gap-4 py-6">
            {NavButtons.map((navbutton, index) => (
              <li className="wauto" key={index}>
                <Button
                  type="button"
                  className={`${
                    navbutton.name === "Sign Up"
                      ? "rounded-md border-2 border-gray-950 "
                      : "  border-white hover:border-gray-950"
                  } relativ z-10 px-4 py-1.5 text-[14px] `}
                >
                  {navbutton.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
