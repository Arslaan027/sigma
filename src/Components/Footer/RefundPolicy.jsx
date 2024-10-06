import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container mx-auto p-5 border-2 rounded-xl py-5 my-5">
      <h1 className="text-xl font-bold mb-4">Refund Policy</h1>
      <hr className="border-t border-gray-300 mb-5" />

      <p className="mb-4 text-xs">
        Thank you for choosing Sigma Solutions Pvt. Ltd. ("Company", "us", "we",
        or "our"). Please read our refund policy carefully before making any
        purchases or using our services.
      </p>
      <p className="mb-4 text-xs">
        By making a purchase from us, you agree to comply with and be bound by
        this refund policy.
      </p>

      <h2 className="text-md font-semibold mb-2">Refund Eligibility</h2>
      <hr className="border-t border-gray-300 mb-5" />
      <p className="mb-4 text-xs">
        To be eligible for a refund, the following conditions must be met:
      </p>
      <ul className="list-disc list-inside mb-4 text-xs">
        <li>
          The request for a refund must be made within 30 days of the purchase
          date.
        </li>
        <li>The service must not have been fully utilized.</li>
        <li>
          Proof of purchase is required (e.g., receipt or order confirmation).
        </li>
      </ul>

      <h2 className="text-md font-semibold mb-2">How to Request a Refund</h2>
      <hr className="border-t border-gray-300 mb-5" />
      <p className="mb-4 text-xs">
        To initiate a refund request, please contact our customer service team
        at:
        <a
          href="mailto:support@sigmasolutions.in"
          className="text-blue-500 underline"
        >
          {" "}
          support@sigmasolutions.in
        </a>
        . Provide your order number and reason for the refund request.
      </p>

      <h2 className="text-md font-semibold mb-2">Refund Process</h2>
      <hr className="border-t border-gray-300 mb-5" />
      <p className="mb-4 text-xs">
        Once your refund request is received, we will evaluate your request and
        notify you of the approval or rejection of your refund. If approved,
        your refund will be processed and a credit will automatically be applied
        to your original payment method.
      </p>

      <h2 className="text-md font-semibold mb-2">Non-Refundable Items</h2>
      <hr className="border-t border-gray-300 mb-5" />
      <p className="mb-4 text-xs">
        Certain services or products are non-refundable, including but not
        limited to:
      </p>
      <ul className="list-disc list-inside mb-4 text-xs">
        <li>Any services rendered fully or partially.</li>
        <li>Digital products once accessed or downloaded.</li>
      </ul>

      <h2 className="text-md font-semibold mb-2">Changes to This Policy</h2>
      <hr className="border-t border-gray-300 mb-5" />
      <p className="mb-4 text-xs">
        We may update our refund policy from time to time. Any changes will be
        posted on this page, and you are advised to review this policy
        periodically for any updates.
      </p>

      <h2 className="text-md font-semibold mb-2">Contact Us</h2>
      <hr className="border-t border-gray-300 mb-5" />
      <p className="mb-4 text-xs">
        If you have any questions about our refund policy, please contact us:
      </p>
      <ul className="mb-4 text-xs">
        <li>
          Email:{" "}
          <a
            href="mailto:support@sigmasolutions.in"
            className="text-blue-500 underline"
          >
            support@sigmasolutions.in
          </a>
        </li>
        <li>Phone: +91 123 456 7890</li>
      </ul>
    </div>
  );
};

export default RefundPolicy;
