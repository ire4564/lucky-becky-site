"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Eye, Heart, Calendar, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { BlogPost } from "@/src/types/blog";
import { cn } from "@/src/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function BlogCard({
  post,
  variant = "default",
  className,
}: BlogCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  if (variant === "featured") {
    return (
      <Card
        className={cn(
          "overflow-hidden group hover:shadow-lg transition-all duration-300",
          className,
        )}
      >
        <div className="relative">
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={600}
            height={300}
            className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-background/80 backdrop-blur-sm"
            >
              Featured
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/80 backdrop-blur-sm">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            {formatDate(post.publishedAt)}
            <Clock className="h-4 w-4 ml-2" />
            {post.readTime} min read
          </div>
          <CardTitle className="text-xl leading-tight">
            <Link
              href={`/post/${post.id}`}
              className="hover:text-primary transition-colors"
            >
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-base line-clamp-2">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-between pt-0">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">
                {post.author.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {formatViews(post.views)}
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              {post.likes}
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }

  if (variant === "compact") {
    return (
      <Card
        className={cn(
          "group hover:shadow-md transition-all duration-200",
          className,
        )}
      >
        <CardContent className="p-4">
          <div className="flex gap-4">
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-md group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex-1 min-w-0">
              <Badge variant="outline" className="mb-2">
                {post.category}
              </Badge>
              <h3 className="font-semibold text-sm leading-tight mb-1 line-clamp-2">
                <Link
                  href={`/post/${post.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readTime} min</span>
                <span>•</span>
                <span>{formatViews(post.views)} views</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-all duration-300 overflow-hidden",
        className,
      )}
    >
      <div className="relative">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge>{post.category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-1 mb-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
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
      <CardFooter className="flex flex-col gap-3 pt-0">
        <div className="flex items-center gap-2 w-full">
          <Avatar className="h-6 w-6">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback className="text-xs">
              {post.author.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.publishedAt)}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}m
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {formatViews(post.views)}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
