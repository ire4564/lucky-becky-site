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
      return "사이드 프로젝트";
    case "backend":
      return "어떻게 해결했는가";
    case "devops":
      return "어떤 생각을 할까";
    case "ai-ml":
      return "유용한 경험 모으기";
    default:
      return categoryName;
  }
};

// Filter out categories we don't want to show
const shouldShowCategory = (categorySlug: string) => {
  return !["web3", "mobile"].includes(categorySlug);
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
                  <span
                    className="truncate text-xs"
                    style={{ color: "rgba(119, 119, 119, 1)" }}
                  >
                    마음껏 구경하고 생각해보세요
                  </span>
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
                              <span style={{ color: "rgba(17, 17, 17, 1)" }}>
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
                        <span style={{ color: "rgba(17, 17, 17, 1)" }}>
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
            <div className="w-20 h-20 bg-gray-100 rounded border flex items-center justify-center">
              {/* Simple QR Code placeholder - you can replace this with an actual QR code image */}
              <div className="w-full h-full bg-white rounded grid grid-cols-8 grid-rows-8 gap-px p-1">
                {/* Simple pattern to represent QR code */}
                {Array.from({ length: 64 }, (_, i) => (
                  <div
                    key={i}
                    className={`
                      ${Math.random() > 0.5 ? "bg-black" : "bg-white"}
                      ${i < 8 || i % 8 === 0 || i % 8 === 7 || i >= 56 ? "bg-black" : ""}
                      ${[0, 7, 56, 63].includes(i) ? "bg-black" : ""}
                    `}
                  />
                ))}
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
