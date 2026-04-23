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

    document.querySelectorAll('.venue-section, .events-section, .happy-hours-section').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all sections immediately
    document.querySelectorAll('.venue-section, .events-section, .happy-hours-section').forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  // Drinks carousel: auto-advance; pause on hover, tab hidden, or reduced motion
  (function initDrinksCarousel() {
    var root = document.querySelector('[data-drinks-carousel]');
    if (!root) return;

    var slides = root.querySelectorAll('.drinks-carousel-slide');
    var dots = root.querySelectorAll('.drinks-carousel-dot');
    var prevBtn = root.querySelector('.drinks-carousel-prev');
    var nextBtn = root.querySelector('.drinks-carousel-next');
    var intervalMs = parseInt(root.getAttribute('data-interval'), 10) || 5000;
    var index = 0;
    var timer = null;
    var hoverPaused = false;
    var inView = false;
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setSlide(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (slide, j) {
        var active = j === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      dots.forEach(function (dot, j) {
        var active = j === index;
        dot.classList.toggle('is-active', active);
        if (active) {
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.removeAttribute('aria-current');
        }
      });
    }

    function next() {
      setSlide(index + 1);
    }

    function prev() {
      setSlide(index - 1);
    }

    function clearTimer() {
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
      }
    }

    function startAuto() {
      clearTimer();
      if (reducedMotion) return;
      timer = setInterval(next, intervalMs);
    }

    root.addEventListener('mouseenter', function () {
      hoverPaused = true;
      clearTimer();
    });
    root.addEventListener('mouseleave', function () {
      hoverPaused = false;
      if (inView && !document.hidden) startAuto();
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        clearTimer();
      } else if (inView && !hoverPaused) {
        startAuto();
      }
    });

    if ('IntersectionObserver' in window) {
      var carouselObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            inView = entry.isIntersecting;
            if (inView && !document.hidden && !hoverPaused) {
              startAuto();
            } else {
              clearTimer();
            }
          });
        },
        { threshold: 0.2 }
      );
      carouselObserver.observe(root);
    } else {
      inView = true;
      startAuto();
    }

    prevBtn.addEventListener('click', function () {
      prev();
    });
    nextBtn.addEventListener('click', function () {
      next();
    });
    dots.forEach(function (dot, j) {
      dot.addEventListener('click', function () {
        setSlide(j);
      });
    });

    setSlide(0);
  })();
})();
