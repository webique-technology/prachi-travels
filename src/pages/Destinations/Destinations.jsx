import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import SeoHead from '../../components/SeoHead/SeoHead';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { DESTINATION_CATEGORIES, DESTINATIONS } from '../../data/destinations';

export default function Destinations() {
  const { t, pick } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return DESTINATIONS.filter((dest) => {
      const matchCat = selectedCategory === 'All' || dest.category === selectedCategory;
      const matchQuery =
        !q ||
        dest.name.en.toLowerCase().includes(q) ||
        dest.name.hi.toLowerCase().includes(q) ||
        dest.name.mr.toLowerCase().includes(q) ||
        pick(dest.shortDesc).toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchTerm, pick]);

  return (
    <>
      <SeoHead
        title={`${t('pages.destinationsTitle')} – ${pick(SITE_CONFIG.brandName)}`}
        description={t('pages.destinationsSub')}
      />

      <section className="page-banner">
        <div className="container-custom">
          <h1 className="display-6 fw-bold mb-2">{t('pages.destinationsTitle')}</h1>
          <p className="mb-0" style={{ maxWidth: '58ch' }}>
            {t('pages.destinationsSub')}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-custom">
          <div className="travel-card p-3 p-md-4 mb-4">
            <div className="row g-3 align-items-center">
              <div className="col-lg-8">
                <div className="filter-bar w-100">
                  {DESTINATION_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className={`filter-tab ${selectedCategory === cat.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {pick(cat.label)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0 text-secondary">
                    <Search size={16} aria-hidden="true" />
                  </span>
                  <input
                    type="search"
                    className="form-control border-start-0"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t('hero.goingToPlaceholder')}
                    aria-label={t('pages.destinationsTitle')}
                  />
                </div>
              </div>
            </div>
          </div>

          {filteredDestinations.length === 0 ? (
            <div className="travel-card p-5 text-center">
              <p className="text-secondary mb-3">{t('cards.noResults')}</p>
              <button
                type="button"
                className="btn-outline-navy mx-auto"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
              >
                {t('cards.resetFilters')}
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredDestinations.map((dest) => (
                <div key={dest.id} className="col-sm-6 col-lg-4">
                  <DestinationCard destination={dest} />
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 text-center">
            <Link to="/customize-trip" className="btn-yellow">
              <SlidersHorizontal size={17} aria-hidden="true" />
              <span>{t('hero.customizeBtn')}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
