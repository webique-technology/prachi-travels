import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import whatsappIcon from '../../assets/images/whatsapp.png'

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const quickWaUrl = buildWhatsAppUrl({
    serviceType: 'Trip & Cab Enquiry',
    pickupLocation: 'Nashik',
  });

  return (
    <div className="whatsapp-desktop-float d-none d-lg-block">
      <a
        href={quickWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp btn-whatsapp-circle"
        aria-label={t('mobileNav.whatsapp')}
      >
        {/* <MessageCircle size={18} aria-hidden="true" /> */}
        {/* <span>{t('mobileNav.whatsapp')}</span> */}
        <img src={whatsappIcon} alt="whatsapp-icon" />
      </a>
    </div>
  );
}
