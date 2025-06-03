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
          <div className="bg-white p-2 rounded-lg shadow-sm border">
            <div className="w-20 h-20 bg-white relative">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* QR Code SVG pattern matching the reference image */}

                {/* Corner detection patterns */}
                <rect x="0" y="0" width="24" height="24" fill="black" />
                <rect x="4" y="4" width="16" height="16" fill="white" />
                <rect x="8" y="8" width="8" height="8" fill="black" />

                <rect x="56" y="0" width="24" height="24" fill="black" />
                <rect x="60" y="4" width="16" height="16" fill="white" />
                <rect x="64" y="8" width="8" height="8" fill="black" />

                <rect x="0" y="56" width="24" height="24" fill="black" />
                <rect x="4" y="60" width="16" height="16" fill="white" />
                <rect x="8" y="64" width="8" height="8" fill="black" />

                {/* Timing patterns */}
                <rect x="28" y="24" width="4" height="4" fill="black" />
                <rect x="36" y="24" width="4" height="4" fill="black" />
                <rect x="44" y="24" width="4" height="4" fill="black" />
                <rect x="52" y="24" width="4" height="4" fill="black" />

                <rect x="24" y="28" width="4" height="4" fill="black" />
                <rect x="24" y="36" width="4" height="4" fill="black" />
                <rect x="24" y="44" width="4" height="4" fill="black" />
                <rect x="24" y="52" width="4" height="4" fill="black" />

                {/* Data patterns - creating a complex realistic pattern */}
                <rect x="32" y="8" width="4" height="4" fill="black" />
                <rect x="40" y="8" width="4" height="4" fill="black" />
                <rect x="48" y="8" width="4" height="4" fill="black" />

                <rect x="28" y="32" width="4" height="4" fill="black" />
                <rect x="32" y="32" width="4" height="4" fill="white" />
                <rect x="36" y="32" width="4" height="4" fill="black" />
                <rect x="40" y="32" width="4" height="4" fill="white" />
                <rect x="44" y="32" width="4" height="4" fill="black" />
                <rect x="48" y="32" width="4" height="4" fill="black" />
                <rect x="52" y="32" width="4" height="4" fill="white" />

                <rect x="32" y="36" width="4" height="4" fill="white" />
                <rect x="40" y="36" width="4" height="4" fill="black" />
                <rect x="48" y="36" width="4" height="4" fill="white" />

                <rect x="28" y="40" width="4" height="4" fill="white" />
                <rect x="36" y="40" width="4" height="4" fill="black" />
                <rect x="44" y="40" width="4" height="4" fill="white" />
                <rect x="52" y="40" width="4" height="4" fill="black" />

                <rect x="32" y="44" width="4" height="4" fill="black" />
                <rect x="40" y="44" width="4" height="4" fill="white" />
                <rect x="48" y="44" width="4" height="4" fill="black" />

                <rect x="28" y="48" width="4" height="4" fill="black" />
                <rect x="36" y="48" width="4" height="4" fill="white" />
                <rect x="44" y="48" width="4" height="4" fill="black" />
                <rect x="52" y="48" width="4" height="4" fill="white" />

                {/* Bottom patterns */}
                <rect x="32" y="56" width="4" height="4" fill="white" />
                <rect x="40" y="56" width="4" height="4" fill="black" />
                <rect x="48" y="56" width="4" height="4" fill="white" />

                <rect x="28" y="60" width="4" height="4" fill="black" />
                <rect x="36" y="60" width="4" height="4" fill="white" />
                <rect x="44" y="60" width="4" height="4" fill="black" />
                <rect x="52" y="60" width="4" height="4" fill="black" />

                <rect x="32" y="64" width="4" height="4" fill="black" />
                <rect x="40" y="64" width="4" height="4" fill="white" />
                <rect x="48" y="64" width="4" height="4" fill="white" />

                <rect x="28" y="68" width="4" height="4" fill="white" />
                <rect x="36" y="68" width="4" height="4" fill="black" />
                <rect x="44" y="68" width="4" height="4" fill="white" />
                <rect x="52" y="68" width="4" height="4" fill="black" />

                <rect x="32" y="72" width="4" height="4" fill="black" />
                <rect x="40" y="72" width="4" height="4" fill="black" />
                <rect x="48" y="72" width="4" height="4" fill="white" />
                <rect x="52" y="72" width="4" height="4" fill="black" />

                {/* Right side patterns */}
                <rect x="56" y="32" width="4" height="4" fill="black" />
                <rect x="64" y="32" width="4" height="4" fill="white" />
                <rect x="72" y="32" width="4" height="4" fill="black" />

                <rect x="60" y="36" width="4" height="4" fill="white" />
                <rect x="68" y="36" width="4" height="4" fill="black" />
                <rect x="76" y="36" width="4" height="4" fill="white" />

                <rect x="56" y="40" width="4" height="4" fill="black" />
                <rect x="64" y="40" width="4" height="4" fill="black" />
                <rect x="72" y="40" width="4" height="4" fill="white" />

                <rect x="60" y="44" width="4" height="4" fill="white" />
                <rect x="68" y="44" width="4" height="4" fill="white" />
                <rect x="76" y="44" width="4" height="4" fill="black" />

                <rect x="56" y="48" width="4" height="4" fill="black" />
                <rect x="64" y="48" width="4" height="4" fill="white" />
                <rect x="72" y="48" width="4" height="4" fill="black" />

                {/* Alignment pattern */}
                <rect x="60" y="60" width="16" height="16" fill="black" />
                <rect x="64" y="64" width="8" height="8" fill="white" />
                <rect x="68" y="68" width="4" height="4" fill="black" />
              </svg>
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
