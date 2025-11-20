export function slugify(s: string) {
  return encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));
}
