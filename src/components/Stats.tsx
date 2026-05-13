import { motion } from "motion/react";

export function Stats() {
  const stats = [
    { label: "Assignments Done", value: "25k+" },
    { label: "Expert Writers", value: "500+" },
    { label: "Happy Students", value: "15k+" },
    { label: "Success Rate", value: "99.8%" },
  ];

  return (
    <section className="bg-indigo-600 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-indigo-100 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
