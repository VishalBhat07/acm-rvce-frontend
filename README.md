# ACM-RVCE Official Website

This is the official frontend repository for the ACM-RVCE student chapter website.

## Tech Stack

- [Next.js 15](https://nextjs.org/) 
- [Supabase](https://supabase.com/) 
- [Shadcn UI](https://ui.shadcn.com/) 
- [Tailwind CSS](https://tailwindcss.com/) 
- [TypeScript](https://www.typescriptlang.org/) 

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

    - Modify your credentials in the `.env` file:
      ```env
      NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
      NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
      RESEND_API_KEY=your-resend-api-key
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
- `public/` - Static assets


## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
