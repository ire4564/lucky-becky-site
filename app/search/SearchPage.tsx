"use client";

import { useSearchParams } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/src/components/ui/sidebar";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import { Header } from "@/src/components/Header";
import { BlogListing } from "@/src/components/BlogListing";
import { searchPosts } from "@/src/lib/blog-data";

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

              <BlogListing posts={results} title="" showFilters={true} />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
