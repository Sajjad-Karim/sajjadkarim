import Link from "next/link";
import { cn } from "@/lib/utils";
import { navSecondaryAction } from "@/config/navigation";
import { platformCredibility } from "@/config/trust-content";

function NavUpwork({ className }) {
  return (
    <Link
      href={navSecondaryAction.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("nav-upwork focus-ring", className)}
      aria-label={`${platformCredibility.upworkBadge} on ${navSecondaryAction.label}`}
    >
      <span className="nav-upwork__badge">{platformCredibility.upworkBadge}</span>
      <span className="nav-upwork__label">{navSecondaryAction.label}</span>
    </Link>
  );
}

export default NavUpwork;
