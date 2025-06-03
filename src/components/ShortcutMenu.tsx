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
    bgColor: "bg-amber-400",
    hoverColor: "hover:bg-amber-500",
    href: "/problem-solving",
  },
  {
    id: 2,
    title: "Projects",
    icon: FolderOpen,
    bgColor: "bg-emerald-400",
    hoverColor: "hover:bg-emerald-500",
    href: "/projects",
  },
  {
    id: 3,
    title: "Philosophy",
    icon: Lightbulb,
    bgColor: "bg-rose-400",
    hoverColor: "hover:bg-rose-500",
    href: "/philosophy",
  },
  {
    id: 4,
    title: "Toolbox",
    icon: Wrench,
    bgColor: "bg-indigo-400",
    hoverColor: "hover:bg-indigo-500",
    href: "/toolbox",
  },
  {
    id: 5,
    title: "Resume",
    icon: FileText,
    bgColor: "bg-purple-400",
    hoverColor: "hover:bg-purple-500",
    href: "/resume",
  },
  {
    id: 6,
    title: "Github",
    icon: Github,
    bgColor: "bg-slate-700",
    hoverColor: "hover:bg-slate-800",
    href: "https://github.com",
  },
];

export function ShortcutMenu() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 p-6">
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
                relative w-16 h-16 rounded-2xl shadow-lg transition-all duration-200
                ${shortcut.bgColor} ${shortcut.hoverColor}
                flex items-center justify-center
                group-hover:shadow-xl
              `}
              >
                <IconComponent className="w-8 h-8 text-white" />

                {/* Notification Badge for some items */}
                {(shortcut.title === "Problem Solving" ||
                  shortcut.title === "Projects") && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                )}
              </div>

              {/* Label */}
              <span className="text-sm font-medium text-gray-700 text-center leading-tight group-hover:text-gray-900 transition-colors duration-200">
                {shortcut.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
