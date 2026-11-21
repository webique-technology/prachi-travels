import { Briefcase, Fuel, MessageCircle, Users } from "lucide-react";
import { useEnquiryModal } from "../../context/EnquiryModalContext";
import { useLanguage } from "../../context/LanguageContext";
import SmartImage from "../SmartImage/SmartImage";

export default function VehicleCard({ vehicle }) {
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();
  const name = pick(vehicle.name);

  return (
    <article className="travel-card">
      <div className="travel-card-media">
        <SmartImage
          src={vehicle.image}
          alt={vehicle.imageAlt}
          fallbackLabel={name}
        />
      </div>

      <div className="travel-card-body">
        <h3 className="h5 fw-bold mb-1">{name}</h3>
        <p className="small text-secondary mb-3">{vehicle.models}</p>

        <div className="d-flex flex-column gap-2 small mb-3 flex-grow-1">
          <div className="d-flex align-items-center gap-2 text-dark">
            <Users size={15} style={{ color: "#2196d2" }} aria-hidden="true" />
            <span className="tabular-num">{pick(vehicle.seatingLabel)}</span>
          </div>
          <div className="d-flex align-items-center gap-2 text-dark">
            <Briefcase
              size={15}
              style={{ color: "#2196d2" }}
              aria-hidden="true"
            />
            <span>{pick(vehicle.luggageCapacity)}</span>
          </div>
          {vehicle.fuelType && (
            <div className="d-flex align-items-center gap-2 text-dark">
              <Fuel size={15} style={{ color: "#2196d2" }} aria-hidden="true" />
              <span>{pick(vehicle.fuelType)}</span>
            </div>
          )}
        </div>

        <p className="small text-secondary mb-3 pt-2 border-top">
          {pick(vehicle.suitableFor)}
        </p>

        <button
          type="button"
          className="btn-common accent pill w-100 justify-content-center"
          onClick={() =>
            openEnquiryModal(
              {
                serviceType: "Vehicle Rental Enquiry",
                pickupLocation: "Nashik",
                vehiclePreference: `${vehicle.name.en} (${vehicle.models})`,
              },
              name,
            )
          }
        >
          <MessageCircle size={16} aria-hidden="true" />
          <span>{t("cards.enquireNow")}</span>
        </button>
      </div>
    </article>
  );
}
