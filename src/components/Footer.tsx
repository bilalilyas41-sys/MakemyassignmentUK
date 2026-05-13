import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
                <GraduationCap size={24} />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                MakeMyAssignment<span className="text-indigo-500">.uk</span>
              </span>
            </div>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Premium academic writing services dedicated to student success. Get expert help for your assignments, essays, and theses today.
            </p>
            <div className="mt-8 flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-indigo-600"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg">Services</h3>
            <ul className="mt-6 space-y-4 text-slate-400">
              {["Assignment Writing", "Essay Help", "Dissertation Help", "Coursework Support", "Case Study Analysis", "Review Writing"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-indigo-400">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg">Useful Links</h3>
            <ul className="mt-6 space-y-4 text-slate-400">
              {["About Us", "Our Experts", "Pricing Plans", "Student Reviews", "Order Process", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-indigo-400">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg">Get In Touch</h3>
            <ul className="mt-6 space-y-6 text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                <span>123 Academic Square, London, SE1 7PB, UK</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-indigo-500" />
                <span>+44 7895 757021</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-indigo-500" />
                <span>infoassignments3128@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MakeMyAssignment UK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
