import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "./components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  );
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-8">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-semibold tracking-tight"
          >
            HE<span className="text-muted-foreground">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-background border-l border-border shadow-xl transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Menu
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDrawerOpen(false)}
              className="rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <nav className="flex flex-col px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="py-4 text-lg font-light border-b border-border/40 hover:text-foreground text-muted-foreground transition-colors"
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="mt-6 self-start rounded-full"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </nav>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Henok Dagne
          </p>
        </div>
      </footer>
    </div>
  );
}
