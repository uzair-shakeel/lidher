"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Up from "../../public/chevron-up-solid.svg";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" bg-gray-200 py-8 px-[6%]">
      <div className="flex items-center justify-center flex-col  ">
        <button
          className="p-3 rounded-full shadow-md hover:shadow-lg animate-bounce bg-white"
          onClick={scrollToTop}
        >
          <Image src={Up} alt="up" className="h-4 w-4 lg:h-8 lg:w-8" />
        </button>
        <p>Wróć na górę</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-8">
        <div className="text-center font-semibold flex flex-col items-center ">
          <Link href="home">
            <Image src={logo} alt="logo" className="h-24 lg:h-[170px] w-auto" />
          </Link>
          <h2 className="text-[#14a8e9]">Liderpodhale PL</h2>
        </div>

        <div className="flex justify-center py-4 md:py-auto gap-[30%] md:w-[40%]">
          <ul className="space-y-3 py-4">
            <li className="font-semibold ">Sekcje</li>
            <li className=" cursor-pointer">
              <Link href="insurance">Ubezpieczenia</Link>
            </li>
            <li className=" cursor-pointer">
              <Link href="registration">Rejestracja</Link>
            </li>
            <li className=" cursor-pointer">
              <Link href="translation">Tłumaczenia</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="download">Pobierz</Link>
            </li>
            <li className=" cursor-pointer">
              <Link href="pattern">Wzory</Link>
            </li>
          </ul>
          <ul className="space-y-3 py-4">
            <li className="font-semibold">O nas</li>

            <li className=" cursor-pointer">
              <Link href="nas">O nas</Link>
            </li>
            <li className=" cursor-pointer">
              <Link href="contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center text-gray-600">
        © 2024 All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
