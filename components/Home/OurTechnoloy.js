import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function OurTechnoloy() {
  return (
    <>
      <section className="w-full py-16 pb-20 bg-white">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">
            Trusted technologies behind our magic
          </h1>
          <p className="text-lg text-center text-gray-600">
            We've been trusted and used by some of the top companies in the
            industry.
          </p>
          <div className="grid grid-cols-2 gap-16 py-16 mb-0 text-center lg:grid-cols-6">
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.devdojo.com/tails/images/nintendo-logo.svg"
                alt="Ninendo Logo"
                className="block object-contain h-8 lg:h-10"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.devdojo.com/tails/images/google-icon.svg"
                alt="Google Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.devdojo.com/tails/images/reddit.svg"
                alt="Reddit Logo"
                className="block object-contain h-12 lg:h-16"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.devdojo.com/tails/images/youtube-logo.svg"
                alt="Youtube Logo"
                className="block object-contain h-9 lg:h-16"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.devdojo.com/tails/images/slack-icon.svg"
                alt="Slack Logo"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.devdojo.com/tails/images/amazon.svg"
                alt="Amazon Logo"
                className="block object-contain h-10 lg:h-16"
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full ml-2">
            <span href="#" className="flex items-center">
              <span className="border-b-2 border-black">
                Visit Our Testimonials
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
