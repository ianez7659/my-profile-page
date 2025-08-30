"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBlogContext } from "@/contexts/BlogContext";

interface BlogSidebarProps {
  posts: Array<{
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
  }>;
}

export default function BlogSidebar({ posts }: BlogSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCategory, setSelectedCategory } = useBlogContext();

  // Post count by category
  const getCategoryCount = (category: string) => {
    if (category === "All") {
      return posts.length;
    }
    if (category === "Hobby/Interests") {
      return posts.filter(post => post.tags.includes("Hobby") || post.tags.includes("Interests")).length;
    }
    return posts.filter(post => post.tags.includes(category)).length;
  };

  // Categories
  const categories = ["All", "Projects", "Hobby/Interests", "News"];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-black/70 text-white shadow-xl transition-transform transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:bg-blue-800 md:shadow-none md:h-auto`}
      >
        <div className="md:p-6 p-4 relative md:pt-6 pt-28 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <ul className="space-y-4 text-lg">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left hover:text-red-500 transition-colors ${
                    selectedCategory === category ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  <span className="flex justify-between items-center">
                    {category}
                    <span className="text-sm text-gray-400">
                      ({getCategoryCount(category)})
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          
          <button
            className="md:hidden absolute -right-12 top-1/8 transform -translate-y-1/2 px-3 py-2 text-white bg-red-600 rounded-r-lg shadow-lg hover:bg-blue-800 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle sidebar"
          >
            <span className="text-sm font-medium">{isOpen ? <ChevronLeft /> : <ChevronRight />}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
