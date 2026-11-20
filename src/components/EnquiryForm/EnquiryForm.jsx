import { useState } from 'react';
import { CheckCircle2, Copy, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { formatWhatsAppMessage, triggerWhatsAppRedirect } from '../../utils/whatsapp';

export default function EnquiryForm({
  defaultServiceType = 'Round Trip',
  defaultDestination = '',
}) {
  const { t } = useLanguage();

  const [serviceType, setServiceType] = useState(defaultServiceType);
  const [pickupLocation, setPickupLocation] = useState('Nashik');
  const [destination, setDestination] = useState(defaultDestination);
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travellers, setTravellers] = useState('4');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [submittedPreview, setSubmittedPreview] = useState('');
  const [copied, setCopied] = useState(false);

  const showReturnDate = serviceType !== 'One Way' && serviceType !== 'Cab';
  const todayIso = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!pickupLocation.trim() || !destination.trim() || !travelDate) {
      setErrorMsg('Please fill From, Going To, and Travel Date.');
      return;
    }

    const payload = {
      serviceType,
      pickupLocation: pickupLocation.trim(),
      destination: destination.trim(),
      travelDate,
      returnDate: showReturnDate && returnDate ? returnDate : undefined,
      travellers,
      customerName: customerName.trim() || undefined,
      customerPhone: customerPhone.trim() || undefined,
      notes: notes.trim() || undefined,
    };

    setSubmittedPreview(formatWhatsAppMessage(payload));
    setSubmittedUrl(triggerWhatsAppRedirect(payload));
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!submittedPreview) return;
    try {
      await navigator.clipboard.writeText(submittedPreview);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="travel-card p-4 p-md-5">
      <h2 className="h4 fw-bold mb-3">{t('modal.defaultTitle')}</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <div className="filter-bar w-100">
            {['Cab', 'One Way', 'Round Trip', 'Tour Package', 'Group Tour'].map((type) => (
              <button
                key={type}
                type="button"
                className={`filter-tab ${serviceType === type ? 'is-active' : ''}`}
                onClick={() => setServiceType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="contact-pickup" className="form-label">
              {t('hero.from')} *
            </label>
            <input
              id="contact-pickup"
              type="text"
              className="form-control"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="contact-dest" className="form-label">
              {t('hero.goingTo')} *
            </label>
            <input
              id="contact-dest"
              type="text"
              className="form-control"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder={t('hero.goingToPlaceholder')}
              required
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="contact-date" className="form-label">
              {t('planner.startDate')} *
            </label>
            <input
              id="contact-date"
              type="date"
              className="form-control"
              min={todayIso}
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              required
            />
          </div>

          {showReturnDate && (
            <div className="col-sm-6">
              <label htmlFor="contact-return" className="form-label">
                {t('planner.returnDate')}
              </label>
              <input
                id="contact-return"
                type="date"
                className="form-control"
                min={travelDate || todayIso}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          )}

          <div className="col-sm-6">
            <label htmlFor="contact-name" className="form-label">
              {t('modal.nameLabel')}
            </label>
            <input
              id="contact-name"
              type="text"
              className="form-control"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder={t('modal.namePlaceholder')}
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="contact-phone" className="form-label">
              {t('modal.phoneLabel')}
            </label>
            <input
              id="contact-phone"
              type="tel"
              className="form-control"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder={t('modal.phonePlaceholder')}
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="contact-pax" className="form-label">
              {t('hero.travellers')}
            </label>
            <select
              id="contact-pax"
              className="form-select"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
            >
              <option value="1–2">1–2</option>
              <option value="4">3–4</option>
              <option value="5–7">5–7</option>
              <option value="12+">12+</option>
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="contact-notes" className="form-label">
              {t('modal.msgLabel')}
            </label>
            <textarea
              id="contact-notes"
              rows={2}
              className="form-control"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('modal.msgPlaceholder')}
            />
          </div>
        </div>

        {errorMsg && (
          <div className="alert alert-danger mt-3 mb-0 py-2 px-3 small" role="alert">
            {errorMsg}
          </div>
        )}

        <div className="mt-4">
          <button type="submit" className="btn-whatsapp">
            <MessageCircle size={18} aria-hidden="true" />
            <span>{t('modal.submitBtn')}</span>
          </button>
        </div>
      </form>

      {submittedUrl && (
        <div
          className="mt-3 p-3 rounded-3 border"
          style={{ backgroundColor: '#ebf7f1', borderColor: '#35a76f' }}
          role="status"
        >
          <div className="d-flex align-items-start gap-2 mb-2">
            <CheckCircle2 size={19} className="text-success flex-shrink-0 mt-1" aria-hidden="true" />
            <div className="small">
              <strong className="d-block text-dark">{t('modal.readyTitle')}</strong>
              <span className="text-secondary">{t('modal.readySub')}</span>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <a href={submittedUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} aria-hidden="true" />
              <span>{t('modal.openWa')}</span>
            </a>
            <button type="button" onClick={handleCopy} className="btn-outline-navy">
              <Copy size={16} aria-hidden="true" />
              <span>{copied ? t('modal.copied') : t('modal.copyText')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
