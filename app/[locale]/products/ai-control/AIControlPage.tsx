"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import EvoliqAIVideoBackground from "@/components/common/EvoliqAIVideoBackground";
import NavBar from "@/components/sections/NavBar";
import { useTranslations } from "next-intl";
import {
  Building2,
  Shield,
  Award,
  Calendar,
  ClipboardCheck,
  FileCheck2,
  Languages,
  Cloud,
  Users,
  ChevronRight,
  Sparkles,
  Network,
  UserCog,
  X,
  Cookie,
  Smartphone,
  Bot,
  FileSpreadsheet,
  Check,
} from "lucide-react";

export default function AIControlPage() {
  const t = useTranslations("AIControl");
  const tFooter = useTranslations("Footer");
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showGDPR, setShowGDPR] = React.useState(false);

  const features = [
    {
      icon: Building2,
      title: t("features.profile.title"),
      description: t("features.profile.desc"),
      image: "/swot.png",
      details: [
        t("features.profile.details.0"),
        t("features.profile.details.1"),
        t("features.profile.details.2"),
        t("features.profile.details.3"),
        t("features.profile.details.4"),
      ],
    },
    {
      icon: UserCog,
      title: t("features.permissions.title"),
      description: t("features.permissions.desc"),
      image: "/audit-plan.png",
      details: [
        t("features.permissions.details.0"),
        t("features.permissions.details.1"),
        t("features.permissions.details.2"),
        t("features.permissions.details.3"),
        t("features.permissions.details.4"),
      ],
    },
    {
      icon: Award,
      title: t("features.qualifications.title"),
      description: t("features.qualifications.desc"),
      image: "/swot.png",
      details: [
        t("features.qualifications.details.0"),
        t("features.qualifications.details.1"),
        t("features.qualifications.details.2"),
        t("features.qualifications.details.3"),
        t("features.qualifications.details.4"),
        t("features.qualifications.details.5"),
      ],
    },
    {
      icon: Calendar,
      title: t("features.calendar.title"),
      description: t("features.calendar.desc"),
      image: "/audit-plan.png",
      details: [
        t("features.calendar.details.0"),
        t("features.calendar.details.1"),
        t("features.calendar.details.2"),
      ],
    },
    {
      icon: FileCheck2,
      title: t("features.planning.title"),
      description: t("features.planning.desc"),
      image: "/audit-plan.png",
      details: [
        t("features.planning.details.0"),
        t("features.planning.details.1"),
        t("features.planning.details.2"),
        t("features.planning.details.3"),
        t("features.planning.details.4"),
      ],
    },
    {
      icon: ClipboardCheck,
      title: t("features.checklist.title"),
      description: t("features.checklist.desc"),
      image: "/swot.png",
      details: [
        t("features.checklist.details.0"),
        t("features.checklist.details.1"),
        t("features.checklist.details.2"),
        t("features.checklist.details.3"),
        t("features.checklist.details.4"),
      ],
    },
    {
      icon: Shield,
      title: t("features.execution.title"),
      description: t("features.execution.desc"),
      image: "/audit-plan.png",
      details: [
        t("features.execution.details.0"),
        t("features.execution.details.1"),
        t("features.execution.details.2"),
        t("features.execution.details.3"),
      ],
    },
    {
      icon: Sparkles,
      title: t("features.report.title"),
      description: t("features.report.desc"),
      image: "/swot.png",
      details: [
        t("features.report.details.0"),
        t("features.report.details.1"),
        t("features.report.details.2"),
        t("features.report.details.3"),
        t("features.report.details.4"),
      ],
    },
    {
      icon: Languages,
      title: t("features.multilang.title"),
      description: t("features.multilang.desc"),
      image: "/audit-plan.png",
      details: [
        t("features.multilang.details.0"),
        t("features.multilang.details.1"),
        t("features.multilang.details.2"),
        t("features.multilang.details.3"),
      ],
    },
    {
      icon: Smartphone,
      title: t("features.mobile_app.title"),
      description: t("features.mobile_app.desc"),
      image: "/audit-plan.png",
      details: [
        t("features.mobile_app.details.0"),
        t("features.mobile_app.details.1"),
        t("features.mobile_app.details.2"),
        t("features.mobile_app.details.3"),
        t("features.mobile_app.details.4"),
      ],
    },
    {
      icon: FileSpreadsheet,
      title: t("features.worksheets.title"),
      description: t("features.worksheets.desc"),
      image: "/swot.png",
      details: [
        t("features.worksheets.details.0"),
        t("features.worksheets.details.1"),
        t("features.worksheets.details.2"),
        t("features.worksheets.details.3"),
      ],
    },
    {
      icon: Bot,
      title: t("features.ai_assistant.title"),
      description: t("features.ai_assistant.desc"),
      image: "/swot.png",
      details: [
        t("features.ai_assistant.details.0"),
        t("features.ai_assistant.details.1"),
        t("features.ai_assistant.details.2"),
        t("features.ai_assistant.details.3"),
      ],
    },
  ];

  const benefits = [
    {
      title: t("benefits.cloud.title"),
      description: t("benefits.cloud.desc"),
      icon: Cloud,
    },
    {
      title: t("benefits.multitenant.title"),
      description: t("benefits.multitenant.desc"),
      icon: Network,
    },
    {
      title: t("benefits.collaborative.title"),
      description: t("benefits.collaborative.desc"),
      icon: Users,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-indigo-950">
      {/* Animated AI Background */}
      <EvoliqAIVideoBackground
        nodeCount={80}
        connectDistance={160}
        hue={220}
        saturation={70}
        lightness={60}
        opacity={0.35}
      />

      {/* Header Navigation */}
      <div className="relative z-20">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo s animáciou */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="relative h-24 w-48 md:h-32 md:w-64"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  alt="AI-Control"
                  src="/logo-removebg-preview.png"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Produkt badge */}
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white/80 dark:bg-neutral-800/80 px-4 py-2 text-sm tracking-wide text-slate-700 dark:text-slate-300 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              {t("hero.product")}
            </motion.div>

            {/* Hlavný nadpis */}
            <motion.h1
              className="mb-2 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t("hero.titlePrefix")}{" "}
              <motion.span
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {t("hero.titleSuffix")}
              </motion.span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-6 mt-4 max-w-3xl text-xl text-slate-600 dark:text-slate-300 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.p
              className="mx-auto mb-10 max-w-2xl text-lg text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/#contact"
                className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                {t("hero.ctaPrimary")}
              </Link>
              <Link
                href="#pricing"
                className="rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-lg font-semibold text-slate-700 transition-all hover:border-indigo-600 hover:text-indigo-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </motion.div>

            {/* Video Preview */}
            <motion.div
              className="mb-10 flex justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border-4 border-white/50 bg-slate-900 shadow-2xl dark:border-neutral-800/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                  controls={false}
                >
                  <source src="/ai_control.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            {/* Benefits Cards */}
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800/90 p-6 shadow-xl backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-3 text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-slate-100">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-slate-800 dark:text-slate-100 md:text-5xl">
              {t("features.titlePrefix")}{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t("features.titleSuffix")}
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              {t("features.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image/Screenshot Placeholder */}
                <div className="flex-1">
                  <div className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-neutral-700 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-neutral-800 dark:to-neutral-900 shadow-2xl transition-all hover:scale-[1.02] hover:shadow-3xl">
                    <div className="aspect-video">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={800}
                        height={450}
                        className="h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-2xl bg-white/95 dark:bg-neutral-800/95 px-6 py-4 shadow-xl backdrop-blur-sm">
                          <feature.icon className="mx-auto mb-2 h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {t("features.screenshotPlaceholder")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center">
                  <div className="mb-4 inline-flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-3 text-white shadow-lg">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-slate-800 dark:text-slate-100">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-slate-700 dark:text-slate-300">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {t("pricingSection.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              {t("pricingSection.subtitle")}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Demo Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {t("pricingSection.plans.demo.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("pricingSection.plans.demo.description")}
                </p>
              </div>
              <ul className="mb-8 flex-1 space-y-4">
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  {t("pricingSection.plans.demo.features.0")}
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  {t("pricingSection.plans.demo.features.1")}
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                    <X className="h-3 w-3" />
                  </div>
                  {t("pricingSection.plans.demo.features.2")}
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  {t("pricingSection.plans.demo.features.3")}
                </li>
              </ul>
              <Link
                href="/#contact"
                className="block w-full rounded-xl bg-gray-100 px-6 py-3 text-center font-semibold text-gray-900 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
              >
                {t("pricingSection.cta")}
              </Link>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative flex flex-col rounded-2xl border-2 border-emerald-500 bg-white p-8 shadow-lg dark:bg-neutral-900"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {t("pricingSection.plans.standard.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("pricingSection.plans.standard.description")}
                </p>
              </div>
              <ul className="mb-8 flex-1 space-y-4">
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  {t("pricingSection.plans.standard.features.0")}
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  {t("pricingSection.plans.standard.features.1")}
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  {t("pricingSection.plans.standard.features.2")}
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  {t("pricingSection.plans.standard.features.3")}
                </li>
              </ul>
              <Link
                href="/#contact"
                className="block w-full rounded-xl bg-emerald-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-emerald-700 shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20"
              >
                {t("pricingSection.cta")}
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-1 shadow-2xl"
          >
            <div className="rounded-3xl bg-white dark:bg-neutral-900 p-10 md:p-16">
              <div className="text-center">
                <Sparkles className="mx-auto mb-6 h-16 w-16 text-indigo-600 dark:text-indigo-400" />
                <h2 className="mb-4 text-3xl font-bold text-slate-800 dark:text-slate-100 md:text-4xl">
                  {t("cta.title")}
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
                  {t("cta.desc")}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/#kontakt"
                    className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50"
                  >
                    {t("cta.contact")}
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/products/ai-control/case-study"
                    className="rounded-full border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-neutral-800 px-8 py-4 text-lg font-semibold text-indigo-700 dark:text-indigo-300 transition-all hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                  >
                    {t("cta.caseStudy")}
                  </Link>
                  <Link
                    href="/"
                    className="rounded-full border-2 border-slate-300 dark:border-neutral-600 px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 transition-all hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                  >
                    {t("cta.backHome")}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {tFooter("copyright")}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {tFooter("privacy")}
              </button>
              <button
                onClick={() => setShowGDPR(true)}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {tFooter("gdpr")}
              </button>
              <button
                onClick={() => {
                  const event = new CustomEvent("openCookieSettings");
                  window.dispatchEvent(event);
                }}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Cookie className="h-3.5 w-3.5" />
                {tFooter("cookies")}
              </button>
            </div>
          </div>
        </div>

        {/* Modals for Privacy and GDPR would need similar treatment if context requires, but reusing Footer's translations for buttons is good. 
            The content inside modals is also translated in Footer namespace. 
            However, this component replicates Footer somewhat? 
            Ah, I see this page defines its own Footer section inline. 
            Ideally, I should reuse the Footer component, but I'll stick to replacing text here using Footer translations I added.
        */}
      </footer>
    </div>
  );
}
