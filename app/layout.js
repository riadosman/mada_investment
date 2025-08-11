import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const cairoSans = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "شركة مدى للاستثمار",
  description: "تقدم شركة مدى للاستثمار الخدمات الاستثمارية والتمويلية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* كود GTM للتحميل غير المتزامن */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TLM8M5LM');
            `,
          }}
        />
      </head>
      <body className={`${cairoSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLM8M5LM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
