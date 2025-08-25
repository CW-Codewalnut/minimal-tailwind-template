import { Link } from '@/components/atoms/Link/Link';
import { Logo } from '@/components/atoms/Logo/Logo';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col antialiased">
      <header className="p-6 container mx-auto">
        <Logo />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Minimal Tailwind Template
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Lightning-fast Next.js template with Tailwind CSS for rapid
            prototyping and quick iterations. Built for speed and simplicity.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <Link
              href="https://www.codewalnut.com/"
              isExternal
              aria-label="Visit CodeWalnut (opens in a new tab)"
            >
              Visit CodeWalnut
            </Link>
          </div>
        </div>
      </div>

      <footer className="p-6 text-center text-sm text-gray-600 container mx-auto">
        <p>
          Built with ❤️ by{' '}
          <Link
            href="https://www.codewalnut.com/"
            isExternal
            className="text-sm"
            aria-label="Visit CodeWalnut (opens in a new tab)"
          >
            CodeWalnut
          </Link>
        </p>
      </footer>
    </main>
  );
}
