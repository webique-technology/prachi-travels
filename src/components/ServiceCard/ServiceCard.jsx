import {
  ArrowLeftRight,
  Car,
  Compass,
  Landmark,
  MapPinned,
  PlaneLanding,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { useEnquiryModal } from "../../context/EnquiryModalContext";
import { useLanguage } from "../../context/LanguageContext";

// import carImage1 from "../../assets/images/taxi.svg";
// import carImage2 from "../../assets/images/airport.svg";
// import carImage3 from "../../assets/images/city-taxi.svg";
// import carImage4 from "../../assets/images/taxi2.svg";

const ICON_MAP = {
  Car,
  ArrowLeftRight,
  MapPinned,
  PlaneLanding,
  Compass,
  Landmark,
  Users,
  SlidersHorizontal,
};

// const ICON_IMAGES = {
//   image1: carImage1,
//   image2: carImage2,
//   image3: carImage3,
//   image4: carImage4,
// };

export default function ServiceCard({ service }) {
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();
  const Icon = ICON_MAP[service.iconName];
  const title = pick(service.title);

  return (
    <article className="travel-card overflow-visible p-4 position-relative">
      <div className="d-flex align-items-center justify-content-center">
        <div className="center-icon mb-3 d-inline-flex align-items-center justify-content-center">
          <Icon size={20} aria-hidden="true" />
        </div>
      </div>

      <h4 className="fw-bold mb-1">{title}</h4>
      <p
        className="text-secondary small mb-0 flex-grow-1"
        style={{ lineHeight: 1.55 }}
      >
        {pick(service.shortDesc)}
      </p>

      {/* <button
        type="button"
        className="btn-outline-navy w-100 justify-content-center"
        onClick={() =>
          openEnquiryModal(
            {
              serviceType: service.title.en,
              pickupLocation: 'Nashik',
            },
            title,
          )
        }
      >
        <span>{t('cards.enquireNow')}</span>
      </button> */}
    </article>
  );
}
