/**
 * Lepuski Bar & Nightclub — minimal JS
 * Smooth scroll for anchor links; scroll-triggered animations
 */

(function () {
  'use strict';

  // Smooth scroll for in-page anchor links (polyfill for older browsers that ignore CSS scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    var target = document.querySelector(targetId);
    if (!target) return;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Scroll-triggered animations: add .in-view when elements enter viewport
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );

    document.querySelectorAll('.venue-section, .events-section').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all sections immediately
    document.querySelectorAll('.venue-section, .events-section').forEach(function (el) {
      el.classList.add('in-view');
    });
  }
})();
