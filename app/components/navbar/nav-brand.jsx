import Link from "next/link";
import { cn } from "@/lib/utils";

function NavBrand({ className }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex shrink-0 items-center gap-2.5 focus-ring rounded-sm",
        className
      )}
      aria-label="Sajjad Karim — Home"
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform duration-normal ease-out group-hover:scale-125"
        aria-hidden="true"
      />
      <span className="font-display text-lg tracking-tight text-neutral-100 transition-colors duration-normal ease-out group-hover:text-primary sm:text-xl">
        Sajjad Karim
      </span>
    </Link>
  );
}

export default NavBrand;
