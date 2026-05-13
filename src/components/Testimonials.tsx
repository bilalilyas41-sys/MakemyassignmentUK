import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Business Student",
      content: "The assignment was perfectly written and delivered 2 days before the deadline. Got an A! Truly grateful for the help.",
      rating: 5,
    },
    {
      name: "Mark Thompson",
      role: "Engineering Student",
      content: "Complex engineering tasks are hard, but these experts handled it with ease. Plagiarism report was clean. Highly recommend.",
      rating: 5,
    },
    {
      name: "Emily White",
      role: "Law Student",
      content: "Professional, fast, and very responsive. They followed all my specific university requirements perfectly.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Trusted by over 15,000 students across the UK for high-quality academic writing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
            >
              <div className="absolute top-6 right-8 text-indigo-100">
                <Quote size={40} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="relative z-10 text-lg italic text-slate-700 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={`https://i.pravatar.cc/150?u=${testimonial.name}`}
                  className="h-12 w-12 rounded-full object-cover"
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-display font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
