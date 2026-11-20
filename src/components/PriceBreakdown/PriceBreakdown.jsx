import { useLanguage } from '../../context/LanguageContext';
import { formatInr } from '../../utils/tripCalculator';

export default function PriceBreakdown({ breakdown, vehicleName }) {
  const { t } = useLanguage();

  return (
    <div className="p-3 rounded-3 border bg-light">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className="small fw-bold text-dark">{t('planner.breakdownTitle')}</span>
        {breakdown.estimatedKm !== null && (
          <span className="small text-secondary tabular-num">~{breakdown.estimatedKm} km</span>
        )}
      </div>

      <div className="d-flex flex-column gap-2 small">
        <div className="d-flex justify-content-between">
          <span className="text-secondary">
            {t('planner.vehicle')} ({vehicleName})
          </span>
          <span className="fw-semibold text-dark tabular-num">
            {breakdown.vehicleAmount !== null
              ? formatInr(breakdown.vehicleAmount)
              : t('planner.quoteOnRequest')}
          </span>
        </div>

        <div className="d-flex justify-content-between">
          <span className="text-secondary">
            {t('planner.hotel')}{' '}
            {breakdown.roomsRequired > 0 ? `(${breakdown.roomsRequired}×${breakdown.nights}N)` : ''}
          </span>
          <span className="fw-semibold text-dark tabular-num">
            {breakdown.hotelAmount > 0 ? formatInr(breakdown.hotelAmount) : t('planner.notSelected')}
          </span>
        </div>

        <div className="d-flex justify-content-between">
          <span className="text-secondary">{t('planner.meals')}</span>
          <span className="fw-semibold text-dark tabular-num">
            {breakdown.mealsAmount > 0 ? formatInr(breakdown.mealsAmount) : t('planner.notSelected')}
          </span>
        </div>

        <div className="d-flex justify-content-between">
          <span className="text-secondary">{t('planner.other')}</span>
          <span className="fw-semibold text-dark tabular-num">
            {breakdown.otherAmount > 0 ? formatInr(breakdown.otherAmount) : t('planner.includedNa')}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-baseline pt-2 mt-1 border-top">
          <span className="fw-bold text-dark">{t('planner.estimatedTotal')}</span>
          <span className="price-figure fs-4">
            {breakdown.totalEstimate !== null
              ? formatInr(breakdown.totalEstimate)
              : t('planner.quoteOnRequest')}
          </span>
        </div>
      </div>

      {breakdown.isQuoteOnRequest && breakdown.quoteReason && (
        <p className="small text-secondary mt-2 mb-0">{breakdown.quoteReason}</p>
      )}
    </div>
  );
}
