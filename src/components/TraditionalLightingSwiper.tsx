"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// 전통 조명 제품 데이터
const lightingProducts = [
  {
    id: 1,
    title: "2025 올해의 내가",
    subtitle: "도전한 것들에 대해서",
    description: "우당탕탕 사이드 프로젝트 출시기",
    image: "/images/traditional-lamp-1.jpg",
    background: "from-amber-900 via-yellow-800 to-orange-900",
  },
  {
    id: 2,
    title: "2025 나의 문제해결",
    subtitle: "방식 생각하기",
    description: "우당탕탕 사이드의 기록",
    image: "/images/traditional-lamp-2.jpg",
    background: "from-red-900 via-red-800 to-orange-900",
  },
  {
    id: 3,
    title: "선조들의 지혜가",
    subtitle: "깃든 한지등",
    description: "자연과 조화를 이루는 한지 조명",
    image: "/images/traditional-lamp-3.jpg",
    background: "from-stone-800 via-amber-800 to-yellow-900",
  },
];

export function TraditionalLightingSwiper() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
      {/* Embla Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {lightingProducts.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] min-w-0 relative">
              {/* Background matching the reference image */}
              <div className="h-full bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 relative overflow-hidden">
                {/* Wooden table surface */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-amber-900 via-amber-800 to-amber-700"></div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 opacity-60"></div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center gap-0.5 mx-3.5 my-0 -mb-1 px-12 pb-10">
                  {/* Left Text Content */}
                  <div
                    className="w-1/2 space-y-3 mr-3.5 -my-1.25"
                    style={{ lineHeight: "42px" }}
                  >
                    <h2
                      className="text-4xl font-bold text-white tracking-wide"
                      style={{ fontSize: "42px", lineHeight: "42px" }}
                    >
                      {product.title}
                    </h2>
                    <h3
                      className="text-4xl font-bold text-white tracking-wide mt-3"
                      style={{ fontSize: "42px", lineHeight: "42px" }}
                    >
                      {product.subtitle}
                    </h3>
                    <p className="text-lg text-white/90 font-medium mt-3 tracking-wide">
                      {product.description}
                    </p>
                  </div>

                  {/* Right Product Images */}
                  <div className="w-1/2 h-full flex items-center justify-end relative pr-8">
                    {/* White Traditional Lantern */}
                    <div className="absolute right-32 bottom-20 transform rotate-2">
                      {/* Wooden base/stand */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-3 bg-amber-800 rounded-full"></div>
                        <div className="w-20 h-2 bg-amber-900 rounded-full mt-1"></div>
                        {/* Wooden legs */}
                        <div className="absolute -top-1 left-2 w-1 h-6 bg-amber-700 rotate-12"></div>
                        <div className="absolute -top-1 right-2 w-1 h-6 bg-amber-700 -rotate-12"></div>
                      </div>

                      {/* Lantern body */}
                      <div className="w-24 h-32 bg-white rounded-lg shadow-2xl relative overflow-hidden">
                        {/* Curved top */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-white rounded-t-3xl border-b border-gray-200"></div>

                        {/* Inner glow */}
                        <div className="absolute inset-2 bg-gradient-to-b from-yellow-100 via-yellow-200 to-amber-100 rounded opacity-80"></div>
                      </div>
                    </div>

                    {/* Dark Traditional Lantern */}
                    <div className="absolute right-8 bottom-16 transform -rotate-1">
                      {/* Wooden base/stand */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-3 bg-amber-900 rounded-full"></div>
                        <div className="w-20 h-2 bg-amber-950 rounded-full mt-1"></div>
                        {/* Wooden legs */}
                        <div className="absolute -top-1 left-2 w-1 h-6 bg-amber-800 rotate-12"></div>
                        <div className="absolute -top-1 right-2 w-1 h-6 bg-amber-800 -rotate-12"></div>
                      </div>

                      {/* Lantern body */}
                      <div className="w-24 h-32 bg-amber-900 rounded-lg shadow-2xl relative overflow-hidden">
                        {/* Curved top */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-amber-800 rounded-t-3xl"></div>

                        {/* Inner glow */}
                        <div className="absolute inset-2 bg-gradient-to-b from-yellow-300 via-yellow-400 to-amber-300 rounded opacity-90"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ambient lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-amber-900/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
        {/* Slide Counter */}
        <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          {currentSlide + 1} / {lightingProducts.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group shadow-lg"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group shadow-lg"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
