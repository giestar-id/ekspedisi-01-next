import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeferredClientEffects from "./components/DeferredClientEffects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DeferredClientEffects />

      {/* ============ ABOUT ============ */}
      <section id="about" className="bg-white pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-[4.125rem]">
                <span className="mask-wrap block">
                  <span className="mask-line block">End-to-end logistics.</span>
                </span>
                <span className="mask-wrap block">
                  <span className="mask-line block">
                    Delivered to your <span className="text-brand">door.</span>
                  </span>
                </span>
              </h2>
              <p
                data-reveal
                className="mt-6 max-w-lg text-base leading-relaxed text-zinc-500"
              >
                Founded in 2013, EXPRESS has evolved from a single truck into a
                nationwide powerhouse. Today, we orchestrate the movement of
                hundreds of thousands of shipments monthly across complex land,
                sea, and air networks. Our singular commitment: flawless
                delivery, every single time.
              </p>
            </div>

            <div className="relative">
              <div
                data-reveal
                className="flex items-center justify-center overflow-hidden rounded-2xl py-4"
              >
                <div className="absolute bottom-8 left-8 right-8 top-6 -skew-x-[3.9deg] rounded-xl bg-brand opacity-90" />

                <div
                  data-reveal-group
                  className="stats-slant-group absolute left-16 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3"
                >
                  <div className="skew-stat">
                    <div className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                      <span data-count="12" data-decimals="0" data-suffix="+">
                        12+
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-white/80">
                      Years of Excellence
                    </p>
                  </div>
                  <div className="skew-stat">
                    <div className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                      <span data-count="34" data-decimals="0" data-suffix="">
                        34
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-white/80">
                      Provinces Connected
                    </p>
                  </div>
                  <div className="skew-stat">
                    <div className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                      <span data-count="250" data-decimals="0" data-suffix="k+">
                        250k+
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-white/80">
                      Monthly Shipments
                    </p>
                  </div>
                  <div className="skew-stat">
                    <div className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                      <span
                        data-count="99.2"
                        data-decimals="1"
                        data-suffix="%"
                      >
                        99.2%
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-white/80">
                      On-Time Success Rate
                    </p>
                  </div>
                </div>

                <Image
                  src="/media/truk.png"
                  alt="EXPRESS Logistics Truck"
                  width={700}
                  height={356}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="relative z-10 h-auto w-[150%] max-w-none object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-dark pt-16 pb-16 text-white md:pt-24 md:pb-20"
      >
        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-white/5" />
        <div className="absolute right-1/3 top-1/2 size-48 -translate-y-1/2 rounded-full bg-white/[0.03]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-[4.125rem]">
                <span className="mask-wrap block">
                  <span className="mask-line block">Infinite routes.</span>
                </span>
                <span className="mask-wrap block">
                  <span className="mask-line block">
                    One reliable <span className="text-white">partner.</span>
                  </span>
                </span>
              </h2>
            </div>
            <p
              data-reveal
              className="max-w-md text-base leading-relaxed text-white/80"
            >
              An integrated suite of logistics services engineered to scale
              alongside your business demands.
            </p>
          </div>

          <div data-reveal-group className="mt-14 flex flex-col">
            {[
              {
                icon: "ph-truck",
                title: "Land Trucking",
                desc: "Robust LTL & FTL capabilities with optimized intercity routing, bridging major economic hubs to remote frontiers.",
              },
              {
                icon: "ph-boat",
                title: "Sea Freight FCL & LCL",
                desc: "Scalable maritime freight solutions designed for maximum cost-efficiency and reliable inter-island transit.",
              },
              {
                icon: "ph-airplane-takeoff",
                title: "Air Cargo",
                desc: "Premium air freight for time-critical and high-value shipments, leveraging daily departures from major aviation hubs.",
              },
              {
                icon: "ph-warehouse",
                title: "Warehousing",
                desc: "State-of-the-art storage facilities integrated with advanced inventory management. Streamline your distribution strategy.",
              },
              {
                icon: "ph-lightning",
                title: "Same-Day Express",
                desc: "Hyper-expedited same-day transit for your most urgent deliverables.",
              },
              {
                icon: "ph-crane",
                title: "Project Cargo",
                desc: "Bespoke logistical engineering for oversized industrial machinery, encompassing full permit acquisition and escort coordination.",
              },
            ].map((svc) => (
              <article
                key={svc.title}
                className="accordion-item group transition duration-300"
              >
                <button className="accordion-trigger flex w-full items-center gap-5 p-6 text-left">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-2xl text-brand">
                    <i className={`ph ${svc.icon}`} />
                  </div>
                  <h3 className="flex-1 text-xl font-bold text-ink">
                    {svc.title}
                  </h3>
                  <i className="ph ph-plus accordion-icon text-xl text-zinc-400 transition-transform duration-300" />
                </button>
                <div className="accordion-content">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-500">
                    {svc.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ADVANTAGES ============ */}
      <section
        id="advantages"
        className="relative flex min-h-[650px] flex-col overflow-hidden pt-8 pb-4 md:pt-12 md:pb-6"
      >
        <Image
          src="/media/containers.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <Image
          src="/media/container.png"
          alt="EXPRESS Container"
          width={500}
          height={500}
          sizes="(min-width: 768px) 560px, 380px"
          className="absolute left-1/2 top-0 z-10 h-auto w-[380px] -translate-x-1/2 object-contain md:w-[560px]"
        />

        <div className="absolute inset-0 z-[5] flex flex-col items-center justify-start px-6 pt-12 md:pt-4">
          <span className="block text-center text-5xl font-medium leading-none text-white md:text-[6rem]">
            Why industry leaders trust
          </span>
          <span className="mt-8 block text-center text-[7rem] font-bold leading-none text-brand md:text-[16rem]">
            Express
          </span>
        </div>

        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6">
          <div id="advantages-bar" className="mt-auto sm:mx-0">
            <div className="adv-slide active flex flex-1 items-center gap-3 p-5">
              <i className="ph-bold ph-seal-check shrink-0 text-2xl text-brand" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  Real-Time Tracking
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  Gain complete operational visibility with our interactive
                  tracking dashboard and automated milestone alerts.
                </p>
              </div>
            </div>
            <div className="adv-slide flex flex-1 items-center gap-3 p-5">
              <i className="ph-bold ph-shield-check shrink-0 text-2xl text-brand" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  Full Cargo Insurance
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  Safeguard your assets with our transparent, all-risk cargo
                  insurance policies.
                </p>
              </div>
            </div>
            <div className="adv-slide flex flex-1 items-center gap-3 p-5">
              <i className="ph-bold ph-headset shrink-0 text-2xl text-brand" />
              <div>
                <h4 className="text-sm font-bold text-white">24/7 Support</h4>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  Experience uncompromised support with our 24/7 dedicated
                  customer success team.
                </p>
              </div>
            </div>
            <div className="adv-slide flex flex-1 items-center gap-3 p-5">
              <i className="ph-bold ph-globe-hemisphere-west shrink-0 text-2xl text-brand" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  Own Fleet &amp; Warehouses
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  Benefit from our wholly-owned infrastructure, ensuring
                  absolute control over scheduling, security, and
                  cost-efficiency.
                </p>
              </div>
            </div>
          </div>
          <div id="adv-dots" className="mt-3 flex justify-center gap-2 sm:hidden">
            <span className="adv-dot size-2.5 rounded-full bg-white/40" />
            <span className="adv-dot size-2.5 rounded-full bg-white/40" />
            <span className="adv-dot size-2.5 rounded-full bg-white/40" />
            <span className="adv-dot size-2.5 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section id="process" className="bg-zinc-50 py-32 md:py-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-[4.125rem]">
              <span className="mask-wrap block">
                <span className="mask-line block">
                  A streamlined process.
                </span>
              </span>
              <span className="mask-wrap block">
                <span className="mask-line block">
                  Engineered for <span className="text-brand">efficiency.</span>
                </span>
              </span>
            </h2>
            <p
              data-reveal
              className="max-w-md text-base leading-relaxed text-zinc-500"
            >
              Experience a frictionless logistical journey tailored for maximum
              predictability.
            </p>
          </div>

          <div data-reveal-group className="step-list mt-14 flex flex-col">
            {[
              {
                num: "01",
                title: "Order",
                img: "/media/01.jpg",
                desc: "Initiate your shipment seamlessly through our integrated client portal or direct communication channels.",
              },
              {
                num: "02",
                title: "Pickup",
                img: "/media/02.jpg",
                desc: "Our fleet is deployed with precision timing to securely collect and process your assets.",
              },
              {
                num: "03",
                title: "Ship",
                img: "/media/03.jpg",
                desc: "Your cargo is mobilized across our optimized network, providing you with continuous transit visibility.",
              },
              {
                num: "04",
                title: "Receive",
                img: "/media/04.jpg",
                desc: "Final mile execution is completed flawlessly, accompanied by immediate, verified proof of delivery.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="step-card relative overflow-hidden"
              >
                <Image
                  src={step.img}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 80rem, 100vw"
                  className="object-cover"
                />
                <div className="step-overlay absolute inset-0 z-10 bg-white transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                <div className="step-content relative z-20 p-8">
                  <span className="step-num text-6xl font-black leading-none text-brand md:text-7xl">
                    {step.num}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="bg-brand py-32 text-white md:py-48">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-medium leading-[1.02] tracking-tight md:text-[4.875rem]">
              <span className="mask-wrap block">
                <span className="mask-line block">Ready to elevate</span>
              </span>
              <span className="mask-wrap block">
                <span className="mask-line block">your logistics?</span>
              </span>
            </h2>
            <p
              data-reveal
              className="mt-6 max-w-md text-lg font-normal leading-relaxed text-white/85"
            >
              Partner with EXPRESS and transform your supply chain. Reach out
              today for a tailored logistical strategy.
            </p>
          </div>

          <div
            data-reveal
            className="rounded-2xl bg-white p-8 text-ink shadow-[0_32px_64px_-24px_rgba(0,0,0,0.35)] md:p-10"
          >
            <div className="space-y-6">
              <a href="tel:+6281210002026" className="group flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-2xl text-brand transition group-hover:bg-brand group-hover:text-white">
                  <i className="ph ph-phone" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-zinc-400">
                    Phone / WhatsApp
                  </span>
                  <span className="block text-lg font-bold">
                    +62 812 1000 2026
                  </span>
                </span>
              </a>
              <a href="mailto:halo@express.id" className="group flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-2xl text-brand transition group-hover:bg-brand group-hover:text-white">
                  <i className="ph ph-envelope-simple" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-zinc-400">
                    Email
                  </span>
                  <span className="block text-lg font-bold">halo@express.id</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-2xl text-brand">
                  <i className="ph ph-map-pin" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-zinc-400">
                    Head Office
                  </span>
                  <span className="block text-lg font-bold leading-snug">
                    Pelabuhan Niaga St. No. 8, North Jakarta
                  </span>
                </span>
              </div>
            </div>

            <a
              href="mailto:halo@express.id"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-medium text-white transition hover:bg-brand-dark active:scale-[0.98]"
            >
              Contact Us
              <i className="ph-bold ph-arrow-up-right text-lg" />
            </a>
            <p className="mt-4 text-center text-xs font-medium text-zinc-400">
              Expect a response within 15 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#111113] text-zinc-400">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/media/container.png"
                  alt="EXPRESS Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto rounded-lg bg-white p-1"
                />
                <span className="text-xl font-extrabold tracking-tight text-white">
                  EXPRESS
                </span>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed">
                Indonesia&apos;s premier integrated logistics network. Proudly
                operated by PT Express Logistik Nusantara.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-bold text-zinc-500">Navigation</h5>
              <ul className="mt-5 space-y-3 text-sm font-medium">
                <li>
                  <a href="#about" className="transition hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#advantages" className="transition hover:text-white">
                    Advantages
                  </a>
                </li>
                <li>
                  <a href="#process" className="transition hover:text-white">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-bold text-zinc-500">Contact</h5>
              <ul className="mt-5 space-y-3 text-sm font-medium">
                <li>+62 812 1000 2026</li>
                <li>halo@express.id</li>
                <li>
                  Pelabuhan Niaga St. No. 8,
                  <br />
                  North Jakarta 14240
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-lg transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <i className="ph ph-instagram-logo" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-lg transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <i className="ph ph-linkedin-logo" />
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-lg transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <i className="ph ph-whatsapp-logo" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs font-medium sm:flex-row sm:items-center">
            <p>© 2026 PT Express Logistik Nusantara. All rights reserved.</p>
            <p>Jakarta — Surabaya — Medan — Makassar</p>
          </div>
        </div>
      </footer>

      {/* ============ MOBILE PANEL ============ */}
      <div
        id="mobile-panel"
        className="bg-white text-ink lg:hidden"
        style={{ boxShadow: "-8px 0 32px rgba(0,0,0,0.12)" }}
      >
        <div className="flex items-center justify-between border-b border-zinc-100 px-6 pb-4">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/media/container.png"
              alt="EXPRESS Logo"
              width={32}
              height={32}
              className="h-8 w-auto rounded-lg bg-zinc-50 p-0.5"
            />
            <span className="text-base font-extrabold tracking-tight text-ink">
              EXPRESS
            </span>
          </a>
          <button
            id="sidebar-close-btn"
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full text-xl text-zinc-500 transition hover:bg-zinc-100"
          >
            <i className="ph ph-x" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col px-6 pt-4">
          <a
            href="#about"
            className="mobile-link flex items-center gap-3 border-b border-zinc-50 py-3.5 text-base font-medium text-zinc-700 transition hover:text-brand"
          >
            <i className="ph ph-info text-lg text-zinc-400" />
            About
          </a>
          <a
            href="#services"
            className="mobile-link flex items-center gap-3 border-b border-zinc-50 py-3.5 text-base font-medium text-zinc-700 transition hover:text-brand"
          >
            <i className="ph ph-package text-lg text-zinc-400" />
            Services
          </a>
          <a
            href="#advantages"
            className="mobile-link flex items-center gap-3 border-b border-zinc-50 py-3.5 text-base font-medium text-zinc-700 transition hover:text-brand"
          >
            <i className="ph ph-seal-check text-lg text-zinc-400" />
            Advantages
          </a>
          <a
            href="#process"
            className="mobile-link flex items-center gap-3 border-b border-zinc-50 py-3.5 text-base font-medium text-zinc-700 transition hover:text-brand"
          >
            <i className="ph ph-steps text-lg text-zinc-400" />
            Process
          </a>
        </nav>
        <div className="px-6 pb-8 pt-4">
          <a
            href="#contact"
            className="mobile-link flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-base font-medium text-white transition hover:bg-brand-dark active:scale-[0.98]"
          >
            <i className="ph ph-phone text-lg" />
            Contact Us
          </a>
        </div>
      </div>
      <div id="mobile-overlay" className="fixed inset-0 bg-black/40 lg:hidden" />
    </>
  );
}
