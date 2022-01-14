import React from "react";
import Link from "next/link";
import { projects } from "../../data";

export default function OurProjects() {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
        <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
          <h1 className="mb-1 text-2xl font-semiBold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
            <span href="#_" className="">
              Case studies
            </span>
          </h1>
          <p className="font-medium text-gray-500 sm:text-2xl">
            Since we were founded in 2017 <br /> we have built up a customer
            base that we are very proud of.
          </p>
          <p>
            As a bespoke software development <br /> company we have delivered a
            vast range of applications that have made <br /> a significant
            difference in their business.
          </p>
          <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div className="grid grid-cols-12 col-span-12 gap-7">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4"
                >
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
                      <span>{project.industry}</span>
                    </div>
                    <h2 className="text-base font-bold sm:text-lg md:text-xl">
                      <span href="#_" className="">
                        {project.name}
                      </span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
