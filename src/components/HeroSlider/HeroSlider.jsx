import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { IMAGES } from '../../data/images';
import SmartImage from '../SmartImage/SmartImage';

export default function HeroSlider() {
  const { openEnquiryModal } = useEnquiryModal();
  const { t } = useLanguage();

  const [fromLocation, setFromLocation] = useState('Nashik');
  const [goingTo, setGoingTo] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travellers, setTravellers] = useState('4 Travellers');

  const todayIso = new Date().toISOString().split('T')[0];

  const slides = [
    {
      id: 'slide-1',
      image: IMAGES.heroSahyadri,
      alt: 'Scenic Sahyadri mountain highway near Nashik at sunrise',
      kicker: t('hero.slide1Kicker'),
      headline: t('hero.slide1Title'),
    },
    {
      id: 'slide-2',
      image: IMAGES.heroFamilyRoadtrip,
      alt: 'Indian family enjoying a scenic Maharashtra road trip',
      kicker: t('hero.slide2Kicker'),
      headline: t('hero.slide2Title'),
    },
    {
      id: 'slide-3',
      image: IMAGES.mahabaleshwarHills,
      alt: 'Misty Western Ghats valleys in Mahabaleshwar Maharashtra',
      kicker: t('hero.slide3Kicker'),
      headline: t('hero.slide3Title'),
    },
    {
      id: 'slide-4',
      image: IMAGES.fleetInnova,
      alt: 'Clean touring MPV parked along Maharashtra mountain highway',
      kicker: t('hero.slide4Kicker'),
      headline: t('hero.slide4Title'),
    },
  ];

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    openEnquiryModal(
      {
        serviceType: 'Quick Hero Trip Enquiry',
        pickupLocation: fromLocation.trim() || 'Nashik',
        destination: goingTo.trim() || 'Maharashtra Tour',
        travelDate: travelDate || undefined,
        travellers,
      },
      t('hero.planMyTrip'),
    );
  };

  return (
    <section aria-label="Travel Marketplace Hero">
      <div className="hero-slider-wrapper">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4800, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
          className="hero-swiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={slide.id}>
              <SmartImage
                src={slide.image}
                alt={slide.alt}
                className="hero-slide-img"
                eager={idx === 0}
                fallbackLabel={slide.headline}
              />
              <div className="hero-slide-scrim" aria-hidden="true" />
              <div className="container-custom hero-slide-overlay-content">
                <div style={{ maxWidth: 680 }}>
                  <span
                    className="d-block small fw-semibold mb-2"
                    style={{ color: '#FFC928', letterSpacing: '0.03em' }}
                  >
                    {slide.kicker}
                  </span>
                  {idx === 0 ? (
                    <h1 className="display-hero text-white mb-0">{slide.headline}</h1>
                  ) : (
                    <h2 className="display-hero text-white mb-0">{slide.headline}</h2>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Togo Marketplace Floating Search & Enquiry Panel */}
      <div className="container-custom hero-enquiry-dock">
        <div className="hero-enquiry-card">
          <form onSubmit={handleHeroSubmit} className="row g-2 g-md-3 align-items-end">
            <div className="col-sm-6 col-lg-3">
              <label htmlFor="hero-from" className="form-label">
                {t('hero.from')}
              </label>
              <input
                id="hero-from"
                type="text"
                className="form-control"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                placeholder="Nashik"
              />
            </div>

            <div className="col-sm-6 col-lg-3">
              <label htmlFor="hero-going-to" className="form-label">
                {t('hero.goingTo')}
              </label>
              <input
                id="hero-going-to"
                type="text"
                list="hero-dest-suggestions"
                className="form-control"
                value={goingTo}
                onChange={(e) => setGoingTo(e.target.value)}
                placeholder={t('hero.goingToPlaceholder')}
              />
              <datalist id="hero-dest-suggestions">
                <option value="Shirdi & Trimbakeshwar" />
                <option value="Mumbai Airport (CSMIA)" />
                <option value="Pune" />
                <option value="Mahabaleshwar" />
                <option value="Ellora & Ajanta" />
                <option value="Konkan & Ganpatipule" />
                <option value="Lonavala" />
              </datalist>
            </div>

            <div className="col-6 col-lg-2">
              <label htmlFor="hero-date" className="form-label">
                {t('hero.travelDate')}
              </label>
              <input
                id="hero-date"
                type="date"
                className="form-control"
                min={todayIso}
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
              />
            </div>

            <div className="col-6 col-lg-2">
              <label htmlFor="hero-travellers" className="form-label">
                {t('hero.travellers')}
              </label>
              <select
                id="hero-travellers"
                className="form-select"
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
              >
                <option value="1–2 Travellers">1–2</option>
                <option value="3–4 Travellers">3–4</option>
                <option value="4 Travellers">4</option>
                <option value="5–7 Travellers">5–7</option>
                <option value="8–17 Group">8–17</option>
                <option value="20+ Group">20+</option>
              </select>
            </div>

            <div className="col-12 col-lg-2">
              <button type="submit" className="btn-common accent w-100 justify-content-center">
                <span>{t('hero.planMyTrip')}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
