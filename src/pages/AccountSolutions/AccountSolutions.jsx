import React from "react";

export default function AccountsSolutions() {
    return (
        <section className="pt-32 pb-28 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Accounts Solutions
                    </h1>
                    <p className="text-lg text-slate-600 mt-4">
                        Your Accounting Partner
                    </p>
                </div>

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
                        Professional Accounting & Compliance Services
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        We provide end-to-end accounting, taxation, and compliance solutions
                        tailored for businesses, professionals, and startups. Our goal is to
                        simplify financial management, ensure statutory compliance, and help
                        you focus on growing your business.
                    </p>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Closing */}
                <div className="max-w-3xl mx-auto text-center mt-24">
                    <p className="text-slate-700 font-medium">
                        We ensure accuracy, confidentiality, and timely delivery —
                        backed by professional expertise and personalized service.
                    </p>
                </div>

            </div>
        </section>
    );
}
