import { useRef } from "react";
import { Card, Image } from "react-bootstrap";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { useLanguage } from "../../context/LanguageContext";
import { DEMO_TESTIMONIALS } from "../../data/testimonials";

const USER_PLACEHOLDER_AVATAR =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' rx='40' fill='%23eaf5fb'/%3E%3Ccircle cx='40' cy='31' r='14' fill='%232196D2'/%3E%3Cpath d='M16 70c4-14 14-21 24-21s20 7 24 21' fill='%232196D2'/%3E%3C/svg%3E";

export default function Testimonial() {
  const { t, pick } = useLanguage();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="testimonial-section">
      {/* Section Header + Custom Swiper Navigation Arrows */}
      <div className="title-block-mb-50 d-flex flex-row align-items-center flex-md-row align-items-md-end justify-content-between gap-3">
        <div className="d-flex flex-column align-items-start align-items-sm-start">
          <span className="section-kicker">
            {t("sections.testimonialsKicker")}
          </span>
          <h2 className="section-heading mb-1">
            {t("sections.testimonialsTitle")}
          </h2>
          <p className="text-secondary mb-0 small text-start text-sm-start">
            {t("sections.testimonialsNote")}
          </p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            ref={prevRef}
            type="button"
            className="btn-outline-navy px-3 testimonial-nav-btn rounded-circle"
            aria-label="Previous"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="btn-outline-navy px-3 testimonial-nav-btn rounded-circle"
            aria-label="Next"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Responsive Swiper Carousel: 1.2 Mobile | 2 Tablet | 3 Desktop */}
      <Swiper
        modules={[Navigation, Pagination , Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={20}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="testimonial-swiper card-swiper"
      >
        {DEMO_TESTIMONIALS.map((item) => {
          const rating = item.rating || 5;

          return (
            <SwiperSlide key={item.id} className="h-auto">
              <Card className="testimonial-card h-100">
                <Card.Body className="testimonial-card-body d-flex flex-column">
                  {/* Top Tinted Quote Panel (matching reference card layout) */}
                  <div className="testimonial-quote-box flex-grow-1 d-flex flex-column">
                    <div className="testimonial-quote-header d-flex align-items-center justify-content-between gap-2">
                      <div className="testimonial-badge d-inline-flex align-items-center gap-2">
                        <Quote
                          size={17}
                          className="testimonial-quote-icon"
                          aria-hidden="true"
                        />
                        <span>{t("sections.testimonialsKicker")}</span>
                      </div>

                      <div
                        className="testimonial-stars d-inline-flex align-items-center gap-1"
                        aria-label={`${rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            size={15}
                            className={
                              idx < rating ? "star-filled" : "star-muted"
                            }
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>

                    <div
                      className="testimonial-dashed-divider"
                      aria-hidden="true"
                    />

                    <p className="testimonial-quote-text mb-0">
                      “{pick(item.quote)}”
                    </p>
                  </div>

                  {/* Bottom User Avatar + Name & Trip Meta */}
                  <div className="testimonial-author d-flex align-items-center gap-3 pt-3 px-1">
                    <Image
                      src={item.avatar || USER_PLACEHOLDER_AVATAR}
                      alt={item.customerName}
                      roundedCircle
                      className="testimonial-avatar flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <strong className="testimonial-author-name d-block text-truncate">
                        {item.customerName}
                      </strong>
                      <div className="meta-line testimonial-author-meta">
                        <span>{pick(item.city)}</span>
                        <span className="meta-sep" aria-hidden="true">
                          ·
                        </span>
                        <span>{pick(item.tripTaken)}</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
