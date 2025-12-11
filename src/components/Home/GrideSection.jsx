"use client";

// import Image from "next/image";
import React from "react";

export default function GrideSection() {
  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xxl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {/* First Big Card - Wines */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://c0.wallpaperflare.com/preview/1/58/465/fashion-men-mens-fashion-suits.jpg"
                alt="Wines"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Mens
              </h3>
            </a>
          </div>

          {/* Middle Column - Gin + small items */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
              <img
                src="https://i.pinimg.com/736x/8f/a8/81/8fa881add906c4f6d4a0e44f5add78be.jpg"
                alt="Gin"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Kids
              </h3>
            </a>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              {/* Whiskey */}
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="https://c0.wallpaperflare.com/preview/229/561/227/outfitgrid-outfit-clothing-fashion.jpg"
                  alt="Whiskey"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Youth
                </h3>
              </a>

              {/* Vodka */}
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="https://c0.wallpaperflare.com/preview/807/935/664/apparel-black-and-white-boutique-close-up.jpg"
                  alt="Vodka"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Trends 
                </h3>
              </a>
            </div>
          </div>

          {/* Last Column - Brandy */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://i.pinimg.com/1200x/d4/e1/fb/d4e1fb5179f39df14bf780d65ac75fd2.jpg"
                alt="Brandy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                women
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
