"use client";

import { Badge } from "@/src/components/Badge";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import { Button } from "@/src/components/Button";
import { Card, CardHeader, CardTitle } from "@/src/components/Card";
import { Header } from "@/src/components/Header";
import { Separator } from "@/src/components/Separator";
import { SidebarInset, SidebarProvider } from "@/src/components/Sidebar";
import { blogPosts } from "@/src/lib/blog-data";
import { BlogPost } from "@/types/blog";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  User,
  Tag,
} from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
  post: BlogPost;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  // 크라우드펀딩 스타일의 가상 데이터 생성
  const fundingData = {
    status: "진행중",
    targetAmount: 5000000,
    currentAmount: Math.floor(post.views * 1000 + post.likes * 500),
    daysLeft: Math.floor(Math.random() * 30) + 1,
    supporters: Math.floor(post.views / 10) + post.likes,
    progress: Math.min(
      (Math.floor(post.views * 1000 + post.likes * 500) / 5000000) * 100,
      227,
    ),
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header />

          <main className="flex-1 overflow-auto bg-gray-50">
            <div className="container max-w-7xl mx-auto p-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-blue-600">
                  카테고리
                </Link>
                <span>·</span>
                <span>{post.category}</span>
                <span className="text-blue-600">›</span>
              </div>

              {/* Main Content Layout */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left: Thumbnail Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right: Project Information */}
                  <div className="p-8 lg:p-12 flex flex-col">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-6">
                      <div
                        className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: "rgba(207, 207, 207, 1)" }}
                      >
                        <span>🎁 </span>
                        <span style={{ color: "rgba(97, 97, 97, 1)" }}>
                          Frontend
                        </span>
                      </div>
                    </div>
                    {/* Author Information */}
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center py-2 mt-4">
                        <span className="text-gray-600">작성자</span>
                        <span className="font-medium">DOHEE KIM</span>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Project Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">목표금액</span>
                        <span className="font-medium">
                          {fundingData.targetAmount.toLocaleString()}원
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">펀딩 기간</span>
                        <div className="text-right">
                          <div className="font-medium">
                            {formatDate(post.publishedAt)} ~{" "}
                            {formatDate(
                              new Date(
                                Date.now() +
                                  fundingData.daysLeft * 24 * 60 * 60 * 1000,
                              ).toISOString(),
                            )}
                          </div>
                          <span className="text-sm text-red-500">
                            {fundingData.daysLeft}일 남음
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">결제</span>
                        <span className="font-medium">
                          목표금액 달성시{" "}
                          {formatDate(
                            new Date(
                              Date.now() +
                                (fundingData.daysLeft + 1) *
                                  24 *
                                  60 *
                                  60 *
                                  1000,
                            ).toISOString(),
                          )}
                          에 결제 진행
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">예상 발송 시점</span>
                        <span className="font-medium">
                          {formatDate(
                            new Date(
                              Date.now() +
                                (fundingData.daysLeft + 40) *
                                  24 *
                                  60 *
                                  60 *
                                  1000,
                            ).toISOString(),
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Main CTA Button */}
                    <Button
                      size="lg"
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium rounded-lg"
                      style={{ padding: "32px" }}
                    >
                      잘 읽었어요
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="mt-8 bg-white rounded-xl p-8 shadow-sm">
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-wrap leading-relaxed text-gray-700">
                    {post.content}
                  </div>

                  {/* Additional project content */}
                  <div className="space-y-6 mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      프로젝트 소개
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900">
                      주요 특징
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 혁신적인 아이디어와 실용적인 접근 방식</li>
                      <li>• 사용자 중심의 설계와 편의성</li>
                      <li>• 지속 가능한 개발과 확장성</li>
                      <li>• 커뮤니티와의 지속적인 소통</li>
                    </ul>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        작성자 정보
                      </h4>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-blue-900">
                            {post.author.name}
                          </p>
                          <p className="text-sm text-blue-700">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="mt-8">
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      관련 프로젝트
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {relatedPosts.map((relatedPost) => (
                        <Card
                          key={relatedPost.id}
                          className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-gray-200"
                        >
                          <div className="relative">
                            <img
                              src={relatedPost.thumbnail}
                              alt={relatedPost.title}
                              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs">
                                진행중
                              </Badge>
                            </div>
                          </div>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base leading-tight line-clamp-2 text-gray-900">
                              <Link
                                href={`/post/${relatedPost.id}`}
                                className="hover:text-blue-600 transition-colors"
                              >
                                {relatedPost.title}
                              </Link>
                            </CardTitle>
                            <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
                              <span className="font-medium">
                                {Math.floor(relatedPost.views * 234)}%
                              </span>
                              <span>
                                {Math.floor(relatedPost.views / 10)}명 후원
                              </span>
                            </div>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
