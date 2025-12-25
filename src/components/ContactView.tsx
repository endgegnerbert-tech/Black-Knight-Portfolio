"use client";

export default function ContactView() {
  return (
    <div className="h-full flex flex-col justify-center max-w-2xl animate-fadeIn">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
        Get in Touch
      </h2>
      <p className="text-gray-500 mb-8">
        If you want to get in touch, feel free to reach out via email.
      </p>
      <a
        href="mailto:einar@black-knight.dev"
        className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors underline underline-offset-4 mb-8"
      >
        einar@black-knight.dev
      </a>
      <div className="flex gap-6 mt-4">
        <a
          href="https://github.com/endgegnerbert-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
      <p className="text-gray-600 text-sm mt-8">
        I typically respond within 24-48 hours.
      </p>
    </div>
  );
}
