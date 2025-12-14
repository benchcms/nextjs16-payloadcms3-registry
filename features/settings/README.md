# Settings

## Overview

The Settings feature provides a centralized global configuration for website-wide settings including contact information, social media links, and third-party integrations.

## Types

- **`Settings`**: Global settings with contact info, social media URLs, and integration configurations.

## Queries

### `getSettings(): Promise<Settings>`

Get the global settings configuration.

## Components

### `GoogleAnalytics`

Server Component that renders Google Analytics tracking scripts. Returns `null` if `googleAnalyticsId` is not configured.

**Usage**: Add `<GoogleAnalytics />` to your root layout.

## UI Components to Create

### Pages / Sections

**View**: Contact Information Display

- **Purpose**: Display contact details and social media links.
- **Placement**: Footer, Contact Page, or Header.
- **Data Source**: `getSettings()`

## Data Display Guidelines

### Settings (`Settings`)

- **`email`** (email): Contact email (optional).
- **`phone`** (text): Contact phone (optional).
- **`address`** (textarea): Physical address (optional).
- **`facebook`** (text): Facebook URL (optional).
- **`instagram`** (text): Instagram URL (optional).
- **`linkedin`** (text): LinkedIn URL (optional).
- **`twitter`** (text): Twitter URL (optional).
- **`googleAnalyticsId`** (text): Google Analytics ID (optional).
