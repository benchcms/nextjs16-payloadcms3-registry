# Contact

## Overview

The Contact feature provides contact form functionality. It includes a factory function to create a server action for contact form submissions and configuration for the form recipient email.

## Types

- **`Contact`**: Contact form recipient configuration.

## Queries

### `getContact(): Promise<Contact>`

Get the global contact information.

## Mutations

### `createContactFormAction(generateEmailHtml): ServerAction`

Creates a Server Action for contact form submissions compatible with `useActionState`.

**Parameters**:

- `generateEmailHtml: (data: ContactFormData) => string` - Function that generates the HTML email template from validated form data

**Architecture**:

- This is a factory function that produces a Server Action
- To use it, create your own server-side file that imports the factory, calls it with your template function, and exports the resulting server action
- The frontend component then imports and uses that exported server action with `useActionState`

**Server-side Processing**:
The server-side function (`submitContactForm`) handles:

1. Validates form data using `contactFormSchema` from `mutations/schema.ts`
2. Calls the template generator to produce HTML email content
3. Fetches the recipient email from the Contact global
4. Saves the contact message to the database
5. Sends the email with the generated HTML

**Validation Schema**: `contactFormSchema` from `mutations/schema.ts`

- Validates:
  - `name` - string, 1-100 characters, required
  - `email` - valid email address, required
  - `phone` - string, optional
  - `subject` - string, 1-200 characters, required
  - `message` - string, 1-5000 characters, required

**Email Configuration**:

- Contact form submissions are sent to the email configured in the Contact global (`email` field)
- This must be set in the admin panel for form submissions to work

**Returns**: Server Action compatible with `useActionState`

- `success: boolean` - True if submitted successfully
- `error?: string` - Error message on failure
- `fieldErrors?: Record<string, string[]>` - Per-field validation errors

## UI Components to Create

### Pages / Sections

**View**: Contact Form

- **Purpose**: Display contact form for user submissions
- **Placement**: Dedicated page or section.
- **Data Source**: `createContactFormAction()`

## Data Display Guidelines

### Contact Form Fields

The contact form accepts the following fields (validated by `contactFormSchema`):

- **`name`** (string): User's name (required, 1-100 characters).
- **`email`** (email): User's email address (required).
- **`phone`** (string): User's phone number (optional).
- **`subject`** (string): Message subject (required, 1-200 characters).
- **`message`** (string): Message content (required, 1-5000 characters).
