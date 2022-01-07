import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function ContactHeader() {
  return (
    <>
      <section className="w-full px-10 py-12 bg-blue-500 lg:py-20">
        <div className="relative flex max-w-5xl px-24 py-16 mx-auto rounded-lg lg:py-20 bg-blue-600 shadow-lg">
          <div className="flex">
            <div className="relative z-50 md:w-7/12">
              <blockquote className="text-2xl font-thin text-white lg:text-3xl">
                Our approach is to implement a lean, scalable solution with a
                proactive approach to problem solving that keeps your systems
                operating at peak performance at a &gt;99% rate.
              </blockquote>
              <p className="mt-3 text-sm text-blue-300">DevsGwa Team .</p>
              <p className="mt-10 text-xs text-blue-300">
                If you are willing to move forward with the solution{" "}
              </p>
              <span
                href="#_"
                className="inline-block w-full px-10 py-3 mt-4 text-base font-medium text-center text-blue-500 bg-gray-100 rounded md:w-auto"
              >
                Contact Us
              </span>
            </div>
          </div>
          <img
            src="https://cdn.devdojo.com/images/august2021/user-bg.png"
            className="absolute bottom-0 right-0 z-20 block h-full mr-6 origin-bottom transform scale-90 opacity-10 lg:hidden lg:mr-12"
          />
          <img
            src="https://cdn.devdojo.com/images/august2021/user-bg.png"
            className="absolute bottom-0 right-0 z-20 hidden h-full mr-6 origin-bottom transform scale-110 lg:block lg:mr-12"
          />
        </div>
      </section>
    </>
  );
}
