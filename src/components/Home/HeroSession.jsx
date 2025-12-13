"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroSession() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef(null);

  const slides = [
    {
      title: "Step Into the New Season",
      description: "Discover the latest clothing trends, crafted for comfort and style.",
      buttonText: "Shop Now",
      buttonUrl: "#",
      image:
        "/Banner-1.png",
    },
    {
      title: "Your Style, Your Season",
      description: "From cozy winterwear to light summer fits—upgrade your wardrobe today.",
      buttonText: "Explore Collection",
      buttonUrl: "#",
      image:
        "/Banner-2.png",
    },
    {
      title: "Trendy Looks. Smart Prices.",
      description: "Get up to 50% OFF on top fashion brands. Limited-time deals!",
      buttonText: "Grab Offer",
      buttonUrl: "#",
      image:
        "/Third Banner.png",
    },
  ];

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [autoplay, currentSlide]);

  function startAutoplay() {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      if (autoplay) {
        setCurrentSlide((s) => (s + 1) % slides.length);
      }
    }, 9000);
  }

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function next() {
    setCurrentSlide((s) => (s + 1) % slides.length);
  }

  function prev() {
    setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  }

  function goTo(index) {
    setCurrentSlide(index);
  }

  function replaceBrokenImage(e, index) {
    const fallbacks = [
      "https://picsum.photos/id/1018/1920/1080",
      "https://picsum.photos/id/1015/1920/1080",
      "https://picsum.photos/id/1019/1920/1080",
    ];
    e.currentTarget.src = fallbacks[index % fallbacks.length];
  }

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative h-screen min-h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            aria-hidden={currentSlide !== index}
            className={`absolute inset-0 hero-slide ${currentSlide === index
                ? "opacity-100 z-10"
                : "opacity-0 pointer-events-none"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => replaceBrokenImage(e, index)}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="container mx-auto px-6 h-full flex items-center">
              <div
                className={`max-w-2xl text-white slide-content transform transition-all duration-700 ease-out ${currentSlide === index
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                  }`}
              >
                <h2 className="text-4xl md:text-6xl lovelace font-semibold mb-1 leading-[70px] ">
                  {slide.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                  {slide.description}
                </p>

                <a
                  href={slide.buttonUrl}
                  className="inline-block border border-blue-500 text-blue-500 hover:bg-white hover:text-black px-10 py-3 rounded-sm text-lg font-medium transition-all"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition-all"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition-all"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-3 rounded-full transition-all ${currentSlide === index ? "bg-white w-8" : "bg-white/50 w-3"
                }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hero-slide {
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .slide-content {
          transition: all 0.7s ease 0.3s;
        }
      `}</style>
    </div>
  );
}
