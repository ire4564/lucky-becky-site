import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import Category from "./pages/Category";
import Featured from "./pages/Featured";
import Recent from "./pages/Recent";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
