import React from "react";

export default function Terms() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-slate-700 text-lg font-medium">
            Please read carefully before using our services
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10 text-slate-900 leading-relaxed">
          {/* Intro */}
          <p className="font-medium">
            Please read these Terms and Conditions carefully as they form a
            contract between you and{" "}
            <span className="font-semibold text-blue-700">
              BuildBro Innovations
            </span>
            . Your acceptance is agreed from the moment you sign our Hosting
            Agreement, Website Design Agreement, Website Development Agreement,
            SEO Agreement, Support Agreement, or any other software service.
          </p>

          <p className="font-medium">
            We have tried to keep these Terms and Conditions{" "}
            <span className="font-semibold bg-yellow-100 px-1 rounded">
              brief, easy to understand, and straightforward
            </span>
            . If you have any questions, please do not hesitate to contact us.
          </p>

          {/* Terminology */}
          <Section title="Terminology">
            <ul className="list-disc list-inside space-y-2 font-medium">
              <li>
                <span className="font-semibold">You</span> (“The Client”)
              </li>
              <li>
                <span className="font-semibold">Us</span> (
                <span className="text-blue-700 font-semibold">
                  BuildBro Innovations
                </span>
                , hereinafter referred to as “the Company”)
              </li>
              <li>
                <span className="font-semibold">The Project:</span> The body of
                work undertaken, including consultation, design, development,
                SEO, and hosting.
              </li>
            </ul>
          </Section>

          {/* Responsibilities */}
          <Section title="Responsibilities of Both Parties">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  The Client agrees to:
                </h3>
                <ul className="list-disc list-inside space-y-2 font-medium">
                  <li>Provide required text, images, and information on time.</li>
                  <li>Submit content in the specified format.</li>
                  <li>Review work and give feedback promptly.</li>
                  <li>
                    Adhere to <span className="font-semibold">agreed deadlines</span>.
                  </li>
                  <li>Follow the agreed payment schedule.</li>
                  <li>Mark confidential information clearly.</li>
                  <li>Provide one month’s notice for cancellation.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  The Company agrees to:
                </h3>
                <ul className="list-disc list-inside space-y-2 font-medium">
                  <li>Deliver services professionally and on time.</li>
                  <li>Follow agreed project timelines.</li>
                  <li>
                    Provide up to{" "}
                    <span className="font-semibold">two major design revisions</span>.
                  </li>
                  <li>Complete updates within 48 hours where possible.</li>
                  <li>Maintain up-to-date technical knowledge.</li>
                  <li>Discuss renewal options after 12 months.</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Website */}
          <Section title="Website Design & Development">
            <p className="font-medium">
              Websites are built to work across{" "}
              <span className="font-semibold">all major browsers and devices</span>.
              Compatibility with outdated browsers is not guaranteed.
            </p>
            <p className="mt-2 font-medium">
              <span className="font-semibold text-blue-700">
                BuildBro Innovations
              </span>{" "}
              is not responsible for losses resulting from the use of delivered
              software. Clients must test and approve before use.
            </p>
          </Section>

          {/* SEO */}
          <Section title="SEO & Marketing">
            <p className="font-medium">
              SEO services focus on{" "}
              <span className="font-semibold">organic growth</span>. Implementation
              takes 4–6 weeks, and results may take 6–9 months.
            </p>
            <p className="mt-2 font-medium">
              Top rankings are{" "}
              <span className="font-semibold bg-red-100 px-1 rounded">
                not guaranteed
              </span>
              . Applicable service taxes are additional.
            </p>
          </Section>

          {/* Payment */}
          <Section title="Terms of Payment">
            <ul className="list-disc list-inside space-y-2 font-medium">
              <li>Invoices follow the agreed payment schedule.</li>
              <li>
                Payments are due at{" "}
                <span className="font-semibold">the start of each month</span>.
              </li>
              <li>Timely content submission is required.</li>
              <li>FTP and analytics access must be provided.</li>
              <li className="font-semibold text-red-600">
                Cancellation after initiation is non-refundable.
              </li>
            </ul>
          </Section>

          {/* Governing Law */}
          <Section title="Governing Law">
            <p className="font-medium">
              These Terms are governed by{" "}
              <span className="font-semibold">Indian law</span>. Jurisdiction lies
              with courts in{" "}
              <span className="font-semibold">Chennai, India</span>.
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}

/* Reusable Section */
const Section = ({ title, children }) => (
  <div className="border-l-4 border-blue-700 pl-6 space-y-3">
    <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
    {children}
  </div>
);
