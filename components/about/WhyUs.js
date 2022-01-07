import React from "react";
import Link from "next/link";

export default function WhyUs() {
  return (
    <>
      <section className="relative leading-7 text-gray-900 bg-white border-solid">
        <div className="box-border mx-auto border-solid lg:pl-8 max-w-7xl">
          <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
            <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-10 lg:pr-20">
              <h2 className="m-0 text-3xl font-medium leading-tight tracking-tight text-left text-black sm:text-4xl md:text-5xl">
                Why Choose Us
              </h2>
              <p className="mt-2 text-xl text-left border-0 border-gray-200 sm:text-2xl">
                We offer the best features in the industry.
              </p>
              <div className="grid gap-4 mt-8 leading-7 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
                    <p className="box-border m-0 text-xl text-white border-solid"></p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                      Automated Tasks
                    </h3>
                    <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                      No more wasting time on manual tasks, you can leverage our
                      automated tasks to make your life easier.
                    </p>
                  </div>
                </div>
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
                    <p className="box-border m-0 text-xl text-white border-solid"></p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                      Email Campaigns
                    </h3>
                    <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                      Utilize our email campaigns to send your users up-to-date
                      information about your product and services.
                    </p>
                  </div>
                </div>
                <div className="box-border flex items-start text-gray-900 border-solid">
                  <div className="flex items-center justify-center w-12 h-12 leading-7 bg-blue-600 border-0 border-gray-200 rounded-full">
                    <p className="box-border m-0 text-xl text-white border-solid"></p>
                  </div>
                  <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                    <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                      Great Support
                    </h3>
                    <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                      We offer some of the best support available. Contact us
                      anytime of the day and we'll help you out ASAP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1234&amp;h=1600&amp;q=80"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
