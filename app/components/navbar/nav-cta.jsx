import Link from "next/link";
import { cn } from "@/lib/utils";

function NavCta({ href, label, onClick, className, ...props }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("nav-cta focus-ring", className)}
      {...props}
    >
      {label}
    </Link>
  );
}

export default NavCta;
