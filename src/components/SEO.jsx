import { Helmet } from "react-helmet-async";

const SITE_URL = "https://YOUR-DOMAIN.com";

function SEO({ data }) {
  if (!data) return null;

  const canonicalUrl = new URL(data.path, SITE_URL).href;

  const imageUrl = new URL("/images/og-image.jpg", SITE_URL).href;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{data.title}</title>

      <meta name="description" content={data.description} />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Prachi Travels" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

export default SEO;
