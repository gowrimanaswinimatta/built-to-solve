import Link from "next/link";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/story", label: "Story" },
  { href: "/thinking", label: "Thinking" },
  { href: "/lab", label: "Lab" },
  { href: "/evidence", label: "Evidence" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="navigation">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
