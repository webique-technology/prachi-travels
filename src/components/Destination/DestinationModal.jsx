import { useEffect } from "react";
import {
  Calendar,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Navigation,
  X,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useEnquiryModal } from "../../context/EnquiryModalContext";
import SmartImage from "../SmartImage/SmartImage";

export default function DestinationDetailModal({ destination, onClose }) {
  const { t, pick } = useLanguage();
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    if (!destination) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [destination, onClose]);

  if (!destination) return null;

  const name = pick(destination.name);
  const distance = pick(destination.distanceFromNashik);
  const bestTime = pick(destination.bestTime);
  const shortDesc = pick(destination.shortDesc);
  const fullDescription = pick(destination.description) || "";
  const paragraphs = fullDescription
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);
  const features = pick(destination.features) || [];

  const handleEnquireTrip = () => {
    onClose();
    openEnquiryModal(
      {
        serviceType: "Destination Trip Enquiry",
        pickupLocation: "Nashik",
        destination: destination.name.en,
        estimatedSummary: `${destination.distanceFromNashik.en} · Best Time: ${destination.bestTime.en}`,
      },
      name,
    );
  };

  return (
    <div
      className="enquiry-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="destination-detail-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="enquiry-modal-dialog destination-detail-dialog">
        {/* Modal Header */}
        <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
          <div>
            <span className="section-kicker mb-1">{destination.category}</span>
            <h2 id="destination-detail-modal-title" className="h4 fw-bold mb-0">
              {name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-light border rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
            aria-label="Close"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Hero Image Banner */}
        <div className="destination-modal-media rounded-3 overflow-hidden mb-3">
          <SmartImage
            src={destination.image}
            alt={destination.imageAlt}
            fallbackLabel={name}
          />
        </div>

        {/* Quick Info Badges (Distance, Best Time, Route) */}
        <div className="p-3 rounded-3 border bg-light mb-3 small">
          <div className="row g-2">
            <div className="col-sm-6 d-flex align-items-center gap-2">
              <Navigation
                size={15}
                className="text-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span>
                <span className="text-secondary">{t("hero.goingTo")}: </span>
                <strong className="text-dark">{distance}</strong>
              </span>
            </div>

            <div className="col-sm-6 d-flex align-items-center gap-2">
              <Calendar
                size={15}
                className="text-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span>
                <span className="text-secondary">Best Time: </span>
                <strong className="text-dark">{bestTime}</strong>
              </span>
            </div>

            {shortDesc && (
              <div className="col-12 d-flex align-items-start gap-2 pt-1 border-top mt-2">
                <MapPin
                  size={15}
                  className="text-primary flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <span className="text-dark fw-medium">{shortDesc}</span>
              </div>
            )}
          </div>
        </div>

        {/* Full Multi-Paragraph Description */}
        {paragraphs.length > 0 && (
          <div className="mb-3">
            {paragraphs.map((para, index) => (
              <p key={index} className="small text-secondary mb-2 lh-base">
                {para}
              </p>
            ))}
          </div>
        )}

        {/* 5 Key Highlights / Features */}
        {features.length > 0 && (
          <div className="p-3 rounded-3 border mb-3">
            <div className="fw-semibold text-dark small mb-2">
              {t("cards.inclusions")}
            </div>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small">
              {features.map((feat, idx) => (
                <li
                  key={idx}
                  className="d-flex align-items-start gap-2 text-secondary"
                >
                  <CheckCircle2
                    size={16}
                    className="text-success flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Footer */}
        <div className="d-flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={handleEnquireTrip}
            className="btn-whatsapp flex-grow-1 justify-content-center"
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>{t("cards.enquireNow")}</span>
          </button>

          <button type="button" onClick={onClose} className="btn-outline-navy">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
