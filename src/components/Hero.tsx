"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Verstecke Contact beim Scrollen
  useEffect(() => {
    const handleScroll = () => {
      if (showContact) {
        setShowContact(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showContact]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-white px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-6xl font-bold mb-4">Black Knights Portfolio</h2>
          <p className="text-2xl text-gray-400">Creative Developer 17 Years</p>
        </div>
        <div
          ref={aboutRef}
          id="Aboutme"
          className={`text-lg text-gray-300 leading-relaxed transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-shadow-2xs">
            Passionate Full-Stack Developer from Starnberg, Germany, blending AI
            tools like Claude with hands-on coding to build innovative web apps
            that solve real problems. I dive deep into projects every day—from
            sleek user interfaces to secure backends—while balancing my love for various sports like Tennis,Sailing,Judo. As a high school student juggling classes and
            part-time work, I turn ideas into live products through curiosity
            and relentless practice, always aiming for clean, scalable results
            that just work.
          </p>
        </div>

        {/* Contact Me Button */}
        <button
          onClick={() => setShowContact(true)}
          className="mt-8 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105"
        >
          Contact Me
        </button>
      </div>

      {/* Contact Overlay */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-98 z-50 flex items-center justify-center animate-fadeIn px-8">
          <div className="max-w-2xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold text-white mb-8">Kontakt</h1>
            <p className="text-gray-400 mb-12">
              Wenn you want to get in touch, feel free to reach out via email at
            </p>
            <a
              href="mailto:einar@black-knight.dev"
              className="text-2xl text-blue-400 hover:text-blue-300 transition underline"
            >
              einar@black-knight.dev
            </a>
            <p className="text-gray-400 mt-8 mb-4">
              Here&apos;s my{" "}
              <a
                href="https://github.com/endgegnerbert-tech"
                className="text-blue-400 hover:text-blue-300 transition underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              for more insight.
            </p>
            <p className="text-gray-500 mt-4 text-sm">
              I typically respond within 24-48 hours.
            </p>
            </div>
        </div>
      )}
    </section>
  );
}
