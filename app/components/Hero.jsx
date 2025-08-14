"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { AiOutlineStock } from "react-icons/ai";
import { RiStockFill } from "react-icons/ri";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/path-to-your-poster-image.jpg" // Add a poster image
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Black overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="sm:mb-8 flex justify-center">
            <div className="hidden md:block relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white/20 hover:ring-white/30">
              مع تتبع كامل للسوق السعودي و العالمي
            </div>
          </div>

          <div className="text-center flex items-center flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance text-white leading-tight">
              شركة ابيان المالية
            </h1>

            <p className="mt-6 text-lg md:text-xl font-medium text-white">
              منصة تداول سعودية للصناديق الاستثمارية
            </p>

            <p className="hidden md:block mt-6 text-lg md:text-xl font-medium text-white max-w-3xl">
              بخبرتنا في السوق السعودي ورؤيتنا العالمية، نضع بين يديك حلولًا
              استثمارية متكاملة تجمع بين التحليل الدقيق والتخطيط الذكي.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/start"
                className="rounded-xl bg-primary lg:px-6 lg:py-4 px-8 py-4 text-lg md:text-xl font-semibold text-white shadow-lg hover:bg-secondary duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform hover:scale-105"
              >
                فتح حساب
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
