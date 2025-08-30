"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BlogContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <BlogContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
}
