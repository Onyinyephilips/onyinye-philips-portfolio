// import type { Metadata, Viewport } from "next";
// import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
// import "./globals.css";
// import { site } from "@/lib/data";

// const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
// const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
// const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

// const description = "Solutions Architect & Web Developer. I turn complex ideas into scalable digital solutions and high-performing web experiences.";

// export const metadata: Metadata = {
//   metadataBase: new URL(site.url),
//   title: { default: `${site.name} | ${site.title}`, template: `%s | ${site.name}` },
//   description,
//   openGraph: { title: `${site.name} | ${site.title}`, description, type: "website", siteName: site.name },
//   twitter: { card: "summary_large_image", title: `${site.name} | ${site.title}`, description },
// };
// export const viewport: Viewport = { themeColor: "#080A0B", colorScheme: "dark" };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
//       <body className="font-sans">{children}</body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";
import { site } from "@/lib/data";
import { personSchema, websiteSchema } from "@/lib/schema";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Onyinye Philips is a Solutions Architect and Web Developer based in Port Harcourt, Nigeria. He builds high-performing websites and scalable digital solutions using for businesses worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `${site.name} | Web Developer & Solutions Architect in Port Harcourt`,
    template: `%s | ${site.name}`,
  },

  description,

  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: `${site.name} | Web Developer & Solutions Architect`,
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Onyinye Philips - Solutions Architect and Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Web Developer & Solutions Architect`,
    description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#080A0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-NG"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}
