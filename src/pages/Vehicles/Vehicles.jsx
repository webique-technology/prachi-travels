import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import SeoHead from "../../components/SeoHead/SeoHead";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import { SITE_CONFIG } from "../../config/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import { VEHICLES } from "../../data/vehicles";
import SmartImage from "../../components/SmartImage/SmartImage";
import SEO from "../../components/SEO";
import seoData from "../../data/seoData";

export default function Vehicles() {
  const { t, pick } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minSeats, setMinSeats] = useState(0);

  const categories = [
    { id: "All", label: t("cards.allCategories") },
    { id: "Hatchback", label: "Hatchback" },
    { id: "Sedan", label: "Sedan" },
    { id: "SUV", label: "SUV" },
    { id: "Ertiga", label: "Ertiga" },
    { id: "Innova", label: "Innova" },
    { id: "Innova Crysta", label: "Innova Crysta" },
    { id: "Tempo Traveller", label: "Tempo Traveller" },
    { id: "Bus", label: "Bus" },
  ];

  const filteredVehicles = useMemo(
    () =>
      VEHICLES.filter((v) => {
        const matchCat =
          selectedCategory === "All" || v.category === selectedCategory;
        const matchSeats = v.seatingCapacity >= minSeats;
        return matchCat && matchSeats;
      }),
    [selectedCategory, minSeats],
  );

  return (
    <>
      <SEO data={seoData.vehicles} />

      <section className="page-banner">
        <div className="container-custom">
          <h1 className="display-6 fw-bold mb-2">{t("pages.vehiclesTitle")}</h1>
          <p className="mb-0" style={{ maxWidth: "58ch" }}>
            {t("pages.vehiclesSub")}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-custom">
          <div className="travel-card p-3 p-md-4 mb-4">
            <div className="d-flex flex-column flex-xl-row align-items-xl-center justify-content-between gap-3">
              <div className="filter-bar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`filter-tab ${selectedCategory === cat.id ? "is-active" : ""}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="d-flex align-items-center gap-2 flex-shrink-0">
                <label
                  htmlFor="vehicle-seats-filter"
                  className="form-label mb-0 text-nowrap"
                >
                  {t("hero.travellers")}:
                </label>
                <select
                  id="vehicle-seats-filter"
                  className="form-select"
                  style={{ width: "auto", minWidth: 140 }}
                  value={minSeats}
                  onChange={(e) => setMinSeats(Number(e.target.value))}
                >
                  <option value={0}>{t("cards.allCategories")}</option>
                  <option value={4}>4+</option>
                  <option value={6}>6+</option>
                  <option value={7}>7+</option>
                  <option value={12}>12+</option>
                  <option value={32}>32+</option>
                </select>
              </div>
            </div>
          </div>

          {filteredVehicles.length === 0 ? (
            <div className="travel-card p-5 text-center">
              <p className="text-secondary mb-3">{t("cards.noResults")}</p>
              <button
                type="button"
                className="btn-outline-navy mx-auto"
                onClick={() => {
                  setSelectedCategory("All");
                  setMinSeats(0);
                }}
              >
                {t("cards.resetFilters")}
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="col-sm-6 col-lg-3">
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 text-center">
            <Link to="/customize-trip" className="btn-common primary">
              <SlidersHorizontal size={17} aria-hidden="true" />
              <span>{t("hero.customizeBtn")}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
