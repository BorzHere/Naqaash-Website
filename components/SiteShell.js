import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconSprite from "../content/IconSprite";

const navItems = [
  ["About", "/about", "about"],
  ["Our Work", "/our-work", "our-work"],
  ["Economic Empowerment", "/economic-empowerment", "economic"],
  ["Climate Resilience", "/climate-resilience", "climate"],
  ["ESG & Export", "/esg-export-readiness", "esg"],
  ["Impact", "/impact", "impact"],
  ["Get Involved", "/get-involved", "involved"],
  ["Contact", "/contact", "contact"],
];

export default function SiteShell({ children }) {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleInternalNavigation(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    const anchor = event.target.closest?.("a");
    if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

    const url = new URL(anchor.href, window.location.href);
    if (
      url.origin !== window.location.origin ||
      (url.pathname === pathname && url.search === search)
    ) return;

    event.preventDefault();
    navigate(`${url.pathname}${url.search}${url.hash}`);
  }

  return (
    <div onClick={handleInternalNavigation}>
      <IconSprite />
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-surface focus:text-ink focus:p-3" href="#main">
        Skip to content
      </a>
      <header className="site">
        <div className="wrap nav">
          <a className="brand" href="/" aria-label="Naqaash Foundation home">
            <span className="logo" aria-hidden="true" />
            <span className="brand-name">
              Naqaash
              <small>Foundation · Est. 2020</small>
            </span>
          </a>
          <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
            {navItems.map(([label, href, key]) => (
              <li key={key}>
                <a
                  href={href}
                  data-nav={key}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a className="btn btn-brand nav-cta" href="/get-involved">Donate</a>
            <button
              className="menu-btn"
              id="menuBtn"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="navLinks"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                {menuOpen ? (
                  <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <a className="brand" href="/" aria-label="Naqaash Foundation home">
                <span className="logo" aria-hidden="true" />
                <span className="brand-name">
                  Naqaash
                  <small>Foundation · Est. 2020</small>
                </span>
              </a>
              <p>A non-profit working with women across Pakistan on economic empowerment, climate resilience and sustainable enterprise.</p>
            </div>
            <div>
              <h4>Our work</h4>
              <ul>
                {navItems.slice(1, 6).map(([label, href]) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Organisation</h4>
              <ul>
                <li><a href="/about">About us</a></li>
                <li><a href="/about">Leadership</a></li>
                <li><a href="/get-involved">Get involved</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Follow</h4>
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=61560872367491" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/naqaash_foundation" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Naqaash Foundation · Est. 2020</span>
            <span>112F Model Town, Lahore, Pakistan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
