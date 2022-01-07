import React from "react";
import Link from "next/link";

export default function Location() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-6xl py-12 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <span
              href="#_"
              className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-blue-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
            >
              <div className="flex items-center justify-center w-16 h-16 border border-blue-200 shadow-inner bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl lg:h-20 lg:w-20"></div>
              <div className="flex-1">
                <h5 className="mt-1 mb-2 text-xl font-bold lg:text-2xl">
                  Office UK
                </h5>
                <p className="mb-6 text-lg text-gray-600">
                  42-44 Nightingale Square London SW12 8QL United Kingdom
                </p>
                <span className="flex items-center text-lg font-bold text-blue-600">
                  Click to get directions
                </span>
              </div>
            </span>
            <span
              href="#_"
              className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-blue-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
            >
              <div className="flex items-center justify-center w-16 h-16 border border-blue-200 shadow-inner bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl lg:h-20 lg:w-20"></div>
              <div className="flex-1">
                <h5 className="mt-1 mb-2 text-xl font-bold lg:text-2xl">
                  Office UG
                </h5>
                <p className="mb-6 text-lg text-gray-600">
                  Najjera 1 along mbogo Road Kampala central Uganda
                </p>
                <span className="flex items-center text-lg font-bold text-blue-600">
                  Click to get directions
                </span>
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
