const paths = {
  "arrow-up-right": <><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>,
  package: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10"/></>,
  list: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  x: <path d="m6 6 12 12M18 6 6 18"/>,
  plus: <path d="M12 5v14M5 12h14"/>,
  phone: <path d="M8.5 3.5 11 8 8.8 9.8a15 15 0 0 0 5.4 5.4L16 13l4.5 2.5v3a2 2 0 0 1-2 2C10.2 20 4 13.8 3.5 5.5a2 2 0 0 1 2-2h3Z"/>,
  envelope: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  "map-pin": <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></>,
  truck: <><path d="M3 6h11v11H3zM14 10h4l3 4v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
  boat: <><path d="m4 14 8-4 8 4-2 5H6l-2-5ZM9 10V5h6v5M3 21c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1"/></>,
  airplane: <path d="m3 15 8-3V5l2-2 1 1v7l6-2 1 2-7 4v5l-2 1-1-5-5 2-3-3Z"/>,
  warehouse: <><path d="m3 10 9-6 9 6v10H3V10Z"/><path d="M7 20v-7h10v7M7 16h10"/></>,
  lightning: <path d="m13 2-8 12h6l-1 8 9-13h-6V2Z"/>,
  crane: <><path d="M5 21V4h12M3 8h18M9 4V2h5v2M17 8v7M14 15h6v4h-6z"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
  shield: <><path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1v-5ZM20 14h-3v6h2a1 1 0 0 0 1-1v-5ZM17 20c-1 1-2 1-4 1"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
  steps: <path d="M4 19h5v-5h5V9h6V4"/>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/></>,
  linkedin: <><path d="M6 9v10M6 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 10v9"/></>,
  whatsapp: <><path d="M20 11.5a8 8 0 0 1-12 7L4 20l1.4-3.8A8 8 0 1 1 20 11.5Z"/><path d="M9 8c.5 3 2 4.5 5 5"/></>,
};

export default function Icon({ name, className = "", id }) {
  return (
    <svg id={id} viewBox="0 0 24 24" aria-hidden="true" className={`inline-block size-[1em] shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || paths.package}
    </svg>
  );
}
