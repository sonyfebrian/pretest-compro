import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardMobile() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const dataCards = [
    {
      title: "Who we are",
      titleDes: "Technology Company",
      description:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      title: "What we do",
      titleDes: "Professional Brand Management",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "How we do",
      titleDes: "Strategize, Design, Collaborate",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
    },
  ];

  return (
    <Slider ref={setSliderRef} {...sliderSettings}>
      {dataCards.map((card, index) => (
        <section key={index} className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className=" text-3xl font-display font-medium text-[#029FE4] mb-1">
                      {card.title}
                    </h2>
                    <h1 className=" text-lg font-normal font-display text-lg text-black mb-3">
                      {card.titleDes}
                    </h1>
                    <p className="leading-relaxed mb-3 text-sm font-display text-[#777777]">
                      {card.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <span className="tracking-widest text-xs font-bold text-black mb-1 ">
                        {"0" + (index + 1)}
                      </span>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        /03
                      </h2>
                      <span className="mr-3 lg:ml-auto md:ml-0 ml-auto pr-3 py-1 ">
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
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Slider>
  );
}
