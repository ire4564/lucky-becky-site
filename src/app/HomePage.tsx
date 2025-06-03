"use client";

import { blogPosts, getFeaturedPosts } from "@/src/lib/blog-data";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Badge } from "../components/Badge";
import { BlogSidebar } from "../components/BlogSidebar";
import { Button } from "../components/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { Header } from "../components/Header";
import { ShortcutMenu } from "../components/ShortcutMenu";
import { SidebarInset, SidebarProvider } from "../components/Sidebar";
import { TraditionalLightingSwiper } from "../components/TraditionalLightingSwiper";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.slice(0, 6);

  // Duplicate featured posts for continuous scrolling effect
  const extendedPosts = [
    ...featuredPosts,
    ...featuredPosts,
    ...featuredPosts,
    ...featuredPosts,
  ];

  // Featured posts carousel - 단순화된 스와이퍼 구현
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);

  // 네비게이션 버튼 핸들러
  const scrollPrev = useCallback(() => {
    setCurrentFeaturedSlide((prev) =>
      prev > 0 ? prev - 1 : featuredPosts.length - 1,
    );
  }, [featuredPosts.length]);

  const scrollNext = useCallback(() => {
    setCurrentFeaturedSlide((prev) =>
      prev < featuredPosts.length - 1 ? prev + 1 : 0,
    );
  }, [featuredPosts.length]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <BlogSidebar />
        <SidebarInset>
          <Header onSearch={handleSearch} />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-7xl mx-auto px-6 pb-6 space-y-0.5">
              {/* Traditional Lighting Swiper Section */}
              <section className="space-y-6">
                <TraditionalLightingSwiper />
              </section>
              {/* Shortcut Menu Section */}
              <section className="mt-5.5">
                <ShortcutMenu />
              </section>
              {/* Featured Articles */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold gap-2">
                      문제를 만들고 해결하는 과정
                    </h2>
                    <p className="text-muted-foreground">
                      이 세상에 필요한 것들은 너무 많다
                    </p>
                  </div>
                  <Button variant="ghost" asChild>
                    <Link href="/featured">전체보기</Link>
                  </Button>
                </div>

                {/* 스와이퍼 구현 - 순수 CSS 사용 */}
                <div className="featured-posts-carousel">
                  <div className="card-container">
                    <div className="cards">
                      {extendedPosts.map((post, index) => (
                        <div key={`${post.id}-${index}`} className="card-item">
                          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
                            <div className="relative">
                              <img
                                src={post.thumbnail}
                                alt={post.title}
                                className="w-full h-48 md:h-48 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute top-4 right-4">
                                <Badge className="bg-primary/80 backdrop-blur-sm text-xs sm:text-xs">
                                  {post.category}
                                </Badge>
                              </div>
                            </div>
                            <CardHeader className="pb-3 p-3 sm:p-4">
                              <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">
                                <Link
                                  href={`/post/${post.id}`}
                                  className="hover:text-primary transition-colors"
                                >
                                  {post.title}
                                </Link>
                              </CardTitle>
                              <CardDescription className="text-xs sm:text-sm md:text-base line-clamp-2 mt-1">
                                {post.excerpt}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Simple Recent Articles Grid */}
              <section className="space-y-6">
                <div className="flex items-center justify-between mt-8">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    최근 게시물
                  </h2>
                  <Button variant="ghost" asChild>
                    <Link href="/recent">전체보기</Link>
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

      {/* CSS 애니메이션 스타일 */}
      <style jsx global>{`
        .featured-posts-carousel {
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
          margin: 0 auto;
        }

        .card-container {
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
          padding: 0 5px;
        }

        .cards {
          display: flex;
          gap: 16px;
          animation: scroll 60s linear infinite;
          width: fit-content;
          max-width: 720px;
          padding: 4px 0;
        }

        .card-item {
          flex: 0 0 280px;
          min-width: 280px;
          transition: transform 0.5s ease;
          max-width: 80vw; /* 화면 너비의 80%를 넘지 않도록 설정 */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }

        .featured-posts-carousel:hover .cards {
          animation-play-state: paused;
        }

        .card-item:hover {
          transform: scale(1.02);
          z-index: 1;
        }

        /* 반응형 스타일 */
        @media (max-width: 768px) {
          .card-item {
            flex: 0 0 220px;
            min-width: 220px;
            max-width: 65vw;
          }

          .cards {
            gap: 14px;
          }

          .card-container {
            padding: 0 8px;
          }
        }

        @media (max-width: 480px) {
          .card-item {
            flex: 0 0 160px;
            min-width: 260px;
            max-width: 65vw;
          }

          .cards {
            gap: 10px;
            padding: 2px 0;
          }

          .featured-posts-carousel {
            padding: 5px 0;
            margin: 0 -5px; /* 네거티브 마진으로 컨테이너 패딩 상쇄 */
          }

          .card-container {
            padding: 0 10px;
          }
        }
      `}</style>
    </SidebarProvider>
  );
}
