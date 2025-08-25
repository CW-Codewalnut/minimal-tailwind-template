# Minimal Tailwind Template

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)

A production-ready, lightning-fast Next.js template designed for rapid prototyping and scalable applications. Built with modern best practices, atomic design principles, and developer experience in mind.

## ✨ What Makes This Special?

This template strikes the perfect balance between simplicity and functionality, providing:

- **Zero Configuration**: Everything is pre-configured and ready to go
- **Developer Experience**: Best-in-class tooling with ESLint, Prettier, and TypeScript
- **Scalable Architecture**: Atomic design pattern for component organization
- **Production Ready**: Optimized build process and deployment-ready configuration
- **Modern Stack**: Latest versions of Next.js, React, and Tailwind CSS

## 🚀 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🔷 **TypeScript 5** for robust type safety and developer experience
- 🎨 **Tailwind CSS 3.4** for utility-first, responsive styling
- 📏 **ESLint** with Airbnb configuration for code quality
- 💅 **Prettier** for consistent code formatting
- 📦 **PNPM** for fast, efficient package management
- 🧩 **Atomic Design** component patterns for scalability
- 🎯 **Accessibility** built-in with proper ARIA attributes
- 📱 **Responsive** design patterns out of the box

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

## 🎨 Demo

The template includes a clean, minimal landing page that showcases:
- Responsive typography with proper contrast ratios
- Accessible navigation and interactive elements
- Component composition patterns
- Modern CSS layout techniques

Visit the live demo: [Minimal Tailwind Template](http://localhost:3000)

## 🧩 Component Usage

The template includes pre-built, accessible components following atomic design principles:

### Button Component

```tsx
import { Button } from '@/components/atoms/Button/Button';

export function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="md">
        Primary Button
      </Button>
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>
      <Button variant="outline" size="sm" disabled>
        Disabled Button
      </Button>
    </div>
  );
}
```

### Link Component

```tsx
import { Link } from '@/components/atoms/Link/Link';

export function Navigation() {
  return (
    <nav>
      <Link href="/about">Internal Link</Link>
      <Link href="https://example.com" isExternal>
        External Link
      </Link>
    </nav>
  );
}
```

### Logo Component

```tsx
import { Logo } from '@/components/atoms/Logo/Logo';

export function Header() {
  return (
    <header>
      <Logo />
    </header>
  );
}
```

## 📁 Project Structure

This template follows **Atomic Design** principles for scalable component architecture:

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page component
└── components/
    └── atoms/                   # Basic building blocks
        ├── Button/              # Reusable button component
        │   └── Button.tsx       
        ├── Link/                # Enhanced link component
        │   └── Link.tsx         
        └── Logo/                # Logo component
            └── Logo.tsx         

public/                          # Static assets
└── codewalnut_logo.jpeg        # Logo image

Configuration Files:
├── cursorrules                  # Cursor IDE conventions and coding standards
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json                # Dependencies and scripts
```

### Component Architecture

- **Atoms**: Basic UI elements (Button, Link, Logo)
- **Molecules**: Combinations of atoms (coming soon)
- **Organisms**: Complex components (coming soon)
- **Templates**: Page layouts (coming soon)

Each component follows these conventions:
- Co-located with its folder (`ComponentName/ComponentName.tsx`)
- Named exports for tree-shaking
- TypeScript interfaces for props
- Accessible by default with proper ARIA attributes

## 🎨 Customization

### Tailwind Configuration

The template uses a custom Tailwind configuration. To customize:

```typescript
// tailwind.config.ts
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Add your brand colors
        brand: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        // Add custom fonts
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### Component Variants

Components are designed to be easily customizable. For example, to add a new Button variant:

```tsx
// Update ButtonProps interface
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'; // Add new variant
  // ... other props
}

// Add styling in the component
{
  'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500':
    variant === 'danger',
}
```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CW-Codewalnut/minimal-tailwind-template)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build your project: `pnpm build`
2. Deploy the `out` folder to Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `out`

### Other Platforms

The template works with any static hosting service:

```bash
pnpm build
# Deploy the generated files from the 'out' directory
```

## 🛠️ Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**
```bash
# Check for type errors
pnpm type-check
# Fix ESLint issues
pnpm lint --fix
```

**Tailwind styles not applying:**
```bash
# Restart development server
pnpm dev
# Check Tailwind configuration in tailwind.config.ts
```

**PNPM installation issues:**
```bash
# Clear PNPM cache
pnpm store prune
# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Search [existing issues](https://github.com/CW-Codewalnut/minimal-tailwind-template/issues)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the existing code style
4. Run tests and linting: `pnpm lint && pnpm type-check`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Standards

This project follows strict code standards enforced by:
- **ESLint** with Airbnb configuration
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Cursor Rules** for AI-assisted development

See `cursorrules` for detailed conventions and coding standards.

## 📋 Roadmap

- [ ] Add component testing with Jest and React Testing Library
- [ ] Implement molecules and organisms components
- [ ] Add dark mode support
- [ ] Create Storybook integration
- [ ] Add form validation utilities
- [ ] Implement data fetching patterns

## Built with ❤️ by [CodeWalnut](https://www.codewalnut.com/)

---

MIT License
