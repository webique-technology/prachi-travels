import { Link } from 'react-router-dom';
import {
  Clock,
  Compass,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import SmartImage from '../../components/SmartImage/SmartImage';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { IMAGES } from '../../data/images';

export default function About() {
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();

  const introCopy = pick({
    en: 'Based in Nashik, Maharashtra, we organize family cab rides, airport transfers, spiritual tours, and custom Maharashtra road trips with straightforward WhatsApp coordination.',
    hi: 'नासिक, महाराष्ट्र में स्थित हमारी टीम पारिवारिक कैब यात्राएं, एयरपोर्ट पिकअप, धार्मिक यात्राएं और कस्टम महाराष्ट्र टूर सरल व्हाट्सएप समन्वय के साथ आयोजित करती है।',
    mr: 'नाशिक, महाराष्ट्र येथून आम्ही कौटुंबिक कॅब प्रवास, एअरपोर्ट पिकअप, धार्मिक सहली आणि कस्टम महाराष्ट्र टूर्स सोप्या व्हॉट्सॲप संवादातून आयोजित करतो.',
  });

  const pillars = [
    {
      icon: ShieldCheck,
      title: t('why.comfortableTitle'),
      desc: t('why.comfortableDesc'),
    },
    {
      icon: Clock,
      title: pick({ en: 'Punctual Pickups', hi: 'समय पर पिकअप', mr: 'वेळेवर पिकअप' }),
      desc: pick({
        en: 'Early-morning pickups across Nashik for flights, darshan, and outstation routes.',
        hi: 'फ्लाइट, दर्शन और आउटस्टेशन यात्रा के लिए नासिक में समय पर पिकअप।',
        mr: 'विमानतळ, देवदर्शन व बाहेरगावच्या प्रवासासाठी नाशिकमध्ये वेळेवर पिकअप.',
      }),
    },
    {
      icon: SlidersHorizontal,
      title: t('why.flexibleTitle'),
      desc: t('why.flexibleDesc'),
    },
    {
      icon: Users,
      title: t('why.familyTitle'),
      desc: t('why.familyDesc'),
    },
    {
      icon: HeartHandshake,
      title: pick({ en: 'Upfront Estimates', hi: 'स्पष्ट अनुमान', mr: 'पारदर्शक अंदाज' }),
      desc: pick({
        en: 'Preview indicative rates in our Trip Planner and confirm final fare directly.',
        hi: 'ट्रिप प्लानर में अनुमानित खर्च देखें और सीधे अंतिम दर कन्फर्म करें।',
        mr: 'ट्रिप प्लॅनरमध्ये अंदाजे खर्च पहा आणि अंतिम दर थेट निश्चित करा.',
      }),
    },
    {
      icon: Compass,
      title: t('why.localTitle'),
      desc: t('why.localDesc'),
    },
  ];

  return (
    <>
      <SeoHead
        title={`${t('pages.aboutTitle')} – ${pick(SITE_CONFIG.brandName)}`}
        description={t('pages.aboutSub')}
      />

      <section className="page-banner">
        <div className="container-custom">
          <span className="section-kicker" style={{ color: '#FFC928' }}>
            {SITE_CONFIG.city}, {SITE_CONFIG.state}
          </span>
          <h1 className="display-6 fw-bold mb-2">{t('pages.aboutTitle')}</h1>
          <p className="mb-0" style={{ maxWidth: '58ch' }}>
            {t('pages.aboutSub')}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-custom">
          <div className="travel-card p-4 p-lg-5 mb-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <div className="rounded-3 overflow-hidden border" style={{ aspectRatio: '4 / 3' }}>
                  <SmartImage
                    src={IMAGES.godavariNashik}
                    alt="Godavari riverfront in Nashik"
                    className="w-100 h-100 object-fit-cover"
                    fallbackLabel={pick(SITE_CONFIG.brandName)}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <h2 className="h3 fw-bold mb-3">{pick(SITE_CONFIG.brandName)}</h2>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.7 }}>
                  {introCopy}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/customize-trip" className="btn-yellow">
                    <SlidersHorizontal size={16} aria-hidden="true" />
                    <span>{t('hero.customizeBtn')}</span>
                  </Link>
                  <button
                    type="button"
                    className="btn-whatsapp"
                    onClick={() =>
                      openEnquiryModal(
                        { serviceType: 'About Page Enquiry', pickupLocation: 'Nashik' },
                        t('pages.aboutTitle'),
                      )
                    }
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>{t('cards.enquireNow')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="col-md-6 col-lg-4">
                  <div className="travel-card p-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                      style={{ width: 42, height: 42, backgroundColor: '#eaf5fb', color: '#2196d2' }}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="h6 fw-bold mb-1">{item.title}</h3>
                    <p className="small text-secondary mb-0">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
