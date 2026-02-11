import { label, path } from "framer-motion/client";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", path: "/about" },
      { label: "Customer Onbarding", path: "/onboarding" },
      { label: "Terms&Consitions", path: "/Terms" },
      { label: "RefundPolicy", path: "/refundpolicy" },
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
            <div className="flex gap-4 items-center">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/buildbrosinnovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/buildbrosinnovations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-primary transition"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.773 8.205 11.387.6.111.82-.26.82-.577 0-.285-.011-1.04-.016-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.998.108-.774.42-1.304.763-1.604-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.528.117-3.183 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.004-.404c1.019.005 2.045.138 3.003.404 2.292-1.552 3.299-1.23 3.299-1.23.655 1.655.243 2.88.12 3.183.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.922.43.37.823 1.103.823 2.222 0 1.606-.015 2.901-.015 3.293 0 .32.216.694.825.576C20.565 22.27 24 17.785 24 12.5 24 5.87 18.63.5 12 .5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/buildbrosinnovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-primary transition"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919606199017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-green-500 transition"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.18 1.6 6.01L0 24l6.17-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.9 11.9 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.07-1.39l-.36-.21-3.66.96.98-3.57-.23-.37A9.97 9.97 0 1112 22zm5.17-7.36c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.5-.07-.14-.61-1.47-.83-2.01-.22-.53-.44-.46-.61-.46-.16 0-.35-.02-.53-.02-.18 0-.46.07-.7.35-.25.28-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.92 4.62 4.1.65.28 1.15.45 1.54.58.65.21 1.25.18 1.72.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                </svg>
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
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-slate-400">
            ©   2025 BuildBros Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
