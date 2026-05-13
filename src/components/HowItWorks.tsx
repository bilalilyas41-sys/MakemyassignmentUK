import { motion } from "motion/react";
import { ClipboardList, UserCheck, FileEdit, Download } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Place Your Order",
      description: "Fill in the order form with all your assignment details and requirements.",
      icon: ClipboardList,
    },
    {
      title: "Assign a Writer",
      description: "We choose the best subject-specific expert to handle your assignment.",
      icon: UserCheck,
    },
    {
      title: "Writing Process",
      description: "Our writer researches and drafts your assignment from scratch.",
      icon: FileEdit,
    },
    {
      title: "Download Result",
      description: "Receive your high-quality assignment and a free plagiarism report.",
      icon: Download,
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Getting expert help has never been easier. Follow these 4 simple steps.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connector line (desktop) */}
          <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-slate-100 lg:block" />
          
          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-slate-100 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-white transition-transform group-hover:scale-110">
                    <step.icon size={28} />
                  </div>
                </div>
                <div className="mt-8">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Step {i + 1}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 active:scale-95">
            Start Your Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
