import React from "react";
import Link from "next/link";

export default function OurProjects() {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
        <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
          <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
            <span href="#_" className="">
              The Projects
            </span>
          </h1>
          <p className="font-medium text-gray-500 sm:text-2xl">
            Designs and layouts to help you with your app.
          </p>
          <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div className="grid grid-cols-12 col-span-12 gap-7">
              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <span
                  href="#_"
                  className="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    className="object-cover w-full shadow-sm max-h-56"
                    src="https://cdn.devdojo.com/images/may2021/workstation.jpg"
                  />
                </span>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-blue-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white">
                    <span>Transport</span>
                  </div>
                  <h2 className="text-base font-bold sm:text-lg md:text-xl">
                    <span href="#_" className="">
                      YoFare
                    </span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Check out these inspiring workstations to get ideas on how
                    to level-up your workstation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <span
                  href="#_"
                  className="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    className="object-cover w-full shadow-sm max-h-56"
                    src="https://cdn.devdojo.com/images/may2021/snacks.jpg"
                  />
                </span>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Food</span>
                  </div>
                  <h2 className="text-base font-bold sm:text-lg md:text-xl">
                    <span href="#_">MyChef</span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Learn how to be more disciplined in your diet and how you
                    can eat to maximize productivity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <span
                  href="#_"
                  className="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    className="object-cover w-full shadow-sm max-h-56"
                    src="https://cdn.devdojo.com/images/may2021/book-design.jpg"
                  />
                </span>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-blue-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Ecommerce</span>
                  </div>
                  <h2 className="text-base font-bold sm:text-lg md:text-xl">
                    <span href="#_">MarketOval</span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    What does it mean to have a design mind-set? Learn how to
                    improve your eye for design.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <span
                  href="#_"
                  className="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    className="object-cover w-full shadow-sm max-h-56"
                    src="https://cdn.devdojo.com/images/may2021/book-design.jpg"
                  />
                </span>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-blue-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>RealEstate</span>
                  </div>
                  <h2 className="text-base font-bold sm:text-lg md:text-xl">
                    <span href="#_">Mitenant</span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    What does it mean to have a design mind-set? Learn how to
                    improve your eye for design.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <span
                  href="#_"
                  className="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    className="object-cover w-full shadow-sm max-h-56"
                    src="https://cdn.devdojo.com/images/may2021/book-design.jpg"
                  />
                </span>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-blue-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Education</span>
                  </div>
                  <h2 className="text-base font-bold sm:text-lg md:text-xl">
                    <span href="#_">Retooling</span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    What does it mean to have a design mind-set? Learn how to
                    improve your eye for design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
