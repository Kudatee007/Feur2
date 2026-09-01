import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import feurLogo from "../../assets/images/feurLogo.svg";

import { mainNav, mobileNav } from "../../config/navigation";
import { scrollToSection } from "../../utils/scrollToSection";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 2. Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (path: string, sectionId?: string) => {
    setOpen(false);

    // allow close animation to finish
    setTimeout(() => {
      navigate(path);

      if (sectionId) {
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    }, 150);
  };

  return (
    <nav
      className={`
        sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md translate-y-0"
            : "bg-white translate-y-0"
        }
      `}
    >
      {/* Dynamic padding inside top bar to shrink the header when scrolled */}
      <div
        className={`
          flex justify-between lg:justify-around items-center px-5 bg-transparent transition-all duration-300
          ${isScrolled ? "py-2" : "py-4 lg:py-5"}
        `}
      >
        {/* Logo */}
        <NavLink to="/" aria-label="Go to home">
          <img
            src={feurLogo}
            alt="Feur logo"
            className="w-8 sm:w-auto cursor-pointer"
          />
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-8 text-[#2F414F]">
          {mainNav.map((item) => (
            <li key={item.id} className="text-base font-normal">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#3894A3] font-medium"
                    : "hover:text-[#3894A3] transition-colors"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => navigate("/download")}
          className="hidden lg:block bg-[#3894A3] text-white px-6 py-2 rounded-lg"
        >
          Download App
        </button>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden z-50 text-[#2F414F]"
        >
          {open ? <MdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-100 bg-white mt-20">
          {/* Mobile nav items */}
          <ul className="space-y-4 bg-white lg:hidden p-5">
            {mobileNav.map((item) => {
              const isActive = location.pathname === item.path;

              // 🔥 CTA (Download App) — special styling
              if (item.primary) {
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.path)}
                      className="
                        w-full text-left px-6 py-5 rounded-2xl
                        text-lg font-medium
                        bg-[#3894A3] text-white
                        hover:opacity-90
                        active:scale-[0.98]
                        transition-all
                      "
                    >
                      {item.label}
                    </button>
                  </li>
                );
              }

              // Normal nav items
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.path, item.sectionId)}
                    className={`
                      w-full text-left px-6 py-5 rounded-2xl
                      text-lg font-medium
                      transition-all duration-200

                      ${
                        isActive
                          ? "bg-[#F1F9FB] border-2 border-[#3894A3] text-[#2F414F]"
                          : "bg-[#F6FBFC] text-[#2F414F]"
                      }

                      hover:bg-[#EAF6F8]
                      active:scale-[0.98]
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
