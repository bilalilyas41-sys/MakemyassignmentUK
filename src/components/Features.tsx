import { motion } from "motion/react";
import { Shield, Clock, Users, Zap, CheckCircle, RefreshCcw } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Experienced + Certified",
      description: "Our writers are masters and PhD holders from top UK universities with years of academic writing experience.",
      icon: Users,
    },
    {
      title: "Plagiarism-Free Content",
      description: "Every assignment is written from scratch and checked with Turnitin to ensure 100% original content.",
      icon: Shield,
    },
    {
      title: "24/7 Quality Support",
      description: "Our customer service team is available round the clock to answer your queries and provide updates.",
      icon: Clock,
    },
    {
      title: "Fastest Delivery",
      description: "We respect deadlines. Whether it's 24 hours or 2 weeks, we deliver on time, every time.",
      icon: Zap,
    },
    {
      title: "Guaranteed Confidentiality",
      description: "Your personal information and identity are kept strictly confidential and never shared with third parties.",
      icon: CheckCircle,
    },
    {
      title: "Unlimited Revisions",
      description: "Not satisfied? We offer free revisions until your assignment meets your expectations.",
      icon: RefreshCcw,
    },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                The Prime Source For Academic Success
              </h2>
              <p className="mt-6 text-lg text-slate-400">
                We don't just write assignments; we build your confidence and academic career with precision-crafted content.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Native UK Writers",
                  "Free Plagiarism Report",
                  "Direct Chat with Writer",
                  "Subject-Specific Experts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                >
                  <div className="mb-4 text-indigo-400">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
