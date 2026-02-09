const testimonials = [
  {
    name: "Ravi Kumar",
    position: "CTO, NexaTech Solutions (Bengaluru)",
    content:
      "BuildBros delivered our web application with exceptional quality. Their technical expertise and on-time delivery helped us scale faster.",
    avatar: "👨‍💼",
  },
  {
    name: "Priya Sharma",
    position: "Product Manager, FinEdge Systems",
    content:
      "The BuildBros team modernized our fintech dashboard using React and Spring Boot. Communication and execution were excellent.",
    avatar: "👩‍💻",
  },
  {
    name: "Ankit Rao",
    position: "Founder, HealthWave Technologies",
    content:
      "They understood our healthcare vision perfectly and built a secure, scalable, and user-friendly platform.",
    avatar: "👨‍⚕️",
  },
  {
    name: "Sneha Patel",
    position: "CEO, RetailPro Solutions",
    content:
      "BuildBros transformed our legacy system into a modern web application. The UI and performance exceeded expectations.",
    avatar: "👩‍💼",
  },
  {
    name: "Arjun Mehta",
    position: "Startup Founder, CloudNova",
    content:
      "Professional, reliable, and highly skilled. BuildBros feels more like a long-term technology partner than a vendor.",
    avatar: "🚀",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Trusted by Our Clients
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear what our clients say about working with BuildBro Innovations
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-8
                border border-slate-200
                shadow-sm hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-2
              "
            >
              {/* User */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl text-white mr-4">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.position}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6">
                “{item.content}”
              </p>

              {/* Stars */}
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
