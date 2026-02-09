const WhyWeAre = () => {
  const points = [
    {
      title: "Quality-First Development",
      desc: "We follow industry best practices to deliver secure, scalable, and high-performance digital solutions.",
    },
    {
      title: "Client-Centric Approach",
      desc: "Your business goals guide our process, ensuring solutions that align perfectly with your vision.",
    },
    {
      title: "Modern Technologies",
      desc: "We leverage the latest tools and frameworks to build future-ready applications.",
    },
    {
      title: "Reliable & Transparent",
      desc: "Clear communication, realistic timelines, and complete transparency at every stage.",
    },
    {
      title: "Scalable Solutions",
      desc: "Our systems are designed to grow with your business without compromising performance.",
    },
    {
      title: "Dedicated Support",
      desc: "We provide continuous support and maintenance even after project delivery.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">
            Why Choose BuildBros Innovations
          </h2>
          <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed">
            We deliver reliable, scalable, and future-ready digital solutions
            that help businesses grow with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/80 backdrop-blur
                rounded-2xl p-8
                border border-slate-200
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Accent */}
              <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Building Digital Excellence Together
          </h3>
          <p className="max-w-2xl mx-auto text-lg opacity-95">
            Partner with BuildBros Innovations to transform ideas into impactful
            digital experiences that drive real business growth.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyWeAre;
