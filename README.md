# Minimal Tailwind Template

A clean, well-structured foundation for React/Next.js projects built with modern best practices.

## Features

- ⚡ Next.js 14 with App Router
- 🔷 TypeScript 5 for type safety
- 🎨 Tailwind CSS for utility-first styling
- 📏 ESLint with Airbnb configuration
- 💅 Prettier for code formatting
- 📦 PNPM for fast package management
- 🧩 Reusable component patterns

## Getting Started

### Prerequisites

- Node.js 18+
- PNPM 9+ (install with `npm install -g pnpm`)

### Installation

Clone this repository:

```bash
git clone https://github.com/CW-Codewalnut/minimal-tailwind-template.git
cd minimal-tailwind-template
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    └── atoms/
        ├── Button/
        │   └── Button.tsx
        ├── Link/
        │   └── Link.tsx
        └── Logo/
            └── Logo.tsx

public/
└── codewalnut_logo.jpeg
```

## Conventions

See `cursorrules` in the repo root for conventions and coding standards. Edit to fit your project.

## Built with ❤️ by [CodeWalnut](https://www.codewalnut.com/)

---

MIT License
