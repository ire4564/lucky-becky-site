"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const lightingProducts = [
  {
    id: 1,
    title: "불편함 찾기",
    subtitle: "왜 꼭 따로 써야 하는걸까?",
    description: "나만의 프로필, 네임드미 개발기",
    image: "/images/traditional-lamp-1.jpg",
    background: "to-blue-900",
  },
  {
    id: 2,
    title: "2025 나의 목표",
    subtitle: "문제해결 방식",
    description: "우당탕탕 사이드의 기록",
    image: "/images/traditional-lamp-2.jpg",
    background: "from-red-900 via-red-800 to-orange-900",
  },
  {
    id: 3,
    title: "어떤 컴포넌트가",
    subtitle: "좋은 컴포넌트일까?",
    description: "컴포넌트 소개 및 사용 방법",
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

  const handleSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    handleSelect();
    emblaApi.on("select", handleSelect);
  }, [emblaApi, handleSelect]);

  return (
    <div className="mt-6 relative w-full h-[300px] rounded-2xl overflow-hidden">
      {/* Embla Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {lightingProducts.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] min-w-0 relative">
              {/* Background matching the reference image */}
              <div className="h-full bg-gradient-to-br bg-blue-800 relative overflow-hidden">
                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center gap-0.5 mx-3.5 my-0 -mb-1 px-12 pb-10">
                  {/* Left Text Content */}
                  <div className="space-y-3 mr-3.5 -my-1.25 leading-5">
                    <h2 className="text-4xl font-bold text-white tracking-wide">
                      {product.title}
                    </h2>
                    <h3 className="text-4xl font-bold text-white tracking-wide">
                      {product.subtitle}
                    </h3>
                    <p className="text-lg text-white/90 font-medium tracking-wide">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
        {/* Slide Counter */}
        <div className="bg-black/60 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-medium shadow-lg">
          {currentSlide + 1} / {lightingProducts.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="w-8 h-8 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group shadow-lg"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="w-8 h-8 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group shadow-lg"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
