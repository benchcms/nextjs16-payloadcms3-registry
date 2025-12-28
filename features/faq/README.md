# FAQ

## Overview

The FAQ (Frequently Asked Questions) feature manages groups of questions and answers. It allows displaying FAQs organized by categories (groups).

## Types

- **`Faq`**: A FAQ group with name, slug, order, and a list of items.
- **`FaqItem`**: Individual Q&A pair with question and answer (richText).

## Queries

### `getFAQSections(): Promise<Faq[]>`

Get all FAQ groups, including their questions and answers.

- **Returns**: `Promise<Faq[]>` - Array of Faq objects (groups)

### `getFAQSection(slug: string): Promise<Faq | null>`

Get a single FAQ group by its slug.

- **Use Case**: Display a specific set of questions (e.g., "Shipping") on a relevant page (e.g., Cart or Checkout) or section.
- **Parameters**:
  - `slug`: The unique slug of the FAQ group
- **Returns**: `Promise<Faq | null>` - Faq object or null

## UI Components to Create

### Pages / Sections

**View**: FAQ List

- **Purpose**: Display all FAQs, organized by group
- **Placement**: Dedicated page OR section on Home/Contact/Support page.
- **Data Source**: `getFAQSections()`

**View**: Specific FAQ Section

- **Purpose**: Display questions from a single group
- **Placement**: Any relevant page.
- **Data Source**: `getFAQSection(slug)`

## Data Display Guidelines

### FAQ Group (`Faq`)

- **`name`** (string): Group title.
- **`items`** (FaqItem[]): List of Q&A pairs.
- **`slug`** (string): URL slug.
- **`order`** (number): Display order.

### FAQ Item (`FaqItem`)

- **`question`** (string): Question text.
- **`answer`** (RichText): Answer content.
