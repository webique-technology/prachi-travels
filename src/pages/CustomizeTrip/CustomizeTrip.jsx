import SeoHead from '../../components/SeoHead/SeoHead';
import TripPlanner from '../../components/TripPlanner/TripPlanner';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import SEO from "../../components/SEO";
import seoData from "../../data/seoData";

export default function CustomizeTrip() {
  const { t, pick } = useLanguage();

  return (
    <>
      <SEO data={seoData.customizeTrip} />

      <section className="page-banner">
        <div className="container-custom">
          <h1 className="display-6 fw-bold mb-2">{t('planner.pageTitle')}</h1>
          <p className="mb-0" style={{ maxWidth: '58ch' }}>
            {t('planner.pageSub')}
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ paddingBottom: '6.5rem' }}>
        <div className="container-custom">
          <TripPlanner />
        </div>
      </section>
    </>
  );
}
