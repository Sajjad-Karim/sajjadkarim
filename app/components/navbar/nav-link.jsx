"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  isActive = false,
  onClick,
  className,
  mobile = false,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "nav-link focus-ring",
        mobile && "nav-link--mobile",
        isActive && "nav-link--active",
        className
      )}
    >
      <span className="nav-link__pill" aria-hidden="true" />
      <span className="nav-link__label">{label}</span>
    </Link>
  );
}

export default NavLink;
