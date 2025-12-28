# Testimonials

## Overview

The Testimonials feature manages client reviews and feedback.

## Types

- **`Testimonial`**: Client testimonial with quote, client name, company, rating, photo, and date.

## Queries

### `getTestimonials(options?): Promise<PaginatedDocs<Testimonial>>`

Get all testimonials with pagination.

- **Parameters**:
  - `options`: `{ limit?: number; page?: number; sort?: string; }`
  - `sort`: Sort order (default: `"-date"`)
- **Returns**: `Promise<PaginatedDocs<Testimonial>>` - Includes `docs`, `totalDocs`, `totalPages`, `page`, `hasNextPage`, `hasPrevPage`

## UI Components to Create

### Pages / Sections

**View**: Testimonials List

- **Purpose**: List all testimonials
- **Placement**: Dedicated page OR section on Home/About page.
- **Data Source**: `getTestimonials()`

## Data Display Guidelines

### Testimonial (`Testimonial`)

- **`quote`** (string): The review text.
- **`client`** (string): Client name.
- **`company`** (string, optional): Company name.
- **`rating`** (number, optional): Rating 1-5.
- **`photo`** (Media, optional): Client photo.
- **`date`** (string): Date of testimonial.
