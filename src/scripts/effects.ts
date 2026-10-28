import { $, $$, reduceMotion } from './dom';

// Fade sections in as they scroll into view
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);
$$('.reveal').forEach((el) => io.observe(el));

// Scroll progress bar
const progress = $('.progress');
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Card tilt + cursor spotlight (mouse/trackpad only)
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
  $$('.tilt').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg)`;
      el.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
      el.style.setProperty('--my', `${(py + 0.5) * 100}%`);
    });
    el.addEventListener('pointerleave', () => (el.style.transform = ''));
  });

  const spot = $('.spotlight');
  addEventListener(
    'pointermove',
    (e) => {
      spot.style.setProperty('--x', `${e.clientX}px`);
      spot.style.setProperty('--y', `${e.clientY}px`);
    },
    { passive: true },
  );
}
