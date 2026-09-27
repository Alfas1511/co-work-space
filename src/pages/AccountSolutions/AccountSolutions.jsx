import React from "react";

export default function AccountsSolutions() {
    return (
        <section className="relative pt-32 pb-28 overflow-hidden section-gradient">
            <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-[var(--forest)]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-[var(--wood)]/10 blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--ink)]">
                        Accounts Solutions
                    </h1>
                    <p className="text-lg text-[var(--ink-soft)] mt-4">
                        Your Accounting Partner
                    </p>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-[var(--ink)] mb-6">
                        Professional Accounting & Compliance Services
                    </h2>
                    <p className="text-[var(--ink-soft)] leading-relaxed">
                        We provide end-to-end accounting, taxation, and compliance solutions
                        tailored for businesses, professionals, and startups. Our goal is to
                        simplify financial management, ensure statutory compliance, and help
                        you focus on growing your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {[
                        {
                            title: "GST Registration & Filing",
                            desc: "Complete assistance with GST registration, return filing, reconciliations, and compliance support to ensure accuracy and timely submissions."
                        },
                        {
                            title: "Bookkeeping, Accounting & Accounts Finalisation",
                            desc: "Systematic bookkeeping, periodic accounting, and year-end accounts finalisation in line with statutory and audit requirements."
                        },
                        {
                            title: "PF, ESI & TDS Compliance",
                            desc: "End-to-end management of payroll compliances including PF, ESI registrations, monthly returns, challans, and TDS filing with proper documentation."
                        },
                        {
                            title: "Project Reports for Bank Loans",
                            desc: "Preparation of detailed project reports, CMA data, and financial projections required for bank loans and credit facilities."
                        },
                        {
                            title: "Income Tax Filing & Advisory",
                            desc: "Income tax return filing for individuals, firms, and companies along with tax planning and compliance support."
                        }
                    ].map((service, i) => (
                        <div
                            key={i}
                            className={`feature-tile glass-panel p-8 rounded-3xl ${i === 4 ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}`}
                        >
                            <h3 className="font-display text-xl font-semibold text-[var(--ink)] mb-3">
                                {service.title}
                            </h3>
                            <p className="text-[var(--ink-soft)] leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}

                </div>

                <div className="max-w-3xl mx-auto text-center mt-24">
                    <p className="text-[var(--ink-soft)] font-medium">
                        We ensure accuracy, confidentiality, and timely delivery —
                        backed by professional expertise and personalized service.
                    </p>
                </div>

            </div>
        </section>
    );
}
