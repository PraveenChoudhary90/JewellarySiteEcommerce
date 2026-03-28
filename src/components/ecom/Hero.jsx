import React, { useState, useEffect } from 'react';
import img1 from "../../assets/ecom/hero/hero-1.jpeg";
import img2 from "../../assets/ecom/hero/hero-2.jpeg";
import img3 from "../../assets/ecom/hero/hero-3.jpeg";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: img1,
      title: "Pearls From Heaven",
      subtitle: "NEW BRAND COLLECTION",
      buttonText: "READ MORE"
    },
    {
      id: 2,
      image: img2,
      title: "Golden Elegance",
      subtitle: "EXCLUSIVE SIGNATURES",
      buttonText: "SHOP NOW"
    },
    {
      id: 3,
      image: img3,
      title: "Timeless Classics",
      subtitle: "THE HERITAGE SERIES",
      buttonText: "DISCOVER"
    }
  ];

  // FIXED: Added currentSlide to the dependency array. 
  // Now, whenever you manually click next/prev, this timer clears and restarts from 0.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); 
    
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]); 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[96vh] min-h-[600px] overflow-hidden bg-stone-100 font-sans group">
      
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="absolute bottom-20 left-8 md:bottom-32 md:left-24 z-20">
            <div
              className={`transition-all duration-1000 ease-out transform ${
                index === currentSlide
                  ? "translate-y-0 opacity-100 delay-300"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-[#111111] text-5xl md:text-[64px] font-light tracking-wide mb-3">
                {slide.title}
              </h2>
            </div>
            
            <div
              className={`transition-all duration-1000 ease-out transform ${
                index === currentSlide
                  ? "translate-y-0 opacity-100 delay-500"
                  : "translate-y-10 opacity-0"
              }`}
              >
                <p className="text-[#111111] text-[11px] md:text-[12px] tracking-[0.25em] uppercase mb-10 opacity-90">
                {slide.subtitle}
              </p>
            </div>

            <div
              className={`transition-all duration-1000 ease-out transform ${
                index === currentSlide
                  ? "translate-y-0 opacity-100 delay-700"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="bg-black text-white px-10 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="absolute bottom-20 right-8 md:bottom-32 md:right-24 z-30 flex gap-6">
        <button
          onClick={prevSlide}
          className="text-white opacity-60 hover:opacity-100 transition-opacity p-2 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="text-white opacity-60 hover:opacity-100 transition-opacity p-2 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
    </div>
  );
};

export default Hero;