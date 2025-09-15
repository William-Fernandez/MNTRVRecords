import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();
    const formRef = useRef();
    const recaptchaRef = useRef();

    const onSubmit = async (data) => {
        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            toast.error("Please complete the reCAPTCHA.");
            return;
        }

        try {
            await emailjs.sendForm(
                // Accede a las variables de entorno para las claves de EmailJS
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (window.gtag) {
                window.gtag("event", "form_submission", {
                    event_category: "Contact Form",
                    event_label: "Successful Submission",
                });
            }

            toast.success("Message sent successfully!");
            reset();
            recaptchaRef.current.reset();
        } catch (error) {
            console.error("Failed to send message:", error);
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <section
            id="contact"
            className="w-full min-h-screen flex flex-col lg:flex-row bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-6 lg:p-8"
        >
            <Toaster position="bottom-right" richColors />

            <div className="w-full lg:w-1/2 flex flex-col lg:px-4 pt-8 lg:pt-12 lg:pl-16">
                <h2 className="text-3xl md:text-4xl font-bold text-start mb-4 text-white mt-8 pl-2.5">
                    Contact Us
                </h2>
                <p className="text-sm md:text-base text-white sm:mb-12 max-w-3xl pl-2.5">
                    We'd love to hear from you! Whether you have questions,
                    feedback, or just want to say hello, feel free to reach out.
                </p>
            </div>

            <div className="w-full lg:w-1/2 h-full flex items-center p-2 sm:p-3 lg:p-12 mt-8">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-lg bg-gray-800 p-4 lg:p-8 rounded-lg shadow-lg mx-auto"
                >
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            {...register("user_name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message:
                                        "Name must be at least 2 characters",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Name cannot exceed 50 characters",
                                },
                            })}
                            className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        />
                        {errors.user_name && (
                            <span className="text-red-500 text-xs mt-1">
                                {errors.user_name.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            {...register("user_email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message:
                                        "Please enter a valid email address",
                                },
                            })}
                            className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        />
                        {errors.user_email && (
                            <span className="text-red-500 text-xs mt-1">
                                {errors.user_email.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message:
                                        "Message must be at least 10 characters",
                                },
                                maxLength: {
                                    value: 1000,
                                    message:
                                        "Message cannot exceed 1000 characters",
                                },
                            })}
                            className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-500 text-xs mt-1">
                                {errors.message.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-3 md:mb-6 responsive-recaptcha">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            // Accede a la variable de entorno para la clave de reCAPTCHA
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ${
                            isSubmitting
                                ? "opacity-50 cursor-not-allowed"
                                : "cursor-pointer"
                        }`}
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </section>
    );
}
