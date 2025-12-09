"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroSession() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef(null);

  const slides = [
    {
      title: "Objavte nové obzory",
      description: "Cestovateľské zážitky, ktoré vám zmenia život",
      buttonText: "Rezervovať",
      buttonUrl: "#",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Prírodné krásy",
      description: "Nádherné výhľady a čistá príroda",
      buttonText: "Pozrieť ponuku",
      buttonUrl: "#",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Mestské dobrodružstvo",
      description: "Moderné mestá plné života a kultúry",
      buttonText: "Viac informácií",
      buttonUrl: "#",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, currentSlide]);

  function startAutoplay() {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      if (autoplay) {
        setCurrentSlide((s) => (s + 1) % slides.length);
      }
    }, 1000);
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
            className={`absolute inset-0 hero-slide ${currentSlide === index ? "opacity-100 z-5" : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="absolute inset-0 bg-gray-800">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-80"
                onError={(e) => replaceBrokenImage(e, index)}
                loading="lazy"
              />
            </div>

            <div className="container mx-auto px-6 h-full flex items-center">
              <div
                className={`max-w-2xl text-white slide-content transform transition-all duration-600 ease-[cubic-bezier(.4,0,.2,1)] ${currentSlide === index ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                  }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <a
                  href={slide.buttonUrl}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors fade-in"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? "bg-white w-4 md:w-6" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-slide {
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .slide-content {
          transition: all 0.6s ease 0.3s;
        }
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
