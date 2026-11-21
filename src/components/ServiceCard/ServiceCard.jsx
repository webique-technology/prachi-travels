import { useEnquiryModal } from "../../context/EnquiryModalContext";
import { useLanguage } from "../../context/LanguageContext";

import carImage1 from "../../assets/images/deal.png";
import carImage2 from "../../assets/images/route.png";
import carImage3 from "../../assets/images/local-transport.svg";
import carImage4 from "../../assets/images/airport-transfer.svg";
import carImage5 from "../../assets/images/tour-transport.svg";
import carImage7 from "../../assets/images/group-tours.svg";
import carImage8 from "../../assets/images/sliders.png";

const ICON_IMAGES = {
  // Match service.iconName from services.js
  Car: carImage1,
  ArrowLeftRight: carImage2,
  MapPinned: carImage3,
  PlaneLanding: carImage4,
  Compass: carImage5,
  Landmark: carImage4,
  Users: carImage7,
  SlidersHorizontal: carImage8,

  // Also keep image1..image8 keys in case any item uses them
  image1: carImage1,
  image2: carImage2,
  image3: carImage3,
  image4: carImage4,
  image5: carImage5,
  image6: carImage4,
  image7: carImage7,
  image8: carImage8,
};

export default function ServiceCard({ service }) {
  const { openEnquiryModal } = useEnquiryModal();
  const { pick } = useLanguage();

  const iconSrc = ICON_IMAGES[service?.iconName] || carImage1;
  const title = pick(service.title);

  const handleCardClick = () => {
    openEnquiryModal(
      {
        serviceType: service.title.en,
        pickupLocation: "",
        allowPickupEdit: true,
      },
      title,
    );
  };

  return (
    <article
      className="service-card travel-card overflow-visible p-4 position-relative text-center"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <div className="d-flex align-items-center justify-content-center">
        <div className="center-icon mb-2 mb-sm-3 d-inline-flex align-items-center justify-content-center">
          <img src={iconSrc} alt={title} className="service-card-icon"/>
        </div>
      </div>

      <h4 className="service-title fw-bold mb-1">{title}</h4>
      <p className="text-secondary small lh-base mb-0 flex-grow-1">
        {pick(service.shortDesc)}
      </p>
    </article>
  );
}
