"use client";
import React from "react";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import bg from "../../../public/translation.jpeg";
import { MdMenuBook } from "react-icons/md";

const page = () => {
  return (
    <div className="bg-[#ecfafa]">
      <Image src={bg} alt="bg" />
      <MdMenuBook size={100} className=" mx-auto" />
      <div className="py-12 text-center">
        <h1 className="text-5xl font-bold text-[#14a8e9]">
          Tłumaczenia przysięgłe
        </h1>
        <p className="text-lg px-[15%] py-3">
          Języki to nasza pasja! Potrzebujesz profesjonalnego tłumaczenia
          dowolnego dokumentu? Zaufaj doświadczonym tłumaczom przysięgłym z
          Lider. Gwarantujemy precyzję, szybkość i poufność w każdym zamówieniu.
        </p>
      </div>
      <div className="px-[10%] py-12">
        <FAQ />
      </div>
    </div>
  );
};

export default page;