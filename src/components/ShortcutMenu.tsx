"use client";

import {
  Brain,
  FolderOpen,
  Lightbulb,
  Wrench,
  FileText,
  Github,
} from "lucide-react";
import Link from "next/link";

const shortcuts = [
  {
    id: 1,
    title: "Problem Solving",
    icon: Brain,
    bgColor: "bg-gradient-to-br from-amber-300 to-amber-400",
    hoverColor: "hover:from-amber-400 hover:to-amber-500",
    href: "/problem-solving",
    hasNotification: true,
  },
  {
    id: 2,
    title: "Projects",
    icon: FolderOpen,
    bgColor: "bg-gradient-to-br from-emerald-300 to-emerald-400",
    hoverColor: "hover:from-emerald-400 hover:to-emerald-500",
    href: "/projects",
    hasNotification: true,
  },
  {
    id: 3,
    title: "Philosophy",
    icon: Lightbulb,
    bgColor: "bg-gradient-to-br from-blue-300 to-blue-400",
    hoverColor: "hover:from-blue-400 hover:to-blue-500",
    href: "/philosophy",
    hasNotification: false,
  },
  {
    id: 4,
    title: "Toolbox",
    icon: Wrench,
    bgColor: "bg-gradient-to-br from-orange-300 to-orange-400",
    hoverColor: "hover:from-orange-400 hover:to-orange-500",
    href: "/toolbox",
    hasNotification: false,
  },
  {
    id: 5,
    title: "Resume",
    icon: FileText,
    bgColor: "bg-gradient-to-br from-purple-400 to-purple-500",
    hoverColor: "hover:from-purple-500 hover:to-purple-600",
    href: "/resume",
    hasNotification: false,
  },
  {
    id: 6,
    title: "Github",
    icon: Github,
    bgColor: "bg-gradient-to-br from-gray-600 to-gray-700",
    hoverColor: "hover:from-gray-700 hover:to-gray-800",
    href: "https://github.com",
    hasNotification: false,
  },
];

export function ShortcutMenu() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 p-6">
        {shortcuts.map((shortcut) => {
          const IconComponent = shortcut.icon;
          return (
            <Link
              key={shortcut.id}
              href={shortcut.href}
              className="group flex flex-col items-center space-y-3 transition-transform duration-200 hover:scale-105"
            >
              {/* Icon Container */}
              <div
                className={`
                relative w-20 h-20 rounded-3xl shadow-md transition-all duration-300
                ${shortcut.bgColor} ${shortcut.hoverColor}
                flex items-center justify-center
                group-hover:shadow-lg group-hover:-translate-y-1
              `}
              >
                <IconComponent className="w-9 h-9 text-white drop-shadow-sm" />

                {/* Notification Badge */}
                {shortcut.hasNotification && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                )}
              </div>

              {/* Label */}
              <span className="text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-gray-900 transition-colors duration-200 max-w-20">
                {shortcut.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
