# Contributing to Minimal Tailwind Template

Thank you for your interest in contributing to the Minimal Tailwind Template! We appreciate your help in making this project better.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please treat everyone with respect and kindness.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/minimal-tailwind-template.git
   cd minimal-tailwind-template
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Project

```bash
# Start development server
pnpm dev

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Format code
pnpm format
```

### Making Changes

1. Make your changes in a feature branch
2. Follow the existing code style and conventions
3. Add tests if applicable
4. Update documentation if needed
5. Ensure all quality checks pass:
   ```bash
   pnpm lint && pnpm format:check && pnpm type-check
   ```

### Commit Guidelines

- Use clear, descriptive commit messages
- Follow conventional commit format when possible:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for adding tests
  - `chore:` for maintenance tasks

Example:
```
feat: add new Button component variant

- Add outline variant to Button component
- Update Button stories and tests
- Update documentation
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the version numbers in any examples files and the README.md to the new version
3. Ensure your code follows the project's coding standards
4. Make sure all tests pass and quality checks are successful
5. Submit your pull request with:
   - Clear title and description
   - Reference any related issues
   - Screenshots for UI changes
   - Any breaking changes clearly noted

### Pull Request Template

When creating a PR, please include:

- **Description**: What does this PR do?
- **Type of Change**: Bug fix, new feature, documentation update, etc.
- **Testing**: How was this tested?
- **Screenshots**: If applicable, include before/after screenshots
- **Checklist**: Confirm you've completed all requirements

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` types when possible
- Use strict TypeScript configuration

### React Components

- Use functional components with hooks
- Follow the atomic design pattern
- Use Server Components by default
- Add `'use client'` only when necessary
- Export components using named exports

### Styling

- Use Tailwind CSS utility classes
- Avoid custom CSS when possible
- Use semantic HTML elements
- Ensure accessibility compliance
- Test with screen readers when applicable

### File Structure

```
src/
├── app/                  # Next.js App Router
├── components/           # React components
│   ├── atoms/           # Basic building blocks
│   ├── molecules/       # Simple combinations
│   ├── organisms/       # Complex components
│   └── templates/       # Page layouts
└── lib/                 # Utility functions
```

## Questions or Need Help?

- Create an issue for bugs or feature requests
- Start a discussion for questions or ideas
- Contact us at hello@codewalnut.com

Thank you for contributing! 🎉