import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-5 top-0 fixed w-full z-50 bg-white shadow-[0px_0px_40px_0px_#2424240D]">
      <Container>
        <nav className="flex justify-between px-[88px]">
          <div className="relative h-[72px] w-[103px]">
            <Image
              className="object-cover object-center"
              src={"/images/logo.png"}
              alt="logo"
              fill
            />
          </div>
          <div className="flex items-center gap-[234px]">
            <div className="flex gap-8 items-center">
              <Link
                className="capitalize text-base leading-6 text-black"
                href={"/about"}
              >
                About
              </Link>
              <Link href={"/application-status"}>Application Status</Link>
              <Link href={"/contact-us"}>Contact Us</Link>
            </div>
            <button className="flex items-center justify-center text-base text-white text-center h-[56px] w-[162px] px-[58.5px] rounded-[6px] bg-cus-green font-bold">
              <Link href={"/apply"}>Apply</Link>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
