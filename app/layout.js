import './globals.css';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/shared/Footer';

export const metadata = {
  title: {
    default: 'Loveshot | Premium DFW Flower Shop',
    template: '%s | Loveshot - DFW Flower Shop'
  },
  description: 'Premium flower arrangements and bouquets in the Dallas-Fort Worth area. Same-day delivery available.',
  keywords: ['flowers', 'flower delivery', 'Dallas', 'Fort Worth', 'DFW', 'bouquets', 'florist'],
  openGraph: {
    title: 'Loveshot | Premium DFW Flower Shop',
    description: 'Premium flower arrangements and bouquets in the Dallas-Fort Worth area.',
    url: 'https://www.loveshot.com',
    siteName: 'Loveshot',
    locale: 'en-US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FloristShop',
              name: 'Loveshot',
              url: 'https://www.loveshot.com',
              telephone: '+12145550123',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Flower Street',
                addressLocality: 'Dallas',
                addressRegion: 'TX',
                postalCode: '75201',
                addressCountry: 'US'
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '10:00',
                  closes: '16:00'
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
