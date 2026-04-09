# Modern Backend Engineer Portfolio

A high-performance, minimalist personal portfolio designed for backend engineers.
Built with the latest tech stack focusing on clean architecture, technical density,
and a premium developer aesthetic.

## Tech Stack

- **Framework**: [SvelteKit 2.x](https://kit.svelte.dev/) with **Svelte 5 (Runes)**
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) (Direct CSS imports, zero-config)
- **State Management**: Svelte 5 `$state` and `$derived` for reactive i18n
- **Language**: TypeScript
- **Design**: "Engineering/Blueprint" monochrome aesthetic with Emerald accents

## Key Features

- **Technical Hero**: Left-aligned high-impact typography with a minimalist system status
  sidebar.
- **Bilingual (i18n)**: Fully reactive language switching (English/French) using Svelte 5
  runes and localStorage persistence.
- **Clean Architecture About**: A "Philosophy" section focusing on Hexagonal \
  Architecture, Security, and Reliability.
- **Work Path**: Minimalist timeline for professional experience.
- **Technical Arsenal**: Categorized skill grid with a professional grid system.
- **WhatsApp Integration**: Direct-to-chat CTA for quick professional connections.
- **Responsive & Built for Performance**: Near-perfect Lighthouse scores through
  optimized asset loading and minimal hydration.

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm / pnpm / yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/flavien-hugs/my-portfolio.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development

Start the development server with Hot Module Replacement (HMR):

```sh
npm run dev
```

### Production Build

Create an optimized production bundle:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Project Structure

- `src/lib/components/sections`: Modular homepage sections.
- `src/lib/i18n.svelte.ts`: Lightweight Svelte 5 reactive i18n logic.
- `src/lib/data`: Centralized data store (profile, projects, skills).
- `src/routes/projects`: Dynamic project listing and detail pages.
