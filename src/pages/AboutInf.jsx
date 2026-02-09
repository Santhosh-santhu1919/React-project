import Hero from "../components/Hero";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const values = [
  {
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.",
  },
  {
    title: "Client Partnership",
    description:
      "Your success is our success. We work as an extension of your team, invested in your long-term growth.",
  },
  {
    title: "Quality Obsessed",
    description:
      "We maintain the highest standards in code quality, security, and user experience on every project.",
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, honest feedback, and clear timelines. No surprises, just results.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Meta
        title="About Us - BuildBros Innovations"
        description="Learn about BuildBros Innovations, our values, and commitment to delivering exceptional digital solutions."
      />

      {/* HERO */}
      <Hero
        title="About BuildBros Innovations"
        subtitle="A team of passionate developers, designers, and strategists building future-ready digital solutions."
      />

      {/* COMPANY STORY */}
      <section className="py-24 bg-black text-slate-300">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-8"
          >
            Our Story
          </motion.h2>

          <div className="space-y-1 text-3xl leading-relaxed">
            <p>
              Founded in <span className="text-sky-400 font-semibold">2025</span>, BuildBros Innovations started with a simple mission: to help businesses leverage technology to achieve their goals. What began as a small team of developers has grown into a full-service digital agency serving clients across the globe.
            </p>

            <p>
              We've successfully completed over 10 projects for startups and growing companies across multiple industries. Our passionate team combines technical expertise with creativity to deliver innovative, scalable, and user-focused digital solutions.
            </p>

            <p>
              With <span className="text-sky-400 font-semibold">10+ successful projects</span>,
              we continue to build long-term partnerships by focusing on
              performance, reliability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These principles guide how we work, build, and deliver excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-sky-500 transition"
              >
                <h3 className="text-2xl font-semibold text-sky-400 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-sky-100 mb-10">
            We’re always looking for talented people who love technology,
            problem-solving, and innovation.
          </p>

          <Link
            to="/career"
            className="inline-block px-10 py-4 bg-black text-white font-semibold rounded-xl hover:bg-slate-900 transition shadow-lg"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
