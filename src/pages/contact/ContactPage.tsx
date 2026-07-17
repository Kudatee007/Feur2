import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import ContactInfo from "./components/ContactInfo";
import OtherWaysToReachUs from "./components/OtherWaysToReachUs";
import ReadyToGetStarted from "./components/ReadyToGetStarted";
import Hero from "../../components/hero/Hero";
import FaqAccordion from "../../components/ui/FaqAccordion";
import { Helmet } from "react-helmet-async";

const EMAILJS_SERVICE_ID = "service_fd0y0mf";
const EMAILJS_TEMPLATE_ID = "template_07vof2r";
const EMAILJS_PUBLIC_KEY = "jvXsIj53efzQNRAJo";

type FormStatus = "idle" | "loading" | "success" | "error";

/* ── Reusable field component ── */
type FieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  helper?: string;
  name: string;
  required?: boolean;
};

const passengerFaqs = [
  {
    q: "How does Feur work?",
    a: "Feur connects car owners with vetted professional drivers on demand. Request a driver through the app, confirm your booking, and a qualified driver arrives to drive you in your own vehicle.",
  },
  {
    q: "Are Feur drivers vetted?",
    a: "Yes. Every driver undergoes thorough screening and verification — including identity verification, driver's licence verification, and document checks — to help ensure safety and professionalism.",
  },
  {
    q: "Can I choose a specific driver?",
    a: "Yes. If your preferred driver is available, you can select them when making a booking or schedule them for future trips.",
  },
  {
    q: "Can I book a driver in advance?",
    a: "Absolutely. You can schedule a driver ahead of time for business meetings, airport transfers, school runs, events, appointments, and other planned trips.",
  },
  {
    q: "Can I hire a driver for the whole day?",
    a: "Yes. Feur offers daily hire options for customers who need a dedicated driver for multiple trips, errands, meetings, or events throughout the day.",
  },
  {
    q: "Do I need to provide a vehicle?",
    a: "Yes. Feur is a Driver-as-a-Service platform — our drivers operate your vehicle. Feur does not provide vehicles.",
  },
  {
    q: "How do payments work?",
    a: "Payments are made securely through the Feur app using Paystack. Once your trip is completed, the final fare is charged and you receive a payment confirmation in the app.",
  },
  {
    q: "What if I need to cancel a booking?",
    a: "Bookings can be cancelled through the app before the trip begins. Once a trip has started, cancellations aren't permitted. Any applicable cancellation policy or fees are shown before you confirm.",
  },
  {
    q: "What happens if there's an emergency during a trip?",
    a: "Feur provides safety features, including trip tracking and emergency support, to help enhance the safety of both customers and drivers.",
  },
  {
    q: "Can someone else book a driver on my behalf?",
    a: "Yes. You can book a driver for a family member, friend, colleague, or loved one by providing the necessary trip details.",
  },
  {
    q: "What areas does Feur operate in?",
    a: "Feur is launching in Lagos and plans to expand to other cities as we grow.",
  },
];

function FormField({
  label,
  placeholder,
  type = "text",
  helper,
  name,
  required,
}: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm
          bg-slate-50 focus:bg-white
          focus:outline-none focus:ring-2 focus:ring-[#3894A3] focus:border-transparent
          transition-all duration-200 placeholder:text-slate-400"
      />
      {helper && <p className="text-xs text-slate-400 mt-1">{helper}</p>}
    </div>
  );
}

