import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-indigo-50 opacity-50 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <Star className="h-4 w-4 fill-indigo-700" />
              <span>4.9/5 TrustScore from 10k+ Students</span>
            </div>
            
            <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Assignment Help & Writing Services From <span className="text-indigo-600">Experts</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Get premium quality, plagiarism-free assignments written by UK experts. 
              Boost your academic success with our professional writing assistance starting at just £9.99.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/447895757021" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-green-100 transition-all hover:bg-green-700"
              >
                WhatsApp Us <ArrowRight size={20} />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700">
                Order Now
              </button>
            </div>
            
            <p className="mt-4 text-sm font-medium text-slate-500">
              * Free Turnitin Plagiarism Report with every assignment.
            </p>
            
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "Plagiarism Free",
                "24/7 Support",
                "On-time Delivery",
                "Expert Writers",
                "Free Revisions",
                "Confidentiality",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="aspect-[4/3] w-full max-w-xl rounded-3xl bg-indigo-100 p-4 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240715640-69143501abe7?auto=format&fit=crop&q=80&w=1200"
                alt="Student studying"
                className="h-full w-full rounded-2xl object-cover shadow-inner"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:-left-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i + 10}`}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                      alt="Reviewer"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 font-display">Fast Delivery</p>
                  <p className="text-xs text-slate-500">Average turn-around: 6h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
