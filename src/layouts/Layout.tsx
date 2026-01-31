import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { siteContent } from "../content/site";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/90 backdrop-blur-sm border-b border-stone-200/50">
        <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo shapes */}
            <div className="relative w-8 h-8">
              <div
                className="absolute inset-0 w-6 h-6"
                style={{
                  background: "#93a5cf",
                  clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
                }}
              />
              <div
                className="absolute top-2 left-2 w-6 h-6"
                style={{
                  background: "#f5b8a8",
                  clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
                  opacity: 0.9,
                }}
              />
            </div>
            <span className="text-lg font-semibold tracking-tight text-stone-800">
              Future Feel
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {siteContent.navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-stone-800 font-medium"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-stone-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 pt-16">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-sm text-stone-500">
                © {new Date().getFullYear()} {siteContent.footer.copyright}
              </p>
              <p className="text-xs text-stone-400 mt-1">
                Products that help people feel better
              </p>
            </div>

            <a
              href={`mailto:${siteContent.footer.email}`}
              className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
            >
              {siteContent.footer.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