/* ── Main component ── */
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) return;
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
      setConsent(false);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — Feur</title>
        <meta name="description" content="Get in touch with the Feur team." />
        <link rel="canonical" href="https://usefeur.com/contact" />
      </Helmet>

      <Hero
        title="Contact Us"
        subtitle="Speak to a member of our team. We're here to help answer any questions you may have about Feur."
        image="/contactImage.webp"
        backgroundImage="/contactUsHeroBg.webp"
      />

      <ContactInfo />

      <section className="bg-[#F3FBFD] py-20 px-5">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div
              className="mx-auto mb-4 w-12 h-12 rounded-xl
              bg-linear-to-br from-[#3894A3] to-[#056170]
              flex items-center justify-center shadow-md"
            >
              <Send className="text-white" size={18} />
            </div>

            <span className="inline-block px-6 py-2 rounded-full bg-[#2F414F] text-white text-sm font-medium mb-3">
              Talk To Us
            </span>

            <p className="text-slate-500 text-sm">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
            {/* Success banner */}
            {status === "success" && (
              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-700">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Message sent!</p>
                  <p className="text-xs mt-0.5 text-teal-600">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {/* Error banner */}
            {status === "error" && (
              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Something went wrong</p>
                  <p className="text-xs mt-0.5 text-red-500">
                    Please try again or email us directly at support@feur.com
                  </p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <FormField
                label="Full Name*"
                name="from_name"
                placeholder="Enter your full name"
                required
              />

              {/* Email */}
              <FormField
                label="Email*"
                name="from_email"
                type="email"
                placeholder="yourname@example.com"
                required
              />

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number*
                </label>
                <div className="flex gap-2">
                  <select
                    name="phone_code"
                    className="rounded-xl border border-slate-200 px-3 py-3
                      text-sm bg-slate-50 focus:outline-none focus:ring-2
                      focus:ring-[#3894A3] focus:border-transparent transition-all duration-200"
                  >
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+27">+27</option>
                    <option value="+254">+254</option>
                    <option value="+233">+233</option>
                  </select>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="8012345678"
                    required
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm
                      bg-slate-50 focus:bg-white
                      focus:outline-none focus:ring-2 focus:ring-[#3894A3] focus:border-transparent
                      transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Location */}
              <FormField
                label="Location*"
                name="location"
                placeholder="City, Country"
                helper="Helps us know the best way to work with you."
                required
              />

              {/* Referral */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  How did you hear about Feur?
                </label>
                <select
                  name="referral"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm
                    bg-slate-50 focus:bg-white focus:outline-none
                    focus:ring-2 focus:ring-[#3894A3] focus:border-transparent
                    transition-all duration-200"
                >
                  <option value="">Please select...</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend or Family">Friend or Family</option>
                  <option value="Online Search">Online Search</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  What can we help you with?*
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm
                    bg-slate-50 focus:bg-white
                    focus:outline-none focus:ring-2 focus:ring-[#3894A3] focus:border-transparent
                    transition-all duration-200 placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Consent */}
              <div
                className={`flex gap-3 items-start rounded-xl p-4 text-xs
                  transition-colors duration-200 cursor-pointer
                  ${
                    consent
                      ? "bg-teal-50 border border-teal-200 text-teal-700"
                      : "bg-slate-50 border border-slate-200 text-slate-500"
                  }`}
                onClick={() => setConsent((prev) => !prev)}
              >
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-0.5 accent-[#3894A3] cursor-pointer"
                />
                <p className="leading-relaxed select-none">
                  By submitting this form, you consent to the collection,
                  processing, and storage of your personal data in accordance
                  with our{" "}
                  <a href="/privacy" className="underline font-medium">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!consent || status === "loading"}
                className="inline-flex items-center gap-2 rounded-full
                  bg-linear-to-br from-[#3894A3] to-[#056170]
                  text-white px-8 py-3 text-sm font-medium shadow-md
                  transition-all duration-300 active:scale-95
                  hover:shadow-lg hover:opacity-90
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <OtherWaysToReachUs />
      <ReadyToGetStarted />

      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-[#2F414F] text-white text-base sm:text-xl lg:text-[26px] font-semibold px-6 py-3 lg:px-8 lg:py-3.5 rounded-full mb-4">
              Frequently Asked Questions
            </div>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#364153]">
              Everything you need to know about riding with Feur.
            </p>
          </div>

          <FaqAccordion items={passengerFaqs} />
        </div>
      </section>
    </>
  );
}
