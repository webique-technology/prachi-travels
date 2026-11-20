import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import PackageCard from '../../components/PackageCard/PackageCard';
import SeoHead from '../../components/SeoHead/SeoHead';
import { SITE_CONFIG } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { PACKAGE_CATEGORIES, TOUR_PACKAGES } from '../../data/packages';

const DESTINATION_FILTERS = [
  'All',
  'Nashik',
  'Trimbakeshwar',
  'Shirdi',
  'Shani Shingnapur',
  'Ashtavinayak',
  'Jyotirlinga',
  'Pandharpur',
  'Kolhapur',
  'Ellora',
  'Ajanta',
  'Mahabaleshwar',
  'Lonavala',
  'Matheran',
  'Konkan',
  'Ganpatipule',
];

export default function Packages() {
  const { t, pick } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const filteredPackages = useMemo(() => {
    return TOUR_PACKAGES.filter((pkg) => {
      const matchCat = selectedCategory === 'All' || pkg.category === selectedCategory;
      const matchDest =
        selectedDestination === 'All' ||
        pkg.placesCovered.some((place) =>
          place.toLowerCase().includes(selectedDestination.toLowerCase()),
        );

      let matchDur = true;
      if (selectedDuration === '1-2') matchDur = pkg.durationDays <= 2;
      if (selectedDuration === '3') matchDur = pkg.durationDays === 3;
      if (selectedDuration === '4+') matchDur = pkg.durationDays >= 4;

      return matchCat && matchDest && matchDur;
    });
  }, [selectedCategory, selectedDestination, selectedDuration]);

  return (
    <>
      <SeoHead
        title={`${t('pages.packagesTitle')} – ${pick(SITE_CONFIG.brandName)}`}
        description={t('pages.packagesSub')}
      />

      <section className="page-banner">
        <div className="container-custom">
          <h1 className="display-6 fw-bold mb-2">{t('pages.packagesTitle')}</h1>
          <p className="mb-0" style={{ maxWidth: '58ch' }}>
            {t('pages.packagesSub')}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-custom">
          <div className="travel-card p-3 p-md-4 mb-4">
            <div className="row g-3 align-items-center">
              <div className="col-lg-7">
                <div className="filter-bar w-100">
                  {PACKAGE_CATEGORIES.map((cat) => (
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

              <div className="col-sm-6 col-lg-3">
                <select
                  aria-label={t('cards.allDestinations')}
                  className="form-select"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                >
                  {DESTINATION_FILTERS.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest === 'All' ? t('cards.allDestinations') : dest}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-sm-6 col-lg-2">
                <select
                  aria-label={t('cards.allDurations')}
                  className="form-select"
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  <option value="All">{t('cards.allDurations')}</option>
                  <option value="1-2">1–2 {t('planner.days')}</option>
                  <option value="3">3 {t('planner.days')}</option>
                  <option value="4+">4+ {t('planner.days')}</option>
                </select>
              </div>
            </div>
          </div>

          {filteredPackages.length === 0 ? (
            <div className="travel-card p-5 text-center">
              <p className="text-secondary mb-3">{t('cards.noResults')}</p>
              <button
                type="button"
                className="btn-outline-navy mx-auto"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedDestination('All');
                  setSelectedDuration('All');
                }}
              >
                {t('cards.resetFilters')}
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredPackages.map((pkg) => (
                <div key={pkg.id} className="col-md-6 col-lg-4">
                  <PackageCard pkg={pkg} />
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
