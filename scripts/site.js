(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const mobileMenu = window.matchMedia("(max-width: 640px)");

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 28);
  };
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  const closeMenu = ({ restoreFocus = false } = {}) => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Mở menu điều hướng");
    nav.classList.remove("is-open");
    if (restoreFocus) menuButton.focus();
  };

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(willOpen));
      menuButton.setAttribute("aria-label", willOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng");
      nav.classList.toggle("is-open", willOpen);
      if (willOpen && mobileMenu.matches) nav.querySelector("a")?.focus({ preventScroll: true });
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu({ restoreFocus: true });
      }
    });

    document.addEventListener("click", (event) => {
      if (menuButton.getAttribute("aria-expanded") === "true" && !header.contains(event.target)) closeMenu();
    });

    mobileMenu.addEventListener("change", (event) => {
      if (!event.matches) closeMenu();
    });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const counters = Array.from(document.querySelectorAll("[data-count]"));
  const finishCounter = (element) => {
    const value = Number(element.dataset.count);
    const suffix = element.dataset.countSuffix || "";
    element.textContent = `${new Intl.NumberFormat("vi-VN").format(value)}${suffix}`;
  };
  const animateCounter = (element) => {
    const target = Number(element.dataset.count);
    const suffix = element.dataset.countSuffix || "";
    if (!Number.isFinite(target) || reduceMotion) {
      finishCounter(element);
      return;
    }

    const duration = 1900;
    const startAt = performance.now();
    const formatter = new Intl.NumberFormat("vi-VN");
    element.textContent = `0${suffix}`;

    const tick = (now) => {
      const progress = Math.min((now - startAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = progress === 1 ? target : Math.floor(target * eased);
      element.textContent = `${formatter.format(current)}${suffix}`;
      if (progress < 1) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.55 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  if (reduceMotion || !window.gsap) return;

  const { gsap } = window;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  const introItems = gsap.utils.toArray("[data-hero-reveal]");
  if (introItems.length) {
    gsap.fromTo(introItems,
      { autoAlpha: 0, y: 25 },
      { autoAlpha: 1, y: 0, duration: 1.15, stagger: 0.12, ease: "power3.out", delay: 0.18, clearProps: "all" }
    );
  }

  const heroImage = document.querySelector(".hero-image img");
  if (heroImage) {
    gsap.fromTo(heroImage,
      { scale: 1.09 },
      { scale: 1.015, duration: 2.2, ease: "power2.out", clearProps: "transform" }
    );

    if (window.ScrollTrigger && !mobileMenu.matches) {
      gsap.to(heroImage, {
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 }
      });
    }
  }

  if (window.ScrollTrigger) {
    const processLine = document.querySelector(".process-line");
    const processList = document.querySelector(".process-list");
    if (processLine && processList) {
      gsap.fromTo(processLine,
        { scaleY: 0, transformOrigin: "top center" },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: processList, start: "top 74%", end: "bottom 70%", scrub: 0.7 } }
      );
    }

    gsap.utils.toArray("[data-reveal]").forEach((element) => {
      gsap.fromTo(element,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: { trigger: element, start: "top 87%", once: true }
        }
      );
    });

    const closingImage = document.querySelector(".closing-image img");
    if (closingImage && !mobileMenu.matches) {
      gsap.fromTo(closingImage,
        { yPercent: -5 },
        { yPercent: 5, ease: "none", scrollTrigger: { trigger: ".closing-section", start: "top bottom", end: "bottom top", scrub: 0.7 } }
      );
    }
  }
})();
