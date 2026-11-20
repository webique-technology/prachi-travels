import { useState } from 'react';
import { Mountain } from 'lucide-react';

export default function SmartImage({
  src,
  alt,
  className = '',
  eager = false,
  fallbackLabel = '',
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`smart-image-fallback ${className}`} role="img" aria-label={alt}>
        <Mountain size={28} aria-hidden="true" />
        <span>{fallbackLabel || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
}
