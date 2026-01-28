"use client";

import React from "react";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { motion } from "framer-motion";
import NavBar from "@/components/sections/NavBar";
import { useTranslations } from 'next-intl';
import {
  Clock,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calendar,
  FileText,
  Users,
  BarChart3,
  Zap,
  Target,
  Award,
  DollarSign,
  ChevronRight,
} from "lucide-react";

export default function CaseStudyPage() {
  const t = useTranslations('CaseStudy');
  const tFooter = useTranslations('Footer');

  const comparisonData = [
    {
      phase: t('comparison.phases.planning.title'),
      traditional: { time: 4, description: t('comparison.phases.planning.traditional') },
      aiControl: { time: 0.5, description: t('comparison.phases.planning.ai') },
      savings: 87.5,
    },
    {
      phase: t('comparison.phases.checklist.title'),
      traditional: { time: 3, description: t('comparison.phases.checklist.traditional') },
      aiControl: { time: 0.3, description: t('comparison.phases.checklist.ai') },
      savings: 90,
    },
    {
      phase: t('comparison.phases.execution.title'),
      traditional: { time: 8, description: t('comparison.phases.execution.traditional') },
      aiControl: { time: 7, description: t('comparison.phases.execution.ai') },
      savings: 12.5,
    },
    {
      phase: t('comparison.phases.reporting.title'),
      traditional: { time: 6, description: t('comparison.phases.reporting.traditional') },
      aiControl: { time: 0.5, description: t('comparison.phases.reporting.ai') },
      savings: 91.7,
    },
    {
      phase: t('comparison.phases.corrective.title'),
      traditional: { time: 2, description: t('comparison.phases.corrective.traditional') },
      aiControl: { time: 0.5, description: t('comparison.phases.corrective.ai') },
      savings: 75,
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: t('results.items.time.title'),
      value: t('results.items.time.value'),
      description: t('results.items.time.desc'),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: t('results.items.money.title'),
      value: t('results.items.money.value'),
      description: t('results.items.money.desc'),
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Target,
      title: t('results.items.quality.title'),
      value: t('results.items.quality.value'),
      description: t('results.items.quality.desc'),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: t('results.items.capacity.title'),
      value: t('results.items.capacity.value'),
      description: t('results.items.capacity.desc'),
      color: "from-orange-500 to-red-500",
    },
  ];

  const realWorldExample = {
    company: t('companyProfile.type.value'),
    industry: t('companyProfile.focus.value'),
    auditsPerYear: t('companyProfile.audits.value'),
    auditorsCount: t('companyProfile.team.value'),
    beforeState: {
      avgTimePerAudit: 23,
      paperworkHours: 13,
      fieldworkHours: 10,
      errorRate: 12,
    },
    afterState: {
      avgTimePerAudit: 16,
      paperworkHours: 6,
      fieldworkHours: 10,
      errorRate: 3,
    },
  };

  const totalTraditionalTime = comparisonData.reduce((sum, item) => sum + item.traditional.time, 0);
  const totalAiTime = comparisonData.reduce((sum, item) => sum + item.aiControl.time, 0);
  const totalSavings = ((totalTraditionalTime - totalAiTime) / totalTraditionalTime) * 100;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950">
      {/* Header */}
      <div className="relative z-20">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pb-12 pt-20 md:pb-20 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-neutral-800/80 px-6 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 backdrop-blur-sm">
              <Award className="h-4 w-4" />
              {t('badge')}
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              {t('titlePrefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {t('titleMiddle')}
              </span>
              <br />
              {t('titleSuffix')}
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600 dark:text-slate-300">
              {t('subtitle')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-6 py-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">70%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t('stats.timeSaved')}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-6 py-4">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">235K Kč</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t('stats.moneySaved')}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-6 py-4">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">+40%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t('stats.qualityIncreased')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 md:p-12"
          >
            <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
              {t('companyProfile.title')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{t('companyProfile.type.label')}</div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {realWorldExample.company}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-purple-100 dark:bg-purple-900/30 p-3">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{t('companyProfile.focus.label')}</div>
                  <div className="text-slate-600 dark:text-slate-400">{realWorldExample.industry}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-emerald-100 dark:bg-emerald-900/30 p-3">
                  <Calendar className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{t('companyProfile.audits.label')}</div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {realWorldExample.auditsPerYear}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-100 dark:bg-orange-900/30 p-3">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{t('companyProfile.team.label')}</div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {realWorldExample.auditorsCount}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              {t('comparison.title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              {t('comparison.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6"
              >
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  {item.phase}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Traditional */}
                  <div className="rounded-xl bg-red-50 dark:bg-red-900/20 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {t('comparison.labels.traditional')}
                      </span>
                    </div>
                    <div className="mb-2 text-3xl font-bold text-red-600 dark:text-red-400">
                      {item.traditional.time}h
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.traditional.description}
                    </p>
                  </div>

                  {/* AI Control */}
                  <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {t('comparison.labels.ai')}
                      </span>
                    </div>
                    <div className="mb-2 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                      {item.aiControl.time}h
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.aiControl.description}
                    </p>
                  </div>
                </div>

                {/* Savings */}
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4">
                  <TrendingDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {t('comparison.labels.timeSaved')}
                    </div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {item.savings.toFixed(1)}%
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {(item.traditional.time - item.aiControl.time).toFixed(1)}{t('comparison.labels.hoursSaved')}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 p-1"
          >
            <div className="rounded-3xl bg-white dark:bg-neutral-900 p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {t('comparison.labels.traditional')}
                  </div>
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400">
                    {totalTraditionalTime}h
                  </div>
                </div>
                <div className="text-center">
                  <ArrowRight className="mx-auto mb-2 h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                    {totalSavings.toFixed(0)}%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{t('comparison.labels.totalSavings')}</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {t('comparison.labels.ai')}
                  </div>
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                    {totalAiTime}h
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white"
          >
            {t('results.title')}
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6 text-center"
              >
                <div
                  className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color}`}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
                  {benefit.value}
                </div>
                <div className="mb-2 font-semibold text-slate-900 dark:text-white">
                  {benefit.title}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white"
          >
            {t('transformation.title')}
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10 p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-red-600 p-3">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('transformation.before')}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-red-200 dark:border-red-800 pb-3">
                  <span className="text-slate-700 dark:text-slate-300">{t('transformation.metrics.avgTime')}</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {realWorldExample.beforeState.avgTimePerAudit}h
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-red-200 dark:border-red-800 pb-3">
                  <span className="text-slate-700 dark:text-slate-300">{t('transformation.metrics.admin')}</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {realWorldExample.beforeState.paperworkHours}h
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-red-200 dark:border-red-800 pb-3">
                  <span className="text-slate-700 dark:text-slate-300">{t('transformation.metrics.fieldwork')}</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {realWorldExample.beforeState.fieldworkHours}h
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">{t('transformation.metrics.errorRate')}</span>
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {realWorldExample.beforeState.errorRate}%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-900/10 p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-600 p-3">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('transformation.after')}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-800 pb-3">
                  <span className="text-slate-700 dark:text-slate-300">{t('transformation.metrics.avgTime')}</span>
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {realWorldExample.afterState.avgTimePerAudit}h
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-800 pb-3">
                  <span className="text-slate-700 dark:text-slate-300">{t('transformation.metrics.admin')}</span>
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {realWorldExample.afterState.paperworkHours}h
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-800 pb-3">
                  <span className="text-slate-700 dark:text-slate-300">{t('transformation.metrics.fieldwork')}</span>
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {realWorldExample.afterState.fieldworkHours}h
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">{t('transformation.metrics.errorRate')}</span>
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {realWorldExample.afterState.errorRate}%
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 p-1"
          >
            <div className="rounded-3xl bg-white dark:bg-neutral-900 p-10 text-center md:p-16">
              <Zap className="mx-auto mb-6 h-16 w-16 text-blue-600 dark:text-blue-400" />
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                {t('cta.title')}
              </h2>
              <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
                {t('cta.desc')}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  {t('cta.demo')}
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/products/ai-control"
                  className="rounded-full border-2 border-slate-300 dark:border-neutral-600 px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 transition-all hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                >
                  {t('cta.moreInfo')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-neutral-700 px-6 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {tFooter('copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
