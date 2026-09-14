import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "EXPRESS — National Expedition & Logistics",
  description:
    "EXPRESS delivers your cargo across Indonesia via land, sea, and air. Fast, secure, real-time tracking.",
};

export const viewport = {
  themeColor: "#F32802",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white font-sans text-ink antialiased">
        {children}
        {/* Local icon fonts instead of render-blocking unpkg CDN */}
        <link
          rel="stylesheet"
          href="/phosphor/phosphor.css"
          precedence="default"
        />
      </body>
    </html>
  );
}
