import Head from 'next/head'
export default function Home() {
  return (

    <div className="flex flex-col">
      <Head>
        <title>Devsgwa: Get Your Business Online Today</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="w-full px-6 antialiased bg-white -mb-2 sticky top-0 z-50 shadow-lg shadow-gray-900">
        <div class="mx-auto max-w-7xl">
          <nav class="relative z-50 h-18 select-none" x-data="{ showMenu: false }">
            <div class="container relative flex flex-wrap items-center justify-between h-16 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
                <div class="flex items-center justify-start w-1/4 h-full pr-4">
                    <a href="#_" class="inline-block py-4 md:py-0">
                        <span class="p-1 text-5xl lg:text-3xl font-black leading-none text-gray-900"><span>Devs</span><span class="text-blue-500">gwa</span></span>
                    </a>
                </div>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
                      <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                          <div class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a href="#_" class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-blue-500 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center hover:uppercase hover:font-bold">About</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-blue-500 lg:mx-3 md:text-center hover:uppercase hover:font-bold">Services</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-blue-500 lg:mx-3 md:text-center hover:uppercase hover:font-bold">Portifolio</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-blue-500 lg:mx-3 md:text-center hover:uppercase hover:font-bold">Team</a>
                            <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-blue-500 lg:mx-3 md:text-center hover:uppercase hover:font-bold">Contacts</a>
                          </div>               
                        <div class="inline-flex items-center ml-5 space-x-6 lg:w-2/5 lg:justify-end lg:ml-0">
                              <span class="inline-flex justify-center mt-4 space-x-5 md:ml-auto md:mt-0 md:justify-start">
                                  <a href="#" class="text-gray-400 hover:text-blue-500">
                                      <span class="sr-only">Facebook</span>
                                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                                  </a>

                                  <a href="#" class="text-gray-400 hover:text-blue-500">
                                      <span class="sr-only">Twitter</span>
                                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                  </a>

                                  <a href="#" class="text-gray-400 hover:text-blue-500">
                                      <span class="sr-only">GitHub</span>
                                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                                  </a>
                              </span>
                        </div>
                  </div>
                </div>
            </div>
          </nav>      
        </div>
      </div>

    {/* Hero section start */}
      <div className="relative flex w-full bg-blue-500 lg:pt-10 sm:py-12 lg:py-16 flex-col lg:pt-0 lg:flex-col lg:pb-0">
      </div>



<div class="relative flex flex-col-reverse w-full px-6 py-16 bg-blue-500 lg:pt-0 lg:flex-col lg:pb-0">
    <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg class="absolute left-0 hidden h-full text-blue-500 transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice"><path d="M50 0H80L50 120H0L50 0Z"></path></svg>
        <img class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="" />
    </div>
    <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h1 class="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                Reliable Software Developers<br class="hidden md:block" />
                <span class="inline-block text-white">You Can Trust</span>
            </h1>
            <p class="mb-5 text-base text-lg  text-gray-300 sm:pr-10 md:text-lg">
                Get a fully responsive website for your old or newly launched business from a team of reliable developers that you can trust always.
            </p>
                <div class="flex flex-col items-center pt-2 sm:flex-row sm:pt-4 ">
                        <a href="/" class="inline-flex text-xl items-center justify-center w-50 h-12 px-6 mt-10 font-medium tracking-wide text-blue-500 transition duration-200 bg-white rounded-full shadow-md sm:w-auto sm:mr-4 sm:mb-0 shadow-xl hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none sm:text-center md:text-center">
                            Request Quotation
                        </a>
                </div>
            </div>
    </div>
</div>



            <div className="pl-10 pt-4 xl:mr-10 lg:pl-28 lg:pt-20 ">
                <h1 className="text-4xl font-bold text-blue-500 xl:text-5xl">
                      About Us.
                </h1>
                <p className="lg:w-4/12 text-gray-700 sm:text-gray-900 sm:font-bold text-sm">
                  We build everything you need to create an effective and memorable presence online.
                </p>
            </div>
            <div class="flex flex-col max-w-6xl mx-auto md:mt-4 sm:mt-4 sm:px-10 mt-4">
                <div class="grid grid-cols-6 gap-5 md:grid-cols-12 md:gap-10 lg:mt-12 ">
                    <p class="col-span-6 text-base font-normal text-gray-800 lg:leading-8 xl:leading-8 md:text-xl pl-10 text-sm xl:pl-0 xl:mr-0">
                      DevsGwa is a technology and digital marketing agency focusing on building custom software 
                      solutions like Web Applications, Mobile Applications and Desktop applications. We nurture ideas 
                      provide the necessary technical expertise for them to grow into great brands for solo-entrepreneurs, 
                      early stage start-ups and small-to-medium enterprise (SMEs).
                    </p>

                    <p class="col-span-6 text-base font-normal text-gray-900 lg:leading-8 xl:leading-8 md:text-xl pl-10 text-sm">
                      With our latest campaign to take all businesses online, thousands of customers rely 
                      on our digital solutions to get their businessesand ideas online. We offer everything you need to 
                      create an effective and memorable presence online. We are an all in one solution to 
                      get you online with professionalz experinced in all feilds of digital presence.
                    </p>
                  </div>
            </div>
    {/* Hero section end */}


    <div class="bg-white sm:py-0 lg:py-1 ">
          <div class="px-12 pb-24 pt-24 mx-auto max-w-screen-2xl md:px-16">
              <div class="mb-10 md:mb-16">
                  <h2 class="mb-4 text-4xl font-bold text-left text-black lg:text-5xl md:text-center md:mb-10 sm:text-4xl">Our <span class="relative inline-block text-transparent bg-gradient-to-br from-indigo-300 via-blue-300 to-green-300 bg-clip-text">Key Driving
                          <svg class="absolute hidden w-2/3 h-auto mt-1 text-gray-100 transform translate-x-8 fill-current md:block" viewBox="0 0 76 12" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M71.531 4.853c-2.199-.224-4.183-.188-6.265-.193-4.063-.011-8.125-.88-12.188-.85-9.099.079-18.339-.421-27.47.402-2.697.239-5.391.442-8.061.786-.256.031-.51.063-.767.099-2.505.328-5.775.136-8.265.48-2.192.457-3.891 1.03-5.99.874-.557-.108-1.15-.303-1.484-.698C.312 4.905-.027 4.129.326 3.482c.115-.213.313-.432.527-.629.417-.366.917-.653 1.189-.678 4.692-.5 10.015-.594 14.255-.683 2.093-.042 4.254-.099 6.896-.208 6.104-.156 15.729-.256 21.839-.406 5.339-.135 10.692.609 15.979 1.162 2.01.209 3.276.209 5.078.266.301.004.641.015.99.025 1.781.057 4.989-.224 6.025.317 1.037.547 1.761.604 2.667 1.609.048.991-.317 1.449-.78 1.615-1.079.396-2.068.839-2.907.975-.983.156-1.776.162-1.937-.213-.156-.376-.068-.609.088-.781.271-.281.76-.589 1.198-.797l.098-.203Z"></path><path d="M28.744 9.336c1.677-.088 3.364-.203 5.036-.142 2.115.074 3.907.314 6.006.281.708-.009 5.016.005 5.604-.004 1.833-.032 3.636-.026 5.464.025 1.213.036 2.432.109 3.636.251 2.833.333 5.76.557 8.547 1.192.708.162 1.432.297 2.145.167.708-.125 1.792-.5 1.719-1.276-.083-.907-.833-2.036-1.735-2.322-.276-.084-.911-.475-1.192-.533-.265-.052-.5-.238-.745-.27-.578-.078-1.011.188-1.547.318-.625.151-1.979-.272-2.625-.287-2.281-.057-3.609.525-5.891.505-1.348-.01-2.703-.052-4.052-.074-1.295-.021-2.593.017-3.885-.052-.902-.046-1.792-.292-2.687-.312-.767-.016-1.543.125-2.297.276-.645.135-1.355.078-2.01.083-.599.011-1.333-.14-1.891 0-.719.183-1.517.188-2.25.26-1.38.136-2.074-.109-3.448.063-.855.104-1.486.432-2.339.313-.437-.063-1.557.219-1.994.172-.449-.042-.48.28-.885.333-.491.061-.986.047-1.475.067-.208.011-.766-.011-.911.152-.204.224.203.687.509.818 1.121.489 2.74.098 3.922.057.422-.014.845-.035 1.271-.061Z"></path></g></svg>
                      </span> Points</h2>

                  <p class="max-w-screen-md mx-auto text-left text-black g:leading-8 xl:leading-8 md:text-xl">
                      We pride ourselves in the features that our application provides. We have been trusted by over 500+ companies to take their business to the next level.
                  </p>
              </div>

              <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 md:gap-12">
                  
                  <div class="flex gap-4 md:gap-5 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl p-0.5  shadow-2xl">
                      <div class="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-2xl">
                          <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-yellow-300 via-red-300 to-pink-300">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                              </svg>
                          </div>

                          <div>
                              <h3 class="mb-2 text-lg font-semibold text-white md:text-xl">Vision</h3>
                              <p class="mb-2 text-sm text-red-50">Full analytics so you can get insight to what your customers and users are doing.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="flex gap-4 md:gap-5  shadow-2xl cursor-pointer bg-gradient-to-br from-green-400 via-blue-400 to-indigo-400 rounded-2xl p-0.5">
                      <div class="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-xl">
                          <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-green-300 via-blue-300 to-indigo-300">
                              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                          </div>

                          <div>
                              <h3 class="mb-2 text-lg font-semibold text-white md:text-xl">Mission</h3>
                              <p class="mb-2 text-sm text-blue-50">Messaging system where your users can communicate and interact together.</p>
                          </div>
                      </div>
                  </div>
                  

                  
                  <div class="flex gap-4 md:gap-5  shadow-2xl cursor-pointer bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl p-0.5">
                      <div class="flex gap-4 p-5 bg-gray-900 md:gap-5 bg-opacity-5 rounded-xl">
                          <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-full md:w-14 md:h-14 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
                              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
                          </div>

                          <div>
                              <h3 class="mb-2 text-lg font-semibold text-white md:text-xl">Goal</h3>
                              <p class="mb-2 text-sm text-blue-50">Gain insights into all the events that are fired in your web and mobile applications.</p>
                          </div>
                      </div>
                  </div>
                
              </div>
          </div>
      </div>

      <div class="relative w-full bg-white mx-auto max-w-screen-4xl">
            <div class="absolute inset-0 w-full h-full bg-white opacity-10"></div>
              <div class="max-w-6xl px-10 mx-auto">
                <div class="flex justify-between w-full pb-4">
                  <div class="flex flex-col items-start sm:flex-row sm:items-center">
                    <div class="pr-10 py-0 text-4xl font-extrabold text-gray-900 pb-5">Our Fields Of Expertise</div>
                      <p className="text-base text-gray-700 md:text-lg">
                          We understand the hassle to get your idea online, starting from small local businesses that only serve their hometown to large enterprises.
                      </p>
                      <p className="text-base text-gray-700 md:text-lg mt-4">
                        DevsGwa offers reliable and affordable solutions to get you and your business sorted. We specialise in high end technologies designed to scale your busieness to the next level.
                      </p>
                  </div>
                </div>
              </div>



<div>
    <div class="relative">
        <div class="relative px-10 pt-8 ml-auto mr-auto bg-top bg-cover sm:py-16 max-w-7xl md:px-24 lg:px-16 lg:py-20">

            <div class="relative grid gap-6 bg-top bg-cover sm:grid-cols-2 lg:grid-cols-4">
                <div class="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-2xl rounded-2xl group hover:shadow-2xl">
                    <div class="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p class="relative">
                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                        </p>
                    </div>
                    <p class="font-bold text-2xl  text-gray-700">Website Development</p>
                    <p class="text-sm leading-5 text-gray-500">
                      Your website is your online advertersing billboard for you and your business. Having a good website is having a good business. Its your 24/7 sales person.
                    </p>
                </div>
                <div class="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-2xl rounded-2xl group hover:shadow-2xl">
                    <div class="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p class="relative">
                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                        </p>
                    </div>
                    <p class="font-bold text-2xl text-gray-700">Mobile App Development</p>
                    <p class="text-sm leading-5 text-gray-500">It's a trendy flow for all ideas in the 21 century. Most of the startups in this era are mobile applications. But having a good looking application focusing on UI/UX design is key.</p>
                </div>
                <div class="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-2xl rounded-2xl group hover:shadow-2xl">
                    <div class="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p class="relative">
                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                        </p>
                    </div>
                    <p class="font-bold text-2xl text-gray-700">Digital Marketing</p>
                    <p class="text-sm leading-5 text-gray-500">Get found by your potential clients with smart advertsing. We focus on generating leads with highend converstion rates with advertising delivered through digital channels</p>
                </div>
                <div class="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-2xl rounded-2xl group hover:shadow-2xl">
                    <div class="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                        <p class="relative">
                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                        </p>
                    </div>
                    <p class="font-bold text-2xl text-gray-700">Content Creation</p>
                    <p class="text-sm leading-5 text-gray-500">
                      Since the boost of online businesses, content creation has showed a great potential in any online business' success. Here at Devsgwa we use a skill well known as copywriting.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

      </div>



  <div class="bg-white sm:py-12 lg:py-16 mt-20">
    <div class="flex flex-col items-start px-10 mx-auto space-y-20 lg:space-y-0 lg:flex-row max-w-7xl md:items-center">

        <div class="flex flex-col justify-center flex-shrink-0 w-full h-full max-w-lg space-y-5 text-gray-800 lg:max-w-none lg:w-5/12 xl:w-6/12 sm:text-center">
            <div class="flex items-center space-x-5 text-blue-500 sm:flex-col flex-col">
                <div class="w-20 h-0.5 bg-blue-500 sm:mb-4 mb-4"></div>
                <p class="text-sm font-bold tracking-wide uppercase">The New Standard</p>
            </div>
            <h2 class="text-4xl font-black xl:text-5xl flex justify-center text-center">Trusted technologies<br />behind our magic.</h2>
            <p class="text-left pl-16">
              We are proud of ourselves in the features that our company provides.We have been trusted by over 500+ companies to take their business to the next level.
            </p>
        </div>

        <div class="max-w-lg lg:max-w-none lg:w-7/12 lg:pl-8 xl:w-6/12">
            <div class="grid grid-cols-3 text-gray-400 gap-x-12 gap-y-16">
                <a href="#_" class="flex items-center justify-center hover:text-red-600">
                    <svg class="w-auto h-10 fill-current sm:h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2428 880"><defs></defs><g fill-rule="nonzero"><path d="M977.185 531.113c-20.544 1.31-33.54 1.31-60.595 2.088-8.586 0-52.268 0-61.113-.26-8.846-.531-8.586 3.411-8.586 8.392 0 3.943 2.347 5.525 8.067 5.525 10.402 0 23.41.519 30.168 7.094 2.347 2.62 11.97 15.486 11.97 25.732l.26 223.807c.519 35.2-11.958 44.642-24.448 44.914-11.712 0-25.485-5.772-38.494-22.049L742.6 714.44c1.608-3.385 20-12.827 37.327-24.552 42.009-28.403 42.644-55.406 41.996-79.997-1.076-40.634-32.437-83.798-92.319-83.798-67.611-1.569-110.269 6.304-166.44-.518-8.327-.805-8.587 3.41-8.587 8.663 0 3.943 2.348 5.525 8.067 5.525 10.402 0 20.804 1.31 28.352 6.304 4.423 3.138 12.737 11.283 12.737 22.58l.272 258.734c0 12.088-3.904 21.011-18.988 21.011-16.64 0-26.263-27.055-30.427-40.193l-86.858-280.536h-31.984L303.9 840.779c-14.565 18.65-21.063 10.765-22.36 1.323-2.075-14.967 8.067-28.638 6.498-43.345l-6.498-3.165c-5.201 7.886-7.808 16.822-12.737 24.694-11.97 19.105-27.638 26.238-43.747 32.879-34.603 14.267-79.504 11.374-127.376-30.246-31.464-28.118-47.067-70.14-50.193-111.903-2.866-39.143 4.682-79.595 26.005-112.435 34.071-52.268 109.996-74.33 165.13-45.446 26.926 14.111 33.087 35.395 37.963 56.743 1.31 6.303 9.624 9.196 14.825 4.993 4.163-2.892 2.866-8.391 2.088-13.657-3.645-24.435-.519-49.907 4.941-74.33-24.344 1.271-48.208-3.1-72.527-5.058-26.211-2.114-58.688-2.723-92.617 6.628C28.032 557.48-1.72 642.562.77 714.634c2.763 80.011 50.686 127.26 100.788 149.516 36.147 15.758 81.399 16.537 122.746 12.866 14.306-1.323 29.13-2.892 43.436-3.424 26.536-1.05 61.632-3.151 112.616-1.841 8.573-.52 10.92-3.943 10.92-9.196 0-4.19-2.347-5.512-8.066-5.512h-6.77c-9.624-1.064-21.595-2.101-26.537-5.525-4.669-3.152-9.623-17.587-5.188-29.156l32.762-80.906H490.08l24.966 82.229c4.423 14.707 1.297 21.802-3.89 27.054-4.942 4.994-16.122 6.044-25.746 7.095-2.593 0-5.72.26-9.104.26-5.46 0-8.067 1.582-8.067 5.524 0 4.994-.532 8.405 8.326 8.924h217.153c8.586 0 8.586-3.411 8.586-8.664 0-3.943-2.594-5.512-8.067-5.512-19.844 0-41.348-7.043-41.348-32.049l.519-256.918c0-12.866 3.904-20.232 9.364-22.32 13.255-6.058 27.833-6.576 41.88-4.994 58.675 6.589 67.87 35.926 70.996 64.356 7.276 66.275-33.047 89.816-75.42 95.354-9.882 1.05-21.84-.273-29.908 2.373-7.289 2.62-7.289 15.486-.778 17.587 5.98 1.323 16.64-1.31 22.892 1.323l93.097 120.567c3.89 4.993 23.41 28.624 28.87 28.624h159.153c8.832 0 8.586-3.41 8.586-8.391 0-3.943-2.348-5.512-8.068-5.512-19.597 0-28.43-10.454-30.115-21.05-1.116-7.03-1.35-17.289-1.35-25.979v-231.95c0-12.089 6.499-23.632 9.365-26.265 7.795-7.872 13.774-7.872 23.93-7.872 5.719 0 8.066-1.57 8.066-5.513-.026-4.941.752-9.416-6.783-8.624zM387.281 716.399l54.344-135.534 38.234 135.015-92.578.519zM2418.658 528.18l-108.7-.259c-8.34 0-9.118 3.943-9.118 8.923 0 3.943 2.36 5.512 8.055 5.512 4.967 0 10.414.792 15.602 2.101 8.586 2.374 17.172 6.576 20.285 11.038 3.398 4.993 7.808 13.93 7.808 30.479v196.738c0 9.196-2.075 16.03-13.774 1.05L2139.107 527.39l-77.52.273c-8.845 0-8.586 3.41-8.586 8.391 0 3.956 2.36 5.525 8.08 5.525 6.226 0 11.167-.272 15.33 1.842 13.528 5.771 25.758 26.017 25.758 44.927l.506 228.787c0 34.15-60.594 35.46-69.44 6.303l-91.527-296.567-27.587.273-129.244 308.11c-8.586 20.492-28.598 15.24-27.301 4.474l4.682-33.099c.506-4.202-5.473-5.784-8.586-4.474-6.51 2.918-5.655 12.593-7.95 19.636-6.226 19.04-27.911 26.601-45.628 26.601h-43.695c-8.846 0-22.373-4.462-25.486-10.506-6.485-12.087-9.351-25.485-9.351-41.243l.26-90.62c0-4.202 4.681-7.354 11.698-7.354h68.143a26.147 26.147 0 0120.804 11.569c4.15 6.822 3.904 14.967 5.72 22.853.505 2.1 1.037 4.72 2.606 6.03 2.335 2.387 6.226 3.956 9.092 1.583v-105.6c0-2.1-7.548-2.892-9.624 2.374-3.903 10.505-2.866 19.428-8.585 27.055-2.867 3.67-6.485 6.575-10.39 9.195-5.719 3.152-12.736 3.943-19.246 4.993h-59.558c-9.883 0-10.92-3.683-10.92-11.569l.26-100.074c0-13.398 4.94-17.873 12.995-17.873h72.047c18.715 0 26.264 6.835 33.034 16.031 2.075 2.892 7.808 12.334 9.092 17.328.791 3.683-.791 9.455 2.075 11.037 4.682 2.905 12.736 4.474 13.022-10.506l.765-55.16c-75.406 3.943-150.826 3.943-226.764-1.064-7.276-.518-7.016 3.684-7.016 8.405 0 3.943 2.36 5.525 8.054 5.525 7.043 0 11.984.272 16.64 2.36 2.867 1.323 6.252 3.425 9.118 5.253 9.092 6.822 8.314 20.492 8.314 32.308l-.792 254.532c0 3.942-4.656 9.714-8.56 13.138a62.164 62.164 0 01-11.984 7.626c-4.941 2.36-10.129 2.36-17.146 2.36-5.473 0-8.055 1.583-8.055 5.526 0 4.993-.271 8.404 8.561 8.404h319.355c8.845 0 8.586-3.424 8.586-8.404 0-3.943-2.335-5.525-8.055-5.525-4.941 0-9.377-.52-12.995-1.05-4.177-.52-14.319-2.893-17.432-6.291-8.845-8.923-10.92-18.119-4.176-34.94l28.624-70.128 108.946.272 20.817 69.868c7.017 23.385 9.883 32.58-.532 38.624-3.644 2.101-14.033 3.152-14.318 3.152-3.113.519-7.017.519-11.427.519-5.72 0-8.08 1.582-8.08 5.525 0 4.993 0 8.404 8.586 8.404l209.086-.804c6.757 0 8.845-4.19 8.845-8.664 0-3.943-2.335-5.525-8.054-5.525-4.15 0-7.549-.26-10.661-.519-6.758-1.05-12.737-2.373-17.678-6.303-5.188-4.202-11.958-9.987-11.958-33.358V591.266c0-9.727 4.15-10.518 7.276-6.303l223.91 287.112h21.076V582.603c0-11.556 3.112-22.853 10.129-28.378 5.473-4.19 11.699-6.822 17.431-9.183a46.691 46.691 0 0116.64-2.905c5.72 0 8.08-1.57 8.08-5.512 0-5.033 0-8.444-8.585-8.444zM1858.195 722.91l55.122-135.274 38.507 135.534-93.629-.26zm257.852-350.43c-2.607-.79-8.08 0-9.623 4.203l-9.624 24.435c-7.548 18.91-26.77 26.523-39.013 29.156-17.328 3.722-46.51 2.503-59.804-2.633-9.117-3.411-19.247-11.556-19.247-26.523l.26-250.862c0-5.771-1.038-11.815 3.644-18.91 5.72-10.505 22.62-14.188 32.775-14.188 5.693 0 8.054-1.583 8.054-5.513 0-4.993.26-8.404-8.586-8.404-6.757.26-57.988 2.101-129.516.532-8.56 0-8.56 3.41-8.56 8.404 0 3.943 2.334 5.512 8.054 5.512 10.661 0 22.114 3.943 29.921 11.556 3.113 2.62 6.758 12.088 6.758 19.96l.259 259.267c0 7.872-1.829 12.878-5.98 17.6-3.397 4.202-10.66 5.784-15.096 5.525-3.904-.273-7.017-4.475-8.314-7.886l-102.992-318.096h-32.243l-131.32 308.122c-8.585 10.765-14.318 16.277-21.334 18.378-7.808 2.633-11.958 3.152-17.432 1.842-12.49-3.152-22.619-12.866-22.619-23.112v-82.747l93.097-177.829c4.436-8.145 12.49-18.39 18.21-22.593 7.548-5.784 13.773-9.195 24.448-9.195 5.72 0 7.807-1.57 7.807-5.513 0-4.72.506-8.663-8.34-8.404-36.652 1.842-70.218 1.05-109.205-.532-8.34-.26-8.34 3.684-8.34 8.405 0 3.942 2.076 5.512 7.809 5.512 10.66 0 21.075 1.829 32.502 17.327 2.607 3.943.272 13.917-1.803 20.233l-64.771 128.712c-4.41 8.664-11.426 8.664-14.319 1.582l-61.1-132.914c-2.607-6.303-5.72-12.606-1.57-18.91 10.662-17.327 27.302-17.327 37.976-17.327 5.72 0 8.34-1.583 8.34-5.525 0-4.994 0-8.664-8.846-8.405-19.247 1.064-52.035 2.101-70.75 1.842-17.431-.26-34.072.26-54.862-.532-9.351-.26-8.85 3.684-8.85 8.405 0 3.942 2.34 5.512 8.059 5.512 10.415 0 20.285 5.253 27.301 13.916 3.139 3.943 7.29 10.246 10.661 16.822l88.182 182.03.26 79.064c0 10.247-12.49 20.493-14.851 22.062-9.598 5.785-23.41 9.196-34.046 9.196-5.72 0-8.08 1.31-8.08 5.24-.26 7.353 1.829 8.923 12.49 8.923h234.065c9.092 0 8.314-3.424 8.314-8.145 0-4.203-2.075-5.526-7.808-5.526-11.167 0-22.879-4.461-29.636-6.822-13.268-4.461-18.469-21.542-9.883-38.883l30.674-75.12 110.01-.533 27.82 90.62c3.112 8.404-7.808 19.182-12.205 22.853-8.054 6.563-16.64 7.613-26.796 7.613-5.694 0-8.313 1.323-8.313 5.512 0 4.734-.26 8.145 8.845 8.145h317.526c1.297-29.156.532-30.466 9.883-76.171 1.297-4.955-4.708-5.473-8.327-6.265zm-408.91-76.975l52.514-127.662 39.791 128.18-92.306-.518zM744.39 232.847v-58.312h-403.1v58.325h153.691v155.494l-76.197 9.987c-9.883 1.05-28.352-14.448-15.084-33.618l23.93-34.668-86.34-68.04 19.247 165.223 182.303 58.571 182.562-58.571 18.988-165.222-86.34 68.026 23.41 33.89c14.566 21.011-3.385 35.72-14.305 34.41l-76.198-9.988V232.847h153.433zm-75.25-129.01c5.46 6.303 5.46 9.727-.779 13.657l-39.272 25.213-41.607-26.523c-5.201-3.152-5.201-7.095 0-12.347l27.573-28.106L542.49.87 471.235 75.73l25.226 28.106c5.72 6.303 5.46 9.727-.791 13.657l-39.532 25.213-41.607-26.523c-5.201-3.152-5.201-7.095.26-12.347l27.832-28.378L340.94 10.584l19.247 145.793h364.606l18.975-145.793-99.854 65.147 25.226 28.106z"></path><path d="M1408.741 176.662c-31.283-73.24-122.097-95.587-197.633-70.14-64.123 21.594-122.409 74.64-127.947 163.198-4.176 66.69 15.2 145.741 86.6 175.65 70.723 29.96 163.56 14.72 214.273-44.655 52.54-61.464 55.147-154.185 24.707-224.053zM1379.676 289.9c-4.202 111.099-72.877 155.624-139.347 147.518-57.82-6.926-113.953-61.93-110.01-162.33 3.06-78.078 47.353-159.281 126.377-157.336 99.323 2.426 125.742 99.504 122.98 172.148z"></path><path d="M985.55 295.66c9.365-3.943 23.411-10.765 28.612-14.176 49.713-32.658 53.046-58.287 53.734-80.867.998-32.67-12.75-66.224-40.985-81.735-7.548-4.203-15.602-6.823-23.93-8.924-15.874-4.202-31.983-6.562-48.376-6.044-33.021 1.31-65.277 2.361-99.076 3.152-16.913.532-25.745-1.063-44.214-1.582-9.092 0-8.573 3.424-8.573 8.404 0 3.943 2.334 5.512 8.067 5.512 10.402 0 20.803 2.893 29.376 9.987 3.904 3.152 10.415 12.088 10.415 17.328v265.31c0 6.303-4.682 14.98-8.586 18.13-3.113 2.893-10.402 7.095-15.084 8.405a54.395 54.395 0 01-17.418 2.62c-5.72 0-8.067 1.57-8.067 5.512 0 4.994 0 8.405 8.586 8.405h128.206c8.845 0 8.586-3.424 8.586-8.405 0-3.942-2.348-5.512-8.067-5.512-8.586 0-17.95-1.323-28.871-8.404-7.29-4.994-9.624-13.657-9.624-21.543V128.077c0-2.373 24.448-5.512 41.348-4.734 11.699 0 23.93 0 35.11 3.411 24.94 7.613 47.468 28.728 43.694 80.374-2.516 34.46-16.938 61.93-66.924 74.511-9.96 2.503-20.79 2.983-31.374 2.983-2.866 0-9.364 1.842-9.883 4.721-1.31 4.462-.518 9.728-.518 9.728 3.385 5.512 8.845 5.252 10.66 5.252h16.641l115.989 151.565 61.891.272c8.846-.518 8.587-3.424 8.587-8.391 0-3.956-2.348-5.006-8.068-5.525-7.808-1.05-8.586-1.583-14.305-5.253-3.645-2.373-9.105-7.886-14.306-14.448L985.55 295.659zm533.966 424.228c-5.448-10.765-30.142-29.157-68.65-29.675 28.093-9.455 48.637-33.1 55.395-52.022 14.163-39.61 7.95-84.9-34.072-102.435-12.996-5.253-30.959-11.297-77.767-7.873-43.163 3.152-63.707 1.842-122.227 1.842-8.586 0-8.314 3.424-8.314 8.404 0 3.943 2.335 5.512 8.055 5.512 10.13 0 21.335 2.633 29.13 9.455 5.188 4.462 11.167 16.29 11.167 22.062l.26 224.053c0 9.416-.96 18.313-3.113 26.899-6.083 24.37-14.215 31.672-34.837 31.672-5.72 0-8.08 1.582-8.08 5.525 0 5.253-.26 8.145 8.586 8.664 54.356 0 40.297.791 116.78 6.822 27.56 1.842 65.782-4.19 92.837-21.53 40.012-25.64 66.742-74.537 34.85-137.375zm-163.471-158.711c0-4.994 10.635-13.398 24.954-15.486 13.268-1.855 29.39-2.374 42.657 0 30.83 5.499 47.872 32.23 46.886 66.47-1.323 46.652-25.058 59.142-50.024 66.703-9.598 3.152-64.473 9.727-64.473-3.424V561.177zm90.944 291.638c-22.036 9.909-49.597 10.544-67.884 3.67-11.167-4.19-22.62-9.987-22.62-24.681v-127.39c0-11.296 50.466-8.923 72.048-4.72 43.449 8.456 54.032 33.617 59.272 58.571 6.07 28.91-2.01 77.118-40.816 94.55z"></path><path d="M1257.047 719.888c-5.474-10.765-30.168-29.157-68.65-29.675 28.08-9.455 48.624-33.1 55.382-52.022 14.163-39.61 7.976-84.9-34.059-102.435-12.996-5.253-30.946-11.297-77.754-7.873-43.176 3.152-63.72 1.842-122.227 1.842-8.586 0-8.327 3.424-8.327 8.404 0 3.943 2.335 5.512 8.068 5.512 10.142 0 21.322 2.633 29.13 9.455 5.2 4.462 11.18 16.29 11.18 22.062l.272 224.053c0 10.155-1.154 19.727-3.67 28.935-5.435 19.96-11.816 29.636-34.305 29.636-5.72 0-8.067 1.582-8.067 5.525 0 5.253-.273 8.145 8.585 8.664 54.344 0 40.31.791 116.767 6.822 27.561 1.842 65.796-4.19 92.838-21.53 40.012-25.64 66.73-74.537 34.837-137.375zm-163.484-158.711c0-4.994 10.66-13.398 24.967-15.486 13.255-1.855 29.389-2.374 42.657 0 30.83 5.499 47.884 32.23 46.912 66.47-1.336 46.652-25.07 59.142-50.025 66.703-9.623 3.152-64.498 9.727-64.498-3.424V561.177h-.013zm90.944 291.638c-22.023 9.909-49.57 10.544-67.871 3.67-11.18-4.19-22.62-9.987-22.62-24.681v-127.39c0-11.296 50.453-8.923 72.035-4.72 43.448 8.456 54.045 33.617 59.298 58.571 6.07 28.91-2.037 77.118-40.842 94.55z"></path></g></svg>
                </a>
                <a href="#_" class="flex items-center justify-center hover:text-red-600">
                    <svg class="w-auto fill-current h-7 sm:h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 676"><defs></defs><path fill-rule="nonzero" d="M343.757 632.09c-37.607 6.604-75.876 8.584-115.464 13.857L107.546 292.295v368.83C69.94 665.083 35.63 670.361 0 675.64V0h100.293l137.236 383.352V0h106.228v632.09zm207.84-384.663c40.91 0 103.591-1.98 141.198-1.98v105.566c-46.848 0-101.608 0-141.198 1.98V510.03c62.024-3.957 124.045-9.24 186.723-11.22v101.604L446.025 623.51V0H738.32v105.569H551.597v141.858zm579.306-141.856h-109.526v485.616c-35.63 0-71.26 0-105.564 1.315v-486.93H806.287V0h324.621l-.005 105.571zm171.548 134.6h144.5v105.566h-144.5V585.25h-103.596V0h294.941v105.569h-191.345V240.17zm362.893 252.703c60.044 1.315 120.742 5.942 179.468 9.235v104.25c-94.35-5.942-188.704-11.872-285.034-13.857V0h105.566v492.874zm268.54 120.744c33.65 1.983 69.28 3.963 103.59 7.915V0h-103.59v613.618zM2500 0l-133.943 321.326L2500 675.64c-39.592-5.279-79.18-12.537-118.77-19.136l-75.874-195.298-77.19 179.468c-38.276-6.604-75.224-8.584-113.486-13.862l135.918-309.449L2127.871 0h113.482l69.28 177.488L2384.532 0H2500z"></path></svg>
                </a>
                <a href="#_" class="flex items-center justify-center hover:text-blue-600">
                    <svg class="w-auto h-5 fill-current sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 563"><defs></defs><path fill-rule="evenodd" d="M2035.464 169.177c9.556 16.487 12.683 35.246 13.715 56.334l1.357 28.108v196.55l1.386 28.138c2.772 45.952 36.661 79.93 82.967 82.82l27.99 1.386V253.62l1.387-28.108c1.15-20.853 4.247-39.965 13.95-56.57 20.125-34.664 57.205-55.968 97.287-55.895 40.082.073 77.084 21.512 97.081 56.249 9.557 16.487 12.536 35.6 13.686 56.216l1.386 28.02v196.638l1.386 28.138c2.89 46.188 36.514 80.166 82.968 82.82l27.99 1.386V225.511C2500 101.421 2399.431.813 2275.342.764a224.157 224.157 0 00-168.56 76.125A224.452 224.452 0 001938.221.735c-46.66 0-89.959 14.157-125.824 38.608C1790.513 14.92 1741.553.735 1713.445.735v561.778l28.108-1.386c47.014-3.097 80.991-36.16 82.82-82.82l1.504-28.138V253.62l1.386-28.108c1.18-21.206 4.13-39.847 13.715-56.452a112.55 112.55 0 0197.243-55.98c40.102.008 77.16 21.387 97.243 56.098zm-1923.12 391.98l28.108 1.356H561.78l-1.386-28.02c-3.805-46.187-36.514-79.929-82.85-82.937l-28.108-1.387H196.668l337.003-337.12-1.386-27.99c-2.183-46.66-36.279-80.372-82.85-82.938L421.327.853 0 .735l1.386 28.108c3.687 45.745 36.868 80.195 82.82 82.85l28.138 1.386h252.767L28.108 450.199l1.386 28.108c2.773 46.306 36.19 79.841 82.85 82.82v.03zM1603.165 82.965a280.875 280.875 0 010 397.26c-109.75 109.66-287.597 109.66-397.348 0-109.689-109.69-109.689-287.57 0-397.26A280.728 280.728 0 011404.314.705a280.934 280.934 0 01198.851 82.29v-.03zm-79.487 79.546c65.79 65.84 65.79 172.534 0 238.373-65.84 65.79-172.534 65.79-238.373 0-65.79-65.84-65.79-172.533 0-238.373 65.84-65.79 172.534-65.79 238.373 0zM814.781.705a280.727 280.727 0 01198.497 82.29c109.72 109.66 109.72 287.57 0 397.23-109.75 109.66-287.597 109.66-397.348 0-109.689-109.69-109.689-287.57 0-397.26A280.727 280.727 0 01814.427.705h.354zm119.01 161.747c65.81 65.843 65.81 172.56 0 238.403-65.84 65.79-172.534 65.79-238.373 0-65.79-65.84-65.79-172.534 0-238.373 65.84-65.79 172.534-65.79 238.373 0v-.03z"></path></svg>
                </a>
                <a href="#_" class="flex items-center justify-center hover:text-blue-600">
                    <svg class="w-auto h-8 fill-current sm:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2158 1259"><defs></defs><g fill-rule="nonzero"><path d="M165.4 1258.7c465.303-199.411 1118.188-380.158 1982.882-199.178l9.066-219.318C1245.055 740.596 590.445 1031.158 165.4 1237.079v21.62z"></path><path d="M651.974 680.377L853.64 15.43h179.942l-201.68 664.947h-179.93zM571.535 15.612L409.673 297.484c-41.205 73.824-65.29 111.112-76.872 157.764h-2.465c2.867-59.142-5.382-131.747-6.16-172.783L306.304 15.612H3.408L.295 33.497c77.818 0 123.965 39.091 136.662 119.05l59.039 527.83H382.41L759.337 15.612H571.535zm1399.321 664.765l-4.967-98.894-224.689-.182-45.951 99.063h-195.351l354.217-663.676H2093.9l59.985 663.676h-183.029v.013zm-20.635-392.231c-1.997-49.143-3.67-115.846-.324-156.208h-2.659c-10.946 33.008-57.988 132.136-78.674 180.89l-66.95 145.753h157.764l-9.157-170.435zm-727.733 411.128c-127.04 0-211.343-40.297-271.535-76.223l85.717-130.904c54.032 30.22 96.456 65.095 194.066 65.095 31.387 0 61.633-8.158 78.805-37.897 25.031-43.254-5.772-66.522-76.068-106.313l-34.707-22.568c-104.2-71.204-149.269-138.828-100.217-256.879C1129.935 58.075 1212.72.839 1349.293.839c94.187 0 182.485 40.738 233.936 80.543l-98.545 115.573c-50.205-40.608-91.825-61.152-139.45-61.152-37.976 0-66.82 14.643-76.781 34.396-18.742 37.132 6.056 62.45 60.815 96.443l41.27 26.25c126.507 79.79 156.648 163.459 124.937 241.68-54.525 134.638-161.292 164.702-272.987 164.702z"></path></g></svg>
                </a>
                <a href="#_" class="flex items-center justify-center hover:text-gray-900">
                    <svg class="w-auto h-4 fill-current sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2501 351"><defs></defs><path fill-rule="nonzero" d="M328.287.93v200.266c0 68.532-33.062 109.035-132.354 109.035-99.579 0-132.815-40.503-132.815-109.035V60.42C61.843 27.05 34.486.236.934.236v38.873c12.157 0 21.832 9.448 22.98 21.311v154.466c0 79.399 62.275 135.818 172.011 135.818 109.57 0 171.597-56.434 171.597-135.818V.93h-39.235zm1140.018 303.633v-93.828c0-12.882 10.95-23.462 23.644-23.719h170.962V147.48H1491.36a62.132 62.132 0 00-23.055 4.966V39.44h279.024V.1h-318.66v343.797h330.259v-39.334h-290.623zM2175.626 172.3c-8.301 0-16.142 1.698-23.395 4.649l-.34-139.75 215.421-.083a67.498 67.498 0 0167.626 67.58c0 37.395-30.232 67.725-67.626 67.725l-191.686-.12zm301.234 134.656c-9.464 7.592-22.935 6.067-31.145-2.657l-75.203-95.48c56.155-1.729 101.103-47.748 101.103-104.213 0-57.792-46.812-104.514-104.53-104.514h-254.542v343.805h39.326l.385-112.016c.43-12.482 10.98-22.881 23.75-22.881l144.783.037 94.054 119.442c21.652 25.583 59.664 29.847 86.078 9.086l-24.06-30.61zm-1500.162 0l-217.043-.189v-97.518c.159-13.018 10.966-24.09 23.886-24.09l193.165-.045c33.658 0 60.819 27.244 60.819 60.736-.008 33.87-27.168 61.106-60.827 61.106zM759.655 37.199l218.04.25c30.548 0 55.264 24.79 55.264 55.392 0 30.428-24.708 55.181-55.265 55.181H780.265a63.196 63.196 0 00-20.61 4.883V37.2zm273.719 129.049c22.142-16.86 36.647-43.44 36.647-73.573 0-50.955-41.379-92.455-92.455-92.455L720.352.1v343.797h256.346c54.065 0 97.836-43.862 97.836-98.047 0-32.836-16.294-61.822-41.16-79.602z"></path></svg>
                </a>
                <a href="#_" class="flex items-center justify-center hover:text-red-600">
                    <svg class="w-auto h-6 fill-current sm:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2501 1022"><defs></defs><g fill-rule="nonzero" stroke-width=".5"><path d="M96.435 2.474c43.486-7.998 90.471 10.496 116.463 46.485 32.99 43.486 28.99 110.464-9.497 149.452-27.991 30.49-72.477 43.486-112.464 33.489-37.488-8.497-69.977-36.988-82.973-73.476C-5.532 123.434-.033 81.948 21.46 51.458 38.954 25.966 66.445 8.472 96.435 2.474zm506.837 2c39.987-10.497 84.473 1.499 112.969 30.99 28.49 27.99 40.487 71.476 30.99 110.464-11.996 49.983-59.48 88.471-110.964 88.97-46.485 2.5-91.97-26.99-110.47-69.477-14.995-32.99-13.49-72.976 4.499-104.466 15.495-27.991 42.486-48.484 72.976-56.482zM1773.895 41.46c70.483 1 140.46.5 210.932 0 2 59.481-.5 118.462 1.5 177.443 100.473-1.5 200.935.5 301.403-1 2.5 65.98-.5 132.458 1 198.437-15.995 2.499-32.49 1-48.485 1-84.468 0-169.44.499-253.918 0-3 62.48 0 125.464-1 188.439 1 43.485-4.998 89.97 14 130.457 17.495 41.987 56.977 72.477 100.963 80.48 43.486 7.497 90.97 2.999 127.46-22.998 37.992-26.491 58.985-72.477 60.485-117.962.5-28.99-.505-57.981 0-86.472 70.977 0 141.454-.505 211.926 0-.994 48.984 3.004 97.968-6.992 146.453-13.996 78.974-54.483 154.45-117.462 205.434-67.984 56.481-157.955 81.473-245.426 79.474-86.473-.5-173.944-28.49-238.924-85.972-65.478-55.982-104.46-138.456-114.458-223.428-5.503-38.488-3.004-76.976-3.504-115.463.5-184.94-1-369.381.5-554.322zm-686.774 150.952c155.45-72.477 356.386-38.488 473.848 88.471 96.964 102.967 126.954 252.419 113.463 389.875-207.938 1.5-415.866 0-623.804 1 14 53.982 47.99 103.966 96.474 132.956 54.478 32.995 123.96 37.993 184.436 17.495 41.486-14.49 78.974-43.486 99.468-83.473 75.475-1.5 150.951 0 226.922-.5-20.989 80.474-70.972 152.95-137.456 202.435-72.977 53.982-164.947 79.474-254.918 79.974-86.967 1.5-173.944-24.992-244.921-74.476-75.47-51.983-132.952-128.459-162.443-215.43-35.488-102.968-29.99-218.93 14-318.898 41.982-95.47 119.457-175.943 214.931-219.43zM526.797 311.874h212.431c-.5 117.962 0 235.924-.5 353.886-.999 84.473-28.49 169.945-83.972 234.925-52.483 61.98-128.459 101.467-208.433 114.463-95.97 14.995-199.436.994-281.41-52.988C95.936 917.18 46.452 844.703 25.958 765.228c-16.495-55.482-13.49-113.963-14.495-171.445 70.477-1.994 140.954.505 211.432-.994 4.998 45.485-5.998 94.464 12.996 137.955 15.994 42.986 54.982 76.975 99.967 85.473 47.99 9.497 102.467 2.499 140.46-29.99 33.49-28.486 49.984-72.477 50.484-115.463.5-119.467-.005-238.928-.005-358.89z"></path><path fill="#ffffff" d="M1153.595 368.356c56.977-32.99 129.958-35.489 190.439-10.497 58.98 23.993 104.466 77.975 118.961 139.955h-408.868c15.995-53.483 50.984-101.467 99.468-129.458z"></path></g></svg>
                </a>
                <a href="#_" class="flex items-center justify-center hover:text-blue-600">
                    <svg class="w-auto h-8 fill-current sm:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2501 753"><defs></defs><g fill-rule="nonzero" transform="translate(.817 .836)"><path d="M1761.432 147.413h-132.37c-3.009 0-6.017 3.008-6.017 6.017v76.714c0 3.009 3.008 6.017 6.016 6.017h132.371c3.008 0 6.017-3.008 6.017-6.017V153.43c1.504-3.009-1.504-6.017-6.017-6.017zm-1.504 114.32h-255.716c-3.009 0-7.521 3.008-9.025 6.017l-33.093 124.85-1.504 6.016-39.11-133.875c-1.504-3.008-4.512-6.017-9.025-6.017h-99.278c-3.009 0-7.521 3.009-9.025 6.017l-37.606 124.85-1.504 6.017-1.504-3.009-15.042-61.672-16.547-61.673c-1.504-3.009-4.512-6.017-9.025-6.017h-200.06V154.934c0-3.009-4.513-7.521-9.025-6.017l-126.354 39.11c-4.513 1.504-6.017 3.008-6.017 6.016v67.69h-33.093c-3.008 0-6.016 3.008-6.016 6.017v96.27c0 3.008 3.008 6.016 6.016 6.016h33.093v117.329c0 82.731 45.126 121.84 127.858 121.84 34.597 0 67.69-7.52 90.253-19.554v-99.278c0-4.513-4.513-6.017-7.521-6.017-13.538 6.017-24.068 7.521-36.101 7.521-22.564 0-34.597-9.025-34.597-34.597v-85.74h72.202c3.008 0 6.017-3.008 6.017-6.017v-81.227l94.765 314.38c1.504 3.009 4.513 6.017 9.025 6.017h105.295c3.009 0 7.521-3.008 9.026-6.017l45.126-139.891 22.563 72.202 21.059 66.185c1.504 3.009 4.513 6.017 9.025 6.017h105.295c3.009 0 7.521-3.008 9.025-6.017l96.27-315.884v315.884c0 3.009 3.008 6.017 6.017 6.017h127.858c3.008 0 6.017-3.008 6.017-6.017V269.254c0-4.513-3.009-7.521-6.017-7.521zm168.472-114.32h-127.858c-3.009 0-6.017 3.008-6.017 6.017v443.742c0 3.009 3.008 6.017 6.017 6.017H1928.4c3.008 0 6.016-3.008 6.016-6.017V153.43c0-3.009-3.008-6.017-6.016-6.017zm169.975 0h-132.37c-3.009 0-6.017 3.008-6.017 6.017v76.714c0 3.009 3.008 6.017 6.017 6.017h132.37c3.009 0 6.017-3.008 6.017-6.017V153.43c1.505-3.009-1.504-6.017-6.017-6.017zm-1.504 114.32h-127.858c-3.008 0-6.017 3.008-6.017 6.017v329.422c0 3.009 3.009 6.017 6.017 6.017h127.858c3.009 0 6.017-3.008 6.017-6.017V269.254c0-4.513-3.008-7.521-6.017-7.521zm212.094-7.521c-112.816 0-192.539 82.731-192.539 179.001v1.504c0 96.27 79.723 177.497 191.035 177.497 112.816 0 192.539-82.731 192.539-179.001v-1.504c0-96.27-79.723-177.497-191.035-177.497zm54.152 179.001c0 33.093-22.563 58.664-54.152 58.664-31.588 0-55.656-27.076-55.656-60.168v-1.504c0-33.093 22.563-58.665 54.152-58.665 31.588 0 55.656 27.076 55.656 61.673zM376.053 0C168.472 0 0 168.472 0 376.053s168.472 376.053 376.053 376.053 376.053-168.472 376.053-376.053S583.634 0 376.053 0zm0 652.828c-153.43 0-276.775-123.345-276.775-276.775 0-153.43 123.345-276.775 276.775-276.775 153.43 0 276.775 123.345 276.775 276.775 0 153.43-123.345 276.775-276.775 276.775z"></path><circle cx="469.314" cy="282.792" r="78.219"></circle><circle cx="469.314" cy="469.314" r="78.219"></circle><circle cx="282.792" cy="469.314" r="78.219"></circle><circle cx="282.792" cy="282.792" r="78.219"></circle></g></svg>
                </a>
                <a href="#_" class="flex items-center justify-center hover:text-blue-600">
                    <svg class="w-auto h-6 fill-current sm:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 611"><defs></defs><path fill-rule="nonzero" d="M763.838 245.713c28.613 0 51.807-23.203 51.807-51.821 0-28.623-23.194-51.822-51.807-51.822-28.613 0-51.807 23.199-51.807 51.822 0 28.618 23.194 51.82 51.807 51.82zm1709.766 177.056c-7.881-5.542-13.965-6.46-19.014 4.301-87.012 188.457-233.643 94.414-219.077 102.69 32.524-14.877 118.066-83.48 105.136-178.207-7.851-57.89-57.539-83.57-110.278-74.375-92.06 16.05-125.928 115.346-108.686 203.257 3.017 15.097 8.408 27.548 13.794 39.746-104.034 84.6-145.347-75.733-150.035-94.893-.185-1.025 80.327-68.135 102.72-228.052C2111.636 29.634 2058.17-.884 2003.496.068c-101.172 1.763-128.51 213.145-91.782 389.317-3.076.8-17.393 8.73-40.396 9.619-16.552-52.085-87.28-97.74-105.79-80.147-46.329 44.01 11.235 130.05 51.738 136.797-24.331 149.859-176.495 112.744-148.17-75.005 49.551-92.016 87.237-228.837 80.513-311.435-2.382-29.243-24.004-68.423-72.9-66.48-94.048 3.721-104.272 215.162-93.247 365.23-.547-3.696-5.781 18.232-44.321 29.136-9.117-50.601-90.591-101.392-109.77-76.973-35.904 45.703 26.317 127.192 55.79 132.876-24.33 149.853-176.49 112.74-148.164-75.01 49.55-92.012 87.232-228.833 80.508-311.43-2.383-29.249-24-68.428-72.9-66.49-94.048 3.726-104.273 215.166-93.248 365.235-.551-3.755-5.908 18.896-46.02 29.619-1.343-65.65-83.115-95.752-102.759-74.805-35.01 37.339 8.018 113.95 47.822 132.88-24.33 149.854-176.489 112.74-148.164-75.009 49.551-92.012 87.237-228.833 80.508-311.43-2.378-29.249-23.999-68.428-72.9-66.49C915.8 3.8 908.232 225.87 919.258 375.933c-30.977 132.72-134.859 298.462-121.362-33.555 1.333-23.291 2.788-32.134-8.824-40.855-8.7-6.777-28.486-3.515-39.301-3.247-13.145.528-16.44 8.218-19.346 19.844-6.768 30.02-7.984 59.121-8.95 98.828-.635 18.574-2.124 27.241-9.278 52.569-7.143 25.322-47.9 71.606-70.215 63.867-30.957-10.645-20.8-98.037-15-158.081 4.834-47.451-10.644-68.76-50.302-76.51-23.218-4.838-37.325-4.096-61.504-11.718-22.866-7.207-28.037-50.459-76.807-36.045-26.675 7.89-9.526 64.41-15.937 106.3-31.519 206.059-97.1 211.718-127.525 111.62C431.934 133.35 334.546 1.045 277.54 1.045c-59.375 0-127.246 40.898-98.506 302.578-13.974-4.077-18.271-6.274-33.57-6.274C58.946 297.349 0 367.29 0 453.569c0 86.28 58.95 156.226 145.469 156.226 51.074 0 86.933-23.228 114.092-59.16 17.72 25.376 39.296 59.55 78.754 58.012 117.613-4.58 151.817-245.835 155.855-259.292 12.573 1.939 24.468 5.606 36.079 7.544 19.346 2.906 20.752 10.562 20.313 30.02-5.127 164.082 25.15 221.533 93.833 221.533 38.266 0 72.373-37.598 95.869-64.482 17.548 36.22 45.512 63.374 83.027 64.477 90.903 2.261 125.708-142.627 122.534-123.56-2.49 14.962 29.492 122.745 123.076 123.135 115.923.489 137.471-126.992 140.04-148.344.322-4.248.463-3.809 0 0l-.088 1.294c36.801-6.846 55.79-26.577 55.79-26.577s29.551 175.61 139.014 173.632c113.672-2.06 135.108-117.295 137.92-139.765.371-5.332.591-4.707 0 0l-.044.659c43.716-15.903 55.215-31.865 55.215-31.865s23.486 172.119 139.014 173.623c102.949 1.347 141.103-104.077 141.328-148.203 17.363.185 49.482-10.303 48.73-10.899 0 0 37.71 150.488 143.018 158.218 49.443 3.628 86.533-27.822 107.676-42.168 49.687 40.24 215.141 91.636 319.614-85.488 14.746-25.42-16.958-55.45-22.524-59.37zM141.294 551.367c-50.479 0-82.847-46.675-82.847-97.002 0-50.322 29.712-96.997 80.19-96.997 22.716 0 35.352 2.5 53.043 17.886 3.208 12.642 12.3 41.802 16.723 55.044 5.928 17.72 12.979 32.803 20.088 49.219-10.156 42.104-43.452 71.85-87.197 71.85zm123.008-174.634c-2.1-3.344-1.66-1.289-4.009-4.448-9.253-25.17-27.085-81.352-29.15-145.166-2.334-72.187 9.697-156.802 45.166-156.802 24.033 0 49.575 171.485-12.012 306.416h.005zm710.747-75.214c-5.694-42.837-5.991-233.804 39.853-228.545 25.313 10.254-16.05 190.454-39.853 228.545zm334.76 0c-5.693-42.837-5.99-233.804 39.854-228.545 25.313 10.254-16.05 190.454-39.853 228.545zm332.105 2.66c-5.698-42.841-5.991-233.808 39.849-228.55 25.312 10.255-16.05 190.46-39.849 228.55zm366.64-242.382c41.915-4.346 40.186 178.691-43.945 294.248-10.85-41.768-27.485-279.907 43.946-294.253v.005zm176.173 393.857c-13.462-68.003 21.323-112.666 57.182-117.563 12.534-2.002 30.698 6.118 34.321 21.299 5.957 28.608-.864 71.045-81.123 124.887.118.46-7.378-13.476-10.376-28.623h-.004z"></path></svg>
                </a>
                <a href="#_" class="flex items-center justify-center hover:text-red-600">
                    <svg class="w-auto fill-current h-7 sm:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 714"><defs></defs><path fill-rule="nonzero" d="M711.627 17.824v340.145h-340.12V17.824h340.12zM2500 0H0v713.072h2500V0zM1421.15 17.824v340.145h-340.145V17.824h340.145zm709.472 0v340.145h-340.12V17.824h340.12zM984.027 81.664c15.212 11.638 22.818 28.65 22.818 50.986 0 16.632-2.028 29.842-6.059 39.578-4.031 9.76-12.956 19.116-26.723 28.168l74.87 110.516H942.7l-50.632-76.289h-32.072v76.29h-84.859V64.17h130.496c37.041 0 63.181 5.832 78.393 17.494zm727.321 192.866c-25.683 26.621-60.62 39.932-104.812 39.932-44.673 0-79.61-13.21-104.812-39.577-25.202-26.368-37.777-57.401-37.777-93.048 0-34.71 12.702-65.489 38.132-92.338 25.43-26.85 60.266-40.287 104.483-40.287 44.673 0 79.737 13.31 105.167 39.932 25.455 26.62 38.157 57.527 38.157 92.693-.025 35.19-12.854 66.071-38.538 92.693zM275.24 293.418c-22.362 14.502-50.175 21.754-83.44 21.754-45.154 0-80.447-13.438-105.902-40.287-25.404-26.85-38.106-58.111-38.106-93.758 0-35.648 12.702-66.909 38.132-93.758 25.455-26.85 60.747-40.287 105.902-40.287 32.808 0 60.266 7.25 82.374 21.753a135.997 135.997 0 0149.541 56.691l-79.18 28.498c-9.507-20.917-27.077-31.388-52.76-31.388-18.052 0-32.453 5.831-43.152 17.468-10.674 11.663-16.024 25.329-16.024 40.997 0 16.176 5.451 29.968 16.379 41.378 10.978 11.409 25.227 17.113 42.797 17.113 11.409 0 21.271-2.23 29.587-6.77 8.316-4.512 15.111-11.053 20.334-19.623l82.73 22.109a128.695 128.695 0 01-49.212 58.11zM2358.805 64.17h81.994v255.996l-164.013-98.397v89.143h-82.678V59.175l164.697 99.843V64.17zm-1151.59 60.62v186.122h91.274V124.791h69.875V57.756h-233.888v67.035h72.74zm356.88 97.334c10.698 11.637 24.82 17.443 42.416 17.443 18.052 0 32.326-5.705 42.771-17.088a58.06 58.06 0 0015.694-40.668c0-15.694-5.35-29.36-16.048-40.997-10.7-11.637-24.822-17.468-42.417-17.468-18.052 0-32.326 5.704-42.772 17.113-10.47 11.41-15.694 25.202-15.694 41.352.026 15.238 5.375 28.675 16.05 40.313zm506.287-132.625c-25.455-26.85-60.266-40.313-104.457-40.313-44.674 0-79.738 13.31-105.193 39.932-25.43 26.622-38.132 57.528-38.132 92.693 0 35.191 12.83 66.072 38.513 92.693 25.657 26.622 60.595 39.932 104.812 39.932 44.673 0 79.61-13.209 104.812-39.577 25.176-26.393 37.777-57.4 37.777-93.048 0-34.684-12.702-65.463-38.132-92.312zM481.314 310.912l18.534-30.652h80.574l16.378 30.652h87.014L539.78 57.046 394.326 310.912h86.988zm427.818-142.614c5.705-5.223 8.57-12.347 8.57-21.399 0-19.015-11.89-28.523-35.647-28.523h-22.109v57.756h22.109c12.347 0 21.398-2.611 27.077-7.834zm1014.35-27.458c10.7-11.638 24.822-17.469 42.417-17.469 18.052 0 32.326 5.705 42.772 17.114 10.471 11.409 15.694 25.201 15.694 41.352 0 15.212-5.35 28.65-16.049 40.287-10.674 11.637-24.821 17.468-42.391 17.468-18.052 0-32.326-5.704-42.772-17.088a58.06 58.06 0 01-15.694-40.667 58.466 58.466 0 0116.024-40.997zM521.957 222.479l17.824-33.518 18.533 33.518h-36.357zm1960.93 135.49v340.145h-340.12V357.969h340.12zm-706.632 0v340.145h-340.145V357.969h340.145zm-707.368 0v340.145H728.741V357.969h340.145zm-710.917 0v340.145H17.824V357.969h340.145zm834.998 305.892l-96.268-258.126h88.408l33.518 82.704 32.782-74.134 29.968 74.134 39.932-82.704h89.144l-99.133 258.836-59.91-90.564-58.441 89.854zm856.371-235.663c15.694 11.638 23.554 28.625 23.554 50.961 0 15.694-2.155 28.65-6.44 38.867-4.285 10.218-13.31 19.852-27.078 28.878l74.87 111.252h-105.548l-50.606-76.999h-32.807v77h-84.86V410.73h131.206c36.104 0 62.015 5.831 77.71 17.468zM636.073 465.62H531.236v36.383h99.107v58.466h-99.107V600.4h104.837v57.755H444.247V405.735h191.826v59.885zm1650.703 94.139l67.06 98.397h104.077l-86.989-135.49 72.005-116.931h-96.268l-59.885 94.823v-94.823h-88.409v252.421h88.409V559.76zm-311.952-45.282c5.933-5.451 8.95-12.474 8.95-21.044 0-19.015-12.145-28.522-36.383-28.522h-21.398v57.755h21.398c12.347 0 21.5-2.713 27.433-8.189zm-263.12-75.934c-25.43-26.622-60.495-39.932-105.168-39.932-44.673 0-79.61 13.31-104.812 39.932-25.202 26.621-37.777 57.755-37.777 93.403 0 34.709 12.702 65.488 38.132 92.338 25.43 26.85 60.266 40.287 104.483 40.287 44.673 0 79.737-13.31 105.167-39.932 25.455-26.622 38.157-57.502 38.157-92.693-.025-35.648-12.728-66.782-38.183-93.403zM854.241 473.48v186.121h91.273V473.48h69.9v-67.745H781.527v67.745h72.715zM144.06 658.156v-89.853L307.337 666.7V410.73h-81.993v95.558L61.33 405.735v252.421h82.729zM1564.094 490.95c10.7-11.638 24.821-17.469 42.417-17.469 18.052 0 32.326 5.73 42.771 17.114 10.472 11.409 15.694 25.201 15.694 41.352 0 15.212-5.35 28.624-16.048 40.287-10.7 11.637-24.822 17.468-42.417 17.468-18.052 0-32.326-5.704-42.772-17.113-10.47-11.41-15.694-24.948-15.694-40.642 0-15.694 5.375-29.36 16.05-40.997z"></path></svg>
                </a>
            </div>
        </div>




    </div>
  </div>



<div class="relative w-full bg-white mt-10">
    <div class="relative w-full px-8 pt-16 pb-16 ml-auto mr-auto bg-top bg-cover sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-24 lg:pb-32">
        <div class="max-w-xl mb-10 ml-auto mr-auto bg-top bg-cover md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-center">
            <p class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-blue-500 rounded-full text-purple-50">Our Team</p>
            <div class="max-w-2xl mb-6 ml-auto mr-auto font-sans tracking-tight text-gray-900 bg-top bg-cover sm:text-4xl md:mx-auto mt-8">
                <p class="inline max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">Our Awesome Team of Unique Individuals</p>
            </div>
            <p class="text-base text-gray-700 md:text-lg">These are the amazing people that make us unique and stand-out amongst the competition. We are a team of focused and talented individuals.</p>
        </div>
        <div class="grid gap-10 row-gap-8 ml-auto mr-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
            <div class="flex items-center">
                <img src="https://cdn.devdojo.com/images/july2021/03-Mike-Melcher.jpg" class="object-cover w-20 h-20 mr-4 rounded-full shadow" />
                <div class="relative">
                    <p class="text-lg font-bold text-gray-800">Galiwango Hakim Katende</p>
                    <p class="text-sm text-gray-600">CTO &amp; Founder</p>
                </div>
            </div>
            <div class="flex items-center">
                <img src="https://cdn.devdojo.com/images/july2021/01-John-Cremson.jpg" class="object-cover w-20 h-20 mr-4 rounded-full shadow" />
                <div class="relative">
                    <p class="text-lg font-bold text-gray-800">John Cremson</p>
                    <p class="text-sm text-gray-600">Co-Founder</p>
                </div>
            </div>
            <div class="flex items-center">
                <img src="https://cdn.devdojo.com/images/july2021/02-Sally-Jones.jpg" class="object-cover w-20 h-20 mr-4 rounded-full shadow" />
                <div class="relative">
                    <p class="text-lg font-bold text-gray-800">Sally Jones</p>
                    <p class="text-sm text-gray-600">Marketing Manager</p>
                </div>
            </div>
            <div class="flex items-center">
                <img src="https://cdn.devdojo.com/images/july2021/04-Barbara-Sanchez.jpg" class="object-cover w-20 h-20 mr-4 rounded-full shadow" />
                <div class="relative">
                    <p class="text-lg font-bold text-gray-800">Ssempijja Dauglas</p>
                    <p class="text-sm text-gray-600">Business Analyst</p>
                </div>
            </div>
            <div class="flex items-center">
                <img src="https://cdn.devdojo.com/images/july2021/05-Sam-Lee.jpg" class="object-cover w-20 h-20 mr-4 rounded-full shadow" />
                <div class="relative">
                    <p class="text-lg font-bold text-gray-800">Sam Lee</p>
                    <p class="text-sm text-gray-600">Lead Designer</p>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="w-full px-8 py-16 bg-gray-100">
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">

            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                <p class="font-medium text-blue-500 uppercase text-center xl:text-left">Building Businesses</p>
                <h2 class="text-2xl font-extrabold leading-none text-black text-center sm:text-3xl md:text-5xl xl:text-left md:text-4xl">
                    Changing The Way <br />People Do Business.
                </h2>
                <p class="text-sm text-gray-600 md:pr-16 lg:text-lg">
                  Get in touch today through the contact information 
                  below or fill the form below. We focus on building 
                  custom software solutions and IT services like Web 
                  Applications, Mobile Applications and Desktop affordable 
                  web hosting, website development, Internet Marketing, 
                  search engine optimization service and Idea validation.
                </p>
            </div>

            <div class="w-full mt-16 md:mt-0 md:w-2/5">
                <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 class="mb-6 text-2xl font-medium text-center">Request Quotation</h3>
                    <input type="text" name="email" class="block w-full px-4 py-3 mb-4 border border-2 border-gray-200 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email address" />
                    <input type="subject" name="subject" class="block w-full px-4 py-3 mb-4 border border-2 border-gray-200 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Subject" />
                    <div class="sm:col-span-2 mb-4">
                      <label for="message" class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Message</label>
                      <textarea name="message" class="w-full h-40 px-3 py-2 text-gray-800 transition duration-100 border border-gray-200 border-2 rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"></textarea>
                    </div>
                    <div class="block">
                        <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Send Request</button>
                    </div>
                    
                    <p class="w-full mt-4 text-sm text-center text-gray-500">You will receive feedback from our support within 24Hrs</p>
                </div>

            </div>

        </div>
    </div>

</div>



<div class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div class="flex justify-center mt-8 space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Dribbble</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © Devsgwa, Inc. All rights reserved.
        </p>
    </div>
</div>


    </div>
  )
}
