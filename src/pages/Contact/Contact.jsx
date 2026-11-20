import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm';
import SeoHead from '../../components/SeoHead/SeoHead';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function Contact() {
  const { t, pick } = useLanguage();
  const quickWaUrl = buildWhatsAppUrl({
    serviceType: 'Contact Desk Enquiry',
    pickupLocation: 'Nashik',
  });

  return (
    <>
      <SeoHead
        title={`${t('pages.contactTitle')} – ${pick(SITE_CONFIG.brandName)}`}
        description={t('pages.contactSub')}
      />

      <section className="page-banner">
        <div className="container-custom">
          <h1 className="display-6 fw-bold mb-2">{t('pages.contactTitle')}</h1>
          <p className="mb-0" style={{ maxWidth: '58ch' }}>
            {t('pages.contactSub')}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-custom">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5 d-flex flex-column gap-4">
              <div className="travel-card p-4">
                <h2 className="h5 fw-bold mb-3">{t('footer.contactDesk')}</h2>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-4 small">
                  <li className="d-flex align-items-start gap-2">
                    <MapPin size={18} style={{ color: '#2196d2' }} className="flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-dark">{pick(SITE_CONFIG.address)}</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <Phone size={18} style={{ color: '#2196d2' }} className="flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-dark">{SITE_CONFIG.displayPhone}</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <Mail size={18} style={{ color: '#2196d2' }} className="flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-dark">{SITE_CONFIG.email}</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <Clock size={18} style={{ color: '#2196d2' }} className="flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-dark">{pick(SITE_CONFIG.businessHours)}</span>
                  </li>
                </ul>

                <a
                  href={quickWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-100 justify-content-center"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>{t('footer.chatWa')}</span>
                </a>
              </div>

              <div className="travel-card p-4 bg-white">
                <h3 className="h6 fw-bold mb-2">
                  {pick({
                    en: 'Nashik Pickup Areas',
                    hi: 'नासिक पिकअप क्षेत्र',
                    mr: 'नाशिक पिकअप क्षेत्रे',
                  })}
                </h3>
                <p className="small text-secondary mb-0">
                  College Road · Gangapur Road · Panchavati · Indira Nagar · Cidco · Nashik Road Station · Ozar Airport
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
