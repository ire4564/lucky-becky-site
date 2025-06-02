import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Header } from "@/components/Header";
import { BlogListing } from "@/components/BlogListing";
import { getFeaturedPosts } from "@/lib/blog-data";

const Featured = () => {
  const featuredPosts = getFeaturedPosts();

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-7xl mx-auto p-6">
              <BlogListing
                posts={featuredPosts}
                title="Featured Articles"
                showFilters={true}
              />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Featured;
