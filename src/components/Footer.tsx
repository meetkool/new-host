import { Facebook, Instagram, Linkedin, Youtube, Twitter, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { BRANDING } from '@/config/branding';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo /> 
              {/* Note: Logo component might need adjustment for dark mode if it has dark text. 
                  Assuming Logo handles it or we wrap it. 
                  If Logo is text-based, we might need to force white color.
              */}
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed pr-4">
              {BRANDING.name} was created for IIT-JEE aspirants to provide an ideal launch pad for serious JEE aspirants. 
              Along the way to realization of this vision, we went beyond merely coaching for IIT-JEE. We actually started 
              to make a difference in the way students think and approach problems.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              {[Facebook, Twitter, Youtube, Instagram, Linkedin, Globe].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#C62828] transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="space-y-3 text-sm text-gray-400">
              <h4 className="text-white font-bold uppercase tracking-wider mb-2">Address</h4>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-[#C62828]" />
                <p>{BRANDING.contact.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-[#C62828]" />
                <p>{BRANDING.contact.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-[#C62828]" />
                <p>{BRANDING.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Centers</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Hostels</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Download Centres</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: About & Other */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">About Us</h4>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Chairman's Message</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Why {BRANDING.name}?</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">{BRANDING.name} Results</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Alumni Network</a></li>
            </ul>

            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Other Verticals</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">myPAT</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">e-School</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Global Schools</a></li>
            </ul>
          </div>

          {/* Column 4: Exams */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">{BRANDING.name} Exams</h4>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Talent Reward Exam</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Big Bang Edge Test</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Escape Velocity Test</a></li>
            </ul>

            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Target Exams</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">JEE Advanced</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">JEE Main</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">Olympiads</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">NTSE</a></li>
              <li><a href="#" className="hover:text-[#FFD600] transition-colors">KVPY</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Footer: Programs List (Divider) */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-[#FFD600] font-bold uppercase tracking-wider mb-4 text-xs">Classroom Programs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Little Genie One Year Foundation Program (Class VI)</a>
            <a href="#" className="hover:text-white">Udaya Two Year Classroom Program (Class VII)</a>
            <a href="#" className="hover:text-white">Four Year Classroom Program for JEE Advanced (Class IX)</a>
            <a href="#" className="hover:text-white">Three Year Classroom Program for JEE Advanced (Class X)</a>
            <a href="#" className="hover:text-white">Two Year Classroom Program for JEE Advanced (Class XI)</a>
            <a href="#" className="hover:text-white">One Year Classroom Program for JEE Advanced (Class XII)</a>
            <a href="#" className="hover:text-white">Special Weekend Classroom Program</a>
            <a href="#" className="hover:text-white">Crash Courses for JEE Main & Advanced</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-[#FFD600] font-bold uppercase tracking-wider mb-4 text-xs">Integrated Programs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white">SUPREME Four Year Integrated School Program</a>
            <a href="#" className="hover:text-white">RAMANUJAN Four Year Integrated Program</a>
            <a href="#" className="hover:text-white">PINNACLE Two Year Integrated School Program</a>
            <a href="#" className="hover:text-white">PANINI Two Year Integrated Program</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-[#FFD600] font-bold uppercase tracking-wider mb-4 text-xs">Non-Classroom Programs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Junior Rankers Study Material</a>
            <a href="#" className="hover:text-white">Rankers Study Material (RSM)</a>
            <a href="#" className="hover:text-white">All India Test Series (AITS)</a>
            <a href="#" className="hover:text-white">Grand Masters Package (GMP)</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} {BRANDING.name} Limited. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy & Other Info</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
