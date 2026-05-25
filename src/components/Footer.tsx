import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
                ✦
              </div>
              <span className="font-bold text-white">YourName</span>
            </div>
            <p className="text-white/30 text-xs">Developer & Creator</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/40 justify-center">
            <button
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-white/80 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-white/80 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById("servers")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-white/80 transition-colors"
            >
              Servers
            </button>
            <Link href="/links" className="hover:text-white/80 transition-colors">
              Links
            </Link>
          </nav>

          {/* Copy */}
          <p className="text-white/25 text-xs text-center">
            © {new Date().getFullYear()} YourName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
