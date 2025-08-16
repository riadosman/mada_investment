"use client";
import React, { useState } from "react";
import { User, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
const Start = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const route = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone field
    if (name === "phone") {
      // Remove any non-digit characters
      const digitsOnly = value.replace(/\D/g, "");

      // If user tries to delete everything or enters something that doesn't start with 5
      if (
        digitsOnly.length === 0 ||
        (digitsOnly.length > 0 && digitsOnly[0] !== "5")
      ) {
        return; // Don't update if it doesn't start with 5 or is empty
      }

      // Limit to 9 digits (5 + 8 more digits)
      const limitedDigits = digitsOnly.slice(0, 9);

      setFormData((prev) => ({
        ...prev,
        [name]: limitedDigits,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const isSaudiPhone = (phone) => {
    // Check if phone has exactly 9 digits and starts with 5
    return phone.length === 9 && phone[0] === "5";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!isSaudiPhone(formData.phone)) {
      Swal.fire({
        title: "خطا !",
        text: "رقم الجوال غير صحيح فقط الارقام السعودية مسموحة",
        icon: "error",
        confirmButtonText: "اغلاق",
      });
      setIsLoading(false);
      return;
    }
    try {
      // Send the full phone number with country code
      const phoneWithCountryCode = `+966${formData.phone}`;
      const submissionData = {
        ...formData,
        phone: phoneWithCountryCode,
      };

      const res = await fetch("/api/send-to-google", {
        method: "POST",
        body: JSON.stringify(submissionData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.status === "success") {
        setIsSubmitted(true);
        setIsLoading(false);
        route.push("/success");
        setFormData({ name: "", surname: "", email: "", phone: "" });
      } else {
        setError("خطأ: يرجى المحاولة مرة أخرى");
      }
    } catch (err) {
      setIsLoading(false);
      setError("حدث خطأ في الاتصال بالسيرفر");
    }
    setIsLoading(false);
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
      placeholder: "5XXXXXXXX",
      icon: Phone,
      required: true,
    },
  ];

  return (
    <div
      className="min-h-screen mt-12 p-8 flex items-center justify-center"
      style={{
        "--primary-color": "#3D4BEA",
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

              {/* Email Field */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  البريد الإلكتروني
                  <span
                    className="mr-1"
                    style={{ color: "var(--primary-color)" }}
                  >
                    *
                  </span>
                </label>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="example@email.com"
                    required
                    className={`w-full px-4 py-4 pr-12 border-2 rounded-xl text-right font-medium transition-all duration-300 focus:outline-none focus:shadow-lg ${
                      focusedField === "email"
                        ? "border-transparent shadow-lg"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={
                      focusedField === "email"
                        ? {
                            boxShadow: `0 0 0 2px var(--primary-color), 0 10px 25px rgba(3, 227, 150, 0.1)`,
                          }
                        : {}
                    }
                  />

                  <div
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      focusedField === "email" ? "scale-110" : ""
                    }`}
                    style={{
                      background:
                        focusedField === "email"
                          ? `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`
                          : "#f1f5f9",
                    }}
                  >
                    <Mail
                      className={`w-4 h-4 transition-colors duration-300 ${
                        focusedField === "email"
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Phone Field with Fixed Country Code */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  رقم الهاتف
                  <span
                    className="mr-1"
                    style={{ color: "var(--primary-color)" }}
                  >
                    *
                  </span>
                </label>

                <div className="relative">
                  <div className="flex">
                    {/* Country Code (Fixed) */}
                    <div
                      className="flex items-center px-3 border-2 border-l-0 rounded-r-xl bg-gray-50 border-gray-200"
                      style={
                        focusedField === "phone"
                          ? {
                              borderColor: "var(--primary-color)",
                              boxShadow: `0 0 0 2px var(--primary-color)`,
                            }
                          : {}
                      }
                    >
                      <span className="text-gray-700 font-medium">+966</span>
                    </div>

                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="5XXXXXXXX"
                      required
                      className={`flex-1 px-4 py-4 pr-12 border-2 border-r-0 rounded-l-xl text-right font-medium transition-all duration-300 focus:outline-none focus:shadow-lg ${
                        focusedField === "phone"
                          ? "border-transparent shadow-lg"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      style={
                        focusedField === "phone"
                          ? {
                              boxShadow: `0 0 0 2px var(--primary-color), 0 10px 25px rgba(3, 227, 150, 0.1)`,
                            }
                          : {}
                      }
                    />
                  </div>

                  <div
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      focusedField === "phone" ? "scale-110" : ""
                    }`}
                    style={{
                      background:
                        focusedField === "phone"
                          ? `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`
                          : "#f1f5f9",
                    }}
                  >
                    <Phone
                      className={`w-4 h-4 transition-colors duration-300 ${
                        focusedField === "phone"
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
              </div>

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
                  disabled={isLoading || isSubmitted}
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
                  <span>
                    {isLoading
                      ? "جاري الإرسال..."
                      : isSubmitted
                      ? "تم الإرسال"
                      : "إرسال الآن"}
                  </span>
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
