import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <>
      <section className="w-full py-20 bg-gray-50">
        <div className="px-10 mx-auto max-w-7xl">
          <div className="px-10 mb-8 space-y-5 lg:px-0 lg:text-center lg:mb-16">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Software services
            </h2>
            <p className="text-lg text-gray-600 w-ful sm:text-xl">
              DevsGwa’s managed IT services are designed to support growing
              companies by offering fully managed technology solutions at an
              affordable cost.
            </p>
          </div>
          <div className="grid overflow-hidden lg:rounded-xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                <h3 className="text-2xl font-semibold sm:text-4xl">
                  Mobile applications Development
                </h3>
                <p className="text-lg text-gray-600">
                Got a mobile app idea, or something you think could be helpful to a target audience, or you have already begun development, but you need mastering from an experienced team, we got you covered. The field of mobile apps is booming each and every day, let’s build it, launch it, and possibly help you reach your target audience.
                </p>
              </div>
              <div className="overflow-hidden bg-gray-100 h-96">
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                <img
                  src="https://images.unsplash.com/photo-1541506618330-7c369fc759b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1665&amp;q=80"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                <h3 className="text-2xl font-semibold sm:text-4xl">
                  Website Development
                </h3>
                <p className="text-lg text-left text-gray-600">
                At Devsgwa, we hold one goal above all others: 100% client satisfaction. Our in-house team of web designers, graphic designers, and developers uphold the highest standards for project planning and execution, and we're dedicated to building the perfect website for your company on-time and on-budget.
                </p>
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                <h3 className="text-2xl font-semibold sm:text-4xl">
                  Digital Marketing And Content Creation
                </h3>
                <p className="text-lg text-gray-600">
                Digital marketing and content are vital for growth in today’s competitive marketing environment. Brands that have documented content strategies that are carried out professionally on a consistent basis consistently out-perform those who don’t. At Devsgwa, we specialize in helping our clients leverage content through a variety of copywriting services.
                </p>
              </div>
              <div className="bg-gray-100 h-96">
                <img
                  src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3203&amp;q=80"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
