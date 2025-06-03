import { cn } from "@/src/lib/utils";
import * as React from "react";

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex min-h-svh w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "hidden md:flex h-svh w-64 flex-col bg-sidebar border-r",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-4",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full text-sm", className)} {...props} />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("group/menu-item relative", className)}
    {...props}
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

interface SidebarMenuButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  isActive?: boolean;
  size?: "sm" | "default" | "lg";
}

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      className,
      asChild = false,
      isActive = false,
      size = "default",
      ...props
    },
    ref,
  ) => {
    if (asChild) {
      return (
        <div
          className={cn(
            "flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            isActive && "bg-accent text-accent-foreground font-medium",
            size === "sm" && "h-7 text-xs",
            size === "lg" && "h-12 text-sm",
            className,
          )}
          {...(props as React.ComponentProps<"div">)}
        />
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isActive && "bg-accent text-accent-foreground font-medium",
          size === "sm" && "h-7 text-xs",
          size === "lg" && "h-12 text-sm",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mx-2 w-auto h-px bg-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  return (
    <button ref={ref} className={cn("h-7 w-7", className)} {...props}>
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
};
