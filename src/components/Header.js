import React, { Fragment } from "react";
import Logo from "assets/logo.png";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const menuList = [
  {
    menu: "Home",
  },
  {
    menu: "About Us",
  },
  {
    menu: "Services",
  },
  {
    menu: "Pricing",
  },
  {
    menu: "Contact",
  },
];

export default function Header() {
  return (
    <div className="bg-gray-100 sticky top-0">
      <Menu>
        <nav className="relative px-4 py-2 flex justify-between items-center bg-white  z-30 shadow-xl">
          <img src={Logo} alt="" />
          <div className="flex items-center md:hidden">
            <Menu.Button className="inline-flex items-center justify-center rounded-md  p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-8 w-8" aria-hidden="true" />
            </Menu.Button>
          </div>

          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            {menuList.map((item, i) => (
              <>
                <li key={i}>
                  <a
                    className="text-sm text-gray-400 hover:text-gray-500"
                    href="#/"
                  >
                    {item.menu}
                  </a>
                </li>
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
              </>
            ))}
          </ul>
          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="#/"
          >
            Sign In
          </a>
          <a
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#/"
          >
            Sign up
          </a>
        </nav>

        <Transition
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="-translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
        >
          <Menu.Items className="absolute top-0 right-0 w-[60%] md:hidden">
            <div className="overflow-hidden rounded-l bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-20">
                <div>
                  <img className="w-auto" src={Logo} alt="" />
                </div>
                <div className="-mr-2">
                  <Menu.Button className="inline-flex items-center justify-center rounded-md p-2hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-8 w-8" aria-hidden="true" />
                  </Menu.Button>
                </div>
              </div>
              <div className="flex flex-col px-2 pt-2 pb-3">
                <div className="flex flex-col px-2 pt-2 pb-2 space-y-5">
                  {menuList.map((item, i) => (
                    <div key={i}>
                      <a
                        className="text-sm text-gray-400 hover:text-gray-500"
                        rel="noopener noreferrer"
                        href="#/"
                      >
                        {item.menu}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center pt-10 space-y-5">
                  <a
                    href="/login"
                    className="mr-4 font-medium text-gray-500 hover:text-gray-900"
                  >
                    Signin
                  </a>
                  <a
                    className="rounded-xl border-2 border-[#696969] px-4 py-3 w-full text-center font-medium text-gray-500 hover:border-[#141414] hover:text-[#141414]"
                    href="/register"
                  >
                    Signup
                  </a>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
