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
    <div className="relative overflow-hidden ">
      {/* YouTube Video Background */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50 -z-5"></div>
        <div className="relative isolate px-6 md:-mt-20 lg:px-8 z-10">
          <div className="">
            <div className="relative isolate px-6 md:-mt-20 lg:px-8">
              <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-64">
                <div className="sm:mb-8 flex justify-center">
                  <div className="hidden md:block relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    مع تتبع كامل للسوق السعودي و العالمي
                  </div>
                </div>
                <div className="text-center flex items-center flex-col mt-42 md:mt-0">
                  <h1 className="text-2xl leading-10 md:leading-20 font-semibold tracking-tight text-balance text-white sm:text-7xl">
                    شركة ابيان للاستثمار استثمار
                  </h1>
                  <p className="hidden md:block mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                    بخبرتنا في السوق السعودي ورؤيتنا العالمية، نضع بين يديك
                    حلولًا استثمارية متكاملة تجمع بين التحليل الدقيق والتخطيط
                    الذكي.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      href="/start"
                      className="rounded-xl bg-primary lg:px-6 lg:py-4 px-12 py-6 text-xl font-semibold text-white shadow-xs hover:bg-secondary duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      فتح حساب
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
