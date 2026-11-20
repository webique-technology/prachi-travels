import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Headset,
  Bus,
  Car,
  Compass,
  HeartHandshake,
  Landmark,
  MapPin,
  MessageCircle,
  Mountain,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import PackageCard from "../../components/PackageCard/PackageCard";
import SeoHead from "../../components/SeoHead/SeoHead";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import SmartImage from "../../components/SmartImage/SmartImage";
import Testimonial from "../../components/Testimonial/Testimonial";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import { SITE_CONFIG } from "../../config/siteConfig";
import { useEnquiryModal } from "../../context/EnquiryModalContext";
import { useLanguage } from "../../context/LanguageContext";
import { DESTINATIONS } from "../../data/destinations";
import { TRAVEL_SERVICES } from "../../data/services";
import { VEHICLES } from "../../data/vehicles";
import AboutSection from "../../components/AboutSec/AboutSec";
import { Col, Container, Row } from "react-bootstrap";
import WhyChooseSection from "../../components/common/WhyChooseSection";
import ServicePackageCard from "../../components/common/ServicePackageCard";

const TRENDING_IDS = [
  "trimbakeshwar",
  "shirdi",
  "mahabaleshwar",
  "ellora-caves",
  "konkan",
  "lonavala",
  "nashik",
  "ganpatipule",
];

