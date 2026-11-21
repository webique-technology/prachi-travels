import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import SeoHead from "../../components/SeoHead/SeoHead";
import { SITE_CONFIG } from "../../config/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import SEO from "../../components/SEO";
import seoData from "../../data/seoData";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { CONTACT_FAQS } from "../../i18n/translations";

export default function Contact() {
  const { t, pick } = useLanguage();
  const quickWaUrl = buildWhatsAppUrl({
    serviceType: "Contact Desk Enquiry",
    pickupLocation: "Nashik",
  });

  return (
    <>
      <SEO data={seoData.contact} />

      <section className="page-banner">
        <div className="container-custom">
          <h1 className="display-6 fw-bold mb-2">{t("pages.contactTitle")}</h1>
          <p className="mb-0" style={{ maxWidth: "58ch" }}>
            {t("pages.contactSub")}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-custom">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5 d-flex flex-column gap-4">
              <div className="travel-card p-4">
                <h2 className="h5 fw-bold mb-3">{t("footer.contactDesk")}</h2>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-4 small">
                  <li className="d-flex align-items-start gap-2">
                    <MapPin
                      size={18}
                      style={{ color: "#2196d2" }}
                      className="flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-dark">
                      {pick(SITE_CONFIG.address)}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <Phone
                      size={18}
                      style={{ color: "#2196d2" }}
                      className="flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-dark">
                      {SITE_CONFIG.displayPhone}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <Mail
                      size={18}
                      style={{ color: "#2196d2" }}
                      className="flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-dark">{SITE_CONFIG.email}</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <Clock
                      size={18}
                      style={{ color: "#2196d2" }}
                      className="flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-dark">
                      {pick(SITE_CONFIG.businessHours)}
                    </span>
                  </li>
                </ul>

                <a
                  href={quickWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-100 justify-content-center"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>{t("footer.chatWa")}</span>
                </a>
              </div>

              <div className="travel-card p-4 bg-white">
                <h3 className="h6 fw-bold mb-2">
                  {pick({
                    en: "Nashik Pickup Areas",
                    hi: "नासिक पिकअप क्षेत्र",
                    mr: "नाशिक पिकअप क्षेत्रे",
                  })}
                </h3>
                <p className="small text-secondary mb-0">
                  College Road · Gangapur Road · Panchavati · Indira Nagar ·
                  Cidco · Nashik Road Station · Ozar Airport
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0 contact-map-faq-section">
        <Container>
          <Row className="g-4 align-items-stretch">
            {/* Left 50%: Google Map Embed */}
            <Col lg={6}>
              <div className="map-main-box h-100 rounded-4 overflow-hidden border bg-white">
                <iframe
                  title={pick(SITE_CONFIG.brandName)}
                  src="https://www.google.com/maps?q=Nashik,Maharashtra&output=embed"
                  className="map-embed-frame w-100 h-100 border-0 d-block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Col>

            {/* Right 50%: React Bootstrap Accordion FAQ (Max 4) */}
            <Col lg={6}>
              <div className="faq-main-box h-100">
                <Accordion
                  defaultActiveKey="0"
                  className="contact-faq-accordion"
                >
                  {CONTACT_FAQS.slice(0, 4).map((faq, index) => (
                    <Accordion.Item
                      key={faq.id}
                      eventKey={String(index)}
                      className="contact-faq-item"
                    >
                      <Accordion.Header className="contact-faq-header">
                        <span
                          className="faq-question-badge d-inline-flex align-items-center justify-content-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          ?
                        </span>
                        <span className="faq-question-text">
                          {pick(faq.question)}
                        </span>
                      </Accordion.Header>
                      <Accordion.Body className="contact-faq-body">
                        {pick(faq.answer)}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
