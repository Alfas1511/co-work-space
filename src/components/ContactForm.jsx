import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_wq8k4hr",   // EmailJS Service ID
                "template_ajtuygp",  // EmailJS Template ID
                form.current,
                "cB3olJSMVDUydxXmb"    // EmailJS Public Key
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
        <section id="contact" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
                    Get in Touch
                </h2>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6 bg-white p-10 rounded-2xl shadow-2xl"
                >
                    {[
                        { id: "name", label: "Name", type: "text" },
                        { id: "email", label: "Email", type: "email" },
                        { id: "address", label: "Address", type: "text" },
                        { id: "phone", label: "Phone Number", type: "tel" },
                    ].map((field, i) => (
                        <div className="relative" key={i}>
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.id} // ✅ IMPORTANT for EmailJS
                                placeholder=" "
                                className="peer w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                required
                            />
                            <label
                                htmlFor={field.id}
                                className="absolute left-4 top-3 text-gray-500 text-sm transition-all 
                  peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                  peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
                            >
                                {field.label}
                            </label>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-700 active:scale-95 transition transform"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
