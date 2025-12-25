"use client";

export default function AboutView() {
  return (
    <div className="min-h-full flex flex-col justify-start md:justify-center max-w-3xl animate-fadeIn pt-4 pb-8 md:py-0">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 leading-tight">
        Creative Developer
        <br />
        <span className="text-gray-500">17 Years Old</span>
      </h2>
      <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
        Passionate Full-Stack Developer from Munich, Germany, blending AI tools
        like Claude with hands-on coding to build innovative web apps that solve
        real problems.
      </p>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        I dive deep into projects every day—from sleek user interfaces to secure
        backends—while balancing my love for various sports like Tennis,
        Sailing,. As a high school student juggling classes and part-time work,
        I turn ideas into live products through curiosity and relentless
        practice, always aiming for clean, scalable results that just work.
      </p>
    </div>
  );
}
