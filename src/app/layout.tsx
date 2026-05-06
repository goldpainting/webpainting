import '~/styles/globals.css';
import 'react-google-reviews/dist/index.css';

import { type Metadata, type Viewport } from 'next';
import Script from 'next/script';

import { Heebo, Inter, Montserrat, Geist } from 'next/font/google';
import FloatingChatbot from './components/FloatingChatbot';
import ScrollRevealRuntime from './components/ScrollRevealRuntime';
import SiteFooter from './components/SiteFooter';
import Topbar from './components/Topbar';
import { buildLocalBusinessSchema } from './schema';
import { siteUrl } from './siteConfig';
import { cn } from '~/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gold Lion Painting Inc | Interior, Exterior & Cabinet Painting',
    template: '%s | Gold Lion Painting Inc',
  },
  description:
    'Gold Lion Painting Inc provides interior painting, exterior painting, cabinet painting, cabinet refinishing, and color consultation across Bradenton, Sarasota, Tampa, St. Petersburg, and nearby Florida service areas.',
  keywords: [
    'Gold Lion Painting Inc',
    'Bradenton painters',
    'Sarasota painters',
    'Tampa painters',
    'St. Petersburg painters',
    'interior painting',
    'exterior painting',
    'cabinet refinishing',
    'Lakewood Ranch painters',
  ],
  openGraph: {
    title: 'Gold Lion Painting Inc | Interior, Exterior & Cabinet Painting',
    description:
      'Interior, exterior, and cabinet painting built around clean execution, durable finishes, and customer-friendly service across Bradenton, Sarasota, Tampa, and St. Petersburg.',
    siteName: 'Gold Lion Painting Inc',
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: '/gold-lion-painting-logo-og.png',
        width: 1200,
        height: 630,
        alt: 'Gold Lion Painting Inc logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Lion Painting Inc | Interior, Exterior & Cabinet Painting',
    description:
      'Residential interior, exterior, and cabinet painting with durable prep systems across Bradenton, Sarasota, Venice, Siesta Key, Lakewood Ranch, and nearby Florida areas.',
    images: ['/gold-lion-painting-logo-og.png'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0c0d0e',
};

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-heebo',
  weight: ['700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        heebo.variable,
        inter.variable,
        montserrat.variable,
        'font-sans',
        geist.variable
      )}
    >
      <body>
        <Script
          id="gold-lion-painting-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Topbar />
        <ScrollRevealRuntime />
        {children}
        <SiteFooter />
        <FloatingChatbot />
      </body>
    </html>
  );
}
