export type NavItem = {
    id: number;
    label: string;
    path: string;
    sectionId?: string; // optional for smooth-scroll
    primary?: boolean;
  };
  
  export const mainNav: NavItem[] = [
    { id: 1, label: "About Us", path: "/about" },
    { id: 2, label: "Features", path: "/features" },
    { id: 3, label: "Safety", path: "/safety" },
    { id: 4, label: "Contact Us", path: "/contact" },
  ];
  
  export const mobileNav: NavItem[] = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About Us", path: "/about" },
    { id: 3, label: "Features", path: "/features" },
    { id: 4, label: "Safety", path: "/safety" },
    { id: 5, label: "Contact Us", path: "/contact" },
    { id: 6, label: "Download App", path: "/download", primary: true },
  ];
  
  export const footerNav: NavItem[] = [
    { id: 1, label: "How It Works", path: "/about" },
    { id: 2, label: "Features", path: "/features" },
    { id: 3, label: "Safety", path: "/safety" },
    { id: 4, label: "Testimonials", path: "/", sectionId: "testimonials" },
  ];
  