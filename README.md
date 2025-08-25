# Minimal Tailwind Template

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PNPM](https://img.shields.io/badge/PNPM-9.7.0-orange?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Code Quality](https://img.shields.io/badge/code_quality-ESLint%20%2B%20Prettier-blue)](https://eslint.org/)

A clean, well-structured foundation for React/Next.js projects built with modern best practices. Perfect for rapid prototyping and production-ready applications.

## 📸 Preview

![Template Preview](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Minimal+Tailwind+Template)

> **Note**: Replace this placeholder with an actual screenshot of your template in action!

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
| `pnpm lint:fix` | Fix ESLint issues automatically |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check if code is properly formatted |
| `pnpm type-check` | Run TypeScript type checking |

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
# Upload the '.next' directory to your hosting provider
# For static export, configure next.config.mjs with 'output: export'
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

## 🧪 Code Quality & Testing

This template includes:

- **ESLint** with Airbnb configuration
- **Prettier** for code formatting
- **TypeScript** strict mode
- **Accessibility** linting with jsx-a11y
- **Husky** (optional) for git hooks
- **lint-staged** (optional) for pre-commit checks

Run quality checks:

```bash
pnpm lint              # Check for code issues
pnpm lint:fix          # Fix issues automatically
pnpm format            # Format code consistently
pnpm format:check      # Check formatting without changes
pnpm type-check        # Run TypeScript checks
```

### Testing Setup

While this template doesn't include testing by default (to keep it minimal), you can easily add:

- **Jest** + **Testing Library** for unit tests
- **Cypress** or **Playwright** for e2e tests
- **Storybook** for component testing

```bash
# Example: Adding Jest and Testing Library
pnpm add -D jest @testing-library/react @testing-library/jest-dom
```

## 📖 Conventions

Detailed coding standards and conventions are documented in the `cursorrules` file. Key highlights:

- **Server Components** by default; add `'use client'` only when needed
- **Absolute imports** from `@/` for app code
- **Relative imports** within component folders
- **Folder-per-component** structure for complex components

## 🤝 Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### Development Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the coding conventions
4. Run quality checks: `pnpm lint && pnpm format && pnpm type-check`
5. Test your changes thoroughly
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Pull Request Guidelines

- Fill in the required template
- Include screenshots for UI changes
- Update documentation if needed
- Ensure all checks pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) for details.

```
MIT License

Copyright (c) 2024 CodeWalnut

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 💡 Support & Community

### Get Help

- 📧 **Email**: [hello@codewalnut.com](mailto:hello@codewalnut.com)
- 🌐 **Website**: [CodeWalnut](https://www.codewalnut.com/)
- 📝 **Issues**: [GitHub Issues](https://github.com/CW-Codewalnut/minimal-tailwind-template/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/CW-Codewalnut/minimal-tailwind-template/discussions)

### Resources

- 📚 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 📘 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- ♿ [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Built with ❤️ by [CodeWalnut](https://www.codewalnut.com/)**

> A modern, production-ready template that saves you hours of setup time. Start building amazing applications today!