import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Header } from "@/components/Header";
import { BlogListing } from "@/components/BlogListing";
import { blogPosts } from "@/lib/blog-data";

const Recent = () => {
  // Sort posts by date (newest first)
  const recentPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-7xl mx-auto p-6">
              <BlogListing
                posts={recentPosts}
                title="Recent Articles"
                showFilters={true}
              />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Recent;
