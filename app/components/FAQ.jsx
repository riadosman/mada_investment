"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      title: "هل توجد أي رسوم على استخدام المنصة؟",
      description:
        "لا نفرض أي رسوم مخفية. هناك فقط رسوم خدمة محددة يتم توضيحها قبل إتمام أي عملية، ويمكنك مراجعة جدول الرسوم في صفحة الشروط والأحكام.",
    },
    {
      title: "كيف يمكنني سحب أموالي؟",
      description:
        "يمكنك سحب أموالك من خلال التحويل البنكي أو المحافظ الإلكترونية المرتبطة بحسابك. العملية بسيطة وتتم من خلال لوحة التحكم في حسابك.",
    },
    {
      title: "كم يستغرق وصول الأموال بعد السحب؟",
      description:
        "عادةً تصل الأموال خلال 1-3 أيام عمل، وذلك حسب البنك أو وسيلة الدفع التي اخترتها.",
    },
    {
      title: "كيف أفتح حساب جديد؟",
      description:
        "اضغط على زر التسجيل في الصفحة الرئيسية، ثم املأ بياناتك الأساسية وأكمل عملية التحقق من الهوية لبدء استخدام المنصة.",
    },
    {
      title: "هل يمكنني إلغاء عملية قبل اكتمالها؟",
      description:
        "نعم، يمكنك إلغاء أي عملية طالما لم يتم تنفيذها بالكامل. يمكنك ذلك من خلال صفحة العمليات أو بالتواصل مع خدمة العملاء.",
    },
    {
      title: "كيف يمكنني التواصل مع خدمة العملاء؟",
      description:
        "يمكنك التواصل معنا عبر البريد الإلكتروني أو الدردشة المباشرة في الموقع، كما نوفر دعمًا هاتفيًا خلال ساعات العمل الرسمية.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:p-8 relative overflow-hidden"
      id="faq"
      style={{
        "--primary-color": "#3D4BEA",
        "--secondary-color": "#03aff1",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="hidden lg:block absolute top-[40px] -rotate-45 left-[30px]">
        <HelpCircle className="w-32 h-32 text-primary opacity-10" />
      </div>
      <div className="hidden lg:block absolute bottom-[40px] rotate-45 right-[30px]">
        <HelpCircle className="w-32 h-32 text-primary opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
            }}
          >
            الأسئلة الشائعة
          </h1>

          <div
            className="inline-block h-1 w-24 rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
            }}
          />

          <p
            className="text-gray-600 font-medium text-lg max-w-2xl mx-auto"
            dir="rtl"
          >
            إجابات شاملة على أكثر الأسئلة شيوعاً حول الاستثمار والأسواق المالية
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              style={{
                border: `2px solid transparent`,
                backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              {/* Animated gradient overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  openFAQ === index
                    ? "opacity-5"
                    : "opacity-0 group-hover:opacity-5"
                }`}
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

              {/* Question Header */}
              <div
                className="relative p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                dir="rtl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                      }}
                    >
                      {index + 1}
                    </div>

                    <h3
                      className="text-xl font-bold"
                      style={{
                        background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {faq.title}
                    </h3>
                  </div>

                  <div
                    className={`transform transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                    style={{
                      color: "var(--primary-color)",
                    }}
                  >
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {/* Divider line */}
                <div
                  className="h-px mt-4 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                  }}
                />
              </div>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="relative px-6 pb-6" dir="rtl">
                  <div className="pr-16">
                    <p className="text-gray-700 leading-relaxed text-base font-medium">
                      {faq.description}
                    </p>

                    {/* Subtle animation indicator */}
                    <div className="mt-4 flex justify-center">
                      <div
                        className="w-2 h-2 rounded-full opacity-60 transform scale-150 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transform transition-transform duration-500 origin-center ${
                  openFAQ === index
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
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
          <p className="text-gray-600 font-medium" dir="rtl">
            لم تجد إجابة لسؤالك؟ تواصل معنا للحصول على مساعدة شخصية
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
