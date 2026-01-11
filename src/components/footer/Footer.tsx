import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#263745] text-white px-4 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.svg"
                alt="Feur logo"
                className="h-8 w-auto"
              />
            </div>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Hire a driver, anytime, anywhere. Africa’s premier platform
              connecting car owners with professional, verified drivers on
              demand.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[#2F8F9D] flex items-center justify-center hover:opacity-90 transition"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {[
                "How It Works",
                "Features",
                "Safety",
                "Testimonials",
                "Download App",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2F8F9D]" />
                support@feur.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2F8F9D]" />
                +234 707 622 048
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#2F8F9D]" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6">
          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>© 2025 Feur. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Driver Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;