import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Compass, SlidersHorizontal, X, Globe, Check } from "lucide-react";
import { SITE_CONFIG } from "../../config/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import { SUPPORTED_LANGUAGES } from "../../i18n/translations";
import { Container, Dropdown } from "react-bootstrap";
import brandLogo from "../../assets/images/prachitravellogo.svg"
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t, pick } = useLanguage();
  const currentLang =
    SUPPORTED_LANGUAGES.find((item) => item.code === lang) ||
    SUPPORTED_LANGUAGES[0];

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/vehicles", label: t("nav.vehicles") },
    { to: "/packages", label: t("nav.packages") },
    { to: "/destinations", label: t("nav.destinations") },
    { to: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <Container className="container-custom">
          <div className="site-header-inner">
            {/* Logo */}
            <Link
              to="/"
              className="brand-wordmark"
              aria-label={pick(SITE_CONFIG.brandName)}
            >
              <img src={brandLogo} alt="Logo" className="img-fluid brand-logo"/>
            </Link>

            {/* Desktop Nav */}
            <nav className="desktop-nav" aria-label="Primary Navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `nav-text-link ${isActive ? "is-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Zone: Language Switcher + Plan Your Trip CTA + Mobile Hamburger */}
            <div className="d-flex align-items-center gap-2 flex-shrink-0">
              <Dropdown className="lang-switcher" align="end">
                <Dropdown.Toggle
                  id="language-switcher-dropdown"
                  className="lang-switcher-toggle"
                  aria-label={`Select language (Current: ${currentLang.fullName})`}
                >
                  <Globe size={14} aria-hidden="true" />
                  <span>{currentLang.label}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="lang-switcher-menu">
                  {SUPPORTED_LANGUAGES.map((item) => {
                    const isActive = lang === item.code;
                    return (
                      <Dropdown.Item
                        key={item.code}
                        as="button"
                        type="button"
                        active={isActive}
                        onClick={() => setLang(item.code)}
                        className={`lang-switcher-item ${isActive ? "is-active" : ""}`}
                        aria-label={item.fullName}
                      >
                        <span className="lang-item-text">
                          <span className="lang-code">{item.label}</span>
                          <span className="lang-name">{item.fullName}</span>
                        </span>
                        {isActive && <Check size={14} aria-hidden="true" />}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>

              <Link
                to="/customize-trip"
                className="btn-common accent pill d-none d-sm-inline-flex"
              >
                <SlidersHorizontal size={15} aria-hidden="true" />
                <span>{t("nav.planYourTrip")}</span>
              </Link>

              <button
                type="button"
                className={`mobile-menu-toggle border-0 ${menuOpen ? "is-open" : ""}`}
                aria-expanded={menuOpen}
                aria-controls="mobile-primary-drawer"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <span className="ham-btn" aria-hidden="true">
                  <span className="ham-span ham-span-1"></span>
                  <span className="ham-span ham-span-2"></span>
                  <span className="ham-span ham-span-3"></span>
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Backdrop & Slide-In Drawer MUST be outside <header> so backdrop-filter doesn't trap fixed positioning */}
      <div
        className={`mobile-drawer-backdrop ${menuOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        id="mobile-primary-drawer"
        className={`mobile-drawer ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-header">
          <Link
            to="/"
            className="brand-wordmark"
            aria-label={pick(SITE_CONFIG.brandName)}
            onClick={() => setMenuOpen(false)}
          >
            <Compass size={26} className="brand-icon" aria-hidden="true" />
            <span>{pick(SITE_CONFIG.shortName)}</span>
          </Link>

          <button
            type="button"
            className="mobile-drawer-close"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile Navigation">
          {navItems.map((item, idx) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              tabIndex={menuOpen ? 0 : -1}
              style={{ transitionDelay: menuOpen ? `${idx * 35}ms` : "0ms" }}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/customize-trip"
            tabIndex={menuOpen ? 0 : -1}
            className="btn-common primary pill mobile-drawer-cta"
            onClick={() => setMenuOpen(false)}
          >
            <SlidersHorizontal size={16} aria-hidden="true" />
            <span>{t("nav.planYourTrip")}</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
