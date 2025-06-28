import { ShieldCheck, BadgeCheck, UserSearch, RefreshCw, Star } from "lucide-react";

const reasons = [
  {
    title: "Thorough Screening",
    description:
      "Every candidate goes through strict background checks and interviews.",
    icon: ShieldCheck,
  },
  {
    title: "Verified Credentials",
    description:
      "We verify previous employment, references, and identities.",
    icon: BadgeCheck,
  },
  {
    title: "Tailored Matching",
    description:
      "We listen to your needs and match you with the right staff.",
    icon: UserSearch,
  },
  {
    title: "Post-Placement Support",
    description:
      "We follow up to ensure satisfaction and offer replacements if needed.",
    icon: RefreshCw,
  },
  {
    title: "Professionalism Guaranteed",
    description:
      "From the first call to placement, we deliver with excellence.",
    icon: Star,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-6 py-16 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
        <p className="text-lg text-gray-500">Your Peace of Mind is Our Priority</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{reason.title}</h4>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-700 text-base">
          We don’t just recruit we care about building long-term, respectful working relationships in your home.
        </p>
      </div>
    </section>
  );
}
