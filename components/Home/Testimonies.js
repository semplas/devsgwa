import React from "react";
import Link from "next/link";

export default function Testimonies() {
  return (
    <>
      <section class="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
        <div class="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
          <div class="flex flex-col items-center lg:flex-row">
            <div class="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <p class="mb-2 text-base font-medium tracking-tight text-blue-500 uppercase">
                OUR CUSTOMERS LOVE what we do
              </p>
              <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Testimonials
              </h2>
              <p class="my-6 text-lg text-gray-600">
                Don't just take our word for it, read from our extensive list of
                case studies and customer testimonials.
              </p>
              <a
                href="#_"
                class="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent shadow hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue md:py-4 md:text-lg md:px-10 rounded-none"
              >
                View Case Studies
              </a>
            </div>
            <div class="w-full lg:w-1/2">
              <blockquote class="flex items-center justify-between w-full col-span-1 p-6 bg-white shadow rounded-none">
                <div class="flex flex-col pr-8">
                  <div class="relative pl-12">
                    <svg
                      class="absolute left-0 w-10 h-10 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p class="mt-2 text-xs text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      Our old website was terrible. It didn't work on mobile,
                      and I don't think it ever generated a lead for our sales
                      team. DevsGwa built a new site from the ground up, and
                      we're extremely happy with it. We're seeing new leads on a
                      daily basis, making the new site one great investment.
                    </p>
                  </div>

                  <h3 class="pl-12 mt-3 text-xs font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    Jane Cooper
                    <span class="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                </div>
                <img
                  class="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
              <blockquote class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white shadow rounded-none">
                <div class="flex flex-col pr-10">
                  <div class="relative pl-12">
                    <svg
                      class="absolute left-0 w-10 h-10 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      DevsGwa did a great job on our website. We regularly
                      update our page layouts and content to improve
                      conversions, and they're always quick to implement changes
                      we request. Their monthly reports are also extremely
                      valuable to us.
                    </p>
                  </div>
                  <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    John Doe
                    <span class="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}