import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function BlogCTA() {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="flex flex-col items-center justify-between px-12 mx-auto text-left md:px-8 lg:px-16 lg:flex-row max-w-7xl">
          <div className="relative mb-6 space-y-4 md:space-y-1 lg:pr-20 lg:mb-0 lg:text-left lg:space-y-3">
            <p className="flex items-center justify-start text-base font-semibold text-blue-500">
              Take your skills to the next level
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </p>
            <h2 className="text-4xl font-normal tracking-tight md:text-3xl md:leading-tight xl:text-4xl">
              Let's bring Your Business idea to life Today.
            </h2>
            <p className="text-base font-medium text-gray-500 sm:text-sm xl:text-base">
              If you are serious about taking your game to the next level, then
              you've got to contact us today! Call us on +2567053467976 or send
              message to hi@devsgwa.com{" "}
            </p>
          </div>
          <div className="flex w-full sm:w-auto xl:inline-flex">
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow md:w-auto hover:bg-blue-600"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
