"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    // Header
    <>
      <header className="relative flex w-full flex-col flex-wrap text-sm sm:justify-start md:flex-nowrap">
        {/* <!--Top-address-bar--> */}
        <section
          id="Top-Header"
          className="tp-bar mx-auto w-full items-center justify-center bg-gradient-to-b from-[#2C363F] to-[#262B37] px-4 py-[15px] md:flex md:justify-between"
        >
          {/* Logo */}
          <div className="hidden items-center justify-center md:flex">
            <Link href="/">
              <Image
                src="/assets/images/autotrade-v4/logo.png"
                width={261}
                height={92}
                alt="Logo"
                className="max-w-full cursor-pointer"
              />
            </Link>
          </div>
          {/* Badge */}
          <div className="flex items-center justify-center pl-10">
            <Image
              src="/assets/images/autotrade-v4/23-badge.png"
              width={140}
              height={122}
              alt="23-Badge"
              className="max-w-full cursor-pointer"
            />
          </div>
          <div className="scl-link hidden text-right gap-2 md:flex md:flex-col">
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Auto Trademark 7591 Centreville Rd Manassas, VA 20111"
              target="_blank"
              className="address-header-color"
            >
              <span className="icon-location text-white" />
              7591 Centreville Rd,Manassas VA 20111
            </Link>

            <Link className="header-phone" href="tel:703.361.6882 ">
              <span className="icon-telephone text-white" />
              703.361.6882
            </Link>

            <ul className="list-inline scl-link">
              <li className="text-[#428bca]">
                <Link href="https://www.facebook.com/autotrademark">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
              </li>
              <li className="text-[#428bca]">
                <Link href="https://www.twitter.com/autotrademark">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="top-nav">
          <Navbar />
        </section>
      </header>
    </>
  );
};

export default Header;
