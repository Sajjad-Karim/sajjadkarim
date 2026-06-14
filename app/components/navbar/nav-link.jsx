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
        "group relative focus-ring rounded-sm",
        mobile
          ? "block py-3 text-heading-sm text-neutral-200"
          : "px-3 py-2 text-body-sm text-neutral-400",
        "transition-hover",
        isActive ? "text-primary" : "hover:text-neutral-100",
        className
      )}
    >
      <span className="relative z-10">{label}</span>
      {!mobile && (
        <span
          className={cn(
            "absolute bottom-1 left-3 right-3 h-px origin-center scale-x-0 bg-primary transition-transform duration-normal ease-out group-hover:scale-x-100",
            isActive && "scale-x-100"
          )}
          aria-hidden="true"
        />
      )}
      {mobile && isActive && (
        <span
          className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full bg-primary"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

export default NavLink;
