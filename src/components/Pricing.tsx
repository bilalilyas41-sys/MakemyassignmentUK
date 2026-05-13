import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Standard",
      price: "3.99",
      features: [
        "10+ Days Deadline",
        "UK Native Writers",
        "PhD Qualified Experts",
        "Free Revisions",
        "Turnitin Report Only £4.99",
      ],
      cta: "Order Standard",
      popular: false,
    },
    {
      name: "Premium",
      price: "6.99",
      features: [
        "5 - 9 Days Deadline",
        "Top 100 Writers",
        "Free Turnitin Report",
        "Premium Proofreading",
        "Priority Support",
      ],
      cta: "Order Premium",
      popular: true,
    },
    {
      name: "Urgent",
      price: "9.99",
      features: [
        "24h - 4 Days Deadline",
        "Elite Writing Experts",
        "Free Turnitin Report",
        "Quality Assurance Check",
        "VIP Support 24/7",
      ],
      cta: "Order Urgent",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Professional writing services that fit your budget and deadlines.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 shadow-sm transition-all hover:shadow-2xl ring-1 ring-slate-100 ${
                plan.popular ? "bg-white ring-indigo-500 scale-105 z-10" : "bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-slate-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900 font-display font-black">£{plan.price}</span>
                <span className="text-slate-500 text-sm">/ page</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                    <Check className="h-5 w-5 text-indigo-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-10 w-full rounded-2xl py-4 text-sm font-bold transition-all active:scale-95 ${
                  plan.popular
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700"
                    : "bg-slate-50 text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-100"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
