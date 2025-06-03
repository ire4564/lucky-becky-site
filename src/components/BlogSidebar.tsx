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

export function BlogSidebar() {
  const pathname = usePathname();

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
              {blogCategories.map((category) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === `/category/${category.slug}`}
                  >
                    <Link href={`/category/${category.slug}`}>
                      <span className="text-base mr-1">{category.icon}</span>
                      <span>
                        {category.name === "Frontend"
                          ? "dev record"
                          : category.name}
                      </span>
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {category.postCount}
                      </Badge>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* User Items */}
        <SidebarGroup>
          <SidebarGroupLabel>lib.</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/bookmarks"}>
                  <Link href="/bookmarks">
                    <span className="text-base pr-1">🔖</span>
                    <span>Bookmarks</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
