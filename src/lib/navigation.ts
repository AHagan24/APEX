export type NavLink = {
  index: string;
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { index: "01", label: "Home", href: "/" },
  { index: "02", label: "Explore", href: "/explore" },
  { index: "03", label: "Customize", href: "/customize" },
  { index: "04", label: "About", href: "/about" },
];
