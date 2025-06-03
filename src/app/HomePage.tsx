"use client";

import {
  blogCategories,
  blogPosts,
  getFeaturedPosts,
} from "@/src/lib/blog-data";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Star,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Badge } from "../components/Badge";
import { BlogSidebar } from "../components/BlogSidebar";
import { Button } from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { SidebarInset, SidebarProvider } from "../components/Sidebar";
import { TraditionalLightingSwiper } from "../components/TraditionalLightingSwiper";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Hero banners data
const heroBanners = [
  {
    id: 1,
    title: "Welcome to LUCKY BECKY",
    subtitle: "recording archive",
    description:
      "Discover the latest insights, tutorials, and best practices in software development. Join our community of developers sharing knowledge and building the future.",
    background: "from-blue-600 via-purple-600 to-indigo-600",
    buttonText: "Explore Articles",
    buttonAction: "/featured",
  },
  {
    id: 2,
    title: "Frontend Development",
    subtitle: "dev record",
    description:
      "Master modern frontend technologies with React, Vue, and Angular. Learn best practices for building responsive and performant web applications.",
    background: "from-emerald-600 via-teal-600 to-cyan-600",
    buttonText: "View Frontend",
    buttonAction: "/category/frontend",
  },
  {
    id: 3,
    title: "Latest Trends",
    subtitle: "trending topics",
    description:
      "Stay updated with the latest trends in technology, AI/ML, DevOps, and Web3. Don't miss out on the future of development.",
    background: "from-orange-600 via-red-600 to-pink-600",
    buttonText: "Trending Now",
    buttonAction: "/trending",
  },
];

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.slice(0, 6);
  const trendingPosts = [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  const stats = [
    {
      title: "Total Articles",
      value: blogPosts.length,
      icon: BookOpen,
      trend: "+12%",
    },
    {
      title: "Categories",
      value: blogCategories.length,
      icon: TrendingUp,
      trend: "+3%",
    },
    {
      title: "Authors",
      value: "15",
      icon: Users,
      trend: "+8%",
    },
    {
      title: "Monthly Views",
      value: "125k",
      icon: Star,
      trend: "+24%",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header onSearch={handleSearch} />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-7xl mx-auto p-6 space-y-8">
              {/* Hero Carousel Section */}
              <section className="relative rounded-2xl overflow-hidden">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {heroBanners.map((banner) => (
                      <div key={banner.id} className="flex-[0_0_100%] min-w-0">
                        <div
                          className={`relative bg-gradient-to-r ${banner.background} p-8 text-white overflow-hidden min-h-[300px] flex items-center`}
                        >
                          <div className="relative z-10 w-full">
                            <h1 className="text-4xl font-bold mb-2">
                              {banner.title}
                            </h1>
                            <p className="text-lg text-white/80 mb-4 font-medium">
                              {banner.subtitle}
                            </p>
                            <p className="text-xl text-white/90 mb-6 max-w-2xl">
                              {banner.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                              <Button
                                size="lg"
                                className="bg-white text-gray-800 hover:bg-white/90"
                                asChild
                              >
                                <Link href={banner.buttonAction}>
                                  {banner.buttonText}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={scrollPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {heroBanners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        currentSlide === index
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </section>

              {/* Stats Section */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {stat.title}
                          </p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-xs text-green-600 font-medium">
                            {stat.trend} from last month
                          </p>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-full">
                          <stat.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </section>

              {/* Featured Articles */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Star className="h-6 w-6 text-yellow-500" />
                      Featured Articles
                    </h2>
                    <p className="text-muted-foreground">
                      Handpicked articles from our top contributors
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/featured">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden group hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant="secondary"
                            className="bg-background/80 backdrop-blur-sm"
                          >
                            Featured
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary/80 backdrop-blur-sm">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl leading-tight">
                          <Link
                            href={`/post/${post.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-base line-clamp-2">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Simple Recent Articles Grid */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-500" />
                    Recent Articles
                  </h2>
                  <Button variant="outline" asChild>
                    <Link href="/recent">View All</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge>{post.category}</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg leading-tight line-clamp-2">
                          <Link
                            href={`/post/${post.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
