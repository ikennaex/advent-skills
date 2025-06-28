import {
  Search,
  MessageCircle,
  Handshake,
  HelpCircle,
} from "lucide-react";

export default function ForClients() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">For Clients / Employers</h2>
        <p className="text-lg text-gray-500">How It Works: Simple 3-Step Process</p>
      </div>

      {/* 3-Step Process */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Browse Candidates</h3>
          <p className="text-sm text-gray-600">
            Look through our list and choose the domestic staff that suits your needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 bg-green-100 text-green-600 rounded-full mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Contact via WhatsApp</h3>
          <p className="text-sm text-gray-600">
            Reach out to us directly through WhatsApp to inquire and discuss details.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 bg-yellow-100 text-yellow-600 rounded-full mb-4">
            <Handshake className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Finalize Placement</h3>
          <p className="text-sm text-gray-600">
            Agree on terms and finalize the hire — quick, safe, and straightforward.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">FAQs for Employers</h3>
        <div className="space-y-6">
          {[
            {
              question: "How do I know the staff is trustworthy?",
              answer:
                "We verify every candidate through background checks, references, and interviews.",
            },
            {
              question: "Do I have to pay before talking to someone?",
              answer:
                "No. You can speak with us first via WhatsApp and only pay if you decide to proceed.",
            },
            {
              question: "Can I request a replacement?",
              answer:
                "Yes. We offer one free replacement within the first 14 days of placement.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <h4 className="font-medium text-gray-800 flex items-center gap-2 mb-1">
                <HelpCircle className="w-5 h-5 text-indigo-600" /> {faq.question}
              </h4>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
