# Blog

## Overview

The Blog feature manages blog posts, categories, and authors. It allows displaying a list of posts, filtering by category/author, and showing individual post details.

## Types

- **`BlogPost`**: Blog post with title, image, excerpt, content, author, category, and tags.
- **`BlogAuthor`**: Blog author with name, bio, and photo.
- **`BlogCategory`**: Blog category with name, description, and image.
- **`BlogTag`**: Tag for blog posts.

## Queries

### `getBlogPosts(options?): Promise<PaginatedDocs<BlogPost>>`

Get a list of blog posts with optional filtering and pagination.

- **Parameters**:
  - `options`: `{ limit?: number; page?: number; category?: string; author?: string; sort?: string; }`
  - `sort`: Sort order (default: `"-publishedDate"`)
- **Returns**: `Promise<PaginatedDocs<BlogPost>>` - Includes `docs`, `totalDocs`, `totalPages`, `page`, `hasNextPage`, `hasPrevPage`

### `getBlogPost(slug: string): Promise<BlogPost | null>`

Get a single blog post by slug.

- **Parameters**: `slug` (string)
- **Returns**: `Promise<BlogPost | null>`

### `getBlogCategories(): Promise<BlogCategory[]>`

Get all blog categories.

### `getBlogCategory(slug: string): Promise<BlogCategory | null>`

Get a single blog category by slug.

### `getBlogAuthors(): Promise<BlogAuthor[]>`

Get all blog authors.

### `getBlogAuthor(slug: string): Promise<BlogAuthor | null>`

Get a single blog author by slug.

### `getBlogPostsByAuthor(authorSlug: string, limit?: number): Promise<PaginatedDocs<BlogPost>>`

Get blog posts for a specific author.

### `getBlogPostsByCategory(categorySlug: string, limit?: number): Promise<PaginatedDocs<BlogPost>>`

Get blog posts for a specific category.

## UI Components to Create

### Pages / Sections

**View**: Blog List

- **Purpose**: List recent blog posts
- **Placement**: Dedicated page OR section on Home page.
- **Data Source**: `getBlogPosts()`

**View**: Blog Detail

- **Purpose**: Display full blog post
- **Placement**: Dedicated page.
- **Data Source**: `getBlogPost(slug)`

**View**: Category List

- **Purpose**: List posts in a specific category
- **Placement**: Dedicated page.
- **Data Source**: `getBlogPostsByCategory(slug)` or `getBlogPosts({ category })`

**View**: Author List

- **Purpose**: List posts by a specific author
- **Placement**: Dedicated page.
- **Data Source**: `getBlogPostsByAuthor(slug)` or `getBlogPosts({ author })`

## Data Display Guidelines

### Blog Post (`BlogPost`)

- **`title`** (string): Main heading.
- **`image`** (Media, optional): Featured image.
- **`excerpt`** (string, optional): Short summary.
- **`content`** (RichText): Article body.
- **`publishedDate`** (string): Publication date.
- **`author`** (BlogAuthor): Author reference.
- **`category`** (BlogCategory): Category reference.
- **`tags`** (BlogTag[]): List of tags.
- **`metaTitle`** (string, optional): SEO title.
- **`metaDescription`** (string, optional): SEO description.
- **`slug`** (string): URL slug.

### Blog Author (`BlogAuthor`)

- **`name`** (string): Author name.
- **`description`** (string, optional): Author bio.
- **`photo`** (Media, optional): Author profile photo.
- **`slug`** (string): URL slug.
- **`order`** (number): Display order.

### Blog Category (`BlogCategory`)

- **`name`** (string): Category name.
- **`description`** (string, optional): Category description.
- **`image`** (Media, optional): Category image.
- **`slug`** (string): URL slug.
- **`order`** (number): Display order.

### Blog Tag (`BlogTag`)

- **`tag`** (string): Tag name.
