"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"

export const Navbar = () => {

  return (
    <div className="w-full">
      <nav className="container relative flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 text-4xl font-medium text-[#b38600] dark:text-[#ffcb1e] text-center border-2 border-[#b38600] dark:border-[#ffcb1e] p-2">
              <span>
                <Image
                  src="/beelogo.svg"
                  width="32"
                  alt="N"
                  height="32"
                  className="w-8"
                />
              </span>
            <span>Bee Craft Handyman Service</span>
          </span>
        </Link>
        <div className="mb-3 d-md-none"></div>
        {/* get started  */}
        <div className="flex justify-between gap-3 nav__item mr-2 ml-0 sm:ml-auto lg:ml-0 lg:order-2">
            <ThemeChanger />
            <div className="mr-3 nav__item">
              <Link href="tel:+19515947694" className="px-6 py-2 text-white bg-red-600 rounded-md md:ml-5">
              (951) 594-7694
              </Link>
            </div>
        </div>
      </nav>
    </div>
  );
}

