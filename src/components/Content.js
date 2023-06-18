import React from "react";
import content from "assets/content.png";
import Carousel from "./carousel/Carousel";

const contentData = [
  {
    title: "Dedication",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    title: "Intellectual Honesty",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
  },
  {
    title: "Dedication",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];

export default function Content() {
  return (
    <>
      {" "}
      <section className="text-gray-600 body-font bg-[#F8F8F8]">
        <div className="flex flex-col lg:text-center text-center w-full ">
          <h1 className="sm:text-3xl  text-2xl font-medium font-display mb-2 text-[#029FE4]">
            Our Core Values
          </h1>
          <p className="lg:w-2/3 lg:mx-auto mx-5 leading-relaxed lg:text-center text-start  font-display font-normal text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep.
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto  flex flex-wrap">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left">
            <div className="flex flex-col mb-10 lg:items-start items-start">
              {contentData.map((item, i) => (
                <>
                  <div key={i} className="h-full flex items-start my-5">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200"></span>
                    </div>
                    <div className="flex-grow pl-6">
                      <h2 className="text-gray-900 text-lg font-medium font-display ">
                        {item.title}
                      </h2>
                      <p className="leading-relaxed text-base font-display">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={content}
            />
          </div>
        </div>
      </section>
      <div className="block md:hidden lg:hidden">
        <Carousel />
      </div>
    </>
  );
}
