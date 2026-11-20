import { Link } from 'react-router-dom';
import { Clock, Compass, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, pick } = useLanguage();
  const quickWaUrl = buildWhatsAppUrl({
    serviceType: 'General Enquiry',
    pickupLocation: 'Nashik',
  });

  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-4">
            <Link
              to="/"
              className="footer-brand d-inline-flex align-items-center gap-2 text-decoration-none fs-4 fw-bold font-display mb-3"
            >
              <Compass size={24} style={{ color: '#FFC928' }} aria-hidden="true" />
              <span>{pick(SITE_CONFIG.brandName)}</span>
            </Link>
            <p className="mb-3 small" style={{ maxWidth: '38ch', lineHeight: 1.65 }}>
              {t('footer.desc')}
            </p>
            <a href={quickWaUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={17} aria-hidden="true" />
              <span>{t('footer.chatWa')}</span>
            </a>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="fs-6 fw-semibold mb-3">{t('footer.quickLinks')}</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/services">{t('nav.services')}</Link></li>
              <li><Link to="/vehicles">{t('nav.vehicles')}</Link></li>
              <li><Link to="/packages">{t('nav.packages')}</Link></li>
              <li><Link to="/destinations">{t('nav.destinations')}</Link></li>
              <li><Link to="/customize-trip">{t('nav.planYourTrip')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <h3 className="fs-6 fw-semibold mb-3">{t('footer.popularRoutes')}</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
              <li><Link to="/vehicles">Nashik – Mumbai Airport</Link></li>
              <li><Link to="/packages">Nashik – Trimbakeshwar – Shirdi</Link></li>
              <li><Link to="/packages">Ashtavinayak &amp; Jyotirlinga</Link></li>
              <li><Link to="/packages">Ellora &amp; Ajanta Caves</Link></li>
              <li><Link to="/destinations">Mahabaleshwar &amp; Lonavala</Link></li>
              <li><Link to="/destinations">Konkan &amp; Ganpatipule</Link></li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <h3 className="fs-6 fw-semibold mb-3">{t('footer.contactDesk')}</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 small mb-3">
              <li className="d-flex align-items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{pick(SITE_CONFIG.address)}</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{SITE_CONFIG.displayPhone}</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{SITE_CONFIG.email}</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <Clock size={16} className="flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{pick(SITE_CONFIG.businessHours)}</span>
              </li>
            </ul>
            <div className="d-flex gap-3 small">
              <a href={SITE_CONFIG.socialLinks.instagram}>Instagram</a>
              <span aria-hidden="true">·</span>
              <a href={SITE_CONFIG.socialLinks.facebook}>Facebook</a>
              <span aria-hidden="true">·</span>
              <a href={SITE_CONFIG.socialLinks.youtube}>YouTube</a>
            </div>
          </div>
        </div>

        <div className="footer-divider d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 small">
          <p className="mb-0">
            &copy; {year} {pick(SITE_CONFIG.brandName)}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
