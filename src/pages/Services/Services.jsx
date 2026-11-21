import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import SeoHead from "../../components/SeoHead/SeoHead";
import { SITE_CONFIG } from "../../config/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import { SERVICE_CATEGORIES, SERVICE_PACKAGES } from "../../data/packages";
import ServicePackageCard from "../../components/common/ServicePackageCard";
import { useEnquiryModal } from "../../context/EnquiryModalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Container } from "react-bootstrap";
import SEO from "../../components/SEO";
import seoData from "../../data/seoData";

export default function Services() {
  const { openEnquiryModal } = useEnquiryModal();
  const { t, pick } = useLanguage();

  const [activePackageCat, setActivePackageCat] = useState("Airports");
  const filteredPackages = useMemo(() => {
    return SERVICE_PACKAGES.filter(
      (pkg) => pkg.category === activePackageCat,
    ).slice(0, 20);
  }, [activePackageCat]);
  return (
    <>
      <SEO data={seoData.services} />

      <section className="page-banner">
        <Container className="">
          <h1 className="display-6 fw-bold mb-2">{t("pages.servicesTitle")}</h1>
          <p className="mb-0" style={{ maxWidth: "58ch" }}>
            {t("pages.servicesSub")}
          </p>
        </Container>
      </section>

      {/* 5. Popular Tour Packages */}
      <section id="home-packages-section" className="section-pad">
        <Container className="">
          <div className="d-flex flex-column align-items-center justify-content-between gap-5 mb-4">
            {/* <div className="text-center">
              <span className="section-kicker">
                {t("sections.packagesKicker")}
              </span>
              <h2 className="section-heading mb-0">
                {t("sections.packagesTitle")}
              </h2>
            </div> */}

            <div className="d-flex flex-wrap align-items-center gap-2">
              <div className="filter-bar p-0 m-0 bg-transparent border-0">
                {SERVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`filter-tab ${activePackageCat === cat.id ? "is-active" : ""}`}
                    onClick={() => setActivePackageCat(cat.id)}
                  >
                    {pick(cat.label)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop / Tablet Grid (Shows 6 cards per selected tab) */}
          <div className="d-none d-md-flex row g-4">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="col-md-6 col-lg-4">
                {/* <PackageCard pkg={pkg} /> */}
                <ServicePackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          {/* Mobile Swiper */}
          <div className="d-md-none">
            <Swiper
              key={activePackageCat}
              modules={[Pagination]}
              spaceBetween={14}
              slidesPerView={1.12}
              pagination={{ clickable: true }}
              className="card-swiper"
            >
              {filteredPackages.map((pkg) => (
                <SwiperSlide key={pkg.id} className="h-auto">
                  {/* <PackageCard pkg={pkg} /> */}
                  <ServicePackageCard pkg={pkg} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
}
