import Link from "next/link";
import { cn } from "@/lib/utils";

function NavBrand({ className }) {
  return (
    <Link
      href="/"
      className={cn("nav-brand focus-ring", className)}
      aria-label="Sajjad Karim — Home"
    >
      <span className="nav-brand__mark" aria-hidden="true">
        <span className="nav-brand__monogram">SK</span>
        <span className="nav-brand__pulse" />
      </span>
      <span className="nav-brand__copy">
        <span className="nav-brand__name">Sajjad Karim</span>
        <span className="nav-brand__role">Product Engineer</span>
      </span>
    </Link>
  );
}

export default NavBrand;
