import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const MAP_EMBED_URL =
    "https://www.google.com/maps?q=Work+Space+%7C+The+Co+Working+Hub,+Oliapuram+Shopping+Complex,+Kothamangalam,+Keralam+686691&ll=10.063819,76.6222501&z=15&output=embed";

const MAP_DIRECTIONS_URL =
    "https://www.google.com/maps/dir/?api=1&destination=Work+Space+%7C+The+Co+Working+Hub,+Oliapuram+Shopping+Complex,+Kothamangalam,+Keralam+686691&destination_place_id=0x3b07e732de872fb3:0x42496cbceaa6c852";

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_wq8k4hr",
                "template_ajtuygp",
                form.current,
                "cB3olJSMVDUydxXmb"
            )
            .then(
                () => {
                    alert("✅ Message Sent Successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("❌ Failed to send. Try again.");
                    console.error(error);
                }
            );
    };

    return (
        <section
            id="contact"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
            style={{
                background:
                    "radial-gradient(ellipse at 20% 0%, rgba(45,90,78,0.12), transparent 50%), radial-gradient(ellipse at 90% 100%, rgba(139,105,20,0.12), transparent 45%), linear-gradient(180deg, #ebe6dc 0%, #f3f0ea 50%, #faf8f4 100%)"
            }}
        >
            <div className="absolute top-16 right-10 w-64 h-64 rounded-full bg-[var(--forest)]/15 blur-3xl animate-float pointer-events-none" />
            <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-[var(--wood)]/15 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />

            <div className="relative max-w-6xl mx-auto">

                <div className="text-center mb-14">
                    <p className="text-xs tracking-[0.3em] uppercase text-[var(--forest-soft)] font-semibold mb-3">
                        Contact
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--ink)]">
                        Get in Touch
                    </h2>
                    <p className="text-[var(--ink-soft)] mt-3 text-lg">
                        Let’s discuss your workspace needs
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="glass-panel
                        p-8 md:p-12
                        rounded-3xl
                        shadow-xl
                        space-y-7"
                    >
                        {[
                            { id: "name", label: "Name", type: "text" },
                            { id: "email", label: "Email", type: "email" },
                            { id: "phone", label: "Phone Number", type: "tel" },
                            { id: "address", label: "Address", type: "text" },
                        ].map((field, i) => (
                            <div className="relative" key={i}>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    placeholder=" "
                                    className="peer w-full bg-white/50
                                    border border-[var(--ink)]/15
                                    p-4 rounded-xl
                                    focus:outline-none
                                    focus:ring-2 focus:ring-[var(--forest)]/40
                                    focus:border-[var(--forest)]
                                    transition"
                                    required
                                />
                                <label
                                    htmlFor={field.id}
                                    className="absolute left-4 top-4 text-[var(--ink-soft)] text-sm transition-all
                                    peer-placeholder-shown:top-5
                                    peer-placeholder-shown:text-[var(--ink-soft)]/70
                                    peer-placeholder-shown:text-base
                                    peer-focus:top-2
                                    peer-focus:text-[var(--forest)]
                                    peer-focus:text-sm"
                                >
                                    {field.label}
                                </label>
                            </div>
                        ))}

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl
                            text-white text-lg font-semibold
                            shadow-md hover:shadow-xl
                            hover:scale-[1.01]
                            transition-all duration-300"
                            style={{
                                background: "linear-gradient(135deg, #1f3d36 0%, #2d5a4e 100%)"
                            }}
                        >
                            Submit
                        </button>
                    </form>

                    <div className="glass-panel rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-[420px]">
                        <iframe
                            title="Work Space | The Co Working Hub location"
                            src={MAP_EMBED_URL}
                            className="w-full flex-1 min-h-[320px] border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                        <div className="p-5 md:p-6 border-t border-[var(--ink)]/10 bg-white/40">
                            <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                                First Floor, Oliapuram Shopping Complex,<br />
                                P.O Junction Kothamangalam, Ernakulam 686691
                            </p>
                            <a
                                href={MAP_DIRECTIONS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex mt-3 text-sm font-semibold text-[var(--forest)] hover:text-[var(--forest-soft)] transition-colors"
                            >
                                Get directions →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
