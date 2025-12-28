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

Server Component that renders Google Analytics tracking scripts.

**Usage**: Add to root layout.

## UI Components to Create

### Pages / Sections

**View**: Contact Information Display

- **Purpose**: Display contact details and social media links.
- **Placement**: Footer, Contact Page, or Header.
- **Data Source**: `getSettings()`

## Data Display Guidelines

### Settings (`Settings`)

- **`email`** (string, optional): Contact email.
- **`phone`** (string, optional): Contact phone.
- **`address`** (string, optional): Physical address.
- **`facebook`** (string, optional): Facebook URL.
- **`instagram`** (string, optional): Instagram URL.
- **`linkedin`** (string, optional): LinkedIn URL.
- **`twitter`** (string, optional): Twitter URL.
- **`googleAnalyticsId`** (string, optional): Google Analytics ID.
