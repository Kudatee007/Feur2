import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import feurLogo from "../../assets/images/feurLogo.svg";

import { mainNav, mobileNav } from "../../config/navigation";
import { scrollToSection } from "../../utils/scrollToSection";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (path: string, sectionId?: string) => {
    navigate(path);

    if (sectionId) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <nav className="relative z-20">
      {/* Top bar */}
      <div className="flex justify-between lg:justify-around items-center px-5 py-2 bg-white">
        <NavLink to="/">
          <img src={feurLogo} alt="Feur logo" className="w-8 sm:w-auto" />
        </NavLink>

        <ul className="hidden lg:flex gap-12 text-[#2F414F]">
          {mainNav.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#3894A3] font-medium"
                    : "hover:text-[#3894A3]"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/download")}
          className="hidden lg:block bg-[#3894A3] text-white px-6 py-2 rounded-lg"
        >
          Download App
        </button>

        <button onClick={() => setOpen(true)} className="lg:hidden">
          <RxHamburgerMenu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-white z-30 p-4">
          <div className="flex justify-between mb-6">
            <img src={feurLogo} alt="Feur logo" />
            <button onClick={() => setOpen(false)}>
              <MdClose size={24} />
            </button>
          </div>

          <ul className="space-y-3">
            {mobileNav.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.path, item.sectionId)}
                  className={`w-full text-left px-4 py-3 rounded-xl ${
                    item.primary
                      ? "bg-[#3894A3] text-white"
                      : "bg-[#F1F9FB]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
