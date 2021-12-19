import React from "react";
import Link from "next/link";

export default function AboutHeader() {
  return (
    <>
      <section className="w-full px-8 pt-20 pb-16 bg-white xl:px-0">
        <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
          <h3 className="w-full text-4xl font-extrabold tracking-normal text-gray-900 sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2">
            Our development process was created to ensure every project is
            delivered on-time and on-budget.
          </h3>
          <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
            <p className="col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl">
              DevsGwa is a technology and digital marketing agency with a focus
              in building custom software solutions like Web Applications,
              Mobile Applications and Desktop applications. We nurture ideas
              provide the necessary technical expertise for them to grow into
              great brands for solo-entrepreneurs, early stage start-ups and
              small-to-medium enterprise (SMEs).
            </p>

            <p className="col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-9 md:text-xl">
              With our latest campaign to take all businesses online, thousands
              of customers rely on our digital solutions to get their ideas
              online. We offer everything you need to create an effective and
              memorable presence online. We are an all in one solution to get
              you online with professionals experinced in all feilds of digital
              presence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
