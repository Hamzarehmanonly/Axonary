type MetaAttribute = 'name' | 'property';

export const SITE_URL = 'https://axonary.com';

export const setMetaTag = (attribute: MetaAttribute, key: string, content: string) => {
  let metaTag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, key);
    document.head.appendChild(metaTag);
  }

  metaTag.content = content;
};

export const setCanonicalUrl = (url: string) => {
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  canonical.href = url;
};

export const setJsonLd = (id: string, data: Record<string, unknown>) => {
  let script = document.querySelector<HTMLScriptElement>(`script[data-json-ld="${id}"]`);

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.jsonLd = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

export const removeJsonLd = (id: string) => {
  document.querySelector<HTMLScriptElement>(`script[data-json-ld="${id}"]`)?.remove();
};
