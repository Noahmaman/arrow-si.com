// Small progressive-enhancement helpers shared by every page.
export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initMotion() {
  // fade-up reveals
  const items = document.querySelectorAll<HTMLElement>('.reveal');
  if (!('IntersectionObserver' in window) || reduced()) {
    items.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    items.forEach((el) => io.observe(el));
  }

  // number tickers: <span data-count="105">105</span>
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!reduced() && 'IntersectionObserver' in window) {
    counters.forEach((el) => (el.textContent = '0'));
    const cio = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        cio.unobserve(el);
        const end = Number(el.dataset.count);
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1300);
          el.textContent = String(Math.round(end * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    counters.forEach((el) => cio.observe(el));
  }
}
