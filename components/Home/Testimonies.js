import React from "react";
import Link from "next/link";

export default function Testimonies() {
  return (
    <>
      <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
        <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <p className="mb-2 text-base font-medium tracking-tight text-blue-500 uppercase">
                OUR CUSTOMERS LOVE what we do
              </p>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Testimonials
              </h2>
              <p className="my-6 text-lg text-gray-600">
                Don't just take our word for it, read from our extensive list of
                case studies and customer testimonials.
              </p>
              <Link href="/projects">
                <span className="flex cursor-pointer items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent shadow hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue md:py-4 md:text-lg md:px-10 rounded-none">
                  View Case Studies
                </span>
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white shadow rounded-none">
                <div className="flex flex-col pr-8">
                  <div className="relative pl-12">
                    <p className="mt-2 text-xs text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      Our old website was terrible. It didn't work on mobile,
                      and I don't think it ever generated a lead for our sales
                      team. DevsGwa built a new site from the ground up, and
                      we're extremely happy with it. We're seeing new leads on a
                      daily basis, making the new site one great investment.
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-xs font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    Jane Cooper
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                </div>
              </blockquote>
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white shadow rounded-none">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      DevsGwa did a great job on our website. We regularly
                      update our page layouts and content to improve
                      conversions, and they're always quick to implement changes
                      we request. Their monthly reports are also extremely
                      valuable to us.
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    John Doe
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
