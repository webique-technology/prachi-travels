import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import aboutImg from "../../assets/images/car.webp"

export default function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    t('about.point1'),
    t('about.point2'),
    t('about.point3'),
  ];

  return (
    <section className="about-section section-pad">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          {/* Left Column: Experience Badge + Car Image */}
          <Col lg={6}>
            <div className="about-media position-relative mx-auto">
              {/* Floating Pill Experience Badge */}
              <div className="about-badge d-inline-flex align-items-center gap-3">
                <div className="about-badge-icon d-flex align-items-center justify-content-center flex-shrink-0">
                  <Award size={26} aria-hidden="true" />
                </div>
                <div className="about-badge-text">
                  <span className="d-block">{t('about.badgeLine1')}</span>
                  <span className="d-block">{t('about.badgeLine2')}</span>
                </div>
              </div>

              {/* Main Vehicle / Travel Image */}
              <div className="about-image-wrap text-center">
                <Image
                  src={aboutImg}
                  alt={t('about.imageAlt')}
                  fluid
                  className="about-car-img"
                />
              </div>
            </div>
          </Col>

          {/* Right Column: Eyebrow, Heading, Description, Checklist & CTA */}
          <Col lg={6}>
            <div className="about-content">
              <span className="section-kicker text-capitalize">
                {t('about.subtitle')}
              </span>

              <h2 className="about-title section-heading mb-3">
                {t('about.titleStart')}{' '}
                <span className="about-title-highlight">{t('about.titleHighlight')}</span>{' '}
                {t('about.titleEnd')}
              </h2>

              <p className="about-description mb-4">
                {t('about.description')}
              </p>

              <ul className="about-list list-unstyled d-flex flex-column gap-3 mb-4">
                {highlights.map((item, index) => (
                  <li key={index} className="about-list-item d-flex align-items-start gap-2">
                    <CheckCircle2
                      size={18}
                      className="about-check-icon flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                as={Link}
                to="/about"
                className="btn-common accent pill d-inline-flex align-items-center gap-2"
              >
                <span>{t('about.ctaBtn')}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
