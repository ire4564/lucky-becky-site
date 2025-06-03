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
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.slice(0, 6);
  const trendingPosts = [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

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
            <div className="container max-w-7xl mx-auto px-6 pb-6 space-y-0.5">
              {/* Traditional Lighting Swiper Section */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <div></div>
                </div>
                <TraditionalLightingSwiper />
              </section>
              {/* Stats Section */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5.5">
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
