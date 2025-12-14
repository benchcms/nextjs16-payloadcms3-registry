import type { Feature } from "@core/types";
import { seedBlog } from "./seed/blog";
import { BlogPosts } from "./collections/BlogPosts";
import { BlogAuthors } from "./collections/BlogAuthors";
import { BlogCategories } from "./collections/BlogCategories";

const blogConfig: Feature = {
  globals: [],
  collections: [BlogCategories, BlogAuthors, BlogPosts],
  seeds: [seedBlog],
};

export default blogConfig;
