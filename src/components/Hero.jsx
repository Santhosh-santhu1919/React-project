import { Link } from "react-router-dom";

const Hero = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
}) => {
  return (
    // ✅ FIX 1: prevent horizontal scroll on mobile
    <section className="relative pt-20 lg:pt-32 pb-20 overflow-x-hidden text-white py-1 ">
      
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-slate-800 -z-10" />

      {/* Optional Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 -z-10 opacity-20">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover pt-20"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Decorative Blobs */}
      {/* ✅ FIX 2: blobs safely inside viewport */}
      <div className="absolute top-24 left-4 sm:left-10 w-60 sm:w-72 h-60 sm:h-72 bg-primary/30 rounded-full blur-3xl opacity-60 animate-blob" />
      <div className="absolute bottom-24 right-4 sm:right-10 w-60 sm:w-72 h-60 sm:h-72 bg-secondary/30 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000" />

      {/* Content */}
      {/* ✅ FIX 3: add mobile padding instead of container-custom only */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* ✅ FIX 4: break-words safety */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight break-words">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto break-words">
            {subtitle}
          </p>

          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaPrimary && (
                <Link
                  to={ctaPrimary.link}
                  className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow"
                >
                  {ctaPrimary.text}
                </Link>
              )}

              {ctaSecondary && (
                <Link
                  to={ctaSecondary.link}
                  className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition"
                >
                  {ctaSecondary.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
