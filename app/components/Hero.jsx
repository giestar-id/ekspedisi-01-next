"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const POSTER_SRC = "/media/hero-poster-opt.jpg";
const VIDEO_SRC = "/media/bg-vidio.mp4";

/**
 * Hero section.
 *
 * Perf strategy:
 * 1. A lightweight poster image (next/image, priority) is the LCP — painted instantly.
 * 2. The video element sits on top with opacity 0 and starts buffering in the background.
 * 3. Once the video can play through, we crossfade it in over the poster.
 * 4. If the video never becomes playable (slow network), the poster simply remains —
 *    the user always sees a complete hero.
 */
export default function Hero() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [posterReady, setPosterReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!posterReady) return;

    const connection = navigator.connection;
    const shouldKeepPoster =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      connection?.saveData;

    if (shouldKeepPoster) return;

    // Keep the video completely out of the initial network queue. The poster
    // gets the bandwidth first; video loading begins when the browser is idle.
    let idleId;
    const startVideoLoad = () => setShouldLoadVideo(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(startVideoLoad, { timeout: 1500 });
    } else {
      idleId = window.setTimeout(startVideoLoad, 250);
    }

    return () => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, [posterReady]);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const showVideo = () => setVideoReady(true);

    // loadeddata/readyState 2 means the first frame is decoded. Waiting for
    // canplaythrough can leave the poster visible forever on mobile browsers.
    if (video.readyState >= 2) {
      setVideoReady(true);
    } else {
      video.addEventListener("loadeddata", showVideo, { once: true });
    }

    // Save bandwidth: don't play while the hero is off screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.readyState >= 2) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(sectionRef.current);

    return () => {
      video.removeEventListener("loadeddata", showVideo);
      observer.disconnect();
    };
  }, [shouldLoadVideo]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-end overflow-hidden bg-zinc-950"
    >
      <div className="absolute -inset-8 z-0 md:inset-0">
        {/* Poster image: painted immediately, stays visible until video is ready */}
        <Image
          src={POSTER_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onLoad={() => setPosterReady(true)}
        />

        {/* Video: transparent until fully buffered, then fades in over the poster */}
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={shouldLoadVideo ? VIDEO_SRC : undefined}
          autoPlay
          muted
          loop
          playsInline
          preload={shouldLoadVideo ? "auto" : "none"}
          disablePictureInPicture
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/50 to-zinc-950/20" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-zinc-950/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-4 pt-32 md:pb-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-[3.25rem] lg:text-[4rem]">
              <span className="mask-wrap block">
                <span className="mask-line block">Unrivaled logistics.</span>
              </span>
              <span className="mask-wrap block">
                <span className="mask-line block">
                  Uncompromising <span className="text-brand">precision.</span>
                </span>
              </span>
            </h1>

            <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 rounded-full bg-brand py-2 pl-8 pr-2 text-base font-medium text-white transition hover:bg-brand-dark active:scale-[0.98]"
              >
                Start Shipping
                <span className="grid size-10 place-items-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:rotate-45">
                  <i className="ph-bold ph-arrow-up-right text-lg" />
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-base font-medium text-white transition hover:bg-white hover:text-ink active:scale-[0.98]"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="hero-sub w-full rounded-2xl border border-white/15 bg-white/10 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:max-w-sm lg:w-auto lg:max-w-xs">
            <i className="ph-bold ph-package mb-3 block text-2xl text-brand" />
            <p className="text-sm font-normal leading-relaxed text-white/80 md:text-base">
              Empowering your supply chain with seamless, end-to-end logistics
              solutions across the Indonesian archipelago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
