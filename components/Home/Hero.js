import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <section className="relative flex flex-col-reverse w-full px-6 py-16 bg-gray-900 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-blue-900 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H80L50 120H0L50 0Z"></path>
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="flex inline-block text-sm font-semibold tracking-wider text-blue-200 uppercase rounded-full mb-7">
              DevsGwa
            </p>
            <h1 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
              <span className="inline-block text-white">
                Reliable Software Developers You Can Trust
              </span>
            </h1>
            <p className="mb-5 text-base text-gray-300 sm:pr-10 md:text-lg">
              We specialize in high end technologies designed to scale your
              business to the next level.
            </p>
            <div className="flex flex-col items-center pt-2 sm:flex-row sm:pt-4">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-blue-500 rounded shadow-md sm:w-auto sm:mr-4 sm:mb-0 hover:bg-deep-blue-accent-700 focus:shadow-outline focus:outline-none"
              >
                Request Quote
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-700 rounded shadow-md sm:w-auto hover:bg-deep-blue-accent-700 focus:shadow-outline focus:outline-none"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
