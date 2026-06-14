import { GoogleTagManager } from "@next/third-parties/google";
import {
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ClientProviders from "./components/providers/client-providers";
import { GlobalCanvas } from "./components/experience";
import {
  createMetadata,
} from "@/lib/metadata";
import { createGlobalGraphJsonLd } from "@/lib/schema";
import JsonLd from "./components/seo/json-ld";
import "./css/globals.scss";
import ScrollToTopLazy from "./components/helper/scroll-to-top-lazy";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

export const metadata = createMetadata();

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0C10",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  const globalGraph = createGlobalGraphJsonLd();
  const gtmId = process.env.NEXT_PUBLIC_GTM;

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <JsonLd data={globalGraph} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="experience-root">
          <GlobalCanvas />
          <ClientProviders>
            <Navbar />
            <main
              id="main-content"
              className="relative z-content min-h-screen w-full pt-[var(--nav-clearance)]"
            >
              {children}
              <ScrollToTopLazy />
            </main>
            <Footer />
          </ClientProviders>
        </div>
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      </body>
    </html>
  );
}
