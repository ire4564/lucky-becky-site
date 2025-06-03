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
} from "@/src/components/Sidebar";
import { blogCategories } from "@/src/lib/blog-data";
import {
  BarChart3,
  Bookmark,
  Calendar,
  Home,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
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
      return "경험 모으기";
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
                  <span className="truncate font-bold text-[24px]">
                    LUCKY BECKY
                  </span>
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
          <SidebarGroupLabel>menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredCategories.map((category, index) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === `/category/${category.slug}`}
                  >
                    <Link href={`/category/${category.slug}`}>
                      <div className="flex items-center justify-between w-full">
                        <span
                          className="flex-1"
                          style={{ color: "rgba(17, 17, 17, 1)" }}
                        >
                          {getCategoryDisplayName(category.name, category.slug)}
                        </span>
                        <Badge variant="secondary" className="text-xs ml-2">
                          {category.postCount}
                        </Badge>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col items-center justify-center p-4 space-y-3">
          {/* Scan Me Button */}
          <div className="relative mb-1">
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
              SCAN ME ✨
            </button>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-3 bg-black transform rotate-45"></div>
            </div>
          </div>
          {/* QR Code */}
          <div className="bg-white p-3 rounded-lg shadow-sm border">
            <div className="w-20 h-20 bg-gray-100 rounded border flex items-center justify-center">
              {/* Simple QR Code placeholder - you can replace this with an actual QR code image */}
              <div className="w-full h-full">
                {/* Simple pattern to represent QR code */}
                <Image
                  src="/QR.png"
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
