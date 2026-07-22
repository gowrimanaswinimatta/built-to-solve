import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-emerald-500 text-black hover:bg-emerald-400"
          : "border border-zinc-700 hover:border-zinc-500"
      )}
    >
      {children}
    </Link>
  );
}
