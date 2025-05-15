// @/app/layout.tsx

import { Providers } from "./providers";
import { Poppins, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const robotoMono = Roboto_Mono({
//   subsets: ["latin"],
//   variable: "--font-roboto-mono",
// });

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
        className={`${poppins.variable} ${geistSans.variable} ${entoto.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="min-h-screen bg-background transition-colors duration-300">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}