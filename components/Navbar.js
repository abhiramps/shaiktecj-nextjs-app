/** @format */

import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import useDarkMode from "./darkmode/useDarkMode.js";
import Dropdown from "./Dropdown.js";
import Link from "next/link";
const Navbar = ({ user }) => {
  const [colorTheme, setThemes] = useDarkMode();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Disclosure
        as="nav"
        className="md:px-8 font-display sticky top-0 z-10 bg-white dark:bg-dark1 shadow-lg transition duration-500"
      >
        {({ open }) => (
          <>
            <div className="max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className=" flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center sm:mr-5 sm_l:mr-auto ">
                    <Link href="/">
                      <h1 className="text-orange font-bold uppercase text-xl font-display md:text-3xl cursor-pointer">
                        Fleet Manager
                      </h1>
                    </Link>
                  </div>

                  <div className="hidden sm:block ">
                    <div className="flex  md:space-x-1">
                      <a
                        className="nav-link text-black hover:bg-gray-200 font-display
                                                 sm:px-1 sm_l:px-5  py-4 rounded-md text-sm md:text-lg font-medium shrink-0 dark:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </a>
                      <a
                        className="nav-link text-black hover:bg-gray-200 font-display
                                                 sm:px-1 sm_l:px-5  py-2 rounded-md text-sm md:text-lg font-medium shrink-0 "
                      >
                        <span
                          onClick={() => setThemes(colorTheme)}
                          className="w-8 h-8 md:w-10 md:h-10   cursor-pointer
                                                        text-black flex items-center justify-center dark:text-white"
                        >
                          {colorTheme === "light" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                              />
                            </svg>
                          )}
                        </span>
                      </a>
                      <span
                        className="nav-link text-black font-display
                         sm:px-1 sm_l:px-5  py-4 rounded-md text-sm md:text-lg font-medium shrink-0 dark:text-white"
                      >
                        {user ? (
                          <Dropdown user={user} />
                        ) : (
                          <Link href="/signin">
                            <a>Signin</a>
                          </Link>
                        )}
                      </span>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">

              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
