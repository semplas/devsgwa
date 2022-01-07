import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function CallToAction() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
            Getting Started is Easy ...
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Are you ready to start building the app or website of your dreams?
          </p>
          <div className="flex justify-center mt-8 space-x-3">
            <span
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </span>
            <span
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
            >
              Request Quotation
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
