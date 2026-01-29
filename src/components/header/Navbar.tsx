import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import feurLogo from "../../assets/images/feurLogo.svg";

import { mainNav, mobileNav } from "../../config/navigation";
import { scrollToSection } from "../../utils/scrollToSection";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="relative z-50">
      {/* Top bar */}
      <div className="flex justify-between lg:justify-around items-center px-5 py-3 bg-white shadow-sm">
        {/* Logo */}
        <NavLink to="/" aria-label="Go to home">
          <img
            src={feurLogo}
            alt="Feur logo"
            className="w-8 sm:w-auto cursor-pointer"
          />
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-12 text-[#2F414F]">
          {mainNav.map((item) => (
            <li key={item.id}>
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="lg:hidden"
        >
          <RxHamburgerMenu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white p-5">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <img src={feurLogo} alt="Feur logo" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <MdClose size={24} />
            </button>
          </div>

          {/* Mobile nav items */}
          <ul className="space-y-4">
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
                    onClick={() =>
                      handleNav(item.path, item.sectionId)
                    }
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

export default Navbar;
