"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// 전통 조명 제품 데이터
const lightingProducts = [
  {
    id: 1,
    title: "축복과 길운을 태운",
    subtitle: "빛나는 꽃가마",
    description: "번영을 기원하는 전통 조명",
    image: "/images/traditional-lamp-1.jpg",
    background: "from-amber-900 via-yellow-800 to-orange-900",
  },
  {
    id: 2,
    title: "고궁의 우아함을",
    subtitle: "담은 궁등",
    description: "왕실의 품격을 담은 전통 궁등",
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
              {/* Background with wooden texture effect */}
              <div className="h-full bg-gradient-to-br from-amber-100 via-orange-200 to-amber-300 relative overflow-hidden">
                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center px-12">
                  {/* Left Text Content */}
                  <div className="w-1/2 space-y-4">
                    <h2 className="text-4xl font-bold text-amber-900 leading-tight">
                      {product.title}
                    </h2>
                    <h3 className="text-4xl font-bold text-amber-900 leading-tight">
                      {product.subtitle}
                    </h3>
                    <p className="text-lg text-amber-800 font-medium mt-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Right Product Images */}
                  <div className="w-1/2 h-full flex items-center justify-center relative">
                    {/* Wooden Surface */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-600 to-amber-400 opacity-60"></div>

                    {/* White Traditional Lamp */}
                    <div className="absolute right-40 bottom-16 transform rotate-3">
                      {/* Lamp Base */}
                      <div className="w-6 h-3 bg-amber-600 rounded-full mb-1"></div>
                      <div className="w-8 h-2 bg-amber-700 rounded-full mb-2"></div>

                      {/* Lamp Body */}
                      <div className="w-20 h-28 bg-white rounded-lg shadow-2xl relative border border-gray-200">
                        {/* Top Handle */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-white border border-gray-200 rounded-t-full"></div>

                        {/* Light Glow */}
                        <div className="absolute top-3 left-2 right-2 h-4 bg-gradient-to-r from-yellow-200 to-amber-200 rounded opacity-80"></div>

                        {/* Traditional Pattern */}
                        <div className="absolute top-8 left-2 right-2 bottom-4 border-2 border-amber-600/40 rounded">
                          <div className="grid grid-cols-3 gap-0.5 p-1 h-full">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-amber-100 border border-amber-300/50"
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dark Traditional Lamp */}
                    <div className="absolute right-20 bottom-12 transform -rotate-2">
                      {/* Lamp Base */}
                      <div className="w-6 h-3 bg-amber-800 rounded-full mb-1"></div>
                      <div className="w-8 h-2 bg-amber-900 rounded-full mb-2"></div>

                      {/* Lamp Body */}
                      <div className="w-20 h-28 bg-amber-900 rounded-lg shadow-2xl relative">
                        {/* Top Handle */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-amber-800 rounded-t-full"></div>

                        {/* Light Glow */}
                        <div className="absolute top-3 left-2 right-2 h-4 bg-gradient-to-r from-yellow-300 to-amber-300 rounded opacity-90"></div>

                        {/* Traditional Pattern */}
                        <div className="absolute top-8 left-2 right-2 bottom-4 border-2 border-yellow-400/60 rounded">
                          <div className="grid grid-cols-3 gap-0.5 p-1 h-full">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-yellow-300/40 border border-yellow-400/50"
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ambient Light Effects */}
                    <div className="absolute right-40 bottom-16 w-20 h-28 bg-yellow-200/40 rounded-lg blur-2xl"></div>
                    <div className="absolute right-20 bottom-12 w-20 h-28 bg-yellow-400/50 rounded-lg blur-2xl"></div>
                  </div>
                </div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-amber-900/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
        {/* Slide Counter */}
        <div className="bg-amber-900/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
          {currentSlide + 1} / {lightingProducts.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="w-12 h-12 bg-amber-900/70 hover:bg-amber-900/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="w-12 h-12 bg-amber-900/70 hover:bg-amber-900/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
