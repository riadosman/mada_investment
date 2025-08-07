"use client";
import React, { useState } from "react";
import { User, Mail, Phone, Send, CheckCircle } from "lucide-react";

const Start = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Simulate form submission
    fetch("/api/send-to-google", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("تم الارسال بنجاح");
          setIsSubmitted(true);
          setFormData({
            name: "",
            surname: "",
            email: "",
            phone: "",
          });
        } else {
          alert("خطا يرجى المحاولة مرة اخرى");
        }
      })
      .catch((err) => alert("Error: " + err));
  };

  const inputFields = [
    {
      name: "name",
      label: "الاسم الأول",
      type: "text",
      placeholder: "أدخل اسمك الأول",
      icon: User,
      required: true,
    },
    {
      name: "surname",
      label: "اسم العائلة",
      type: "text",
      placeholder: "أدخل اسم العائلة",
      icon: User,
      required: true,
    },
    {
      name: "email",
      label: "البريد الإلكتروني",
      type: "email",
      placeholder: "example@email.com",
      icon: Mail,
      required: true,
    },
    {
      name: "phone",
      label: "رقم الهاتف",
      type: "tel",
      placeholder: "+966 5X XXX XXXX",
      icon: Phone,
      required: true,
    },
  ];

  return (
    <div
      className="min-h-screen mt-12 p-8 flex items-center justify-center"
      style={{
        "--primary-color": "#03e396",
        "--secondary-color": "#03aff1",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold mb-8 leading-tight bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
            }}
          >
            تواصل معنا
          </h1>
          <div
            className="inline-block h-1 w-32 rounded-full mb-4"
            style={{
              background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
            }}
          />
          <p className="text-xl text-gray-600 font-medium">
            نحن هنا لمساعدتك والإجابة على استفساراتك
          </p>
        </div>

        {/* Contact Form */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-8">
          {/* Animated gradient overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
            }}
          />

          <div className="relative">
            {/* Success Message */}
            {isSubmitted && (
              <div
                className="mb-6 p-4 rounded-xl flex items-center gap-3 animate-pulse"
                style={{
                  background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                  opacity: 0.1,
                }}
              >
                <CheckCircle
                  className="w-6 h-6"
                  style={{ color: "var(--primary-color)" }}
                />
                <span className="font-bold text-gray-800">
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inputFields.slice(0, 2).map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.name} className="relative">
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        {field.label}
                        {field.required && (
                          <span
                            className="mr-1"
                            style={{ color: "var(--primary-color)" }}
                          >
                            *
                          </span>
                        )}
                      </label>

                      <div className="relative">
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          required={field.required}
                          className={`w-full px-4 py-4 pr-12 border-2 rounded-xl text-right font-medium transition-all duration-300 focus:outline-none focus:shadow-lg ${
                            focusedField === field.name
                              ? "border-transparent shadow-lg"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          style={
                            focusedField === field.name
                              ? {
                                  boxShadow: `0 0 0 2px var(--primary-color), 0 10px 25px rgba(3, 227, 150, 0.1)`,
                                }
                              : {}
                          }
                        />

                        <div
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            focusedField === field.name ? "scale-110" : ""
                          }`}
                          style={{
                            background:
                              focusedField === field.name
                                ? `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`
                                : "#f1f5f9",
                          }}
                        >
                          <Icon
                            className={`w-4 h-4 transition-colors duration-300 ${
                              focusedField === field.name
                                ? "text-white"
                                : "text-gray-500"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Email and Phone Fields */}
              {inputFields.slice(2).map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name} className="relative">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {field.label}
                      {field.required && (
                        <span
                          className="mr-1"
                          style={{ color: "var(--primary-color)" }}
                        >
                          *
                        </span>
                      )}
                    </label>

                    <div className="relative">
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`w-full px-4 py-4 pr-12 border-2 rounded-xl text-right font-medium transition-all duration-300 focus:outline-none focus:shadow-lg ${
                          focusedField === field.name
                            ? "border-transparent shadow-lg"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        style={
                          focusedField === field.name
                            ? {
                                boxShadow: `0 0 0 2px var(--primary-color), 0 10px 25px rgba(3, 227, 150, 0.1)`,
                              }
                            : {}
                        }
                      />

                      <div
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          focusedField === field.name ? "scale-110" : ""
                        }`}
                        style={{
                          background:
                            focusedField === field.name
                              ? `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`
                              : "#f1f5f9",
                        }}
                      >
                        <Icon
                          className={`w-4 h-4 transition-colors duration-300 ${
                            focusedField === field.name
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Divider */}
              <div
                className="h-px my-8 opacity-20"
                style={{
                  background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
                }}
              />

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitted ? "scale-105" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`,
                  }}
                >
                  {isSubmitted ? (
                    <CheckCircle className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                  <span>{isSubmitted ? "تم الإرسال بنجاح" : "إرسال الان"}</span>
                </button>
              </div>
            </form>

            {/* Form Footer */}
            <div className="mt-8 text-center">
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
                سنقوم بالرد على رسالتك في أقرب وقت ممكن
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
      </div>
    </div>
  );
};

export default Start;
