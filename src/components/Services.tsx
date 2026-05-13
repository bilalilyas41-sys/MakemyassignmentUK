import { motion } from "motion/react";
import { BookOpen, FileText, Briefcase, GraduationCap, PenTool, Search } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Assignment Help",
      description: "Custom assignments tailored to your specific requirements and university standards.",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Essay Writing",
      description: "Compelling essays with deep research and impeccable structural integrity.",
      icon: PenTool,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Case Study Help",
      description: "In-depth analysis of complex scenarios with practical solutions and insights.",
      icon: FileText,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Coursework Help",
      description: "Full-term coursework assistance to keep you ahead in every subject.",
      icon: GraduationCap,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Thesis Writing",
      description: "Professional dissertation and thesis support from introduction to final conclusion.",
      icon: Search,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "University Help",
      description: "Guidance for complex university projects and specialized technical reports.",
      icon: Briefcase,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            What Services We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We provide a wide range of academic writing services to help you achieve the grades you deserve.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ring-1 ring-slate-100"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <button className="text-sm font-bold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
