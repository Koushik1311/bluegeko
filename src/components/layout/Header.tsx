import Link from "next/link";
import Container from "../global/Container";
import { MoveRight } from "lucide-react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  { label: "Investors", href: "#investors" },
  { label: "Startups", href: "#startups" },
  { label: "Our Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Let's Talk", href: "#contact" },
];

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-sm border-b border-gray-200 shadow-xs">
      <Container className="py-3 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-xl">bluegeko</h1>
        </div>

        {/* Links */}
        <div className="text-gray-600 text-sm font-medium flex items-center gap-4">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Let's talk */}
        <div>
          <button className="inline-flex gap-1 items-center rounded-full border px-4 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-blue-100 bg-blue-50 text-blue-700 border-blue-200 text-sm cursor-pointer">
            <span>Let&apos;s Talk</span>
            <MoveRight size={14} />
          </button>
        </div>
      </Container>
    </div>
  );
}
