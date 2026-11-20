import { SITE_CONFIG } from '../config/siteConfig';

export function formatWhatsAppMessage(payload = {}) {
  const brand = SITE_CONFIG.brandName.en;
  const lines = [
    `Namaste ${brand} Team,`,
    'I would like to enquire about the following travel plan:',
    '',
  ];

  if (payload.serviceType) lines.push(`Enquiry Type: ${payload.serviceType}`);
  if (payload.packageName) lines.push(`Tour Package: ${payload.packageName}`);
  if (payload.tripDirection) lines.push(`Trip Mode: ${payload.tripDirection}`);
  if (payload.pickupLocation) lines.push(`From: ${payload.pickupLocation}`);
  if (payload.destination) lines.push(`Going To: ${payload.destination}`);
  if (payload.extraDestinations && payload.extraDestinations.length > 0) {
    lines.push(`Additional Stops: ${payload.extraDestinations.join(', ')}`);
  }
  if (payload.travelDate) lines.push(`Travel Date: ${payload.travelDate}`);
  if (payload.returnDate) lines.push(`Return Date: ${payload.returnDate}`);
  if (payload.days) lines.push(`Duration: ${payload.days} Day(s)`);
  if (payload.travellers) lines.push(`Travellers: ${payload.travellers}`);
  if (payload.vehiclePreference) lines.push(`Vehicle Selected: ${payload.vehiclePreference}`);
  if (payload.stayPreference) lines.push(`Stay Preference: ${payload.stayPreference}`);
  if (payload.foodPreference) lines.push(`Food Preference: ${payload.foodPreference}`);
  if (payload.sightseeingSummary) lines.push(`Sightseeing: ${payload.sightseeingSummary}`);
  if (payload.estimatedSummary) lines.push(`Website Approx Estimate: ${payload.estimatedSummary}`);

  lines.push('');
  if (payload.customerName) lines.push(`Customer Name: ${payload.customerName}`);
  if (payload.customerPhone) lines.push(`Mobile Number: ${payload.customerPhone}`);
  if (payload.notes) lines.push(`Additional Message: ${payload.notes}`);

  lines.push('');
  lines.push('Please confirm vehicle availability and final pricing. Thank you.');

  return lines.join('\n');
}

export function buildWhatsAppUrl(payload = {}) {
  const message = formatWhatsAppMessage(payload);
  const encoded = encodeURIComponent(message);
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^\d]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

export function triggerWhatsAppRedirect(payload = {}) {
  const url = buildWhatsAppUrl(payload);
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return url;
}
