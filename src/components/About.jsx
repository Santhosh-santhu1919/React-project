import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    // ✅ FIX 1: prevent any horizontal scroll
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* ✅ FIX 2: break-words safety */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 sm:mb-6 break-words">
            About <span className="text-primary">BuildBro Innovations</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold max-w-3xl mx-auto text-black">
            We are a technology-driven startup delivering modern, scalable,
            and high-performance digital solutions.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600">
            Our Story
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-black">
            BuildBro Innovations was founded to help startups and businesses
            build strong digital products using modern technologies,
            clean architecture, and intuitive design.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-black">
            From idea to deployment, we work closely with clients to transform
            concepts into impactful digital experiences.
          </p>

          {/* ✅ FIX 3: overflow-hidden for blur background */}
          <div className="relative max-w-2xl mx-auto mt-6 sm:mt-10">
            {/* Soft Glow */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-sky-200 rounded-full blur-3xl opacity-40"></div>

            <div className="
    relative
    bg-white/80 backdrop-blur-md
    border border-sky-200
    p-6 sm:p-10
    rounded-2xl
    shadow-lg
  ">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
                What Drives Us
              </h3>

              <p className="text-base sm:text-xl font-semibold text-slate-700">
                Innovation • Quality • Growth • Long-term Partnerships
              </p>
            </div>
          </div>

        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto"
        >
          {/* Mission */}
          <div className="
    bg-white
    border border-sky-200
    p-6 sm:p-10
    rounded-2xl
    shadow-md hover:shadow-xl
    transition
  ">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-4">
              Our Mission
            </h3>

            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700">
              To build reliable, scalable, and user-focused digital solutions
              that empower businesses to grow in the digital world.
            </p>
          </div>

          {/* Vision */}
          <div className="
    bg-white
    border border-sky-200
    p-6 sm:p-10
    rounded-2xl
    shadow-md hover:shadow-xl
    transition
  ">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-4">
              Our Vision
            </h3>

            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700">
              To become a trusted technology partner by delivering
              high-quality digital products worldwide.
            </p>
          </div>
        </motion.div>


        {/* Stats */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // ✅ FIX 4: small mobile padding safety
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center max-w-6xl mx-auto mt-6 sm:mt-12 px-2 sm:px-0"
        >
          {[
            { label: "Projects Delivered", value: "10+" },
            { label: "Technologies Used", value: "8+" },
            { label: "Client Satisfaction", value: "90%" },
            { label: "Years of Learning", value: "2+" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-blue-300 to-blue-600 p-4 sm:p-6 rounded-xl shadow-md"
            >
              <h4 className="text-2xl sm:text-4xl font-extrabold text-white">
                {item.value}
              </h4>
              <p className="text-white mt-1 sm:mt-2 font-semibold text-sm sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div> */}

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-6 sm:mt-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600 mb-2 sm:mb-4 break-words">
            Let’s Build Something Great
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-black">
            Partner with BuildBro Innovations to turn ideas into powerful digital solutions.
          </p>
          <Link to="/contact">
            <button className="bg-primary text-black px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold border-2 hover:bg-blue-700 transition shadow-lg">
              Contact Us
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
