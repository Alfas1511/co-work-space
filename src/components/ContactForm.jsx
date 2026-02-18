import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
            className="relative py-28 px-6 bg-slate-100 overflow-hidden"
        >
            {/* Subtle background glow */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

            <div className="relative max-w-3xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Get in Touch
                    </h2>
                    <p className="text-slate-500 mt-3 text-lg">
                        Let’s discuss your workspace needs
                    </p>
                </div>

                {/* Form Card */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white/80 backdrop-blur-xl 
                    border border-white/40
                    p-10 md:p-12 
                    rounded-3xl 
                    shadow-xl 
                    space-y-8"
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
                                className="peer w-full bg-transparent 
                                border border-slate-300 
                                p-4 rounded-xl 
                                focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 
                                focus:border-blue-500 
                                transition"
                                required
                            />
                            <label
                                htmlFor={field.id}
                                className="absolute left-4 top-4 text-slate-500 text-sm transition-all
                                peer-placeholder-shown:top-5 
                                peer-placeholder-shown:text-slate-400 
                                peer-placeholder-shown:text-base 
                                peer-focus:top-2 
                                peer-focus:text-blue-600 
                                peer-focus:text-sm"
                            >
                                {field.label}
                            </label>
                        </div>
                    ))}

                    {/* Premium Button */}
                    <button
                        type="submit"
                        className="w-full py-4 rounded-full 
                        bg-gradient-to-r from-blue-600 to-indigo-600 
                        text-white text-lg font-semibold 
                        shadow-md hover:shadow-xl 
                        hover:scale-[1.02] 
                        transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
