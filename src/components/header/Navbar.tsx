import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import feurLogo from "../../assets/images/feurLogo.svg";

type MenuItem = {
  id: number;
  label: string;
  primary?: boolean;
};

const menuItems: MenuItem[] = [
  { id: 1, label: "Home" },
  { id: 2, label: "About us" },
  { id: 3, label: "Features" },
  { id: 4, label: "Contact Us" },
  { id: 5, label: "Download App", primary: true },
];

const navItems: MenuItem[] = [
    { id: 1, label: "About Us" },
    { id: 2, label: "Features" },
    { id: 3, label: "Safety" },
    { id: 4, label: "Contact Us" },
  ];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative z-20">
      {/* Top bar */}
      <div className="flex justify-between lg:justify-around items-center px-5 py-2 bg-white w-full">
      <img src={feurLogo} alt="" className="w-8 sm:w-auto"/>
          <ul className="hidden lg:flex lg:gap-12 text-[#2F414F] text-base">
            {navItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className=""
                >
                  {item.label}
                </li>
              );
            })}
          </ul>

          <button className="bg-[#3894A3] text-white px-6 py-2 rounded-[10px] hidden lg:block">Download App</button>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
        >
          <RxHamburgerMenu className="text-[#2F414F] h-6 w-6" />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 transition-opacity duration-200 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      />

      {/* Sliding menu panel from top */}
      <div
        className={`fixed top-0 left-0 right-0 transform transition-transform duration-250 z-30 lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4 bg-white pb-16 shadow-md">
          <div className="flex justify-between items-center mb-4">
           <img src={feurLogo} alt="" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <MdClose className="text-[#2F414F] h-6 w-6" />
            </button>
          </div>

          {/* Menu items with simple stagger */}
          <ul className="space-y-3">
            {menuItems.map((item, i) => {
              const bg = item.primary
                ? "bg-[#3894A3] text-white"
                : "bg-[#F1F9FB] text-[#2F414F]";
              const delay = `${i * 75}ms`; // tweak to speed/slow the stagger

              return (
                <li
                  key={item.id}
                  style={{
                    transition: "opacity 250ms ease, transform 250ms ease",
                    transitionDelay: delay,
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(-6px)",
                  }}
                >
                  <button
                    onClick={() => {
                      // close and do action (navigate) here
                      setOpen(false);
                      // e.g., navigate('/about') if using router
                    }}
                    className={`w-full text-left px-4 py-3 rounded-[14px] ${bg}`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
