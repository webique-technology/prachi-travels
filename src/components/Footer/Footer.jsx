import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { SITE_CONFIG } from "../../config/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import logo from "../../assets/images/prachitravellogo.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, pick } = useLanguage();
  const quickWaUrl = buildWhatsAppUrl({
    serviceType: "General Enquiry",
    pickupLocation: "Nashik",
  });

  return (
    <footer className="site-footer">
      <Container>
        <Row className="g-4 g-lg-5">
          {/* Column 1: Brand Logo, Description & WhatsApp Pill CTA */}
          <Col lg={4} md={6}>
            <Link
              to="/"
              className="footer-brand d-inline-flex align-items-center text-decoration-none mb-3"
            >
              <img src={logo} alt={pick(SITE_CONFIG.brandName)} />
            </Link>

            <p className="footer-desc mb-4">{t("footer.desc")}</p>

            {/* <a
              href={quickWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-btn d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
            >
              <MessageCircle size={17} aria-hidden="true" />
              <span>{t("footer.chatWa")}</span>
            </a> */}
          </Col>

          {/* Column 2: Quick Links with Gold Underline Bar & Chevron Bullets */}
          <Col xs={6} md={6} lg={2}>
            <h3 className="footer-heading">{t("footer.quickLinks")}</h3>
            <ul className="footer-link-list list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link
                  to="/"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t("nav.home")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t("nav.about")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t("nav.services")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/vehicles"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t("nav.vehicles")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t("nav.packages")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t("nav.destinations")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/customize-trip"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t("nav.planYourTrip")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t("nav.contact")}</span>
                </Link>
              </li>
            </ul>
          </Col>

          {/* Column 3: Popular Routes with Gold Underline Bar & Chevron Bullets */}
          <Col xs={6} md={6} lg={3}>
            <h3 className="footer-heading">{t("footer.popularRoutes")}</h3>
            <ul className="footer-link-list list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link
                  to="/vehicles"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Nashik – Mumbai Airport</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Nashik – Trimbakeshwar – Shirdi</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Ashtavinayak &amp; Jyotirlinga</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Ellora &amp; Ajanta Caves</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Mahabaleshwar &amp; Lonavala</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="footer-link-item d-inline-flex align-items-center gap-1"
                >
                  <ChevronRight
                    size={15}
                    className="footer-link-chevron flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Konkan &amp; Ganpatipule</span>
                </Link>
              </li>
            </ul>
          </Col>

          {/* Column 4: Contact Desk with Circular Gold Icon Badges & Social Links */}
          <Col md={6} lg={3}>
            <h3 className="footer-heading">{t("footer.contactDesk")}</h3>
            <ul className="footer-contact-list list-unstyled d-flex flex-column gap-3 mb-3">
              <li className="d-flex align-items-start gap-3">
                <span className="footer-contact-badge d-inline-flex align-items-center justify-content-center flex-shrink-0">
                  <MapPin size={15} aria-hidden="true" />
                </span>
                <span className="footer-contact-text">
                  {pick(SITE_CONFIG.address)}
                </span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="footer-contact-badge d-inline-flex align-items-center justify-content-center flex-shrink-0">
                  <Phone size={15} aria-hidden="true" />
                </span>
                <span className="footer-contact-text">
                  {SITE_CONFIG.displayPhone}
                </span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="footer-contact-badge d-inline-flex align-items-center justify-content-center flex-shrink-0">
                  <Mail size={15} aria-hidden="true" />
                </span>
                <span className="footer-contact-text text-break">
                  {SITE_CONFIG.email}
                </span>
              </li>
              <li className="d-flex align-items-start gap-3">
                <span className="footer-contact-badge d-inline-flex align-items-center justify-content-center flex-shrink-0">
                  <Clock size={15} aria-hidden="true" />
                </span>
                <span className="footer-contact-text">
                  {pick(SITE_CONFIG.businessHours)}
                </span>
              </li>
            </ul>

            <div className="footer-socials d-flex align-items-center gap-2 pt-2">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-link d-inline-flex align-items-center justify-content-center"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-link d-inline-flex align-items-center justify-content-center"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="footer-social-link d-inline-flex align-items-center justify-content-center"
              >
                <Youtube size={16} aria-hidden="true" />
              </a>
            </div>
          </Col>
        </Row>

        <div className="footer-divider d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
          <p className="footer-copyright mb-0">
            &copy; {year} {pick(SITE_CONFIG.brandName)}. {t("footer.copyright")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
