import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { PACKAGE_CATEGORIES } from '../../data/packages';
import SmartImage from '../SmartImage/SmartImage';

export default function PackageCard({ pkg }) {
  const [expanded, setExpanded] = useState(false);
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();

  const title = pick(pkg.title);
  const catObj = PACKAGE_CATEGORIES.find((c) => c.id === pkg.category);
  const categoryLabel = catObj ? pick(catObj.label) : pkg.category;

  return (
    <article className="travel-card">
      <div className="travel-card-media">
        <SmartImage src={pkg.image} alt={pkg.imageAlt} fallbackLabel={title} />
      </div>

      <div className="travel-card-body">
        <div className="meta-line mb-1">
          <span>{categoryLabel}</span>
          <span className="meta-sep" aria-hidden="true">·</span>
          <span className="tabular-num">{pick(pkg.duration)}</span>
        </div>

        <h3 className="h5 fw-bold mb-2">{title}</h3>

        <p className="small text-secondary mb-2">
          <strong className="text-dark">{t('cards.placesCovered')}:</strong> {pkg.placesCovered.join(', ')}
        </p>

        <ul className="small text-secondary ps-3 mb-3 flex-grow-1">
          {pick(pkg.highlights).map((item) => (
            <li key={item} className="mb-1">
              {item}
            </li>
          ))}
        </ul>

        <div className="pt-2 border-top mb-3">
          <span className="d-block small text-secondary">{t('cards.indicativeFare')}</span>
          <span className="price-figure fs-5">{pick(pkg.indicativePrice)}</span>
        </div>

        {expanded && (
          <div className="package-details-drawer">
            <div className="mb-2">
              <strong className="text-dark d-block mb-1">{t('cards.inclusions')}:</strong>
              <ul className="ps-3 mb-0 text-secondary">
                {pick(pkg.inclusions).map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong className="text-dark d-block mb-1">{t('cards.exclusions')}:</strong>
              <ul className="ps-3 mb-0 text-secondary">
                {pick(pkg.exclusions).map((exc) => (
                  <li key={exc}>{exc}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="d-flex flex-wrap gap-2 mt-2">
          <button
            type="button"
            className="btn-common accent pill flex-grow-1 justify-content-center"
            onClick={() =>
              openEnquiryModal(
                {
                  serviceType: 'Tour Package Enquiry',
                  packageName: pkg.title.en,
                  pickupLocation: 'Nashik',
                  destination: pkg.placesCovered.slice(0, 4).join(', '),
                  days: pkg.durationDays,
                  estimatedSummary: pkg.indicativePrice.en,
                },
                title,
              )
            }
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>{t('cards.enquireNow')}</span>
          </button>

          <button
            type="button"
            className="btn-common light pill"
            aria-expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <span>{expanded ? t('cards.less') : t('cards.details')}</span>
            {expanded ? (
              <ChevronUp size={15} aria-hidden="true" />
            ) : (
              <ChevronDown size={15} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
