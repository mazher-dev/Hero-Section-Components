import React from "react";

const Hero3 = () => {
  return (
    <section class="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover bg-white mt-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
          <span class="font-inter text-xs font-medium text-gray-900 ml-3">
            Explore how to use for brands.
          </span>
          <a
            href="javascript:;"
            class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          Control your Finances with our
          <span class="text-indigo-600">Smart Tool </span>
        </h1>
        <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
          Invest intelligently and discover a better way to manage your entire
          wealth easily.
        </p>
        <a
          href="javascript:;"
          class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
        >
          Create an account
          <svg
            class="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div class="flex justify-center">
          <img
            src="https://pagedone.io/asset/uploads/1691054543.png"
            alt="Dashboard image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
