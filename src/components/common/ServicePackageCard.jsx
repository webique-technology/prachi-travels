import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { useEnquiryModal } from "../../context/EnquiryModalContext";
import { useLanguage } from "../../context/LanguageContext";
import { SERVICE_CATEGORIES } from "../../data/packages";
import SmartImage from "../../components/SmartImage/SmartImage";

export default function ServicePackageCard({ pkg }) {
  const [expanded, setExpanded] = useState(false);
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();

  const title = pick(pkg.title);
  const tagline = pick(pkg.tagline);
  const description = pick(pkg.description);
  const features = pick(pkg.features) || [];

  const catObj = SERVICE_CATEGORIES.find((c) => c.id === pkg.category);
  const categoryLabel = catObj ? pick(catObj.label) : pkg.category;

  const destinationLabel = pkg.popularCityTitle || pkg.title.en;

  return (
    <article className="travel-card">
      <div className="travel-card-media">
        <SmartImage src={pkg.image} alt={title} fallbackLabel={title} />
      </div>

      <div className="travel-card-body">
        <div className="meta-line mb-1">
          <span>{categoryLabel}</span>
          {pkg.popularCityTitle && (
            <>
              <span className="meta-sep" aria-hidden="true">
                ·
              </span>
              <span>{pkg.popularCityTitle}</span>
            </>
          )}
        </div>

        <h3 className="h5 fw-bold mb-2">{title}</h3>

        <p className="small text-secondary mb-2">
          <strong className="text-dark">{tagline}</strong>
        </p>

        <p className="small text-secondary mb-3 flex-grow-1">{description}</p>

        {expanded && features.length > 0 && (
          <div className="package-details-drawer">
            <div>
              <strong className="text-dark d-block mb-1">
                {t("cards.inclusions")}:
              </strong>
              <ul className="ps-3 mb-0 text-secondary">
                {features.map((feat, idx) => (
                  <li key={idx} className="mb-1">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="d-flex flex-wrap gap-2 mt-2 pt-2 border-top">
          <button
            type="button"
            className="btn-common accent flex-grow-1 justify-content-center"
            onClick={() =>
              openEnquiryModal(
                {
                  serviceType: `${pkg.category} Cab Enquiry`,
                  packageName: pkg.title.en,
                  pickupLocation: "Nashik",
                  destination: destinationLabel,
                  estimatedSummary: pkg.tagline.en,
                  allowPickupEdit: true,
                },
                title,
              )
            }
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>{t("cards.enquireNow")}</span>
          </button>

          {features.length > 0 && (
            <button
              type="button"
              className="btn-outline-navy"
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              <span>{expanded ? t("cards.less") : t("cards.details")}</span>
              {expanded ? (
                <ChevronUp size={15} aria-hidden="true" />
              ) : (
                <ChevronDown size={15} aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
