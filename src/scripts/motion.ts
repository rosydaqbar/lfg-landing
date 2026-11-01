import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Smooth scrolling ---------- */
if (!reduce) {
  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.09,
    wheelMultiplier: 0.95,
    anchors: { offset: -24 },
  });
  // Expose for components (e.g. closing the mobile menu before scrolling).
  (window as unknown as { lenis: Lenis }).lenis = lenis;
}

/* ---------- Section reveals ----------
   Content is visible by default; only elements that start below the fold are armed,
   so a failed script never hides the page. */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window && targets.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.setAttribute('data-shown', '');
        io.unobserve(el);
        // Hand transitions back to the components (hover, focus) once the reveal settles.
        window.setTimeout(() => el.removeAttribute('data-armed'), 2200);
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
  );

  targets.forEach((el) => {
    // Stagger direct children of groups.
    if (el.hasAttribute('data-reveal-group')) {
      Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--ri', String(i)));
    }
    if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
      el.setAttribute('data-armed', '');
      io.observe(el);
    }
  });
}
