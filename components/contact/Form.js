import React from "react";
import Link from "next/link";

export default function Form() {
  return (
    <>
      <section className="py-20 bg-gray-200">
        <div className="max-w-5xl px-10 mx-auto xl:px-5">
          <div className="flex flex-col justify-center space-y-8">
            <p className="w-full -mb-3 font-medium text-left text-blue-600 uppercase md:text-center text-3xl">
              devsgwa
            </p>
            <h2 className="w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl md:text-center">
              Always Be Creating
            </h2>
            <p className="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-2xl md:text-center">
              Every step of your journey will get you to your final goal. Keep
              moving and pushing forward and you will succeed.
            </p>

            <div
              className="flex flex-col w-full mx-auto space-y-5 md:space-y-0 md:space-x-5 md:flex-row"
              data-dashlane-rid="dfb3e78b27827bea"
              data-form-type="forgot_password"
            >
              <input
                type="text"
                className="flex-1 w-full px-5 py-5 text-2xl border border-gray-300 rounded-lg focus:ring-4 focus:border-blue-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none"
                placeholder="Your Name"
                data-dashlane-rid="e322e2ed38ca3a11"
                data-form-type="name,username"
              />
              <input
                type="text"
                className="flex-1 w-full px-5 py-5 text-2xl border border-gray-300 rounded-lg focus:ring-4 focus:border-blue-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none"
                placeholder="Phone number"
                data-dashlane-rid="393bca5d8fd8d2e5"
                data-form-type="email"
              />
              <span
                href="#_"
                className="flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none"
              >
                Call Me back
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
