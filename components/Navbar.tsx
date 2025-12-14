import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          RFX
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/manufacturers" className="hover:text-accent">
            Manufacturers
          </Link>
          <Link href="/rfq" className="hover:text-accent">
            Submit RFQ
          </Link>
          <Link href="/coming-soon" className="hover:text-accent">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
