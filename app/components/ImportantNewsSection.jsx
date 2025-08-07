import React from "react";
import { RiStockFill } from "react-icons/ri";

const ImportantNewsSection = () => {
  const newsItems = [
    {
      title: "ارتفاع حاد في الأسواق الأمريكية",
      description:
        "شهدت الأسواق الأمريكية ارتفاعاً كبيراً حيث سجل مؤشر داو جونز مكاسب قدرها 585 نقطة بنسبة 1.34%، بينما حقق مؤشر S&P 500 أفضل جلسة تداول منذ شهر مايو. هذا الارتفاع جاء بعد تصريحات إيجابية من البنك الفيدرالي الأمريكي حول السياسة النقدية وتحسن البيانات الاقتصادية، مما عزز ثقة المستثمرين في الأسواق المالية والشركات التكنولوجية بشكل خاص.",
      category: "الأسواق المالية",
      time: "منذ 20 ساعة",
      impact: "عالي",
    },
    {
      title: "تعريفات جمركية جديدة تهز التجارة العالمية",
      description:
        "أعلن الرئيس الأمريكي دونالد ترامب عن فرض تعريفات جمركية جديدة بنسبة 25% على السلع المستوردة من كندا والمكسيك، و10% على البضائع الصينية، مما أثار مخاوف واسعة في الأسواق العالمية. هددت الدول المتضررة بفرض تعريفات مضادة، مما قد يؤدي إلى حرب تجارية جديدة تؤثر على النمو الاقتصادي العالمي وأسعار السلع الاستهلاكية.",
      category: "التجارة الدولية",
      time: "منذ يومين",
      impact: "عالي جداً",
    },
    {
      title: "تغييرات جذرية في بيانات العمالة الأمريكية",
      description:
        "تم إقالة مفوض مكتب إحصاءات العمل الأمريكي بعد نشر تقرير وظائف شهر يوليو الذي أظهر إضافة 114 ألف وظيفة فقط، وهو رقم أقل بكثير من التوقعات البالغة 185 ألف وظيفة. هذا التطور أثار تساؤلات حول دقة البيانات الحكومية وأدى إلى مراجعة شاملة لآليات جمع وتحليل بيانات سوق العمل، مما قد يؤثر على قرارات السياسة النقدية المستقبلية.",
      category: "الاقتصاد",
      time: "منذ 4 أيام",
      impact: "متوسط",
    },
    {
      title: "مناورات عسكرية صينية روسية تثير قلق الغرب",
      description:
        "بدأت القوات البحرية الصينية والروسية المرحلة الكاملة من مناورات Joint Sea-2025 في بحر الصين الجنوبي، والتي تشمل أكثر من 30 سفينة حربية وغواصات متطورة. هذه المناورات تأتي في ظل تصاعد التوترات الجيوسياسية مع الولايات المتحدة وحلفائها، وتهدف إلى إظهار القوة العسكرية المشتركة وتعزيز التعاون الاستراتيجي بين البلدين في المحيط الهادئ.",
      category: "الأخبار الدولية",
      time: "اليوم",
      impact: "عالي",
    },
    {
      title: "مفاوضات حاسمة في الشرق الأوسط",
      description:
        "التقى مبعوث الشرق الأوسط الأمريكي ستيف ويتكوف مع عائلات الرهائن في إسرائيل لمناقشة آخر التطورات في المفاوضات لإطلاق سراح المحتجزين في غزة. هذه اللقاءات تأتي في إطار الجهود الدبلوماسية المكثفة لإحراز تقدم في المفاوضات المتوقفة منذ أشهر، مع وساطة قطرية ومصرية فعالة، بينما تتزايد الضغوط الدولية لإيجاد حل سلمي شامل للأزمة.",
      category: "السياسة الدولية",
      time: "منذ يوم",
      impact: "عالي",
    },
    {
      title: "موجة طقس متطرف تضرب القارات",
      description:
        "تستمر موجة الطقس المتطرف في التأثير على مناطق واسعة حول العالم، حيث تشهد أوروبا درجات حرارة قياسية تتجاوز 45 درجة مئوية، بينما تواجه أجزاء من آسيا فيضانات مدمرة وأعاصير قوية. هذه الظواهر الجوية أدت إلى خسائر اقتصادية تقدر بمليارات الدولارات في القطاعات الزراعية والسياحية والتأمين، مما يثير مخاوف جديدة حول تأثير التغير المناخي على الاقتصاد العالمي.",
      category: "البيئة والطقس",
      time: "منذ 4 أيام",
      impact: "متوسط",
    },
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case "عالي جداً":
        return "#dc2626";
      case "عالي":
        return "#ea580c";
      case "متوسط":
        return "#ca8a04";
      default:
        return "#16a34a";
    }
  };

  return (
    <div
      className="min-h-screen p-8 relative overflow-hidden"
      id="news"
      style={{
        "--primary-color": "#03e396",
        "--secondary-color": "#03aff1",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      <div className="hidden md:block absolute top-10 left-10 -rotate-45">
        <RiStockFill className="w-42 h-42 text-secondary" />
      </div>
      <div className="hidden md:block absolute bottom-10 right-10 -rotate-45">
        <RiStockFill className="w-42 h-42 text-secondary" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent leading-tight"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
            }}
          >
            أهم الأخبار العالمية
          </h1>
          <div
            className="inline-block h-1 w-32 rounded-full mb-4"
            style={{
              background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
            }}
          />
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            تابع آخر التطورات المؤثرة على الأسواق المالية والاقتصاد العالمي
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((newsItem, index) => (
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
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                }}
              />

              {/* Header with category and impact */}
              <div className="flex justify-between items-start p-6 pb-4">
                <div
                  className="px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                  }}
                >
                  {newsItem.category}
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getImpactColor(newsItem.impact) }}
                  />
                  <span className="text-xs font-semibold text-gray-600">
                    {newsItem.impact}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6 text-right" dir="rtl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                  {newsItem.title}
                </h2>

                <div
                  className="h-px mb-6 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                  }}
                />

                <p className="text-gray-700 leading-relaxed text-base mb-6 font-medium">
                  {newsItem.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{
                        background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">
                      {newsItem.time}
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                          animationDelay: `${dot * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
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
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div
            className="inline-block h-1 w-40 rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
            }}
          />
          <p className="text-gray-600 text-lg font-medium mb-2">
            مصادر موثوقة • تحديث مستمر • تحليل شامل
          </p>
          <p className="text-gray-500 text-sm">
            آخر تحديث:{" "}
            {new Date().toLocaleDateString("ar-SA", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantNewsSection;
