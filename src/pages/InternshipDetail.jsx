import { useParams, useNavigate } from "react-router-dom";
import internships from "../data/internships";

const InternshipDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const internship = internships.find((job) => job.slug === slug);

  if (!internship) {
    return (
      <div className="text-center py-32 text-xl font-semibold">
        Job not found
      </div>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-primary font-semibold mb-6 hover:underline"
        >
          ← Back to Careers
        </button>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900">
          {internship.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-slate-600 mb-10">
          <span className="bg-slate-100 px-4 py-2 rounded-full text-black font-medium">
            🕒 {internship.duration}
          </span>
          <span className="bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-black">
            🌍 {internship.mode}
          </span>
        </div>

        {/* Responsibilities */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">
            Responsibilities
          </h2>
          <ul className="space-y-3 text-slate-900 font-medium">
            {internship.responsibilities.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">
            What We’re Looking For
          </h2>
          <ul className="space-y-3 text-slate-900 font-medium">
            {internship.requirements.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Perks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">
            Perks & Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internship.perks.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-700 font-medium"
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:buildbrosinnovations@gmail.com"
            className="inline-block bg-primary text-white bg-black px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
          >
            Apply Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default InternshipDetail;
