import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Container from "../global/Container";
import Link from "next/link";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="mt-24 pt-16 pb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <Container>
        <h1
          className={`${quicksand.className} text-4xl lg:text-5xl font-extrabold mb-2`}
        >
          bluegeko
        </h1>
        <p className="text-gray-300 mb-4 text-xl">
          Empowering founders through capital, strategy, and investor networks.{" "}
        </p>

        <div className="mb-4">
          <div>
            <div className="text-gray-300 mb-6">
              <p className="flex items-center gap-4">
                <MapPin size={15} />
                <>
                  Dubal - Moon Tower {"("}Head Office{")"}
                </>
              </p>
              <p className="ml-8">Warsaw - Zlotta 44 Business Tower</p>
              <p className="ml-8">Kyiv - Illinsky Business Center</p>
            </div>

            <div className="text-gray-300">
              <div className="flex items-center gap-4">
                <Mail size={15} />
                <>info@bluegeko.com</>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={15} />
                <>+971 52 888 9218</>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-500 mb-6" />
        <div className="flex items-center justify-between">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} All Rights Reserved | Bluegeko FZ LLE
          </p>
          <div>
            <Link
              href={"https://www.linkedin.com/company/withbluegeko/"}
              target="_blank"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
