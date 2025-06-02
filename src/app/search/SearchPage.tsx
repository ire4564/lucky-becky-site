"use client";

import { Badge } from "@/src/components/Badge";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/Card";
import { Header } from "@/src/components/Header";
import { SidebarInset, SidebarProvider } from "@/src/components/Sidebar";
import { searchPosts } from "@/src/lib/blog-data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = query ? searchPosts(query) : [];

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-7xl mx-auto p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">
                  Search Results for "{query}"
                </h1>
                <p className="text-muted-foreground">
                  {results.length} article{results.length !== 1 ? "s" : ""}{" "}
                  found
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((post) => (
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
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
