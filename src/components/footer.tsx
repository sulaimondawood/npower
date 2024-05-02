import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-3 pb-6 bg-[#F8F8F8] mt-[280px]">
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
                Terms of Service
              </Link>
              <Link href={"/application-status"}>Privacy Policy</Link>
              <Link href={"/contact-us"}>Cookie Policy</Link>
            </div>
            <p className="text-base leading-6 text-black">
              © 2023, N-Power. All Rights Reserved.
            </p>
          </div>
        </nav>
      </Container>
    </footer>
  );
};
