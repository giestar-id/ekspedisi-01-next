"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Client-side behaviors ported from the original script.js:
 * mobile sidebar, nav solid on scroll, GSAP reveal animations,
 * stat counters, accordion, step cards, advantages dots.
 */
export default function ClientEffects() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ---------- Mobile sidebar ----------
    const menuBtn = document.getElementById("menu-btn");
    const mobilePanel = document.getElementById("mobile-panel");
    const mobileOverlay = document.getElementById("mobile-overlay");
    const iconOpen = document.getElementById("icon-open");
    const iconClose = document.getElementById("icon-close");
    const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

    function openMenu() {
      mobilePanel.classList.remove("mobile-closed");
      mobilePanel.classList.add("mobile-open");
      mobileOverlay.classList.add("overlay-open");
      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
      menuBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      mobilePanel.classList.remove("mobile-open");
      mobilePanel.classList.add("mobile-closed");
      mobileOverlay.classList.remove("overlay-open");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    const onMenuBtn = () =>
      mobilePanel.classList.contains("mobile-open") ? closeMenu() : openMenu();
    menuBtn?.addEventListener("click", onMenuBtn);
    mobileOverlay?.addEventListener("click", closeMenu);
    sidebarCloseBtn?.addEventListener("click", closeMenu);
    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    gsap.registerPlugin(ScrollTrigger);

    // ---------- Nav solid on scroll ----------
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: { targets: "#site-nav", className: "nav-solid" },
    });

    let cleanupFns = [];

    if (prefersReduced) {
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      cleanupFns.push(() => window.removeEventListener("load", refresh));
    } else {
      // ---------- Hero intro ----------
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("#site-nav", { y: -20, opacity: 0, duration: 0.5 }, 0)
        .from("#home .absolute > video", {
          scale: 1.08,
          duration: 1.4,
          ease: "power2.out",
        }, 0)
        .from("#home .mask-line", { yPercent: 115, duration: 0.7, stagger: 0.08 }, 0.15)
        .from(".hero-sub", { y: 24, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(".hero-cta > *", { y: 24, opacity: 0, duration: 0.2, stagger: 0.03 }, "-=0.3");

      // Hero safety net: if intro is interrupted, clear styles and ensure visibility.
      const ensureHeroVisible = () =>
        gsap.set("#home .mask-line, .hero-sub, .hero-cta > *", {
          clearProps: "all",
        });
      tl.eventCallback("onComplete", ensureHeroVisible);
      const heroTimeout = setTimeout(ensureHeroVisible, 3500);

      cleanupFns.push(() => {
        clearTimeout(heroTimeout);
        tl.kill();
      });

      // =====================================================
      // FAIL-SAFE REVEAL SYSTEM
      // =====================================================
      const items = [];

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        items.push({ el, delay: 0, mask: false });
      });

      gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
        Array.prototype.forEach.call(group.children, (child, i) => {
          items.push({ el: child, delay: i * 0.09, mask: false });
        });
      });

      gsap.utils
        .toArray("section:not(#home) .mask-line")
        .forEach((line) => {
          items.push({ el: line, delay: 0, mask: true });
        });

      function isInView(el, margin) {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight + margin && r.bottom > -margin;
      }

      // Hide ONLY elements below the viewport when the page opens.
      // Read all geometry first, then mutate styles. Interleaving a rect read
      // with gsap.set for every element forces repeated synchronous layouts.
      const initiallyVisible = items.map((it) => isInView(it.el, 0));
      items.forEach((it, index) => {
        if (!initiallyVisible[index]) {
          if (it.mask) {
            gsap.set(it.el, { yPercent: 115 });
          } else {
            gsap.set(it.el, { opacity: 0, y: 44 });
          }
        } else {
          it.shown = true;
        }
      });

      function showItem(it) {
        if (it.shown) return;
        it.shown = true;
        gsap.to(it.el, {
          opacity: 1,
          y: 0,
          yPercent: 0,
          duration: it.mask ? 1 : 0.85,
          ease: it.mask ? "power4.out" : "power3.out",
          delay: it.delay,
          overwrite: "auto",
        });
      }

      // Normal path: triggered by scroll.
      items.forEach((it) => {
        const st = ScrollTrigger.create({
          trigger: it.el,
          start: "top 94%",
          once: true,
          onEnter: () => showItem(it),
        });
        cleanupFns.push(() => st.kill());
      });

      // Fallback path: every 700ms, force-show hidden elements
      // that have entered the viewport — regardless of trigger state.
      const sweepTimer = setInterval(() => {
        let remaining = 0;
        items.forEach((it) => {
          if (it.shown) return;
          remaining++;
          if (isInView(it.el, 120)) {
            showItem(it);
            remaining--;
          }
        });
        if (remaining === 0) clearInterval(sweepTimer);
      }, 700);

      // ---------- Stat counters ----------
      function formatNumber(value, decimals) {
        if (decimals > 0) {
          return value.toFixed(decimals);
        }
        return String(Math.round(value));
      }

      gsap.utils.toArray("[data-count]").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count"));
        const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";

        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => {
            const obj = { v: 0 };
            gsap.to(obj, {
              v: target,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = formatNumber(obj.v, decimals) + suffix;
              },
            });
          },
        });
        cleanupFns.push(() => st.kill());
      });

      // ---------- Container drop animation ----------
      const containerImg = document.querySelector(
        "#advantages img[alt='EXPRESS Container']"
      );
      if (containerImg) {
        const tween = gsap.from(containerImg, {
          y: -300,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#advantages",
            start: "top 80%",
            once: true,
          },
        });
        cleanupFns.push(() => tween.kill());
      }

      // ---------- Truck slide from right ----------
      const truckImg = document.querySelector(
        "img[alt='EXPRESS Logistics Truck']"
      );
      if (truckImg) {
        const tween = gsap.from(truckImg, {
          x: 300,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            once: true,
          },
        });
        cleanupFns.push(() => tween.kill());
      }

      // ---------- Advantages headline animations ----------
      const advantagesTexts = document.querySelectorAll(
        "#advantages .absolute span"
      );
      if (advantagesTexts.length >= 2) {
        const t1 = gsap.from(advantagesTexts[0], {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#advantages",
            start: "top 80%",
            once: true,
          },
        });
        const t2 = gsap.from(advantagesTexts[1], {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: "#advantages",
            start: "top 80%",
            once: true,
          },
        });
        cleanupFns.push(() => {
          t1.kill();
          t2.kill();
        });
      }
    }

    const onLoadRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoadRefresh);

    // ---------- Accordion ----------
    const accordionBtns = document.querySelectorAll(".accordion-trigger");
    const onAccordionClick = (btn) => {
      const item = btn.closest(".accordion-item");
      const isOpen = item.classList.contains("active");

      document
        .querySelectorAll(".accordion-item")
        .forEach((el) => el.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    };
    const accordionBindings = [];
    accordionBtns.forEach((btn) => {
      const handler = () => onAccordionClick(btn);
      btn.addEventListener("click", handler);
      accordionBindings.push([btn, handler]);
    });

    // ---------- Step cards ----------
    const stepCards = document.querySelectorAll(".step-card");
    const onStepClick = (card) => {
      const isActive = card.classList.contains("active");
      stepCards.forEach((c) => c.classList.remove("active"));
      if (!isActive) {
        card.classList.add("active");
      }
    };
    const stepBindings = [];
    stepCards.forEach((card) => {
      const handler = () => onStepClick(card);
      card.addEventListener("click", handler);
      stepBindings.push([card, handler]);
    });

    // ---------- Advantages dots ----------
    const advBar = document.getElementById("advantages-bar");
    const advDots = document.querySelectorAll(".adv-dot");
    let onAdvScroll;
    if (advBar && advDots.length) {
      const updateDots = () => {
        const slides = advBar.querySelectorAll(".adv-slide");
        if (!slides.length) return;
        let idx = 0;
        let minDist = Infinity;
        slides.forEach((s, i) => {
          const dist = Math.abs(s.offsetLeft - advBar.scrollLeft);
          if (dist < minDist) {
            minDist = dist;
            idx = i;
          }
        });
        advDots.forEach((dot, i) => {
          dot.style.background =
            i === idx ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)";
        });
      };
      onAdvScroll = updateDots;
      advBar.addEventListener("scroll", updateDots);
      updateDots();
    }

    return () => {
      cleanupFns.forEach((fn) => fn());
      menuBtn?.removeEventListener("click", onMenuBtn);
      mobileOverlay?.removeEventListener("click", closeMenu);
      sidebarCloseBtn?.removeEventListener("click", closeMenu);
      mobileLinks.forEach((link) =>
        link.removeEventListener("click", closeMenu)
      );
      accordionBindings.forEach(([btn, handler]) =>
        btn.removeEventListener("click", handler)
      );
      stepBindings.forEach(([card, handler]) =>
        card.removeEventListener("click", handler)
      );
      if (advBar && onAdvScroll) {
        advBar.removeEventListener("scroll", onAdvScroll);
      }
      window.removeEventListener("load", onLoadRefresh);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
