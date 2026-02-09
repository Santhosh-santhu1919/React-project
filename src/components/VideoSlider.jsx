import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const contents = [
  {
    title: "Modern Web Solutions",
    desc: "We build scalable and high-performance web applications.",
  },
  {
    title: "UI / UX Focused Design",
    desc: "Clean, intuitive interfaces that users love.",
  },
  {
    title: "Startup Growth & MVPs",
    desc: "Helping startups launch and scale faster.",
  },
];

const VideoContentHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % contents.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[50vh] w-full overflow-x-hidden">

      {/* Background Video */}
      <video
        src="https://www.pexels.com/download/video/3130284/"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      {/* ✅ FIX 2: responsive horizontal padding */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center text-blue-100 relative overflow-hidden">

          {contents.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === current
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10 absolute inset-0"
              }`}
            >
              {/* ✅ FIX 3: break-words for long text */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 break-words">
                {item.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 break-words">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Fixed Bottom Button */}
      {/* ✅ FIX 4: safe centering on small screens */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 px-4">
        <Link to="/contact">
          <button
            className="
              bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold
              hover:bg-blue-700 transition shadow-lg border border-white/40
            "
          >
            Get Started
          </button>
        </Link>
      </div>

    </section>
  );
};

export default VideoContentHero;
