// @/app/layout.tsx

import { Providers } from "./providers";
import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const entoto = localFont({
  src: "../../public/fonts/entoto.ttf",
  variable: "--font-entoto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "ORC",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  openGraph: {
    title: "ORC",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    url: "/",
    siteName: "ORC",
    images: [
      {
        url: "/images/previewImage.png",
        width: 1200,
        height: 630,
        alt: "ORC Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORC",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    images: ["/images/previewImage.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('jireh-theme') === 'dark' || 
                    (!localStorage.getItem('jireh-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} ${entoto.variable} font-mono antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
            <main className="flex-1 flex flex-col">{children}</main>
          </div>

        </Providers>
      </body>
    </html>
  );
}