import React, { useState } from "react";
import Slider from "react-slick";
import pic1 from "assets/speed.png";
import pic2 from "assets/exhaust.png";
import pic3 from "assets/accesories.png";
import pic4 from "assets/speed.png";
import pic5 from "assets/accesories.png";
import "./carousel.css";

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);
  const images = [pic1, pic2, pic3, pic4, pic5];
  const [imgIndex, setImgIndex] = useState(0);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          lazyLoad: true,
          speed: 300,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: 0,
          beforeChange: (current, next) => setImgIndex(next),
        },
      },
    ],
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto bg-[#509FDD]">
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden lg:text-center text-start relative">
            <div className="flex flex-col lg:text-center text-start w-full ">
              <h1 className="sm:text-3xl  text-2xl font-medium font-display mb-2 text-[#029FE4]">
                Our Core Values
              </h1>
              <p className="lg:w-2/3  leading-relaxed lg:text-center text-start  font-display font-normal text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep.
              </p>
            </div>
            <Slider ref={setSliderRef} {...sliderSettings}>
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={idx === imgIndex ? "slide activeSlide" : "slide"}
                >
                  <img src={img} alt={idx} />
                </div>
              ))}
            </Slider>
            <p className="lg:w-2/3  leading-relaxed lg:text-center text-center mb-7 font-display font-normal text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep.
            </p>
            <div className="flex justify-between">
              {" "}
              <button
                className="bg-[#F1F1F1] hover:bg-[#1BA0E1] active:bg-[#1BA0E1] mr-3"
                onClick={sliderRef?.slickPrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="fill-white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="w-2 h-2 bg-gray-400 hover:bg-black active:bg-black mt-3 rounded-full"
                onClick={sliderRef?.slickNext}
              />
              <button
                className="w-2 h-2 bg-gray-400 hover:bg-black active:bg-black mt-3 rounded-full"
                onClick={sliderRef?.slickNext}
              />
              <button
                className="w-2 h-2 bg-gray-400 hover:bg-black active:bg-black mt-3 rounded-full"
                onClick={sliderRef?.slickNext}
              />
              <button
                className="bg-[#F1F1F1] hover:bg-[#1BA0E1] active:bg-[#1BA0E1] "
                onClick={sliderRef?.slickNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 fill-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
