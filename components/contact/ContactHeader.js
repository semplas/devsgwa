import React from "react";
import Link from "next/link";

export default function ContactHeader() {
  return (
    <>
      <section className="py-20 bg-blue-50">
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Our clients' satisfaction is what keeps our doors open, that
                  why we are available for any queries.
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6"></p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <span className="font-medium text-gray-500">
                      +256705467976 (Office)
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <span className="font-medium text-gray-500">
                      hi@devsgwa.com
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <span className="font-medium text-gray-500">
                      +256705752569 (WhatApps)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
