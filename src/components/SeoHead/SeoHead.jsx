import { useEffect } from 'react';

export default function SeoHead({ title, description }) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
  }, [title, description]);

  return null;
}
