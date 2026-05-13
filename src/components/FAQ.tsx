import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const faqs = [
    {
      question: "Is your assignment help service plagiarism-free?",
      answer: "Yes, 100%. We guarantee that every assignment is written from scratch, and we provide a free Turnitin plagiarism report with every order to prove its originality.",
    },
    {
      question: "Can I talk to my writer directly?",
      answer: "Absolutely! Our platform allows direct communication with your assigned expert so you can provide additional details or check the progress of your task.",
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer: "We offer unlimited free revisions. If the final work doesn't meet your initial requirements, we will revise it until you are completely satisfied.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer: "We take your privacy very seriously. All personal data is encrypted, and we never share your identity or order details with anyone, including the writers.",
    },
    {
      question: "Which subjects do you cover?",
      answer: "We have experts covering over 100+ subjects including Law, Nursing, Engineering, Business, Finance, Computer Science, and many more.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about our expert writing services.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-display font-bold text-slate-900">{faq.question}</span>
                <span className="ml-6 text-indigo-600">
                  {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={activeIndex === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden px-6"
              >
                <p className="pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
