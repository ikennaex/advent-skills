import {
  ClipboardList,
  BadgeCheck,
  ArrowRightLeft,
  GraduationCap,
  HelpCircle,
} from "lucide-react";

export default function ForWorkers() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">For Domestic Workers</h2>
        <p className="text-lg text-gray-500">
          Start your journey toward safe, verified employment.
        </p>
      </div>

      {/* Application Form CTA */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ready to Apply?</h3>
        <p className="text-gray-600 mb-6">
          Register as a job seeker by filling our simple application form.
        </p>
        <a
          href="/worker-application"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Fill Application Form
        </a>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Eligibility */}
        <div className="flex gap-4 items-start animate-fade-in-up">
          <div className="p-4 bg-pink-100 text-pink-600 rounded-full">
            <BadgeCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Eligibility Criteria</h4>
            <p className="text-sm text-gray-600">
              Must be 18+, possess a valid ID, and provide references or previous work records.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="flex gap-4 items-start animate-fade-in-up delay-100">
          <div className="p-4 bg-green-100 text-green-600 rounded-full">
            <ArrowRightLeft className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">How It Works</h4>
            <p className="text-sm text-gray-600">
              After applying, you'll be screened and matched with employers based on your skills and availability.
            </p>
          </div>
        </div>

        {/* Training */}
        <div className="flex gap-4 items-start animate-fade-in-up delay-200">
          <div className="p-4 bg-yellow-100 text-yellow-600 rounded-full">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Training Opportunities</h4>
            <p className="text-sm text-gray-600">
              We offer training in areas like hygiene, child care, and professionalism to help you succeed.
            </p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="flex gap-4 items-start animate-fade-in-up delay-300">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
            <ClipboardList className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">What’s Expected</h4>
            <p className="text-sm text-gray-600">
              We expect honesty, punctuality, cleanliness, and respectful behavior from all placed workers.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">FAQs for Workers</h3>
        <div className="space-y-6">
          {[
            {
              question: "Do I have to pay to apply?",
              answer: "No. Registration is free. Fees only apply after you're successfully placed.",
            },
            {
              question: "Do I need experience?",
              answer: "Experience is preferred, but we welcome first-timers and provide training.",
            },
            {
              question: "Will I be safe in the job placement?",
              answer:
                "Yes. We verify all clients and ensure a safe, respectful working environment for our workers.",
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
