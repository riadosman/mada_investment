import React from "react";
import { RiShieldCheckFill } from "react-icons/ri";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "سياسة الخصوصية",
      content:
        "آخر تحديث: 7 أغسطس 2025\n\nتصف سياسة الخصوصية هذه سياساتنا وإجراءاتنا حول جمع واستخدام والكشف عن معلوماتك عند استخدام الخدمة وتخبرك عن حقوق الخصوصية الخاصة بك وكيف يحميك القانون.\n\nنحن نستخدم بياناتك الشخصية لتوفير وتحسين الخدمة. باستخدام الخدمة، فإنك توافق على جمع واستخدام المعلومات وفقاً لسياسة الخصوصية هذه.",
      category: "مقدمة",
      icon: "📋",
    },
    {
      title: "التفسير والتعريفات",
      content:
        "التفسير: الكلمات التي يكون حرفها الأول كبيراً لها معاني محددة في الشروط التالية. التعريفات التالية لها نفس المعنى بغض النظر عما إذا كانت تظهر في صيغة المفرد أو الجمع.\n\nالحساب يعني حساباً فريداً تم إنشاؤه لك للوصول إلى خدمتنا أو أجزاء من خدمتنا.\n\nالشركة التابعة تعني كياناً يسيطر أو يخضع للسيطرة أو تحت سيطرة مشتركة مع طرف.\n\nالشركة (المشار إليها باسم 'الشركة' أو 'نحن' أو 'لنا' في هذا الاتفاق) تشير إلى استثمار مدى.",
      category: "تعريفات",
      icon: "📖",
    },
    {
      title: "جمع واستخدام بياناتك الشخصية",
      content:
        "أنواع البيانات المجمعة:\n\nالبيانات الشخصية: أثناء استخدام خدمتنا، قد نطلب منك تزويدنا بمعلومات معينة قابلة للتحديد شخصياً يمكن استخدامها للاتصال بك أو التعرف عليك. قد تتضمن المعلومات القابلة للتحديد الشخصي، على سبيل المثال لا الحصر:\n\n• عنوان البريد الإلكتروني\n• الاسم الأول والأخير\n• رقم الهاتف\n• بيانات الاستخدام\n\nبيانات الاستخدام: يتم جمع بيانات الاستخدام تلقائياً عند استخدام الخدمة.",
      category: "جمع البيانات",
      icon: "📊",
    },
    {
      title: "تقنيات التتبع وملفات تعريف الارتباط",
      content:
        "نحن نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتتبع النشاط على خدمتنا وتخزين معلومات معينة. تقنيات التتبع المستخدمة هي الإشارات والعلامات والنصوص لجمع وتتبع المعلومات ولتحسين وتحليل خدمتنا.\n\nأنواع ملفات تعريف الارتباط:\n• ملفات تعريف الارتباط الضرورية/الأساسية\n• ملفات تعريف الارتباط لقبول سياسة ملفات تعريف الارتباط\n• ملفات تعريف الارتباط الوظيفية",
      category: "ملفات تعريف الارتباط",
      icon: "🍪",
    },
    {
      title: "استخدام بياناتك الشخصية",
      content:
        "قد تستخدم الشركة البيانات الشخصية للأغراض التالية:\n\n• لتوفير وصيانة خدمتنا، بما في ذلك مراقبة استخدام خدمتنا\n• لإدارة حسابك: لإدارة تسجيلك كمستخدم للخدمة\n• لأداء العقد: تطوير والامتثال والقيام بعقد الشراء للمنتجات أو الخدمات\n• للاتصال بك: للاتصال بك عبر البريد الإلكتروني أو المكالمات الهاتفية أو الرسائل النصية\n• لتزويدك بالأخبار والعروض الخاصة والمعلومات العامة حول السلع والخدمات الأخرى",
      category: "استخدام البيانات",
      icon: "🎯",
    },
    {
      title: "الاحتفاظ ببياناتك الشخصية",
      content:
        "ستحتفظ الشركة ببياناتك الشخصية فقط للمدة اللازمة للأغراض المحددة في سياسة الخصوصية هذه. سنحتفظ ونستخدم بياناتك الشخصية إلى الحد اللازم للامتثال لالتزاماتنا القانونية وحل النزاعات وإنفاذ اتفاقياتنا وسياساتنا القانونية.\n\nستحتفظ الشركة أيضاً ببيانات الاستخدام لأغراض التحليل الداخلي. يتم الاحتفاظ ببيانات الاستخدام عموماً لفترة زمنية أقصر.",
      category: "الاحتفاظ بالبيانات",
      icon: "⏰",
    },
    {
      title: "حذف بياناتك الشخصية",
      content:
        "لديك الحق في حذف أو طلب مساعدتنا في حذف البيانات الشخصية التي جمعناها عنك.\n\nقد تمنحك خدمتنا القدرة على حذف معلومات معينة عنك من داخل الخدمة.\n\nيمكنك تحديث أو تعديل أو حذف معلوماتك في أي وقت عن طريق تسجيل الدخول إلى حسابك، إذا كان لديك واحد، وزيارة قسم إعدادات الحساب الذي يسمح لك بإدارة معلوماتك الشخصية.",
      category: "حقوق البيانات",
      icon: "🗑️",
    },
    {
      title: "أمان بياناتك الشخصية",
      content:
        "أمان بياناتك الشخصية مهم بالنسبة لنا، ولكن تذكر أنه لا توجد طريقة نقل عبر الإنترنت، أو طريقة تخزين إلكتروني آمنة بنسبة 100%. بينما نسعى لاستخدام وسائل مقبولة تجارياً لحماية بياناتك الشخصية، لا يمكننا ضمان أمانها المطلق.\n\nنحن نتخذ جميع الخطوات اللازمة بشكل معقول لضمان معاملة بياناتك بأمان ووفقاً لسياسة الخصوصية هذه.",
      category: "الأمان",
      icon: "🔒",
    },
    {
      title: "خصوصية الأطفال",
      content:
        "خدمتنا لا تخاطب أي شخص تحت سن 13 عاماً. نحن لا نجمع عن علم معلومات قابلة للتحديد شخصياً من أي شخص تحت سن 13 عاماً.\n\nإذا كنت والداً أو وصياً وكنت على علم بأن طفلك قد زودنا ببيانات شخصية، يرجى الاتصال بنا. إذا علمنا أننا جمعنا بيانات شخصية من أي شخص تحت سن 13 عاماً دون التحقق من موافقة الوالدين، فإننا نتخذ خطوات لإزالة تلك المعلومات من خوادمنا.",
      category: "الأطفال",
      icon: "👶",
    },
    {
      title: "التغييرات على سياسة الخصوصية هذه",
      content:
        "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة.\n\nسنعلمك عبر البريد الإلكتروني و/أو إشعار بارز على خدمتنا، قبل أن يصبح التغيير نافذاً ونحدث تاريخ 'آخر تحديث' في أعلى سياسة الخصوصية هذه.\n\nننصحك بمراجعة سياسة الخصوصية هذه بشكل دوري لأي تغييرات.",
      category: "التحديثات",
      icon: "🔄",
    },
    {
      title: "اتصل بنا",
      content:
        "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك الاتصال بنا:\n\n• بزيارة هذه الصفحة على موقعنا الإلكتروني: https://madainvestment.net/contact\n• عبر البريد الإلكتروني أو الهاتف المذكور في صفحة الاتصال\n\nنحن ملتزمون بحماية خصوصيتك وضمان أمان بياناتك الشخصية وفقاً لأعلى المعايير المهنية والقانونية.",
      category: "التواصل",
      icon: "📞",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      مقدمة: "#03e396",
      تعريفات: "#03aff1",
      "جمع البيانات": "#8b5cf6",
      "ملفات تعريف الارتباط": "#f59e0b",
      "استخدام البيانات": "#ef4444",
      "الاحتفاظ بالبيانات": "#10b981",
      "حقوق البيانات": "#6366f1",
      الأمان: "#dc2626",
      الأطفال: "#ec4899",
      التحديثات: "#06b6d4",
      التواصل: "#84cc16",
    };
    return colors[category] || "#03e396";
  };

  return (
    <div
      className="min-h-screen mt-16 p-8 relative overflow-hidden"
      style={{
        "--primary-color": "#03e396",
        "--secondary-color": "#03aff1",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      {/* Background Icons */}
      <div className="hidden md:block absolute top-10 left-10 -rotate-45 opacity-10">
        <RiShieldCheckFill
          className="w-42 h-42"
          style={{ color: "var(--secondary-color)" }}
        />
      </div>
      <div className="hidden md:block absolute bottom-10 right-10 rotate-45 opacity-10">
        <RiShieldCheckFill
          className="w-42 h-42"
          style={{ color: "var(--primary-color)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <RiShieldCheckFill
              className="w-16 h-16 text-white p-3 rounded-2xl shadow-lg"
              style={{
                background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              }}
            />
          </div>
          <h1
            className="text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent leading-tight"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
            }}
          >
            سياسة الخصوصية
          </h1>
          <div
            className="inline-block h-1 w-32 rounded-full mb-4"
            style={{
              background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
            }}
          />
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            نحن في استثمار مدى ملتزمون بحماية خصوصيتك وضمان أمان بياناتك الشخصية
            وفقاً لأعلى المعايير
          </p>
          <p className="text-sm text-gray-500 mt-4 font-medium">
            شركة استثمار مدى • المملكة العربية السعودية • آخر تحديث: 7 أغسطس
            2025
          </p>
        </div>

        {/* Privacy Policy Sections */}
        <div className="grid grid-cols-1 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white"
              style={{
                border: `2px solid transparent`,
                backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, ${getCategoryColor(
                  section.category
                )}, var(--secondary-color))`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              {/* Animated gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-3 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${getCategoryColor(
                    section.category
                  )}, var(--secondary-color))`,
                }}
              />

              {/* Header */}
              <div className="flex justify-between items-start p-6 pb-4">
                <div
                  className="px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg flex items-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${getCategoryColor(
                      section.category
                    )}, var(--secondary-color))`,
                  }}
                >
                  <span className="text-base">{section.icon}</span>
                  {section.category}
                </div>

                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${getCategoryColor(
                      section.category
                    )}, var(--secondary-color))`,
                  }}
                >
                  {index + 1}
                </div>
              </div>

              <div className="px-6 pb-6 text-right" dir="rtl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                  {section.title}
                </h2>

                <div
                  className="h-px mb-6 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, ${getCategoryColor(
                      section.category
                    )}, var(--secondary-color))`,
                  }}
                />

                <div className="text-gray-700 leading-relaxed text-base font-medium">
                  {section.content.split("\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={`${
                        paragraph.startsWith("•") ? "mr-4 mb-2" : "mb-4"
                      } ${paragraph.trim() === "" ? "mb-2" : ""}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"
                style={{
                  background: `linear-gradient(90deg, var(--secondary-color), ${getCategoryColor(
                    section.category
                  )})`,
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
          <div
            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
            dir="rtl"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">تواصل معنا</h3>
            <p className="text-gray-600 mb-4">
              لأي استفسارات حول سياسة الخصوصية هذه، يمكنكم التواصل معنا عبر:
            </p>
            <a
              href="/start"
              className="inline-block px-6 py-3 rounded-lg text-white font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
              }}
            >
              صفحة التواصل
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            استثمار مدى © 2025 - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
