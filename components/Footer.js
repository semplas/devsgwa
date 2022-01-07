import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  return (
    <>
      <section className="w-full bg-blue-600">
        <div className="px-8 py-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div className="col-span-3">
              <span className="text-xl font-black leading-none text-white select-none logo">
                DevsGwa
              </span>
              <p className="my-4 text-xs leading-normal text-blue-100">
                Beautifully hand-crafted components to help you build amazing
                pages.
              </p>
            </div>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-blue-200 uppercase">
                Servicec
              </p>
              <Link href="/contact">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Website App development
                </span>
              </Link>

              <Link href="/contact">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Mobile App Development
                </span>
              </Link>

              <Link href="/contact">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  IT tutoring
                </span>
              </Link>

              <Link href="/contact">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  IT consultancy
                </span>
              </Link>

              <Link href="/contact">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Digital Marketing
                </span>
              </Link>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-blue-200 uppercase">
                About
              </p>
              <Link href="/about">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Our Story
                </span>
              </Link>

              <Link href="/about">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Company
                </span>
              </Link>

              <Link href="/about">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Team
                </span>
              </Link>

              <Link href="/blog">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Process
                </span>
              </Link>
            </nav>
            <nav className="col-span-2 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-blue-200 uppercase">
                Contact
              </p>
              <Link href="/blog">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Request Quote
                </span>
              </Link>

              <Link href="/blog">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Press
                </span>
              </Link>

              <Link href="/contact">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Email
                </span>
              </Link>

              <Link href="/about">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Partners
                </span>
              </Link>

              <Link href="/contact">
                <span className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">
                  Jobs
                </span>
              </Link>
            </nav>
            <div className="col-span-3">
              <span className="inline-flex justify-center w-full mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-end">
                <span href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">Facebook</span>
                 
                 
                </span>

                <span href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">Instagram</span>
                 
                 
                </span>

                <span href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  
                  
                </span>

                <span href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">GitHub</span>
                 
                 
                </span>

                <span href="#" className="text-blue-100 hover:text-white">
                  <span className="sr-only">Dribbble</span>
              
              
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-blue-500 md:flex-row md:items-center">
            <p className="mb-6 text-sm text-left text-blue-200 md:mb-0">
              © Copyright 2021 Tails. All Rights Reserved.
            </p>
            <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
              <Link href="/about">
                <span className="text-sm text-blue-200 transition hover:text-white">
                  Terms
                </span>
              </Link>

              <Link href="/about">
                <span className="text-sm text-blue-200 transition hover:text-white">
                  Privacy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js" />
    </>
  );
}
