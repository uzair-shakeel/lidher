"use client";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

export default function App() {
  const handleDownloadClick = (pdfFileName) => {
    const pdfPath = `/PDFs/${pdfFileName}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="py-12 px-[5%] lg:px-[10%] bg-[#ecfafa]">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-[#14a8e9] pb-12">
        Przydatne dokumenty
      </h1>
      <div>
        <ul>
          <li
            onClick={() => handleDownloadClick("1.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Umowa polsko - angielska</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("2.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Umowa polsko-niemiecka</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("3.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Umowa polsko-włoska</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("4.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Umowa polsko-holenderska</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("5.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Umowa darowizny</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("6.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Umowa kupna-sprzedaży</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("7.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Deklaracja PCC-3</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("8.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Deklaracja AKC-US</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("9.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Oświadczenie pod odpowiedzialnością karną</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("10.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Zgłoszenie zbycia pow. Nowotarski</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("11.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Zgłoszenie zbycia pow. Tatrzański</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("12.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Zgody RODO</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("13.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Pełnomocnictwo i Oświadczenie</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
          <li
            onClick={() => handleDownloadClick("14.pdf")}
            className="flex justify-between gap-5 border-b border-gray-300 p-4 group duration-300 hover:border-gray-900"
          >
            <div className="flex gap-3 items-center text-sm md:text-md">
              <FaFilePdf />
              <p>Oświadczenie sprawcy kolizji</p>
            </div>
            <div className="flex gap-3 items-center text-sm md:text-md">
              <button className="text-[#14a8e9] text-sm md:text-md">
                Download
              </button>
              <IoMdDownload size={25} className="group-hover:animate-bounce" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
