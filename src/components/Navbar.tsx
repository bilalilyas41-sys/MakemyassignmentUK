import { motion } from "motion/react";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <GraduationCap size={24} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900">
              MakeMyAssignment<span className="text-indigo-600">.uk</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4">
                <a 
                  href="https://wa.me/447895757021" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-bold text-green-600 flex items-center gap-1"
                >
                  <Phone size={16} /> +44 7895 757021
                </a>
                <button className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 transition-colors hover:text-indigo-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden bg-white md:hidden"
      >
        <div className="space-y-1 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4 px-3">
            <button className="w-full rounded-lg bg-indigo-600 py-3 text-center text-base font-semibold text-white shadow-lg shadow-indigo-200">
              Order Now
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
