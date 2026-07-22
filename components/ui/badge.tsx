interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-xs uppercase tracking-widest text-zinc-400">
      {children}
    </div>
  );
}
