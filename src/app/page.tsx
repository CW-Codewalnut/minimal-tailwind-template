'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Minimal Tailwind Template
        </h1>
        <button
          type="button"
          className="rounded-lg bg-[#0070f3] px-8 py-4 text-lg font-medium text-white transition-colors duration-200 hover:bg-[#0051cc] focus:outline-none focus:ring-2 focus:ring-[#0070f3] focus:ring-offset-2"
          onClick={() => alert('Hello from Tailwind!')}
        >
          Click Me!
        </button>
      </div>
    </main>
  );
}
