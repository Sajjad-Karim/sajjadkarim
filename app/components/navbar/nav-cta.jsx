import Link from "next/link";
import { cn } from "@/lib/utils";

const ctaBase = [
  "type-button inline-flex items-center justify-center whitespace-nowrap",
  "h-9 px-4 text-body-sm rounded-full",
  "bg-gradient-cta text-primary-foreground",
  "transition-hover focus-ring",
  "hover:brightness-105 hover:shadow-glow-primary",
  "active:scale-[0.98]",
  "disabled:pointer-events-none disabled:opacity-50",
];

function NavCta({ href, label, onClick, className, ...props }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(ctaBase, className)}
      {...props}
    >
      {label}
    </Link>
  );
}

export { NavCta, ctaBase as navCtaStyles };
export default NavCta;
