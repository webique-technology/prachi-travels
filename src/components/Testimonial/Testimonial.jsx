import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { DEMO_TESTIMONIALS } from '../../data/testimonials';

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const { t, pick } = useLanguage();

  const visibleItems = [
    DEMO_TESTIMONIALS[startIndex % DEMO_TESTIMONIALS.length],
    DEMO_TESTIMONIALS[(startIndex + 1) % DEMO_TESTIMONIALS.length],
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + DEMO_TESTIMONIALS.length) % DEMO_TESTIMONIALS.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % DEMO_TESTIMONIALS.length);
  };

  return (
    <div>
      <div className="title-block-mb-50 d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
        <div>
          <span className="section-kicker">{t('sections.testimonialsKicker')}</span>
          <h2 className="section-heading mb-1">{t('sections.testimonialsTitle')}</h2>
          <p className="text-secondary mb-0 small">{t('sections.testimonialsNote')}</p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="btn-outline-navy px-3"
            aria-label="Previous"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="btn-outline-navy px-3"
            aria-label="Next"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="row g-4">
        {visibleItems.map((item) => (
          <div key={item.id} className="col-md-6">
            <article className="travel-card p-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <Quote size={20} style={{ color: '#2196d2' }} aria-hidden="true" />
                <span className="small text-secondary">{t('sections.testimonialsKicker')}</span>
              </div>
              <p className="text-dark mb-4 flex-grow-1" style={{ lineHeight: 1.65 }}>
                “{pick(item.quote)}”
              </p>
              <div className="pt-3 border-top">
                <strong className="d-block text-dark">{item.customerName}</strong>
                <div className="meta-line">
                  <span>{pick(item.city)}</span>
                  <span className="meta-sep" aria-hidden="true">·</span>
                  <span>{pick(item.tripTaken)}</span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
