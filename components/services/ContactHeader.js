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
              <svg
                className="absolute w-6 h-auto -ml-10 text-blue-400 fill-current"
                viewBox="0 0 100 84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M40.87 0C28.12 0 18.117 3.91 10.873 11.826 3.613 19.742 0 32.09 0 48.913v34.941H42.032V46.112H21.745c0-9.242 1.509-16.114 4.468-20.613 2.959-4.5 7.838-6.762 14.656-6.762V0zm57.64 0c-6.375 0-12.052.938-17.039 2.86-4.987 1.922-9.271 4.866-12.78 8.877-3.507 4.026-6.196 9.133-8.071 15.34-1.861 6.223-2.8 13.478-2.8 21.836v34.941H100V46.112H79.744c0-9.242 1.48-16.114 4.438-20.613 2.959-4.5 7.74-6.762 14.328-6.762V0z"></path>
              </svg>
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
