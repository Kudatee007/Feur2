import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { footerNav } from "../../config/navigation";
import { scrollToSection } from "../../utils/scrollToSection";
import feurLogo from "../../assets/images/feurLogo.svg";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleFooterNav = (path: string, sectionId?: string) => {
    navigate(path);

    if (sectionId) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <footer className="bg-[#2F414F] text-white px-4 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Go to home">
              <img
                src={feurLogo}
                alt="Feur logo"
                className="h-[48px] w-[36px] mb-4"
              />
            </Link>

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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#2F8F9D] flex items-center justify-center hover:opacity-90 transition"
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
              {footerNav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      handleFooterNav(item.path, item.sectionId)
                    }
                    className="hover:text-white transition text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a
                  href="mailto:support@feur.com"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Mail className="w-4 h-4 text-[#2F8F9D]" />
                  support@feur.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+234707622048"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Phone className="w-4 h-4 text-[#2F8F9D]" />
                  +234 707 622 048
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#2F8F9D]" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2025 Feur. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/driver-terms">Driver Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
