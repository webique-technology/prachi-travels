import { useMemo, useState } from 'react';
import { Check, Plus, X } from 'lucide-react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  DESTINATION_DISTANCES_FROM_NASHIK,
  FOOD_OPTIONS,
  SIGHTSEEING_SUGGESTIONS,
  STAY_OPTIONS,
  VEHICLE_PRICING,
} from '../../data/pricing';
import { VEHICLES } from '../../data/vehicles';
import { calculateTripEstimate, formatInr } from '../../utils/tripCalculator';
import SmartImage from '../SmartImage/SmartImage';
import TripSummary from '../TripSummary/TripSummary';

const DEST_OPTIONS = Object.keys(DESTINATION_DISTANCES_FROM_NASHIK);

export default function TripPlanner() {
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();

  const [startLocation, setStartLocation] = useState('Nashik');
  const [destination, setDestination] = useState('Shirdi');
  const [extraStopInput, setExtraStopInput] = useState('');
  const [extraDestinations, setExtraDestinations] = useState([]);
  const [tripDirection, setTripDirection] = useState('Round Trip');
  const [startDate, setStartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [days, setDays] = useState(2);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);

  const [vehicleCategory, setVehicleCategory] = useState('Sedan');
  const [stayPreference, setStayPreference] = useState('No Hotel Required');
  const [foodPreference, setFoodPreference] = useState('No Meals');

  const [includeSightseeing, setIncludeSightseeing] = useState(true);
  const [sightseeingPlaces, setSightseeingPlaces] = useState(['temple']);

  const [pickupTime, setPickupTime] = useState('7:00 AM');
  const [specialRequest, setSpecialRequest] = useState('');

  const todayIso = new Date().toISOString().split('T')[0];

  const directions = [
    { id: 'One Way', label: t('planner.oneWay') },
    { id: 'Round Trip', label: t('planner.roundTrip') },
    { id: 'Multi-City', label: t('planner.multiCity') },
  ];

  const handleDateSync = (nextStart, nextReturn) => {
    if (nextStart && nextReturn && nextReturn >= nextStart) {
      const diffMs = new Date(nextReturn).getTime() - new Date(nextStart).getTime();
      const computedDays = Math.max(1, Math.round(diffMs / (1000 * 60 * 60 * 24)) + 1);
      setDays(computedDays);
    }
  };

  const handleAddStop = () => {
    const clean = extraStopInput.trim();
    if (!clean || extraDestinations.includes(clean)) return;
    setExtraDestinations((prev) => [...prev, clean]);
    setExtraStopInput('');
    if (tripDirection !== 'Multi-City') setTripDirection('Multi-City');
  };

  const toggleSightseeingPlace = (id) => {
    setSightseeingPlaces((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const selectedVehicle = VEHICLES.find((v) => v.category === vehicleCategory) || VEHICLES[1];

  const tripInput = useMemo(
    () => ({
      startLocation,
      destination,
      extraDestinations,
      tripDirection,
      days: tripDirection === 'One Way' ? 1 : days,
      adults,
      children,
      infants,
      vehicleCategory,
      stayPreference,
      foodPreference,
      includeSightseeing,
      sightseeingPlaces: includeSightseeing ? sightseeingPlaces : [],
    }),
    [
      startLocation,
      destination,
      extraDestinations,
      tripDirection,
      days,
      adults,
      children,
      infants,
      vehicleCategory,
      stayPreference,
      foodPreference,
      includeSightseeing,
      sightseeingPlaces,
    ],
  );

  const breakdown = useMemo(() => calculateTripEstimate(tripInput), [tripInput]);

  const handleSendEnquiry = () => {
    const selectedSightLabels = SIGHTSEEING_SUGGESTIONS.filter((s) =>
      sightseeingPlaces.includes(s.id),
    ).map((s) => s.label.en);

    const estimateLabel =
      breakdown.totalEstimate !== null
        ? `${formatInr(breakdown.totalEstimate)} (Vehicle ${
            breakdown.vehicleAmount ? formatInr(breakdown.vehicleAmount) : 'N/A'
          }, Hotel ${formatInr(breakdown.hotelAmount)}, Meals ${formatInr(
            breakdown.mealsAmount,
          )}, Other ${formatInr(breakdown.otherAmount)})`
        : 'Quote on Request';

    openEnquiryModal(
      {
        serviceType: 'Customized Trip Planner Enquiry',
        pickupLocation: startLocation || 'Nashik',
        destination: destination || 'Custom Maharashtra Route',
        extraDestinations,
        tripDirection,
        travelDate: startDate || undefined,
        returnDate: tripDirection !== 'One Way' && returnDate ? returnDate : undefined,
        days: tripInput.days,
        travellers: `${adults} Adults, ${children} Children, ${infants} Infants`,
        vehiclePreference: `${selectedVehicle.name.en} (${selectedVehicle.seatingLabel.en})`,
        stayPreference,
        foodPreference,
        sightseeingSummary: includeSightseeing
          ? selectedSightLabels.length > 0
            ? `Included (${selectedSightLabels.join(', ')})`
            : 'Included'
          : 'Excluded',
        estimatedSummary: estimateLabel,
        notes: [pickupTime ? `Pickup Time: ${pickupTime}` : '', specialRequest]
          .filter(Boolean)
          .join(' | '),
      },
      t('planner.sendEnquiry'),
    );
  };

  return (
    <div className="row g-4 align-items-start">
      <div className="col-lg-7 col-xl-8 d-flex flex-column gap-4">
        {/* A. Your Journey */}
        <section className="planner-step-block">
          <h2 className="h5 fw-bold mb-3">{t('planner.stepA')}</h2>

          <div className="mb-3">
            <label className="form-label d-block">{t('planner.tripType')}</label>
            <div className="filter-bar">
              {directions.map((dir) => (
                <button
                  key={dir.id}
                  type="button"
                  className={`filter-tab ${tripDirection === dir.id ? 'is-active' : ''}`}
                  onClick={() => {
                    setTripDirection(dir.id);
                    if (dir.id === 'One Way') setDays(1);
                  }}
                >
                  {dir.label}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="planner-start" className="form-label">
                {t('planner.startLoc')}
              </label>
              <input
                id="planner-start"
                type="text"
                className="form-control"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                placeholder="Nashik"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="planner-dest" className="form-label">
                {t('planner.primaryDest')}
              </label>
              <input
                id="planner-dest"
                type="text"
                list="planner-dest-list"
                className="form-control"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <datalist id="planner-dest-list">
                {DEST_OPTIONS.map((d) => (
                  <option key={d} value={d} />
                ))}
              </datalist>
            </div>

            <div className="col-12">
              <label htmlFor="planner-extra-stop" className="form-label">
                {t('planner.addStops')}
              </label>
              <div className="input-group">
                <input
                  id="planner-extra-stop"
                  type="text"
                  list="planner-dest-list"
                  className="form-control"
                  value={extraStopInput}
                  onChange={(e) => setExtraStopInput(e.target.value)}
                  placeholder="Trimbakeshwar, Ellora, Mahabaleshwar..."
                />
                <button type="button" className="btn-blue" onClick={handleAddStop}>
                  <Plus size={16} aria-hidden="true" />
                  <span>{t('planner.addStopBtn')}</span>
                </button>
              </div>
              {extraDestinations.length > 0 && (
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {extraDestinations.map((stop) => (
                    <span
                      key={stop}
                      className="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-2 border bg-light small fw-medium text-dark"
                    >
                      <span>{stop}</span>
                      <button
                        type="button"
                        className="btn btn-sm p-0 border-0 text-secondary"
                        aria-label={`Remove ${stop}`}
                        onClick={() =>
                          setExtraDestinations((prev) => prev.filter((item) => item !== stop))
                        }
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className={tripDirection === 'One Way' ? 'col-sm-6' : 'col-sm-4'}>
              <label htmlFor="planner-start-date" className="form-label">
                {t('planner.startDate')}
              </label>
              <input
                id="planner-start-date"
                type="date"
                className="form-control"
                min={todayIso}
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  handleDateSync(e.target.value, returnDate);
                }}
              />
            </div>

            {tripDirection !== 'One Way' && (
              <>
                <div className="col-sm-4">
                  <label htmlFor="planner-return-date" className="form-label">
                    {t('planner.returnDate')}
                  </label>
                  <input
                    id="planner-return-date"
                    type="date"
                    className="form-control"
                    min={startDate || todayIso}
                    value={returnDate}
                    onChange={(e) => {
                      setReturnDate(e.target.value);
                      handleDateSync(startDate, e.target.value);
                    }}
                  />
                </div>

                <div className="col-sm-4">
                  <label className="form-label d-block">{t('planner.days')}</label>
                  <div className="stepper-control">
                    <button
                      type="button"
                      disabled={days <= 1}
                      onClick={() => setDays((d) => Math.max(1, d - 1))}
                    >
                      -
                    </button>
                    <span>{days}</span>
                    <button
                      type="button"
                      disabled={days >= 15}
                      onClick={() => setDays((d) => Math.min(15, d + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* B. Travellers */}
        <section className="planner-step-block">
          <h2 className="h5 fw-bold mb-3">{t('planner.stepB')}</h2>
          <div className="row g-3">
            <div className="col-4">
              <label className="form-label d-block">{t('planner.adults')}</label>
              <div className="stepper-control">
                <button
                  type="button"
                  disabled={adults <= 1}
                  onClick={() => setAdults((a) => Math.max(1, a - 1))}
                >
                  -
                </button>
                <span>{adults}</span>
                <button
                  type="button"
                  disabled={adults >= 45}
                  onClick={() => setAdults((a) => Math.min(45, a + 1))}
                >
                  +
                </button>
              </div>
            </div>

            <div className="col-4">
              <label className="form-label d-block">{t('planner.children')}</label>
              <div className="stepper-control">
                <button
                  type="button"
                  disabled={children <= 0}
                  onClick={() => setChildren((c) => Math.max(0, c - 1))}
                >
                  -
                </button>
                <span>{children}</span>
                <button
                  type="button"
                  disabled={children >= 20}
                  onClick={() => setChildren((c) => Math.min(20, c + 1))}
                >
                  +
                </button>
              </div>
            </div>

            <div className="col-4">
              <label className="form-label d-block">{t('planner.infants')}</label>
              <div className="stepper-control">
                <button
                  type="button"
                  disabled={infants <= 0}
                  onClick={() => setInfants((i) => Math.max(0, i - 1))}
                >
                  -
                </button>
                <span>{infants}</span>
                <button
                  type="button"
                  disabled={infants >= 10}
                  onClick={() => setInfants((i) => Math.min(10, i + 1))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* C. Choose Your Vehicle */}
        <section className="planner-step-block">
          <h2 className="h5 fw-bold mb-3">{t('planner.stepC')}</h2>
          <div className="row g-3">
            {VEHICLES.map((v) => {
              const isSelected = vehicleCategory === v.category;
              const rateRule = VEHICLE_PRICING[v.category];
              const vName = pick(v.name);
              return (
                <div key={v.id} className="col-6 col-md-4 col-xl-3">
                  <button
                    type="button"
                    className={`planner-vehicle-card ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => setVehicleCategory(v.category)}
                    aria-pressed={isSelected}
                  >
                    <div className="planner-vehicle-thumb">
                      <SmartImage src={v.image} alt={v.imageAlt} fallbackLabel={vName} />
                    </div>
                    <div className="p-2 p-md-3 d-flex flex-column flex-grow-1 w-100">
                      <div className="d-flex align-items-center justify-content-between gap-1 mb-1">
                        <strong className="text-dark small">{vName}</strong>
                        {isSelected && <Check size={15} className="text-primary" aria-hidden="true" />}
                      </div>
                      <span className="text-secondary d-block" style={{ fontSize: '0.75rem' }}>
                        {pick(v.seatingLabel)} · {pick(v.luggageCapacity)}
                      </span>
                      <span
                        className="mt-auto pt-2 fw-semibold tabular-num"
                        style={{ fontSize: '0.78rem', color: '#142b45' }}
                      >
                        {rateRule.perKmRate ? `~₹${rateRule.perKmRate}/km` : t('planner.quoteOnRequest')}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* D & E: Stay & Food */}
        <section className="planner-step-block">
          <h2 className="h5 fw-bold mb-3">{t('planner.stepDE')}</h2>
          <div className="mb-3">
            <label className="form-label d-block">{t('planner.stayLabel')}</label>
            <div className="row g-2">
              {STAY_OPTIONS.map((stay) => (
                <div key={stay.id} className="col-6 col-sm-3">
                  <button
                    type="button"
                    className={`planner-option-card h-100 ${
                      stayPreference === stay.id ? 'is-selected' : ''
                    }`}
                    onClick={() => setStayPreference(stay.id)}
                  >
                    <strong className="d-block small text-dark">{pick(stay.label)}</strong>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="form-label d-block">{t('planner.foodLabel')}</label>
            <div className="row g-2">
              {FOOD_OPTIONS.map((food) => (
                <div key={food.id} className="col-4">
                  <button
                    type="button"
                    className={`planner-option-card h-100 ${
                      foodPreference === food.id ? 'is-selected' : ''
                    }`}
                    onClick={() => setFoodPreference(food.id)}
                  >
                    <strong className="d-block small text-dark">{pick(food.label)}</strong>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* F & G: Sightseeing & Additional */}
        <section className="planner-step-block">
          <h2 className="h5 fw-bold mb-3">{t('planner.stepFG')}</h2>
          <div className="mb-3">
            <label className="form-label d-block">{t('planner.sightseeingLabel')}</label>
            <div className="filter-bar mb-2">
              <button
                type="button"
                className={`filter-tab ${includeSightseeing ? 'is-active' : ''}`}
                onClick={() => setIncludeSightseeing(true)}
              >
                {t('planner.includeSightseeing')}
              </button>
              <button
                type="button"
                className={`filter-tab ${!includeSightseeing ? 'is-active' : ''}`}
                onClick={() => setIncludeSightseeing(false)}
              >
                {t('planner.excludeSightseeing')}
              </button>
            </div>

            {includeSightseeing && (
              <div className="d-flex flex-wrap gap-2 mt-2">
                {SIGHTSEEING_SUGGESTIONS.map((item) => {
                  const active = sightseeingPlaces.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleSightseeingPlace(item.id)}
                      className={`btn btn-sm ${
                        active ? 'btn-primary' : 'btn-outline-secondary bg-white text-dark'
                      }`}
                    >
                      {active ? '✓ ' : '+ '}
                      {pick(item.label)}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="row g-3">
            <div className="col-sm-5">
              <label htmlFor="planner-pickup-time" className="form-label">
                {t('planner.pickupTime')}
              </label>
              <input
                id="planner-pickup-time"
                type="text"
                className="form-control"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
              />
            </div>

            <div className="col-sm-7">
              <label htmlFor="planner-special-notes" className="form-label">
                {t('planner.specialNotes')}
              </label>
              <input
                id="planner-special-notes"
                type="text"
                className="form-control"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="col-lg-5 col-xl-4">
        <TripSummary
          trip={tripInput}
          startDate={startDate}
          returnDate={returnDate}
          vehicleName={pick(selectedVehicle.name)}
          breakdown={breakdown}
          onSendEnquiry={handleSendEnquiry}
        />
      </div>
    </div>
  );
}
