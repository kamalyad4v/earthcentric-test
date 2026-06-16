"use client";

import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#173528] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-[#d0c6b8]/40 pb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#6a7b6e] hover:text-[#173528] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2 text-primary font-bold text-lg pt-4">
            <Award className="h-6 w-6 text-emerald-600" />
            <h1 className="text-3xl font-extrabold tracking-tight">Terms of Service</h1>
          </div>
          <p className="text-xs text-muted-foreground">Last updated: June 16, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#173528]">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or using the EarthCentric platform, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#173528]">2. Seller Requirements & Sustainability Compliance</h2>
            <p>
              Sellers listing items on the EarthCentric marketplace must go through our rigorous 5-stage verification audit. All claims regarding organic compliance, carbon neutral manufacturing, circular packaging, and recycled material composition must be backed by valid certification files. Misrepresentation will result in immediate shop suspension and fine assessments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#173528]">3. Environmental Claim Auditing</h2>
            <p>
              Our audit team reserves the right to review, update, or remove sustainability badges displayed on any product details page. Badges are designated based on third-party verification documents (e.g., GOTS, FSC, FairTrade, USDA Biobased).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#173528]">4. Carbon Offset Tracking & Shipping</h2>
            <p>
              All shipments initiated via the EarthCentric platform are calculated for carbon emissions. We partner with verified reforestation and renewable energy programs to offset 100% of these computed transit footprints.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#173528]">5. Limitation of Liability</h2>
            <p>
              EarthCentric provides a platform for verified ethical suppliers. While we run extensive audits, the ultimate liability for product safety, usage risks, and specific quality details rests with the listing seller.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#173528]">6. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding our Terms of Service, please reach out to our legal department at <strong>legal@earthcentric.com</strong>.
            </p>
          </section>
        </div>

        {/* Footer info badge */}
        <div className="glass-panel rounded-2xl p-6 border border-[#d0c6b8]/50 flex items-center space-x-3">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
          <span className="text-xs font-semibold text-[#173528]">EarthCentric Carbon-Neutral Platform Trust Standard verified</span>
        </div>
      </div>
    </div>
  );
}
