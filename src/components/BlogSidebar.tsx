"use client";

import { Badge } from "@/src/components/Badge";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/src/components/Sidebar";
import { blogCategories } from "@/src/lib/blog-data";
import {
  BarChart3,
  Bookmark,
  BookOpen,
  Calendar,
  Home,
  Settings,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNavItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Featured",
    url: "/featured",
    icon: Star,
  },
  {
    title: "Trending",
    url: "/trending",
    icon: TrendingUp,
  },
  {
    title: "Recent",
    url: "/recent",
    icon: Calendar,
  },
];

const userItems = [
  {
    title: "My Bookmarks",
    url: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Reading History",
    url: "/history",
    icon: BarChart3,
  },
  {
    title: "Authors",
    url: "/authors",
    icon: Users,
  },
];

// Map category names to display names without emojis
const getCategoryDisplayName = (categoryName: string, categorySlug: string) => {
  switch (categorySlug) {
    case "frontend":
      return "dev record";
    case "backend":
      return "Backend";
    case "devops":
      return "DevOps";
    case "ai-ml":
      return "AI/ML";
    case "mobile":
      return "Mobile";
    default:
      return categoryName;
  }
};

// Filter out categories we don't want to show
const shouldShowCategory = (categorySlug: string) => {
  return !["web3"].includes(categorySlug);
};

export function BlogSidebar() {
  const pathname = usePathname();
  const filteredCategories = blogCategories.filter((category) =>
    shouldShowCategory(category.slug),
  );

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">LUCKY BECKY</span>
                  <span className="truncate text-xs">recording archive</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Categories */}
        <SidebarGroup>
          <SidebarGroupLabel>menu.</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredCategories.map((category, index) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === `/category/${category.slug}`}
                    className={
                      category.slug === "frontend"
                        ? "justify-start flex-col p-2"
                        : ""
                    }
                  >
                    {category.slug === "frontend" ? (
                      <div className="w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col line-height-normal w-full ml-0 max-md:w-full max-md:ml-0">
                            <Link
                              href={`/category/${category.slug}`}
                              className="block"
                            >
                              <span>
                                {getCategoryDisplayName(
                                  category.name,
                                  category.slug,
                                )}
                              </span>
                              <Badge
                                variant="secondary"
                                className="ml-2 text-xs"
                              >
                                {category.postCount}
                              </Badge>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link href={`/category/${category.slug}`}>
                        <span>
                          {getCategoryDisplayName(category.name, category.slug)}
                        </span>
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {category.postCount}
                        </Badge>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col items-center justify-center p-4 space-y-3">
          {/* QR Code */}
          <div className="bg-white p-3 rounded-lg shadow-sm border">
            <div className="w-20 h-20 bg-white relative grid grid-cols-10 grid-rows-10 gap-0">
              {/* Create a more realistic QR code pattern */}
              {[
                // Row 1
                1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
                // Row 2
                1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                // Row 3
                1, 0, 1, 1, 1, 0, 1, 1, 1, 0,
                // Row 4
                1, 0, 1, 1, 1, 0, 1, 0, 1, 1,
                // Row 5
                1, 0, 1, 1, 1, 0, 1, 1, 0, 0,
                // Row 6
                1, 0, 0, 0, 0, 0, 1, 0, 1, 1,
                // Row 7
                1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
                // Row 8
                0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                // Row 9
                1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
                // Row 10
                1, 1, 0, 1, 1, 0, 1, 0, 1, 1,
              ].map((cell, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 ${cell === 1 ? "bg-black" : "bg-white"}`}
                />
              ))}

              {/* Corner detection patterns */}
              <div className="absolute top-0 left-0 w-6 h-6 bg-black">
                <div className="absolute top-1 left-1 w-4 h-4 bg-white">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-black"></div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-6 h-6 bg-black">
                <div className="absolute top-1 right-1 w-4 h-4 bg-white">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-black"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-black">
                <div className="absolute bottom-1 left-1 w-4 h-4 bg-white">
                  <div className="absolute bottom-1 left-1 w-2 h-2 bg-black"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scan Me Button */}
          <div className="relative">
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
              SCAN ME!
            </button>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-3 bg-black transform rotate-45"></div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
