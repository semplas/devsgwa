import React from "react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <>
      <section className="bg-gray-900">
        <div className="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
          <div className="overflow-hidden border-2 border-blue-600 rounded-lg md:py-6 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl">
            <div className="p-6 rounded-lg md:p-0 md:pb-4 bg-blue-1000">
              <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-blue-100 sm:text-4xl sm:leading-10">
                Ready to get started?
                <br />
                <span className="text-blue-500">
                  Level-up with our Pro Plan.
                </span>
              </h2>
              <p className="w-full mt-5 text-base leading-6 text-blue-100 md:w-3/4">
                Our intuitive drag'n drop interface will have you designing and
                building interfaces quicker than ever before.
              </p>
            </div>
            <div className="flex w-full md:w-auto lg:flex-shrink-0">
              <a
                href="#_"
                className="block w-full px-5 py-3 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-blue-600 md:inline-flex md:rounded-md md:shadow md:w-auto hover:bg-blue-500 focus:outline-none focus:shadow-outline"
              >
                Get Started for $15/mo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
