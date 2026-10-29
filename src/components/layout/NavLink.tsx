"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type NavLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

// Client Component: only the browser knows the current URL. Active styling is
// done in CSS via `aria-[current=page]:` so the a11y state and visuals can't drift.
export default function NavLink({ href, className = "", children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // The Navbar persists across routes, so close the mobile <details> menu
  // ourselves after navigating.
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
