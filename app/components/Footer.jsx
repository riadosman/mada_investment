import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        "--primary-color": "#3D4BEA",
        "--secondary-color": "#03aff1",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
        }}
      />

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Section */}
          <div className="text-right" dir="rtl">
            <h3
              className="text-2xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              }}
            >
              الأخبار العالمية
            </h3>
            <div
              className="h-1 w-20 rounded-full mb-4"
              style={{
                background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
            <p className="text-gray-600 leading-relaxed font-medium mb-6">
              مصدرك الموثوق للأخبار العالمية والتحليلات الاقتصادية المتخصصة مع
              تغطية شاملة للأحداث المؤثرة على الأسواق المالية.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <div
                  key={index}
                  className="group w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                  }}
                >
                  <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right" dir="rtl">
            <h4 className="text-xl font-bold mb-6 text-gray-800">
              روابط سريعة
            </h4>
            <div
              className="h-px w-16 rounded-full mb-4 opacity-60"
              style={{
                background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
            <ul className="space-y-3">
              {[
                "الرئيسية",
                "الأخبار الاقتصادية",
                "التحليلات",
                "الأسواق المالية",
                "الأخبار الدولية",
                "اتصل بنا",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium group flex items-center justify-end gap-2"
                  >
                    <span>{link}</span>
                    <div
                      className="w-0 group-hover:w-2 h-px transition-all duration-300"
                      style={{
                        background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="text-right" dir="rtl">
            <h4 className="text-xl font-bold mb-6 text-gray-800">الفئات</h4>
            <div
              className="h-px w-16 rounded-full mb-4 opacity-60"
              style={{
                background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
            <ul className="space-y-3">
              {[
                "الأسواق المالية",
                "التجارة الدولية",
                "الاقتصاد",
                "السياسة الدولية",
                "البيئة والطقس",
                "التكنولوجيا",
              ].map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium group flex items-center justify-end gap-2"
                  >
                    <span>{category}</span>
                    <div
                      className="w-1 h-1 rounded-full group-hover:scale-150 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right" dir="rtl">
            <h4 className="text-xl font-bold mb-6 text-gray-800">تواصل معنا</h4>
            <div
              className="h-px w-16 rounded-full mb-4 opacity-60"
              style={{
                background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
            <div className="space-y-4">
              {[
                { Icon: Mail, text: "info@globalnews.com", type: "email" },
                { Icon: Phone, text: "+966 11 123 4567", type: "phone" },
                {
                  Icon: MapPin,
                  text: "الرياض، المملكة العربية السعودية",
                  type: "address",
                },
                {
                  Icon: Globe,
                  text: "www.abyaninvestment.com",
                  type: "website",
                },
              ].map(({ Icon, text, type }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {text}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                    }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div
            className="h-1 w-40 rounded-full mx-auto mb-6"
            style={{
              background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
            }}
          />
          <p className="text-gray-600 text-lg font-medium mb-2">
            مصادر موثوقة • تحديث مستمر • تحليل شامل
          </p>
          <Link href="/privacy" className="text-gray-500 text-sm my-4">
            privacy policy • terms and conditions
          </Link>

          {/* Animated dots */}
          <div className="flex justify-center gap-2 my-6">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className="w-2 h-2 rounded-full opacity-60 animate-pulse"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                  animationDelay: `${dot * 0.2}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 الأخبار العالمية. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
