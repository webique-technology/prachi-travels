import {
  DESTINATION_DISTANCES_FROM_NASHIK,
  FOOD_PRICING_PER_PERSON_DAY,
  SIGHTSEEING_ESTIMATE_PER_DAY,
  STAY_PRICING_PER_ROOM_NIGHT,
  VEHICLE_PRICING,
} from '../data/pricing';

export function formatInr(amount) {
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
}

function findKnownDistance(dest) {
  const clean = (dest || '').trim().toLowerCase();
  if (!clean) return null;
  for (const [key, km] of Object.entries(DESTINATION_DISTANCES_FROM_NASHIK)) {
    if (clean.includes(key.toLowerCase()) || key.toLowerCase().includes(clean)) {
      return km;
    }
  }
  return null;
}

export function calculateTripEstimate(input) {
  const days = Math.max(1, input.days);
  const nights = Math.max(0, days - 1);
  const pricingRule = VEHICLE_PRICING[input.vehicleCategory];

  const effectiveRoomPax = input.adults + input.children * 0.5;
  const roomsRequired =
    input.stayPreference === 'No Hotel Required' || nights === 0
      ? 0
      : Math.max(1, Math.ceil(effectiveRoomPax / 2));

  const hotelAmount =
    nights > 0 ? roomsRequired * nights * STAY_PRICING_PER_ROOM_NIGHT[input.stayPreference] : 0;

  const payingFoodHeads = input.adults + input.children * 0.6;
  const mealsAmount = Math.round(
    payingFoodHeads * days * FOOD_PRICING_PER_PERSON_DAY[input.foodPreference],
  );

  const sightseeingCharge = input.includeSightseeing
    ? days * SIGHTSEEING_ESTIMATE_PER_DAY + input.sightseeingPlaces.length * 250
    : 0;

  const baseDistance = findKnownDistance(input.destination);
  const extraStopsKm = input.extraDestinations.reduce((acc, stop) => {
    const d = findKnownDistance(stop);
    return acc + (d ? Math.round(d * 0.45) : 70);
  }, 0);

  if (!pricingRule || pricingRule.perKmRate === null) {
    return {
      isQuoteOnRequest: true,
      quoteReason: 'Bus & coach pricing depends on exact seating, route permits, and days.',
      estimatedKm: null,
      roomsRequired,
      nights,
      vehicleAmount: null,
      driverAllowanceAmount: null,
      hotelAmount,
      mealsAmount,
      otherAmount: sightseeingCharge,
      totalEstimate: null,
    };
  }

  if (input.tripDirection === 'One Way' && pricingRule.baseOneWayMinimum === null) {
    return {
      isQuoteOnRequest: true,
      quoteReason: 'Tempo Traveller one-way drops are quoted directly on route distance.',
      estimatedKm: baseDistance,
      roomsRequired,
      nights,
      vehicleAmount: null,
      driverAllowanceAmount: null,
      hotelAmount,
      mealsAmount,
      otherAmount: sightseeingCharge,
      totalEstimate: null,
    };
  }

  if (baseDistance === null) {
    return {
      isQuoteOnRequest: true,
      quoteReason: 'Custom destination distance will be confirmed accurately on WhatsApp.',
      estimatedKm: null,
      roomsRequired,
      nights,
      vehicleAmount: null,
      driverAllowanceAmount: null,
      hotelAmount,
      mealsAmount,
      otherAmount: sightseeingCharge,
      totalEstimate: null,
    };
  }

  let estimatedKm;
  if (input.tripDirection === 'One Way') {
    estimatedKm = baseDistance + extraStopsKm;
  } else {
    const roundTripRaw = baseDistance * 2 + extraStopsKm;
    const minBillableKm = days * pricingRule.minKmPerDay;
    estimatedKm = Math.max(roundTripRaw, minBillableKm);
  }

  let vehicleAmount = estimatedKm * pricingRule.perKmRate;
  if (input.tripDirection === 'One Way' && pricingRule.baseOneWayMinimum !== null) {
    vehicleAmount = Math.max(vehicleAmount, pricingRule.baseOneWayMinimum);
  }

  const driverAllowanceAmount = days * pricingRule.driverAllowancePerDay;
  const otherAmount = driverAllowanceAmount + sightseeingCharge;
  const totalEstimate = vehicleAmount + hotelAmount + mealsAmount + otherAmount;

  return {
    isQuoteOnRequest: false,
    estimatedKm,
    roomsRequired,
    nights,
    vehicleAmount,
    driverAllowanceAmount,
    hotelAmount,
    mealsAmount,
    otherAmount,
    totalEstimate,
  };
}
