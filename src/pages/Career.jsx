import { Link } from "react-router-dom";
import internships from "../data/internships";
import Hero from "../components/Hero";
import Meta from "../components/Meta";

const benefits = [
  { icon: "💰", title: "Competitive Stipend", description: "Attractive monthly stipends for interns" },
  { icon: "📚", title: "Learning Opportunity", description: "Hands-on experience with real-world projects" },
  { icon: "💻", title: "Remote / Hybrid Options", description: "Flexible working environment" },
  { icon: "🚀", title: "Career Growth", description: "Chance to convert into a full-time position" },
  { icon: "🤝", title: "Mentorship", description: "Guidance from experienced developers and leads" },
  { icon: "🏆", title: "Certificate & Recognition", description: "Internship completion certificate and project exposure" },
];

const CareersPage = () => {
  return (
    <>
      <Meta
        title="Careers & Internships - BuildBros Innovations"
        description="Explore internship opportunities at BuildBros Innovations and kickstart your tech career."
      />

      <Hero
        title="Join as an Intern"
        subtitle="Kickstart your career with hands-on experience, mentorship, and real-world projects."
      />

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom py-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Intern With Us?
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Learn, grow, and contribute to live projects while developing professional skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black font-semiboldbold">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Roles */}
      <section className="section-padding bg-slate-50 py-10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Available Internship Roles
            </h2>
            <p className="text-2xl font-semibold text-black">
              Choose the internship that matches your interests and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {internships.map((intern) => (
              <Link
                key={intern.slug}
                to={`/careers/${intern.slug}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition border border-slate-100 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-black mb-2">
                  {intern.title}
                </h3>

                <p className="text-shadow-black font-semibold mb-4">{intern.description}</p>

                <div className="text-sm text-slate-900
                font-semibold space-y-1">
                  <span className="block">🕒 Duration: {intern.duration}</span>
                  <span className="block">🌍 Mode: {intern.mode}</span>
                </div>

                <span className="inline-block mt-4 text-primary font-semibold">
                  View Full Description →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Culture & CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Our Culture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Collaborative</h3>
              <p className="text-slate-600">
                Knowledge sharing and teamwork are at our core.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Innovative</h3>
              <p className="text-slate-600">
                We encourage experimentation and creativity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Balanced</h3>
              <p className="text-slate-600">
                Healthy work-life balance matters to us.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-sky-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Don’t See Your Desired Internship?
            </h3>
            <p className="text-slate-600 mb-6">
              We’re always open to passionate learners. Send us your resume!
            </p>
            <a
              href="mailto:buildbrosinnovations@gmail.com"
              className="inline-block border border-b-green-950 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-800 
              bg-black
              transition-shadow"
            >
              Email Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
