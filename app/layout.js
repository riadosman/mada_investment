import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cairoSans = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "شركة مدى للاستثمار",
  description: "تقدم شركة مدى للاستثمار الخدمات الاستثمارية والتمويلية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairoSans.variable} ${cairoSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
