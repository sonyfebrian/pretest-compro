import React from "react";
import CardSlider from "./card/CardSlider";
import Carousel from "./card/CardMobile";
import mobile from "assets/mobile.png";
export default function Hero() {
  return (
    <>
      {/* destop view */}
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-[#509FDD] hidden md:block">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <CardSlider />
        </div>
      </section>

      {/* mobile view */}
      <img
        className="block h-min w-min md:hidden lg:hidden"
        src={mobile}
        alt=""
      />
      <div className="block md:hidden lg:hidden">
        <Carousel />
      </div>
    </>
  );
}
