import React from "react";

export default function Faqs() {
  return (
    <section className="py-24 bg-white">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <h2 className="mb-4 text-xl font-bold md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
          <div>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Will you steal my idea?
            </h5>
            <p>
              We take an effort to sign NDAs with our clients to ensure that
              their ideas are not redistributed or stolen by the company.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              What is an MVP?
            </h5>
            <p>
              A Minimum Viable Product is your product developed with its most
              basic features required for the app to work. It will help test
              whether value is being provided to your clients.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Can I provide my own designs?
            </h5>
            <p>
              We are focused on developing software tailored for your business
              needs. Your designs are welcome and help identify your specific
              business requirements .
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Can I integrate my own code?
            </h5>
            <p>
              Incase you have other developers, we are happy and willing to
              provide them with all the skeleton they need to continue with the
              app, or if you have a specific functionality done we can work on
              it to help your team work on more important tasks
            </p>

            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Can you work on projects outside Uganda and UK?.
            </h5>
            <p>
              Yes we do take projects from different countries because all
              projects can be stored and tracked using cloud technologies and
              different monitoring tools are available check progress online.
            </p>
          </div>
          <div>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Will I be able to add more functionality on my app and expand in
              future?
            </h5>
            <p>
              We build apps with a code base that can be added on or edited by
              your own developers. Additional features can also added by us at a
              negotiated price.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              What if I'm not satisfied with my app?
            </h5>
            <p>
              Since the client is involved in the development process we don't
              expect dissatisfaction, however changes are made during the
              development process as milestones are archived. This will help
              prevent dissatisfaction. Design revisions are done for free how
              ever any feature revisions that are not part of the agreed project
              scope are developed for a price.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              What are your price rates?, my budget is small
            </h5>
            <p>
              We determine price depending on the complexity and number of
              features on a project. This helps to ensure quality work is
              provided as per the task to be done. After valuation, a quotation
              is sent to our clients with clear details of service and cost
              together with a total figure.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              What are your Payment structures?
            </h5>
            <p>
              When an agreement has been reached and upon signing of the
              necessary contracts, an upfront paymentof 40% of the total cost is
              expected, and the remaining 60% is paid as described in the
              quotation document.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
