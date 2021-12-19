import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function Header({ title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href="https://www.devsgwa.com" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins"
          media="all"
        />
      </Head>
      <section className="relative block w-full h-auto py-4 leading-10 text-center text-blue-900 bg-white md:py-2">
        <div className="absolute top-0 right-0 w-1/2 h-full transform opacity-50 bg-blue-50"></div>

        <div className="flex items-center w-full h-full px-4 mx-auto leading-10 text-center md:h-24 md:px-4 lg:px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-between w-full h-full text-blue-900 md:flex-row">
            <div className="relative z-10 flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left">
              <Link href="/">
                <span className="inline-block font-sans text-3xl font-black tracking-tight text-left text-transparent no-underline bg-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 focus:no-underline">
                  DevsGwa
                </span>
              </Link>
            </div>
            <div className="relative left-0 z-0 flex items-center justify-center w-auto w-full h-full px-4 my-5 space-x-5 text-lg font-medium leading-10 md:space-x-1 md:text-base lg:text-lg md:space-x-6 md:my-0 lg:w-full md:mt-0 md:absolute lg:space-x-12 md:text-left lg:text-center fixed">
              <Link href="/case_study">
                <a
                  x-data="{ hover: false }"
                  className="relative inline-block font-semibold text-center text-gray-600 no-underline bg-transparent cursor-pointer hover:text-blue-600 focus:no-underline"
                >
                  <span className="block">Case Studies</span>
                </a>
              </Link>

              <Link href="/about">
                <a
                  x-data="{ hover: false }"
                  className="relative inline-block font-semibold text-center text-gray-600 no-underline bg-transparent cursor-pointer hover:text-blue-600 focus:no-underline"
                >
                  <span className="block">About Us</span>
                </a>
              </Link>

              <Link href="service">
                <a
                  x-data="{ hover: false }"
                  className="relative inline-block font-semibold text-center text-gray-600 no-underline bg-transparent cursor-pointer hover:text-blue-600 focus:no-underline"
                >
                  <span className="block">Services</span>
                </a>
              </Link>

              <Link href="/blog">
                <a
                  x-data="{ hover: false }"
                  className="relative inline-block font-semibold text-center text-gray-600 no-underline bg-transparent cursor-pointer hover:text-blue-600 focus:no-underline"
                >
                  <span className="block">Blog</span>
                </a>
              </Link>
            </div>

            <div className="relative w-full px-4 space-x-5 text-lg font-medium leading-10 md:space-x-3 md:text-base lg:text-lg lg:space-x-12 sm:w-auto">
              <Link href="/contactUs">
                <a
                  x-data="{ hover: false }"
                  className="relative inline-block font-semibold text-center text-gray-600 no-underline bg-transparent cursor-pointer hover:text-blue-600 focus:no-underline"
                >
                  <span className="block">Contact Us</span>
                </a>
              </Link>
              <Link href="/">
                <a className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-white uppercase whitespace-no-wrap bg-blue-600 shadow-sm md:text-sm lg:text-base bg-gradient-to-r from-blue-600 to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 rounded-none">
                  Request Quote
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
