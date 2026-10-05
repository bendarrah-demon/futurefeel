import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { siteContent } from "../content/site";
import { Logo } from "../components/Brand";
import { Container } from "../components/ui";
import { FollowForm } from "../components/FollowForm";

// New page: jump straight to the top or to the #anchor. Same page: let in-page links glide.
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  const lastPath = useRef(pathname);
  useEffect(() => {
    const newPage = lastPath.current !== pathname;
    lastPath.current = pathname;
    const behavior: ScrollBehavior = newPage ? "instant" : "smooth";
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
}

export function Layout({ children }: { children: ReactNode }) {
  const { brand, navigation, footer, community, contact } = siteContent;
  const location = useLocation();
  // The menu belongs to the page it was opened on, so it closes itself on navigation.
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const menuOpen = menuFor === location.pathname;
  const setMenuOpen = (open: boolean) => setMenuFor(open ? location.pathname : null);
  useScrollOnNavigate();

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm transition-colors ${isActive ? "bg-ink/5 font-medium text-ink" : "text-text-soft hover:text-ink"}`;

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>

        <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/90 backdrop-blur">
          <Container className="flex h-16 items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2.5 rounded-md" aria-label={`${brand.name} home`}>
              <Logo />
              <span className="text-[17px] font-semibold tracking-tight text-ink">{brand.name}</span>
            </Link>

            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
              <a href="#follow" className="ml-3 inline-flex min-h-10 items-center rounded-full bg-ink px-4 text-sm font-medium text-white hover:bg-text">
                {community.navButton}
              </a>
            </nav>

            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 px-4 text-sm font-medium text-ink lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </Container>

          {menuOpen && (
            <nav id="mobile-menu" aria-label="Main" className="border-t border-line bg-surface lg:hidden">
              <Container className="flex flex-col py-3">
                {navigation.map((item) => (
                  <NavLink key={item.path} to={item.path} className={({ isActive }) => `rounded-lg px-3 py-3 text-base ${isActive ? "font-medium text-ink" : "text-text-soft"}`}>
                    {item.label}
                  </NavLink>
                ))}
                <a href="#follow" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-medium text-white">
                  {community.navButton}
                </a>
              </Container>
            </nav>
          )}
        </header>

        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="mt-24">
          <section id="follow" className="gradient-brand scroll-mt-16">
            <Container className="grid gap-8 py-16 sm:py-20 md:grid-cols-[1.1fr_1fr] md:items-end">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl">{community.title}</h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/80">{community.description}</p>
              </div>
              <FollowForm />
            </Container>
          </section>

          <Container className="grid gap-10 py-12 sm:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <Logo size={24} />
                <span className="font-semibold text-ink">{brand.name}</span>
              </div>
              <p className="mt-3 text-sm text-text-soft">{brand.tagline}</p>
            </div>
            <nav aria-label="Footer">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {footer.links.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-text-soft hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="text-sm text-text-soft">
              <a href={contact.mailto()} className="hover:text-ink">
                {contact.email}
              </a>
              <p className="mt-2">{footer.place}</p>
              <p className="mt-2">© {new Date().getFullYear()} {brand.name}</p>
            </div>
          </Container>
        </footer>
      </div>
    </MotionConfig>
  );
}
