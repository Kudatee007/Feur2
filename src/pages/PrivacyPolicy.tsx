const PrivacyPolicy = () => {
  return (
       <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Feur Technologies Limited</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed text-gray-700">

          <p className="text-gray-600">
            This Privacy Policy informs you of how we collect, process and may share your personal
            information when you utilize Feur's website, application and services. Feur Technologies
            Limited ("Feur," "we," "us," or "our") is dedicated to protecting your fundamental right
            to privacy and safeguarding your Personal Data in strict compliance with the Nigeria Data
            Protection Act (NDPA) 2023 and applicable regulatory frameworks.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Personal Data We Collect</h2>
            <p className="mb-3">To deliver reliable, secure, and fully verified transport services, Feur collects Personal Data across several functional categories:</p>
            <ul className="space-y-2 list-none">
              {[
                { label: "Identifiable & Verification Data", desc: "Full legal name, mobile phone number, primary email address, residential address, biological sex, date of birth, personal profile image, facial verification biometric photos, and government-issued identification details (NIN, VIN, Driver's License, or International Passport)." },
                { label: "Vehicle & Regulatory Data", desc: "Vehicle identification numbers, license plate numbers, vehicle make/model/year, proof of ownership documents, commercial operating permits, roadworthiness certificates, and active auto insurance policies." },
                { label: "Driver & Operator Verification Data", desc: "Valid driver's license details, driving record history, medical fitness confirmations, background screening clearances, criminal record checks, and professional transport certifications." },
                { label: "Location & Telematics Data", desc: "Precise geographic location data derived from GPS, Wi-Fi, cell tower triangulation, and IP addresses. This includes pick-up/drop-off coordinates, route efficiency metrics, distance covered, trip duration, speed logs, and background location data." },
                { label: "Device & Technical Data", desc: "Hardware specifications, unique device identifiers, IP address, mobile operating system version, browser attributes, mobile network provider, app crash diagnostics, and device system logs." },
                { label: "Payment & Transactional Data", desc: "Financial records detailing trip fares, route surcharges, tips, promotional discounts, platform fees, cancellation charges, and driver payout history. Sensitive card credentials are processed exclusively by PCI-DSS-compliant Payment Service Providers." },
                { label: "Communication & Support Data", desc: "In-app audio or text messages, call metadata, customer support conversation logs, platform reviews, driver ratings, feedback forms, and social media interactions." },
                { label: "Incidental & Safety Data", desc: "Telematics safety alerts, emergency SOS trigger logs, dashcam or media uploads submitted during safety incident investigations, dispute records, and official statements." },
              ].map((item) => (
                <li key={item.label} className="pl-4 border-l-2 border-[#3894A3]/30">
                  <span className="font-semibold text-gray-900">{item.label}:</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Collect This Data</h2>
            <ul className="space-y-2 list-none">
              {[
                { label: "Direct Interactions", desc: "Information provided by you when registering an account, submitting identity documents, setting up payment channels, contacting customer support, or responding to platform surveys." },
                { label: "Automated Data Collection", desc: "Technical and location data collected automatically whenever you open, navigate, or interact with the Feur website or mobile application, including background location tracking during active trips." },
                { label: "Third-Party Integrations", desc: "Data lawfully obtained from third-party partners, including identity management databases (NIMC verification partners), background check agencies, payment gateways, financial institutions, insurance providers, and law enforcement agencies." },
              ].map((item) => (
                <li key={item.label} className="pl-4 border-l-2 border-[#3894A3]/30">
                  <span className="font-semibold text-gray-900">{item.label}:</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Why/How We Use Your Data</h2>
            <ul className="space-y-2 list-none">
              {[
                { label: "Core Platform Delivery", desc: "To create and administer accounts, connect passengers with vetted independent drivers, confirm trip completion and facilitate driver payouts. Feur does not own, supply, hire out or dispatch vehicles." },
                { label: "Safety & Security Infrastructure", desc: "To execute background screenings, authenticate identities via facial checks, monitor real-time trips, detect dangerous driving behavior, investigate safety incidents, and activate emergency response protocols." },
                { label: "Financial Processing", desc: "To calculate dynamic fare structures, process cashless transactions, execute driver payouts, settle platform commissions, issue e-receipts, and process refund claims." },
                { label: "Customer Support & Communications", desc: "To respond to user inquiries, resolve billing disputes, locate lost items, send operational updates, and communicate critical safety alerts." },
                { label: "Platform Optimization & Analytics", desc: "To debug platform errors, analyze service performance, refine dispatch algorithms, develop new features, and evaluate customer satisfaction." },
                { label: "Legal & Regulatory Compliance", desc: "To maintain mandatory transaction records, comply with tax obligations, satisfy transport ministry requirements, and fulfill statutory directives issued by the NDPC, judicial courts, or law enforcement authorities." },
              ].map((item) => (
                <li key={item.label} className="pl-4 border-l-2 border-[#3894A3]/30">
                  <span className="font-semibold text-gray-900">{item.label}:</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Lawful Basis for Processing Data</h2>
            <p className="mb-3">In accordance with Section 25 of the Nigeria Data Protection Act 2023, Feur relies on the following legal grounds:</p>
            <ul className="space-y-2 list-none">
              {[
                { label: "Consent", desc: "Explicitly provided by you for specific actions, such as enabling marketing communications or activating non-essential app permissions. You may withdraw consent at any time." },
                { label: "Contractual Necessity", desc: "Essential for entering into or fulfilling our service contract with you, including matching you with a driver, executing ride bookings, and processing payments." },
                { label: "Legal Obligation", desc: "Necessary to comply with mandatory statutory provisions, court orders, tax filings, regulatory reporting, or official governmental directives." },
                { label: "Protection of Vital Interests", desc: "Crucial to safeguard your life, physical safety, or emergency health conditions during serious incidents." },
                { label: "Legitimate Interests", desc: "Necessary for legitimate business interests pursued by Feur, such as preventing fraud, securing IT systems, and managing legal claims, provided these do not override your fundamental rights." },
              ].map((item) => (
                <li key={item.label} className="pl-4 border-l-2 border-[#3894A3]/30">
                  <span className="font-semibold text-gray-900">{item.label}:</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Retention & Destruction of Data</h2>
            <p>Feur retains your Personal Data only for as long as necessary to fulfill the purposes for which it was collected, or to comply with statutory retention limits under Nigerian law.</p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="pl-4 border-l-2 border-[#3894A3]/30"><span className="font-semibold text-gray-900">Active Account Data:</span> Retained for the active duration of your account.</li>
              <li className="pl-4 border-l-2 border-[#3894A3]/30"><span className="font-semibold text-gray-900">Inactive Account Data:</span> Upon account deactivation or deletion, we retain transaction and safety logs for a maximum period required by law (typically 6 years) to handle potential legal claims, safety audits, or tax requirements.</li>
            </ul>
            <p className="mt-3">Once the applicable retention period expires, your Personal Data is permanently deleted, destroyed, or rendered irreversibly anonymous.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Data Subject Rights</h2>
            <p className="mb-3">As a Data Subject under the Nigeria Data Protection Act 2023, you hold the following enforceable legal rights:</p>
            <ul className="space-y-2 list-none">
              {[
                { label: "Right to be Informed", desc: "To receive clear, transparent details regarding how we collect, process, and protect your data." },
                { label: "Right of Access", desc: "To request confirmation of whether we hold your Personal Data and receive a copy of your personal records." },
                { label: "Right to Rectification", desc: "To request the immediate correction of inaccurate, incomplete, or out-of-date Personal Data." },
                { label: "Right to Erasure", desc: "To request the permanent deletion of your Personal Data where processing is no longer necessary or lacks a lawful basis." },
                { label: "Right to Restrict or Object to Processing", desc: "To object to the processing of your data for direct marketing, profiling, or processing based solely on legitimate interests." },
                { label: "Right to Data Portability", desc: "To request the transfer of your structured Personal Data to yourself or another platform in a standard, machine-readable format." },
                { label: "Rights Regarding Automated Decision-Making", desc: "To request human intervention or contest decisions made solely by automated processes." },
                { label: "Right to Lodge a Complaint", desc: "To file a formal complaint with the Nigeria Data Protection Commission (NDPC) if you believe Feur has breached your privacy rights." },
              ].map((item) => (
                <li key={item.label} className="pl-4 border-l-2 border-[#3894A3]/30">
                  <span className="font-semibold text-gray-900">{item.label}:</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">To exercise any of these rights, contact our Data Protection Unit at <a href="mailto:support@usefeur.com" className="text-[#3894A3] hover:underline">support@usefeur.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Third-Party Disclosures & Cross-Border Transfers</h2>
            <p>Feur does not sell, rent, or trade your Personal Data to third parties for marketing purposes. Disclosures are strictly limited to authorized third parties under enforceable legal safeguards, including rider-driver disclosures necessary to facilitate transportation, vetted service providers (payment gateways, cloud hosting, mapping/GPS, identity verification), emergency services and law enforcement when necessary, and corporate restructuring scenarios under strict non-disclosure guarantees.</p>
            <p className="mt-3">Where Personal Data must be transferred outside Nigeria, Feur guarantees compliance with Sections 41, 42, and 43 of the NDPA 2023.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Protection of Minors</h2>
            <p>The Services offered by Feur are strictly intended for individuals who are 18 years of age or older. We do not knowingly collect, request, or process Personal Data from minors under 18. If we discover that a minor has created an account, we will immediately disable the account and permanently delete all associated data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Security Measures & Breach Notification</h2>
            <p className="mb-3">We employ technical, administrative, and physical security safeguards including:</p>
            <ul className="space-y-1 list-disc list-inside ml-2">
              <li>TLS/SSL encryption for data in transit and AES-256 encryption for sensitive data at rest</li>
              <li>Role-based data access controls and multi-factor authentication for technical personnel</li>
              <li>Regular system vulnerability scans, software patching, and security audits</li>
            </ul>
            <p className="mt-3">In the event of a personal data breach, Feur will formally notify the NDPC within 72 hours of becoming aware of the breach, pursuant to Section 40 of the NDPA 2023.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Cookies and Tracking Technologies</h2>
            <p>Feur utilizes cookies, web beacons, SDKs, and similar tracking technologies to manage platform functionality, maintain session security, store user preferences, and analyze app performance. Essential cookies are required for system operation and cannot be disabled. Non-essential analytics and functional cookies are deployed only with your express consent, which you may manage at any time via browser settings or our in-app Cookie Preference Center.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Policy Updates</h2>
            <p>Feur reserves the right to amend or update this Privacy Policy periodically. When material modifications are made, we will notify you through prominent in-app notices, registered email alerts, or by updating the "Last Updated" date. Continued use of Feur's Services following notification of an update constitutes your acknowledgment of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Contact Us & Data Protection Officer</h2>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Feur Technologies Limited</p>
              <p className="text-sm text-gray-600">Attention: Data Protection Officer (DPO)</p>
              <a href="mailto:support@usefeur.com" className="text-[#3894A3] hover:underline text-sm">
                support@usefeur.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>

  )
}

export default PrivacyPolicy