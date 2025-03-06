import type { Metadata } from 'next';
import './globals.css';
import './video-react.css';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../style/main.css';
import logo from '/public/og.png'
import { GoogleTagManager } from '@next/third-parties/google'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mzar VIP',
    description: 'Mzar: Your Journey into the Depths of History and Spirituality',
    keywords: "مزار, مزارات, رحلات سياحية, رحلات دينية, الخضارة الإسلامية, المعالم المشهورة, إرشاد سياحي, وسيلة مواصلات, برامج سياحية, الأماكن المقدسة, تطبيق سياحي",
    openGraph: {
      title: 'Mzar VIP',
      description: 'Mzar: Your Journey into the Depths of History and Spirituality',
      url: 'https://vip.mzarapp.com/',
      siteName: "Mzar VIP",
      images: [
        {
          url: logo.src,
          width: 1200,
          height: 630,
          alt: 'Mzar',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id='root'>
      <GoogleTagManager gtmId='GTM-WS294KJ' />
      <body className="w-full" suppressHydrationWarning={true}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WS294KJ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