export default function Home() {
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();

  const [activePackageCat, setActivePackageCat] = useState("Cities");
  const [activeVehicleTab, setActiveVehicleTab] = useState("All");

  const trendingDestinations = useMemo(
    () =>
      TRENDING_IDS.map((id) => DESTINATIONS.find((d) => d.id === id)).filter(
        Boolean,
      ),
    [],
  );

  const filteredVehicles = useMemo(() => {
    if (activeVehicleTab === "Cars") {
      return VEHICLES.filter((v) =>
        ["Hatchback", "Sedan"].includes(v.category),
      );
    }
    if (activeVehicleTab === "MPV") {
      return VEHICLES.filter((v) =>
        ["SUV", "Ertiga", "Innova", "Innova Crysta"].includes(v.category),
      );
    }
    if (activeVehicleTab === "Group") {
      return VEHICLES.filter((v) =>
        ["Tempo Traveller", "Bus"].includes(v.category),
      );
    }
    return VEHICLES.slice(0, 4);
  }, [activeVehicleTab]);

  const categoryDiscovery = [
    { id: "All", label: t("categories.all"), icon: Compass, pkgFilter: "All" },
    {
      id: "Spiritual",
      label: t("categories.spiritual"),
      icon: Landmark,
      pkgFilter: "Spiritual Tours",
    },
    {
      id: "Hills",
      label: t("categories.hills"),
      icon: Mountain,
      pkgFilter: "Family Tours",
    },
    {
      id: "Heritage",
      label: t("categories.heritage"),
      icon: Sparkles,
      pkgFilter: "Maharashtra Tours",
    },
    {
      id: "Weekend",
      label: t("categories.weekend"),
      icon: Sun,
      pkgFilter: "Weekend Getaways",
    },
    {
      id: "Family",
      label: t("categories.family"),
      icon: HeartHandshake,
      pkgFilter: "Family Tours",
    },
    {
      id: "Group",
      label: t("categories.group"),
      icon: Bus,
      pkgFilter: "Group Tours",
    },
    { id: "Cars", label: t("categories.cabs"), icon: Car, to: "/vehicles" },
    {
      id: "Custom",
      label: t("categories.custom"),
      icon: SlidersHorizontal,
      to: "/customize-trip",
    },
  ];

  const handleCategoryClick = (pkgFilter) => {
    setActivePackageCat(pkgFilter);
    const el = document.getElementById("home-packages-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const vehicleTabs = [
    { id: "All", label: t("cards.allCategories") },
    { id: "Cars", label: "Hatchback / Sedan" },
    { id: "MPV", label: "SUV / Ertiga / Innova" },
    { id: "Group", label: "Tempo / Bus" },
  ];

  const whyItems = [
    {
      icon: ShieldCheck,
      title: t("why.comfortableTitle"),
      desc: t("why.comfortableDesc"),
    },
    {
      icon: SlidersHorizontal,
      title: t("why.flexibleTitle"),
      desc: t("why.flexibleDesc"),
    },
    { icon: Users, title: t("why.familyTitle"), desc: t("why.familyDesc") },
    { icon: MapPin, title: t("why.localTitle"), desc: t("why.localDesc") },
  ];

  return (
    <>
      <SeoHead
        title={`${pick(SITE_CONFIG.brandName)} – Nashik`}
        description={t("sections.welcomeBody")}
      />

      {/* 1. Togo-style Hero Slider + Floating Search Dock */}
      <HeroSlider />

      {/* 2. Togo Marketplace Horizontal Category Discovery Strip */}
      {/* <section className="container-custom" aria-label="Trip Categories">
        <div className="marketplace-category-strip">
          {categoryDiscovery.map((item) => {
            const Icon = item.icon;
            if (item.to) {
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className="marketplace-category-item"
                >
                  <Icon
                    size={20}
                    style={{ color: "#2196d2" }}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </Link>
              );
            }
            const isActive =
              activePackageCat === item.pkgFilter && item.id !== "Hills";
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleCategoryClick(item.pkgFilter)}
                className={`marketplace-category-item ${isActive ? "is-active" : ""}`}
              >
                <Icon
                  size={20}
                  style={{ color: "#2196d2" }}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </section> */}

      {/* 3. Compact Welcome & Custom Trip Planner Strip */}
      {/* <section className="section-pad pt-4">
        <div className="container-custom">
          <div className="travel-card p-4 p-lg-5 bg-white">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <span className="section-kicker">
                  {t("sections.welcomeKicker")}
                </span>
                <h2 className="section-heading mb-2">
                  {t("sections.welcomeTitle")}
                </h2>
                <p className="text-secondary mb-0" style={{ maxWidth: "62ch" }}>
                  {t("sections.welcomeBody")}
                </p>
              </div>
              <div className="col-lg-5 d-flex flex-wrap justify-content-lg-end gap-2">
                <Link to="/customize-trip" className="btn-yellow">
                  <SlidersHorizontal size={17} aria-hidden="true" />
                  <span>{t("hero.customizeBtn")}</span>
                </Link>
                <Link to="/packages" className="btn-outline-navy">
                  <span>{t("hero.exploreBtn")}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <AboutSection />

      {/* 7. Services Strip */}
      <section className="section-pad">
        <Container className="">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 title-block-mb-50">
            <div>
              <span className="section-kicker">
                {t("sections.servicesKicker")}
              </span>
              <h2 className="section-heading mb-0">
                {t("sections.servicesTitle")}
              </h2>
            </div>
            <Link
              to="/services"
              className="btn-common accent pill align-self-start align-self-md-auto"
            >
              <span>{t("sections.allServices")}</span>
            </Link>
          </div>

          <Row className="gx-4 gy-5">
            {TRAVEL_SERVICES.map((service) => (
              <Col key={service.id} xs={6} lg={3}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <WhyChooseSection />

      {/* 6. Our Vehicles Showcase */}
      <section className="section-pad section-surface-white">
        <Container className="">
          <div className="d-flex flex-row align-items-center justify-content-between gap-3 title-block-mb-50">
            <div className="text-center text-sm-start">
              <span className="section-kicker">
                {t("sections.vehiclesKicker")}
              </span>
              <h2 className="section-heading mb-0">
                {t("sections.vehiclesTitle")}
              </h2>
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
              <Link to="/vehicles" className="btn-common accent pill">
                <span>
                  {t("sections.viewAllVehicles")}
                  <ArrowUpRight size={20} className="ms-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="d-none d-md-flex row g-4">
            {VEHICLES.slice(0, 4).map((vehicle) => {
              const vehicleName = pick(vehicle.name);
              return (
                <div key={vehicle.id} className="col-md-6 col-lg-3">
                  <article className="travel-card p-3">
                    <div className="travel-card-media rounded-3">
                      <SmartImage
                        src={vehicle.image}
                        alt={vehicle.imageAlt}
                        fallbackLabel={vehicleName}
                      />
                    </div>

                    <div className="travel-card-body p-0">
                      <h3 className="h5 fw-bold mb-0 mt-3">{vehicleName}</h3>
                      <p className="small text-secondary mb-0">
                        {vehicle.models}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          <div className="d-md-none">
            <Swiper
              modules={[Pagination]}
              spaceBetween={14}
              slidesPerView={1.15}
              pagination={{ clickable: true }}
              className="card-swiper"
            >
              {VEHICLES.slice(0, 4).map((vehicle) => {
                const vehicleName = pick(vehicle.name);
                return (
                  <div key={vehicle.id} className="col-md-6 col-lg-3">
                    <article className="travel-card">
                      <div className="travel-card-media">
                        <SmartImage
                          src={vehicle.image}
                          alt={vehicle.imageAlt}
                          fallbackLabel={vehicleName}
                        />
                      </div>

                      <div className="travel-card-body">
                        <h3 className="h5 fw-bold mb-0">{vehicleName}</h3>
                        <p className="small text-secondary mb-0">
                          {vehicle.models}
                        </p>
                      </div>
                    </article>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </section>

      {/* 4. Trending Destinations Photo Tiles */}
      <section className="section-pad">
        <Container className="">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 title-block-mb-50">
            <div>
              <span className="section-kicker">
                {t("sections.destinationsKicker")}
              </span>
              <h2 className="section-heading mb-0">
                {t("sections.destinationsTitle")}
              </h2>
            </div>
            <Link
              to="/destinations"
              className="btn-outline-navy align-self-start align-self-md-auto"
            >
              <span>{t("sections.allDestinations")}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <Row className="g-3 d-none d-md-flex">
            {trendingDestinations.map((dest) => {
              const name = pick(dest.name);
              return (
                <Col key={dest.id} md={6} lg={3}>
                  <button
                    type="button"
                    className="destination-tile"
                    onClick={() =>
                      openEnquiryModal(
                        {
                          serviceType: "Destination Trip Enquiry",
                          pickupLocation: "Nashik",
                          destination: dest.name.en,
                        },
                        name,
                      )
                    }
                  >
                    <SmartImage
                      src={dest.image}
                      alt={dest.imageAlt}
                      fallbackLabel={name}
                    />
                    <div
                      className="destination-tile-scrim"
                      aria-hidden="true"
                    />
                    <div className="destination-tile-caption">
                      <strong className="d-block fs-6">{name}</strong>
                      <span className="small opacity-75">
                        {pick(dest.distanceFromNashik)}
                      </span>
                    </div>
                  </button>
                </Col>
              );
            })}
          </Row>

          <div className="d-md-none">
            <Swiper
              modules={[Pagination]}
              spaceBetween={12}
              slidesPerView={1.25}
              pagination={{ clickable: true }}
              className="card-swiper"
            >
              {trendingDestinations.map((dest) => {
                const name = pick(dest.name);
                return (
                  <SwiperSlide key={dest.id}>
                    <button
                      type="button"
                      className="destination-tile"
                      onClick={() =>
                        openEnquiryModal(
                          {
                            serviceType: "Destination Trip Enquiry",
                            pickupLocation: "Nashik",
                            destination: dest.name.en,
                          },
                          name,
                        )
                      }
                    >
                      <SmartImage
                        src={dest.image}
                        alt={dest.imageAlt}
                        fallbackLabel={name}
                      />
                      <div
                        className="destination-tile-scrim"
                        aria-hidden="true"
                      />
                      <div className="destination-tile-caption">
                        <strong className="d-block fs-6">{name}</strong>
                        <span className="small opacity-75">
                          {pick(dest.distanceFromNashik)}
                        </span>
                      </div>
                    </button>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </section>

      {/* 8. Why Travel With Us + Demo Testimonials */}
      <section className="section-pad section-surface-white">
        <Container className="">
          <Testimonial />
        </Container>
      </section>

      {/* 9. Final CTA Banner */}
      <section className="cta-banner-section py-5">
        <Container>
          <Row className="align-items-center g-4">
            {/* Left Column: Bold White Heading & Subtext */}
            <Col lg={7} className="cta-banner-left text-center text-lg-start">
              <h2 className="cta-banner-title text-white mb-3">
                {t("sections.ctaTitle")}
              </h2>
              <p className="cta-banner-sub text-white mb-0">
                {t("sections.ctaSub")}
              </p>
            </Col>

            {/* Right Column: Vertical Divider with Triangle Pointer + Headset Phone + Black Pill CTA */}
            <Col lg={5} className="cta-banner-right">
              <div className="cta-banner-action d-flex flex-column align-items-center justify-content-center gap-3 ps-lg-4">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw || "+919876543210"}`}
                  className="cta-banner-phone d-inline-flex align-items-center gap-2 text-white text-decoration-none"
                >
                  <Headset size={28} strokeWidth={2.2} aria-hidden="true" />
                  <span>{SITE_CONFIG.phoneDisplay || "+91 98765 43210"}</span>
                </a>

                <button
                  type="button"
                  className="cta-banner-btn d-inline-flex align-items-center justify-content-center gap-2 border-0"
                  onClick={() =>
                    openEnquiryModal(
                      {
                        serviceType: "Quick Cab Booking Enquiry",
                        pickupLocation: "Nashik",
                      },
                      t("sections.ctaTitle"),
                    )
                  }
                >
                  <span>{t("sections.ctaBtn")}</span>
                  <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
