"use client";
import React, { useEffect, useState } from "react";
import { CheckCircle, Home, Mail, ArrowRight } from "lucide-react";
import Script from "next/script";

const SuccessPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setShowAnimation(true), 100);
    setTimeout(() => setShowContent(true), 500);
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11081777142"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11081777142');
          `,
        }}
      />
      <div
        className="min-h-screen mt-24 p-8 flex items-center justify-center"
        style={{
          "--primary-color": "#03e396",
          "--secondary-color": "#03aff1",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 transform transition-all duration-1000 ${
                showAnimation ? "scale-100 rotate-0" : "scale-0 rotate-180"
              }`}
              style={{
                background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                boxShadow: "0 20px 40px rgba(3, 227, 150, 0.3)",
              }}
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <h1
              className={`text-5xl font-bold mb-8 leading-tight bg-gradient-to-r bg-clip-text text-transparent transform transition-all duration-800 ${
                showContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              }}
            >
              تم الإرسال بنجاح!
            </h1>
            <div
              className={`inline-block h-1 w-32 rounded-full mb-4 transform transition-all duration-1000 ${
                showContent ? "scale-x-100" : "scale-x-0"
              }`}
              style={{
                background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
          </div>

          {/* Success Message Card */}
          <div
            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-8 transform ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {/* Animated gradient overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              }}
            />

            <div className="relative text-center" dir="rtl">
              {/* Success Icon */}
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 animate-pulse"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                  opacity: 0.1,
                }}
              >
                <Mail
                  className="w-8 h-8"
                  style={{ color: "var(--primary-color)" }}
                />
              </div>

              {/* Main Message */}
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                شكراً لتواصلك معنا
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-xl text-gray-600 font-medium">
                  تم استلام رسالتك بنجاح وسيتم التواصل معك قريباً
                </p>

                <p className="text-lg text-gray-500">
                  فريقنا سيقوم بمراجعة رسالتك والرد عليك خلال 24 ساعة
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { text: "رد سريع خلال 24 ساعة", delay: "0s" },
                  { text: "فريق دعم متخصص", delay: "0.2s" },
                  { text: "خدمة عملاء متميزة", delay: "0.4s" },
                  { text: "حلول مخصصة لاحتياجاتك", delay: "0.6s" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                    style={{ animationDelay: item.delay }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                      }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                className="h-px my-8 opacity-20"
                style={{
                  background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                }}
              />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                  }}
                  onClick={() => window.location.reload()}
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>إرسال رسالة أخرى</span>
                </button>

                <button
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.history.back()}
                >
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>العودة للرئيسية</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Footer Message */}
              <div className="mt-8">
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className="w-2 h-2 rounded-full opacity-40 animate-pulse"
                      style={{
                        background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                        animationDelay: `${dot * 0.2}s`,
                        animationDuration: "2s",
                      }}
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-sm font-medium">
                  نقدر ثقتك بنا ونتطلع للعمل معك
                </p>
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"
              style={{
                background: `linear-gradient(90deg, var(--secondary-color), var(--primary-color))`,
              }}
            />
          </div>

          {/* Additional Info Card */}
          <div
            className={`mt-6 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 transform transition-all duration-700 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="text-center" dir="rtl">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                معلومات إضافية
              </h3>
              <p className="text-gray-600">
                في حالة الحاجة لمساعدة عاجلة، يمكنك التواصل معنا مباشرة عبر
                الهاتف أو البريد الإلكتروني
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
