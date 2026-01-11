import { Send } from "lucide-react";
import ContactInfo from "./components/ContactInfo";
import OtherWaysToReachUs from "./components/OtherWaysToReachUs";
import ReadyToGetStarted from "./components/ReadyToGetStarted";
import Hero from "../../components/hero/Hero";
import aboutImage from "../../assets/images/aboutImage.svg";

export default function ContactSection() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Speak to a member of our team. We're here to help answer any questions you may have about Feur."
        image={aboutImage}
      />
      <ContactInfo />

      <section className="bg-[#F3FBFD] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center shadow-md">
              <Send className="text-white" size={20} />
            </div>

            <span className="inline-block px-6 py-2 rounded-full bg-slate-800 text-white text-sm font-medium mb-3">
              Talk To Us
            </span>

            <p className="text-slate-600 text-sm">
              Fill out the form below and we’ll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
            <form className="space-y-5">
              {/* Full Name */}
              <FormField
                label="Full Name*"
                placeholder="Enter your full name"
              />

              {/* Email */}
              <FormField
                label="Email*"
                type="email"
                placeholder="yourname@example.com"
              />

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number*
                </label>
                <div className="flex gap-2">
                  <select className="rounded-lg border border-slate-200 px-3 py-3 text-sm bg-slate-50">
                    <option>+234</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="8012345678"
                    className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Location */}
              <FormField
                label="Location*"
                placeholder="City, Country"
                helper="Helps us know the best way to work with you."
              />

              {/* Referral */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  How did you hear about Feur?
                </label>
                <select className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-teal-500">
                  <option>Please select...</option>
                  <option>Social Media</option>
                  <option>Friend or Family</option>
                  <option>Online Search</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  What can we help you with?*
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Consent */}
              <div className="flex gap-3 items-start bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600">
                <input type="checkbox" className="mt-1" />
                <p>
                  By submitting this form, you consent to the collection,
                  processing, and storage of your personal data in accordance
                  with our Privacy Policy.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-sm font-medium transition shadow-md"
              >
                <Send size={16} />
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <OtherWaysToReachUs />
      <ReadyToGetStarted />
    </>
  );
}

/* ---------- Helper Component ---------- */

type FieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  helper?: string;
};

function FormField({ label, placeholder, type = "text", helper }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      {helper && <p className="text-xs text-slate-500 mt-1">{helper}</p>}
    </div>
  );
}
