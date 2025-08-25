# Minimal Tailwind Template

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PNPM](https://img.shields.io/badge/PNPM-9.7.0-orange?logo=pnpm&logoColor=white)](https://pnpm.io/)

A clean, well-structured foundation for React/Next.js projects built with modern best practices. Perfect for rapid prototyping and production-ready applications.

## ✨ Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🔷 **TypeScript 5** for complete type safety
- 🎨 **Tailwind CSS** for utility-first styling with zero-runtime CSS
- 🧩 **clsx** for conditional CSS class handling
- 📏 **ESLint** with Airbnb configuration for code quality
- 💅 **Prettier** for consistent code formatting
- 📦 **PNPM** for fast, efficient package management
- 🏗️ **Atomic Design** component patterns for scalability
- ♿ **Accessibility** standards built-in (WCAG compliance)
- 🎯 **Server Components** by default for better performance

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **PNPM** 9+ (install with `npm install -g pnpm`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CW-Codewalnut/minimal-tailwind-template.git
   cd minimal-tailwind-template
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your application running.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build optimized production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint to check code quality |
| `pnpm format` | Format code with Prettier |

## 📁 Project Structure

```
minimal-tailwind-template/
├── public/                    # Static assets
│   └── codewalnut_logo.jpeg  # Logo image
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── globals.css       # Global styles and Tailwind imports
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Homepage component
│   └── components/           # Reusable React components
│       └── atoms/            # Basic building blocks
│           ├── Button/       # Button component with variants
│           │   └── Button.tsx
│           ├── Link/         # Enhanced Link component
│           │   └── Link.tsx
│           └── Logo/         # Logo component
│               └── Logo.tsx
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── cursorrules              # Coding conventions and standards
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Adding Components

Follow the atomic design pattern:

```bash
src/components/
├── atoms/          # Basic building blocks (Button, Input, etc.)
├── molecules/      # Simple component combinations
├── organisms/      # Complex components
└── templates/      # Page-level layouts
```

### Styling Guidelines

- Use **Tailwind utility classes** for styling
- Prefer **rem units** for spacing and font sizes
- Keep **global CSS minimal** (only in `globals.css`)
- Use **semantic HTML** for accessibility

### TypeScript Patterns

- **Explicit prop types** with interfaces
- **PascalCase** for component filenames
- **Named exports** for all components
- **Strict TypeScript** configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The build output is compatible with any static hosting service:

```bash
pnpm build
# Upload the 'out' directory to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=your_database_url
```

### Tailwind Configuration

Customize your design system in `tailwind.config.ts`:

```typescript
// Add custom colors, fonts, spacing, etc.
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      }
    }
  }
}
```

## 🧪 Code Quality

This template includes:

- **ESLint** with Airbnb configuration
- **Prettier** for code formatting
- **TypeScript** strict mode
- **Accessibility** linting with jsx-a11y

Run quality checks:

```bash
pnpm lint        # Check for code issues
pnpm format      # Format code consistently
```

## 📖 Conventions

Detailed coding standards and conventions are documented in the `cursorrules` file. Key highlights:

- **Server Components** by default; add `'use client'` only when needed
- **Absolute imports** from `@/` for app code
- **Relative imports** within component folders
- **Folder-per-component** structure for complex components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the coding conventions
4. Run tests: `pnpm lint && pnpm format`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Support

- 📧 **Email**: [hello@codewalnut.com](mailto:hello@codewalnut.com)
- 🌐 **Website**: [CodeWalnut](https://www.codewalnut.com/)
- 📝 **Issues**: [GitHub Issues](https://github.com/CW-Codewalnut/minimal-tailwind-template/issues)

---

**Built with ❤️ by [CodeWalnut](https://www.codewalnut.com/)**

> A modern, production-ready template that saves you hours of setup time. Start building amazing applications today!