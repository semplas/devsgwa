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
            </p>
            <h2 className="text-4xl font-normal tracking-tight md:text-3xl md:leading-tight xl:text-4xl">
              Let's bring Your Business idea to life Today.
            </h2>
            <p className="text-base font-medium text-gray-500 sm:text-sm xl:text-base">
              If you are serious about taking your game to the next level, contact us today! <span class="text-2xl text-gray-500 font-bold">+256-753-467-976</span> or send
              message to <span class="text-2xl text-gray-500 font-bold">hi@devsgwa.com</span>{" "}
            </p>
          </div>
          <div className="flex w-full sm:w-auto xl:inline-flex">
            <span
              href="#_"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow md:w-auto hover:bg-blue-600"
            >
              Request Quote
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
