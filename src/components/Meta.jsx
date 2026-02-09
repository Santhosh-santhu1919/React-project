import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Meta = ({
  title = "BuildBros Innovations - Custom Software & Digital Solutions",
  description = "Transform your business with cutting-edge software development, web and mobile applications, and digital innovation services from BuildBros Innovations.",
  image = "/og-image.jpg",
  type = "website",
}) => {
  const location = useLocation();
  const url = `https://buildbrosinnovations.com${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (attr, value) => {
      let tag =
        document.querySelector(`meta[name="${attr}"]`) ||
        document.querySelector(`meta[property="${attr}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr.startsWith("og") ? "property" : "name", attr);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", value);
    };

    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:image", image);
    setMeta("og:url", url);
    setMeta("og:type", type);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // JSON-LD
    let script = document.querySelector(
      'script[type="application/ld+json"]'
    );

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BuildBros Innovations",
      url: "https://buildbrosinnovations.com",
      logo: "https://buildbrosinnovations.com/logo.svg",
      description,
      sameAs: [
        "https://www.linkedin.com/company/buildbrosinnovations",
        "https://github.com/buildbrosinnovations",
      ],
    });
  }, [title, description, image, url, type]);

  return null;
};

export default Meta;
