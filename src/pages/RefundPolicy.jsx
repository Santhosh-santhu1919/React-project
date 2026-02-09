import React from "react";

export default function RefundPolicy() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
            Refund & Cancellation Policy
          </h1>

          {/* Intro */}
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              This Refund and Cancellation Policy applies to all services
              purchased directly from the official website or authorized
              representatives of{" "}
              <strong>BuildBros Innovations</strong>. Services purchased through
              third-party platforms, resellers, or partners are not eligible for
              refunds or cancellations unless explicitly stated in writing.
            </p>

            <p>
              For any questions, clarifications, or requests related to refunds
              or cancellations, please contact us at{" "}
              <a
                href="mailto:contact@buildbrosinnovations.in"
                className="text-blue-600 font-medium hover:underline"
              >
                contact@buildbrosinnovations.in
              </a>
              . Kindly allow <strong>48–72 working hours</strong> for our team to
              review and respond. You will be notified via email or phone once
              your request is processed.
            </p>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-slate-200"></div>

          {/* Terms */}
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Terms & Conditions
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                All service requests must be accompanied by a valid invoice or
                proof of payment issued by BuildBros Innovations.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>No refunds</strong> will be provided once the project has
                been approved, initiated, or any work has commenced.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Service cancellations are permitted only within{" "}
                <strong>24 hours of payment</strong> and strictly before project
                initiation.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Any advance or milestone payment made toward a project is{" "}
                <strong>non-refundable</strong> once resources, manpower, or
                tools have been allocated.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                In case of project-based services, if a client fails to provide
                required information, approvals, or feedback within the agreed
                timeline, BuildBros Innovations shall not be liable for delays or
                refunds.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                If a project is terminated by the client after commencement, the
                amount paid will be adjusted against work completed, and no
                refund shall be issued for completed or ongoing work.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                BuildBros Innovations reserves the right to cancel a service in
                exceptional cases. In such scenarios, a refund (if applicable)
                will be processed after deducting administrative, operational,
                and service costs.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Refunds, if approved, will be processed within{" "}
                <strong>7–10 business days</strong> and credited to the original
                payment method.
              </span>
            </li>
          </ul>

          {/* Closing */}
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <p className="text-slate-700 font-medium text-center">
              By proceeding with any payment, you acknowledge that you have
              read, understood, and agreed to this Refund & Cancellation Policy
              of BuildBros Innovations. We encourage clients to review all
              service details carefully before making a payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
