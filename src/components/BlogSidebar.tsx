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
            <div className="w-24 h-24 bg-white relative">
              {/* More detailed QR code pattern using individual pixels */}
              <div className="w-full h-full relative">
                {/* Create a 21x21 grid pattern using absolute positioning for precise control */}
                <div className="absolute inset-0">
                  {/* Top-left corner pattern */}
                  <div className="absolute top-0 left-0 w-7 h-7 bg-black">
                    <div className="absolute top-1 left-1 w-5 h-5 bg-white">
                      <div className="absolute top-1 left-1 w-3 h-3 bg-black"></div>
                    </div>
                  </div>

                  {/* Top-right corner pattern */}
                  <div className="absolute top-0 right-0 w-7 h-7 bg-black">
                    <div className="absolute top-1 right-1 w-5 h-5 bg-white">
                      <div className="absolute top-1 right-1 w-3 h-3 bg-black"></div>
                    </div>
                  </div>

                  {/* Bottom-left corner pattern */}
                  <div className="absolute bottom-0 left-0 w-7 h-7 bg-black">
                    <div className="absolute bottom-1 left-1 w-5 h-5 bg-white">
                      <div className="absolute bottom-1 left-1 w-3 h-3 bg-black"></div>
                    </div>
                  </div>

                  {/* Timing patterns */}
                  <div className="absolute top-6 left-8 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-6 left-9 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-6 left-10 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-6 left-11 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-6 left-12 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-6 left-13 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-6 left-14 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-6 left-15 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-6 left-16 w-0.5 h-0.5 bg-black"></div>

                  {/* Data patterns - creating a complex pattern */}
                  <div className="absolute top-8 left-2 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-8 left-3 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-8 left-4 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-8 left-5 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-8 left-8 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-8 left-9 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-8 left-10 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-8 left-11 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-8 left-12 w-0.5 h-0.5 bg-black"></div>

                  <div className="absolute top-9 left-1 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-9 left-2 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-9 left-3 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-9 left-4 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-9 left-8 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-9 left-9 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-9 left-10 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-9 left-11 w-0.5 h-0.5 bg-black"></div>

                  <div className="absolute top-10 left-1 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-10 left-2 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-10 left-3 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-10 left-4 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-10 left-5 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-10 left-8 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-10 left-9 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-10 left-10 w-0.5 h-0.5 bg-black"></div>

                  <div className="absolute top-11 left-2 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-11 left-3 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-11 left-4 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-11 left-5 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-11 left-8 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-11 left-9 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-11 left-10 w-0.5 h-0.5 bg-black"></div>

                  {/* Right side patterns */}
                  <div className="absolute top-8 right-2 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-8 right-3 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-8 right-4 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-9 right-2 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-9 right-3 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-9 right-4 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-10 right-2 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-10 right-3 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-10 right-4 w-0.5 h-0.5 bg-white"></div>

                  {/* Bottom patterns */}
                  <div className="absolute bottom-2 left-8 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute bottom-2 left-9 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute bottom-2 left-10 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute bottom-2 left-11 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute bottom-2 left-12 w-0.5 h-0.5 bg-black"></div>

                  <div className="absolute bottom-3 left-8 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute bottom-3 left-9 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute bottom-3 left-10 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute bottom-3 left-11 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute bottom-3 left-12 w-0.5 h-0.5 bg-white"></div>

                  {/* Alignment pattern in bottom right */}
                  <div className="absolute bottom-3 right-3 w-5 h-5 bg-black">
                    <div className="absolute top-1 left-1 w-3 h-3 bg-white">
                      <div className="absolute top-1 left-1 w-1 h-1 bg-black"></div>
                    </div>
                  </div>

                  {/* Additional random patterns for realism */}
                  <div className="absolute top-12 left-2 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-12 left-3 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-12 left-4 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-12 left-5 w-0.5 h-0.5 bg-white"></div>

                  <div className="absolute top-13 left-2 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-13 left-3 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-13 left-4 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-13 left-5 w-0.5 h-0.5 bg-black"></div>

                  <div className="absolute top-14 left-2 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-14 left-3 w-0.5 h-0.5 bg-white"></div>
                  <div className="absolute top-14 left-4 w-0.5 h-0.5 bg-black"></div>
                  <div className="absolute top-14 left-5 w-0.5 h-0.5 bg-white"></div>
                </div>
              </div>
            </div>
          </div>
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