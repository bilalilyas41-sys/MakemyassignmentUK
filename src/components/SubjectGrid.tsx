import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function SubjectGrid() {
  const niches = [
    {
      category: "Business & Management",
      subs: ["Business", "Accounting", "Finance", "Auditing", "Business Law", "Taxation and Law", "Company Law", "HRM", "BSBLDR", "BSBOP", "BSPROJECTS"],
    },
    {
      category: "IT & Computer Science",
      subs: ["Programming", "Gaming", "Web Development", "App Development (iOS/Android)", "Machine Learning", "MATLAB", "Python", "Simulator", "Games", "Database", "SAP"],
    },
    {
      category: "Engineering & Science",
      subs: ["Engineering", "Physics", "Chemistry", "Maths", "Medical", "Nursing"],
    },
    {
      category: "Humanities & Others",
      subs: ["Law", "English", "History", "Geography", "Media Science", "Diploma Assignments", "TAELED", "Online Quizzes", "Exams"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Expertise Across All Subjects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our professional academic writers deal in all subject areas. No matter how complex, we've got you covered.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100"
            >
              <h3 className="font-display text-xl font-bold text-indigo-600 mb-6 underline decoration-indigo-200 underline-offset-8">
                {niche.category}
              </h3>
              <ul className="space-y-3">
                {niche.subs.map((sub) => (
                  <li key={sub} className="flex items-start gap-2 text-slate-700 group">
                    <CheckCircle2 size={16} className="mt-1 text-green-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-medium leading-tight">{sub}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 rounded-3xl bg-indigo-600 p-8 text-center text-white lg:p-12 shadow-2xl shadow-indigo-200">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">Ready to get your professional assignment?</h3>
          <p className="mt-4 text-indigo-100 text-lg">
            Forward us your task details via WhatsApp or Call for an instant quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/447895757021" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-600 transition-all hover:bg-slate-50"
            >
              WhatsApp: +44 7895 757021
            </a>
            <a 
              href="mailto:infoassignments3128@gmail.com" 
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
            >
              Email: infoassignments3128@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
