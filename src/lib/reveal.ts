// Progressive-enhancement motion helpers shared by every page.
export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('.reveal');
  if (!('IntersectionObserver' in window) || reducedMotion()) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));

  // Count-up numbers: <span data-count="87">87</span>. The final value ships in
  // the HTML for crawlers and no-JS readers; it resets to 0 only when animated.
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  counters.forEach((el) => (el.textContent = `0${el.dataset.suffix ?? ''}`));
  const cio = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        cio.unobserve(el);
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? '';
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${Math.round(end * eased)}${suffix}`;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.4 },
  );
  counters.forEach((el) => cio.observe(el));
}
