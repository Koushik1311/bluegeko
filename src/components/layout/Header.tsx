import Container from "../global/Container";
import { MoveRight } from "lucide-react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-xs">
      <Container className="py-3 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className={`${quicksand.className} text-3xl font-extrabold`}>
            bluegeko
          </h1>
        </div>

        {/* Let's talk */}
        <div>
          <button className="inline-flex gap-1 items-center rounded-lg border px-5 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-blue-100 bg-blue-50 text-blue-700 border-blue-200 text-sm cursor-pointer">
            <span>Let&apos;s Talk</span>
            <MoveRight size={14} />
          </button>
        </div>
      </Container>
    </div>
  );
}
