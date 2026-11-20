import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { FOOD_OPTIONS, STAY_OPTIONS } from '../../data/pricing';
import { formatInr } from '../../utils/tripCalculator';
import PriceBreakdown from '../PriceBreakdown/PriceBreakdown';

export default function TripSummary({
  trip,
  startDate,
  returnDate,
  vehicleName,
  breakdown,
  onSendEnquiry,
}) {
  const { t, pick } = useLanguage();

  const stayObj = STAY_OPTIONS.find((s) => s.id === trip.stayPreference);
  const foodObj = FOOD_OPTIONS.find((f) => f.id === trip.foodPreference);

  const totalTravellers = `${trip.adults}A${trip.children > 0 ? ` · ${trip.children}C` : ''}${
    trip.infants > 0 ? ` · ${trip.infants}I` : ''
  }`;

  return (
    <aside
      className="planner-step-block sticky-calculator-panel"
      aria-label={t('planner.summaryTitle')}
    >
      <h2 className="h5 fw-bold mb-3">{t('planner.summaryTitle')}</h2>

      <dl className="row g-2 small mb-3">
        <dt className="col-5 text-secondary fw-normal">{t('planner.route')}</dt>
        <dd className="col-7 fw-semibold text-dark mb-1">
          {trip.startLocation || 'Nashik'} &rarr; {trip.destination || '—'}
        </dd>

        {trip.extraDestinations.length > 0 && (
          <>
            <dt className="col-5 text-secondary fw-normal">{t('planner.stops')}</dt>
            <dd className="col-7 text-dark mb-1">{trip.extraDestinations.join(', ')}</dd>
          </>
        )}

        <dt className="col-5 text-secondary fw-normal">{t('planner.tripType')}</dt>
        <dd className="col-7 text-dark mb-1">
          {trip.tripDirection} ({trip.days} {t('planner.days')})
        </dd>

        {startDate && (
          <>
            <dt className="col-5 text-secondary fw-normal">{t('planner.dates')}</dt>
            <dd className="col-7 text-dark mb-1 tabular-num">
              {startDate}
              {returnDate && trip.tripDirection !== 'One Way' ? ` → ${returnDate}` : ''}
            </dd>
          </>
        )}

        <dt className="col-5 text-secondary fw-normal">{t('hero.travellers')}</dt>
        <dd className="col-7 text-dark mb-1 tabular-num">{totalTravellers}</dd>

        <dt className="col-5 text-secondary fw-normal">{t('planner.vehicle')}</dt>
        <dd className="col-7 fw-semibold text-dark mb-1">{vehicleName}</dd>

        <dt className="col-5 text-secondary fw-normal">{t('planner.stayFood')}</dt>
        <dd className="col-7 text-dark mb-0">
          {stayObj ? pick(stayObj.label) : trip.stayPreference} ·{' '}
          {foodObj ? pick(foodObj.label) : trip.foodPreference}
        </dd>
      </dl>

      <PriceBreakdown breakdown={breakdown} vehicleName={vehicleName} />

      <button
        type="button"
        onClick={onSendEnquiry}
        className="btn-yellow w-100 justify-content-center mt-3"
      >
        <MessageCircle size={17} aria-hidden="true" />
        <span>{t('planner.sendEnquiry')}</span>
      </button>

      <p className="small text-secondary mt-2 mb-0" style={{ lineHeight: 1.5 }}>
        {t('planner.disclaimer')}
      </p>

      {/* Mobile Sticky Bottom Estimate Bar */}
      <div className="planner-mobile-sticky-summary d-lg-none">
        <div>
          <span className="d-block" style={{ fontSize: '0.7rem', opacity: 0.85 }}>
            {t('planner.mobileApprox')} ({trip.days}D)
          </span>
          <strong className="tabular-num fs-6" style={{ color: '#FFC928' }}>
            {breakdown.totalEstimate !== null
              ? formatInr(breakdown.totalEstimate)
              : t('planner.quoteOnRequest')}
          </strong>
        </div>
        <button
          type="button"
          onClick={onSendEnquiry}
          className="btn-yellow"
          style={{ minHeight: 40, padding: '0.45rem 0.9rem', fontSize: '0.84rem' }}
        >
          <span>{t('cards.enquireNow')}</span>
        </button>
      </div>
    </aside>
  );
}
