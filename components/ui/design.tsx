import Link from "next/link";
import type { ReactNode } from "react";
type ClassValue = string | false | null | undefined;

const cx = (...classes: ClassValue[]) => classes.filter(Boolean).join(" ");

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cx("py-20 sm:py-28", className)}>{children}</section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-300">
      {children}
    </p>
  );
}

export function Heading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <>{eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}</>
      <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      {text ? (
        <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-lg leading-8 text-zinc-400">{text}</p>
      ) : null}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#05070b]",
        variant === "primary"
          ? "bg-emerald-400 text-zinc-950 hover:bg-emerald-300"
          : "border border-white/15 bg-white/[0.03] text-white hover:border-emerald-300/60",
      )}
    >
      {children}
    </Link>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
      <div className="text-4xl font-semibold tracking-tight text-white">
        {value}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </div>
    </div>
  );
}

export function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}
