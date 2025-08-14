import React from "react";
import { AiOutlineStock } from "react-icons/ai";
const InvestmentTermsCards = () => {
  const investmentTerms = [
    {
      title: "الأسهم",
      description:
        "حصص ملكية في الشركات تمنح المستثمر حقوقاً في الأرباح والتصويت",
    },
    {
      title: "السندات",
      description: "أوراق مالية تمثل ديناً على الجهة المصدرة مع فائدة محددة",
    },
    {
      title: "الصناديق الاستثمارية",
      description:
        "أدوات استثمارية تجمع أموال المستثمرين لشراء محفظة متنوعة من الأوراق المالية",
    },
    {
      title: "التنويع",
      description:
        "استراتيجية توزيع الاستثمارات على أصول مختلفة لتقليل المخاطر",
    },
  ];

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:p-8 relative overflow-hidden"
      id="words"
      style={{
        "--primary-color": "#3D4BEA",
        "--secondary-color": "#03aff1",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      <div className="hidden lg:block absolute top-[40px] -rotate-45 left-[30px]">
        <AiOutlineStock className="w-32 h-32 text-primary" />
      </div>
      <div className="hidden lg:block absolute bottom-[40px] rotate-45 right-[30px]">
        <AiOutlineStock className="w-32 h-32 text-primary" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h1
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
          }}
        >
          المصطلحات الاستثمارية
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {investmentTerms.map((term, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{
                border: `2px solid transparent`,
                backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              {/* Animated gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                }}
              />

              {/* Decorative corner element */}
              <div
                className="absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6 rotate-45 opacity-20"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                }}
              />

              <div className="relative p-6 text-right" dir="rtl">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                    }}
                  >
                    {index + 1}
                  </div>

                  <h2
                    className="text-2xl font-bold mb-0"
                    style={{
                      background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {term.title}
                  </h2>
                </div>

                <div
                  className="h-px mb-4 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                  }}
                />

                <p className="text-gray-700 leading-relaxed text-sm font-medium">
                  {term.description}
                </p>

                {/* Subtle animation indicator */}
                <div className="mt-4 flex justify-center">
                  <div
                    className="w-2 h-2 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                    }}
                  />
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                style={{
                  background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Footer accent */}
        <div className="mt-16 text-center">
          <div
            className="inline-block h-1 w-24 rounded-full mb-4"
            style={{
              background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
            }}
          />
          <p className="text-gray-600 font-medium">
            تعلم المصطلحات الأساسية للاستثمار الناجح
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTermsCards;
