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
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-xs">
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
          <button className="h-9 px-5 bg-blue-600 text-white rounded-md text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-blue-700 transition-colors">
            <span>Let&apos;s Talk</span>
            <MoveRight size={14} />
          </button>
        </div>
      </Container>
    </div>
  );
}
