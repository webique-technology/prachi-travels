import { Container, Row, Col, Card, Image } from "react-bootstrap";
import {
  Wallet,
  SlidersHorizontal,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import whyChooseCarImg from "../../assets/images/customize-img.webp"; // Replace with your own taxi/car image path
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
export default function WhyChooseSection() {
  const { t } = useLanguage();

  const features = [
    {
      number: t("planTripSec.pointNo1"),
      title: t("planTripSec.point1"),
      description: t("planTripSec.point1decs"),
      icon: MapPin,
      isOffset: false,
    },
    {
      number: t("planTripSec.pointNo2"),
      title: t("planTripSec.point2"),
      description: t("planTripSec.point2decs"),
      icon: CalendarDays,
      isOffset: true,
    },
    {
      number: t("planTripSec.pointNo3"),
      title: t("planTripSec.point3"),
      description: t("planTripSec.point3decs"),
      icon: SlidersHorizontal,
      isOffset: true,
    },
    {
      number: t("planTripSec.pointNo4"),
      title: t("planTripSec.point4"),
      description: t("planTripSec.point4decs"),
      icon: Wallet,
      isOffset: false,
    },
  ];

  return (
    <section className="why-choose-section py-5">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          {/* Left Column: Eyebrow, Heading, Description, Note & Car Image */}
          <Col lg={6}>
            <div className="why-choose-left">
              <span className="why-choose-subtitle d-inline-block text-uppercase mb-2">
                {t("planTripSec.subtitle")}
              </span>

              <h2 className="why-choose-title display-hero mb-3">
                {t("planTripSec.titleStart")}{" "}
                <span className="why-choose-highlight">
                  {t("planTripSec.titleHighlight")}
                </span>{" "}
                {t("planTripSec.titleEnd")}
              </h2>

              <p className="why-choose-description mb-1">
                {t("planTripSec.description")}
              </p>

              <div className="why-choose-image-wrap mt-2 rounded-3">
                <Image
                  src={whyChooseCarImg}
                  alt={t("planTripSec.imageAlt")}
                  fluid
                  className="why-choose-car-img rounded-3 img-fluid"
                />
              </div>
            </div>
          </Col>

          {/* Right Column: Staggered 4-Step Cards (01, 02, 03, 04) */}
          <Col lg={6}>
            <div className="why-choose-cards d-flex flex-column gap-4">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={idx}
                    className={`why-choose-card border-0 ${item.isOffset ? "is-offset" : ""}`}
                  >
                    <Card.Body className="d-flex align-items-center gap-3 gap-sm-4 p-sm-4">
                      {/* Yellow Circular Icon Badge */}
                      <div className="why-choose-icon-badge d-flex align-items-center justify-content-center flex-shrink-0">
                        <IconComponent
                          size={30}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Card Title, Outlined Step Number & Description */}
                      <div className="why-choose-card-content flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <h3 className="why-choose-card-title mb-0">
                            {item.title}
                          </h3>
                        </div>

                        <p className="why-choose-card-text mb-0">
                          {item.description}
                        </p>
                      </div>
                      <span
                            className="why-choose-card-number"
                            aria-hidden="true"
                          >
                            {item.number}
                          </span>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
            {/* <p className="why-choose-description text-center text-light mt-4">
              {t("planTripSec.expText")}
            </p> */}
            <Link to="/customize-trip" className="btn-common accent btn-animated pill w-100 mt-4">
              <span>
                {t("sections.openPlanner")}
                <ArrowUpRight size={20} className="ms-1" />
              </span>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
