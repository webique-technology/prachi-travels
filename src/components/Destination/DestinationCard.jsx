import { MessageCircle } from 'lucide-react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { DESTINATION_CATEGORIES } from '../../data/destinations';
import SmartImage from '../SmartImage/SmartImage';

export default function DestinationCard({ destination }) {
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();

  const name = pick(destination.name);
  const catObj = DESTINATION_CATEGORIES.find((c) => c.id === destination.category);
  const categoryLabel = catObj ? pick(catObj.label) : destination.category;

  return (
    <article className="travel-card">
      <div className="travel-card-media">
        <SmartImage src={destination.image} alt={destination.imageAlt} fallbackLabel={name} />
      </div>

      <div className="travel-card-body">
        <div className="meta-line mb-1">
          <span>{categoryLabel}</span>
          <span className="meta-sep" aria-hidden="true">·</span>
          <span className="tabular-num">{pick(destination.distanceFromNashik)}</span>
        </div>

        <h3 className="h5 fw-bold mb-1">{name}</h3>
        <p className="small text-secondary mb-3 flex-grow-1">{pick(destination.shortDesc)}</p>

        <div className="small text-secondary mb-3 pt-2 border-top">
          {t('cards.bestTime')}: {pick(destination.bestTime)}
        </div>

        <button
          type="button"
          className="btn-common accent pill w-100 justify-content-center"
          onClick={() =>
            openEnquiryModal(
              {
                serviceType: 'Destination Trip Enquiry',
                pickupLocation: 'Nashik',
                destination: destination.name.en,
              },
              name,
            )
          }
        >
          <MessageCircle size={16} aria-hidden="true" />
          <span>{t('cards.enquireNow')}</span>
        </button>
      </div>
    </article>
  );
}
