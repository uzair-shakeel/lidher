"use client";
import React, { useState } from "react";
import bg from "../../public/Insurance3.png";
import car from "../../public/vehicle.jpeg";
import property from "../../public/property.jpeg";
import hero from "../../public/Hero.png";
import life from "../../public/life.jpeg";
import company from "../../public/company.jpeg";
import travel from "../../public/travel.jpeg";
import school from "../../public/school.jpeg";
import Image from "next/image";
import FAQ from "../components/FAQ";
import Card from "../components/Card";

const HomePage = () => {
  const carouselItems = [
    {
      id: 1,
      title: "Vehicle insurance",
      description:
        "W sowiej ofercie posiadamy dwadzieścia towarzystw ubezpieczeniowych co pozwala nam na przygotowanie idealne dobranej oferty do potrzeb klienta.",
      imgSrc: car,
    },

    {
      id: 2,
      title: "Ubezpieczenia majątkowe",
      description:
        "Your safety is the most important thing to us! For years, we have protected our clients' homes and assets, becoming an integral part of their everyday lives.",
      imgSrc: property,
    },

    {
      id: 3,
      title: "Ubezpieczenia na życie",
      description:
        "Zabezpiecz siebie i swoją rodzinę przed niespodziewanymi wydarzeniami. Nasz doświadczony zespół pomoże ci w wyborze odpowiedniego ubezpieczenia na życie, dostosowanego do twoich indywidualnych potrzeb i celów.",
      imgSrc: life,
    },

    {
      id: 4,
      title: "Ubezpieczenia firmowe",
      description:
        "Zapewniamy ochronę wobec różnych ryzyk związanych z prowadzeniem działalności gospodarczej. Dzięki nam obejmiesz ochroną różne aspekty twojej działalności, takie jak ubezpieczenie mienia i mienia firmy przed zniszczeniem, kradzieżą czy pożarem.",
      imgSrc: company,
    },

    {
      id: 5,
      title: "Ubezpieczenia podróżne",
      description:
        "Nasze ubezpieczenia podróżne są dostosowane do indywidualnych potrzeb podróżującego, uwzględniając cel i rodzaj podróży, Pomożemy się wam cieszyć w pełni podróżą, mając pewność, że jesteście dobrze zabezpieczeni na wypadek nieprzewidzianych sytuacji.",
      imgSrc: travel,
    },

    {
      id: 6,
      title: "Ubezpieczenia szkolne",
      description:
        "Zapewnimy ochronę w przypadku nieszczęśliwych wypadków dla twoich pociech, nasze ubezpieczenia szkolne są stworzone specjalnie dla uczniów oraz dzieci przedszkolnych.",
      imgSrc: school,
    },
  ];

  const [items, setItems] = useState([
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
  ]);

  return (
    <>
      <section className="px-[6%] py-[5%]">
        <div className="grid grid-cols-2 gap-[5%]">
          <div className="my-auto">
            <h1 className="text-5xl font-bold text-[#14a8e9]">
              It is worth getting good insurance
            </h1>

            <p className="py-8 text-lg leading-14">
              As a Leader, we offer tailored insurance solutions to meet your
              unique needs, providing peace of mind and comprehensive
              protection. Category All categories Vehicle insurance Property
              insurance Life insurance Company insurance Travel insurance School
              insurance ... Vehicle insurance Our offer includes twenty
              insurance companies, which allows us to prepare an offer perfectly
              tailored to the client's needs.
            </p>
          </div>
          <Image src={bg} alt="bg" />
        </div>
      </section>

      <section className="bg-[#f3f5f5] py-[5%] ">
        <h1 className="text-3xl px-[6%]  font-semibold uppercase ">
          Insurance
        </h1>
        <div className="w-full overflow-x-auto carousel-container">
          <div className="flex w-1/5 animate-carousel  gap-5 py-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 text-start shadow-lg rounded-lg cursor-pointer hover:bg-black/10 duration-300"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  className="rounded-t-lg h-[160px] object-cover"
                />
                <div className="py-4 px-3">
                  <h3 className="font-semibold py-2 text-lg">{item.title}</h3>
                  <p className="leading-6 text-gray-700 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .carousel-container::-webkit-scrollbar {
            display: none;
          }
          .carousel-container {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </section>

      <section className="py-[5%] px-[6%]  grid grid-cols-2 gap-[5%]">
        <Image
          src={hero}
          alt="img"
          className="h-full object-cover rounded-md"
        />
        <FAQ />
      </section>

      <section className="px-[6%] grid grid-cols-3 gap-10">
        <Card
          imageSrc={
            "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5308_cropped.JPG"
          }
          footerText={"Ubezpieczenia"}
        />
        <Card
          imageSrc={
            "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5192_cropped.JPG"
          }
          footerText={"Tłumaczenie"}
        />
        <Card
          imageSrc={
            "https://luxury-bunny-b94631.netlify.app/assets/img/home-intro/IMG_5246_cropped.JPG"
          }
          footerText={"Rejestracja pojazdów"}
        />
      </section>
    </>
  );
};

export default HomePage;
