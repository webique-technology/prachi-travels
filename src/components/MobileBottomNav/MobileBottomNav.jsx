import { Link } from 'react-router-dom';
import { Car, MessageCircle, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function MobileBottomNav() {
  const { t } = useLanguage();
  const quickWaUrl = buildWhatsAppUrl({
    serviceType: 'Quick WhatsApp Chat',
    pickupLocation: 'Nashik',
  });

  return (
    <nav className="mobile-bottom-nav d-lg-none" aria-label="Mobile Quick Navigation">
      <a
        href={quickWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bottom-nav-item is-whatsapp"
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>{t('mobileNav.whatsapp')}</span>
      </a>

      <Link to="/customize-trip" className="mobile-bottom-nav-item is-customize">
        <SlidersHorizontal size={18} aria-hidden="true" />
        <span>{t('mobileNav.customize')}</span>
      </Link>

      <Link to="/vehicles" className="mobile-bottom-nav-item is-cars">
        <Car size={18} aria-hidden="true" />
        <span>{t('mobileNav.cars')}</span>
      </Link>
    </nav>
  );
}
