# ACM-RVCE Official Website

This is the official frontend repository for the ACM-RVCE student chapter website.

## Tech Stack

- [Next.js 15](https://nextjs.org/) 
- [Supabase](https://supabase.com/) 
- [Shadcn UI](https://ui.shadcn.com/) 
- [Tailwind CSS](https://tailwindcss.com/) 
- [TypeScript](https://www.typescriptlang.org/) 
- [Sanity](https://www.sanity.io/)

## Getting Started

1. Clone this repository
2. Install dependencies:

    ```bash
    npm install
    ```

3.  **Set up environment variables**

    - Rename the `env.example` file to `.env`.
    ```bash
    cp env.example .env
    ```
    - You will need to create accounts and get API keys from the following services:
        - **Supabase**: Create a project at [supabase.com](https://supabase.com/) to get your Project URL and `anon` key.
        - **Resend**: Create an account at [resend.com](https://resend.com/) to get an API key for handling emails.
        - **Sanity**: Create a project at [sanity.io](https://sanity.io/) to get your Project ID and Dataset. You will also need to generate a read token from the Sanity Studio.

    - Modify your credentials in the `.env` file:
      ```env
      NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
      NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
      RESEND_API_KEY="your-resend-api-key"
      SANITY_STUDIO_PROJECT_ID="your-sanity-project-id"
      SANITY_STUDIO_DATASET="your-sanity-dataset"
      NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID="your-sanity-project-id"
      NEXT_PUBLIC_SANITY_STUDIO_DATASET="your-sanity-dataset"
      SANITY_API_READ_TOKEN="your-sanity-api-read-token"

      ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows the Next.js 14 App Router structure:

- `app/` - Contains all pages and API routes
- `components/` - Reusable UI components
- `lib/` - Utility functions and configurations
- `lib/types/` - TypeScript type definitions
- `lib/config/` - Configuration files
- `lib/constants/` - Constants
- `sanity/` - Sanity configuration files and schema
- `public/` - Static assets

## Sanity CMS

This project uses [Sanity](https://www.sanity.io/) as a headless CMS for managing content like blog posts, projects, and events.

### Getting Started with Sanity

1.  **Install the Sanity CLI**

    ```bash
    npm install -g @sanity/cli
    ```

2.  **Login to Sanity**

    ```bash
    sanity login
    ```

3.  **Start the Sanity Studio**

    The Sanity Studio runs on the same port as the frontend application.

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000/studio](http://localhost:3000/studio) to access the Studio.

### Useful Sanity Commands

-   `npm run dev`: Starts the Sanity Studio in development mode.
-   `npm run sanity:deploy`: Deploys the Sanity Studio to the web.
-   `npm run typegen`: Generates TypeScript types from your Sanity schema.


## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
