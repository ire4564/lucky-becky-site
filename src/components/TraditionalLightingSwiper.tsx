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
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900">
      {/* Embla Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {lightingProducts.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] min-w-0 relative">
              <div
                className={`h-full bg-gradient-to-r ${product.background} relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-lg rotate-12"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/25 rounded-lg -rotate-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="w-1/2 pl-12">
                    <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                      {product.title}
                    </h2>
                    <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                      {product.subtitle}
                    </h3>
                    <p className="text-lg text-white/90 font-medium">
                      {product.description}
                    </p>
                  </div>

                  {/* Product Images Area */}
                  <div className="w-1/2 h-full flex items-center justify-center relative">
                    {/* Traditional Lamp Illustrations */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* White Lamp */}
                      <div className="absolute right-32 top-1/2 -translate-y-1/2">
                        <div className="w-24 h-32 bg-white/90 rounded-lg shadow-2xl relative">
                          <div className="absolute top-2 left-2 right-2 h-6 bg-gradient-to-r from-amber-200 to-yellow-200 rounded opacity-80"></div>
                          <div className="absolute top-10 left-2 right-2 bottom-8 border-2 border-amber-600/30 rounded grid grid-cols-3 gap-1 p-2">
                            {[...Array(9)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-amber-200/50 rounded-sm"
                              ></div>
                            ))}
                          </div>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-amber-600 rounded-full"></div>
                        </div>
                      </div>

                      {/* Dark Lamp */}
                      <div className="absolute right-12 top-1/2 -translate-y-1/2 translate-y-4">
                        <div className="w-24 h-32 bg-amber-900 rounded-lg shadow-2xl relative">
                          <div className="absolute top-2 left-2 right-2 h-6 bg-gradient-to-r from-yellow-300 to-amber-300 rounded opacity-90"></div>
                          <div className="absolute top-10 left-2 right-2 bottom-8 border-2 border-yellow-400/50 rounded grid grid-cols-3 gap-1 p-2">
                            {[...Array(9)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-yellow-300/60 rounded-sm"
                              ></div>
                            ))}
                          </div>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-yellow-600 rounded-full"></div>
                        </div>
                      </div>

                      {/* Glowing Effects */}
                      <div className="absolute right-32 top-1/2 -translate-y-1/2 w-24 h-32 bg-white/20 rounded-lg blur-xl"></div>
                      <div className="absolute right-12 top-1/2 -translate-y-1/2 translate-y-4 w-24 h-32 bg-yellow-400/30 rounded-lg blur-xl"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
        {/* Slide Counter */}
        <div className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentSlide + 1} / {lightingProducts.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
