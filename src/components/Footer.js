import React from "react";
import logo from "assets/footer.png";

export default function Footer() {
  return (
    <footer className="bg-[#07477A] relative pt-1 border-b-2 border-blue-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8 ">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col ">
              <span className="font-bold text-gray-700 uppercase mb-2">
                <img src={logo} alt="" />
              </span>
              <span className="my-2">
                <div className="container px-5 py-10 bg-white">
                  <button className="flex justify-between bg-transparent w-full inline-flex items-center hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                    <span className="font-display font-bold text-[#00537C]">
                      TECHNOLOGY DEPARTMENT
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>

                  <div className="mt-2 text-lg font-display font-normal text-[#25A0D8]">
                    <p> Jl. Lembong No 8</p>
                    <p>Kel. Braga Kec. Sumur</p>
                    <p>Bandung, Kota</p>
                    <p>Bandung, Jawa Barat</p>
                  </div>
                </div>
              </span>
              <span className="my-2 text-white font-display block  md:hidden lg:hidden">
                <p>Who We Are</p>
                <p>Our Values</p>
                <p>The Perks</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
