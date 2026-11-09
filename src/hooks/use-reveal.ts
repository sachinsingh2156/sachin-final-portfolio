import { useEffect } from 'react';

/**
 * Adds `is-visible` to every `.reveal` element once it scrolls into view,
 * including elements rendered later (e.g. "show more" lists).
 */
export const useReveal = () => {
  useEffect(() => {
    const pending = () => document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');

    if (!('IntersectionObserver' in window)) {
      pending().forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    const observeAll = () => pending().forEach((el) => io.observe(el));
    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
};
