import { label, path } from "framer-motion/client";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", path: "/about" },
      { label:"Customer Onbarding", path:"/onboarding"},
      { label:"Terms&Consitions", path:"/Terms"},
      {label:"RefundPolicy", path:"/refundpolicy"},
      { label: "Careers", path: "/careers" },
      { label: "Contact", path: "/contact" },
    ],
    Services: [
      {
        label: "Custom Software Development",
        path: "/services/custom-software",
      },
      {
        label: "Web Development",
        path: "/services/web-development",
      },
      {
        label: "Mobile App Development",
        path: "/services/mobile-apps",
      },
      {
        label: "Cloud Solutions",
        path: "/services/cloud-solutions",
      },
    ],
    Resources: [
      { label: "portfolio", path: "/project" },
      { label: "Industries", path: "/industries" },
      { label: "Case Studies", path: "/project" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom px-4 sm:px-6 lg:px-0 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 px-5">
            <img
              src="/logo.jpg"
              alt="BuildBros Innovations"
              className="h-16 mb-4"
            />

            <p className="text-sm text-slate-400 max-w-sm mb-6">
              Building innovative digital solutions that transform businesses
              and drive growth through cutting-edge technology.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/buildbrosinnovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/buildbrosinnovations"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="px-5" >
              <h3 className="text-white font-semibold mb-4 ">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} BuildBros Innovations. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
