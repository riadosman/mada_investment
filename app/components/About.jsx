"use client";
import React from "react";
import { ChevronUp, Building2, Shield, Award } from "lucide-react";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:p-8 relative overflow-hidden"
      id="footer"
      style={{
        "--primary-color": "#3D4BEA",
        "--secondary-color": "#03aff1",
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="hidden lg:block absolute top-[40px] -rotate-45 left-[30px]">
        <Building2 className="w-32 h-32 opacity-10 text-white" />
      </div>
      <div className="hidden lg:block absolute bottom-[40px] rotate-45 right-[30px]">
        <Shield className="w-32 h-32 opacity-10 text-white" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Company Logo/Title */}
          <div className="mb-8">
            <h1
              className="text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              }}
            >
              إيبان المالية
            </h1>

            <div
              className="inline-block h-1 w-24 rounded-full"
              style={{
                background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
          </div>

          {/* Company Description Card */}
          <div
            className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 bg-white/5 backdrop-blur-sm max-w-4xl mx-auto"
            style={{
              border: `2px solid transparent`,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05)), linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
            }}
          >
            {/* Decorative corner elements */}
            <div
              className="absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6 rotate-45 opacity-20"
              style={{
                background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-20 h-20 transform -translate-x-6 translate-y-6 rotate-45 opacity-20"
              style={{
                background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              }}
            />

            <div className="relative p-8 text-right" dir="rtl">
              <p className="text-white/90 leading-relaxed text-lg font-medium mb-6">
                أيبان المالية في شركة مساهمة مقفلة برأس مال، قدره 60,000,000
                ريال سعودي
              </p>

              <p className="text-white/80 leading-relaxed text-base font-medium mb-6">
                ومقرها مدينة الرياض - حي النرجس
              </p>

              <div
                className="h-px mb-6 opacity-30"
                style={{
                  background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                }}
              />

              <p className="text-white/90 leading-relaxed text-base font-medium mb-6">
                حصلت الشركة على موافقة هيئة السوق المالية للانضمام إلى مختبر
                التقنية المالية
              </p>

              <p className="text-white/80 leading-relaxed text-base font-medium mb-6">
                وبدأت مزاولة نشاطها ضمن هذا الإطار في عام 2022، لتقديم خدمات
                (FinTech Lab).
              </p>

              <p className="text-white/90 leading-relaxed text-base font-medium mb-6">
                مالية مبتكرة تعتمد على الحلول التقنية الحديثة
              </p>

              <div
                className="h-px mb-6 opacity-30"
                style={{
                  background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                }}
              />

              <p className="text-white/90 leading-relaxed text-base font-medium mb-4">
                وفي إطار التوسع، حصلت الشركة على الترخيص النظامي من هيئة السوق
                المالية برقم
              </p>

              <p className="text-white/80 leading-relaxed text-base font-medium">
                (24290-02) والذي يتيح لها تقديم خدمات: التعامل، إدارة
                الاستثمارات، الحفظ.
              </p>
            </div>

            {/* Licensing badges */}
            <div className="flex justify-center gap-6 px-8 pb-8">
              <div
                className="flex items-center gap-3 px-4 py-2 rounded-full text-white/90 text-sm font-medium"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                }}
              >
                <Award className="w-5 h-5" />
                <span>FinTech Lab</span>
              </div>

              <div
                className="flex items-center gap-3 px-4 py-2 rounded-full text-white/90 text-sm font-medium"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                }}
              >
                <Shield className="w-5 h-5" />
                <span>رقم الترخيص: 24290-02</span>
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div
            className="w-96 h-96 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, var(--primary-color), transparent 70%)`,
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default About;
