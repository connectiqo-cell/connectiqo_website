// Connectiqo Terms of Service — content data
// Structure mirrors privacyPolicyContent.js: array of sections with id, title, and body blocks.
// This is an original draft prepared for Connectiqo and requires review by a qualified
// Indian technology lawyer before publication — it is not a substitute for legal advice.

export const TERMS_META = {
  documentName: 'Connectiqo Terms of Service',
  version: '1.0',
  status: 'Draft (Subject to Legal Review)',
  effectiveDate: 'August 19, 2026',
  lastUpdated: 'August 19, 2026',
  owner: 'HR Nexus (Partnership Firm)',
}

export const TERMS_SECTIONS = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    body: [
      { p: 'These Terms of Service ("Terms") are a binding agreement between you and Connectiqo ("Connectiqo", "we", "our", or "us"), a digital platform owned and operated by HR Nexus, a partnership firm having its registered office at 307, Adjacent to Helipad, Opposite Seva Sadan, Patanjali Yogpeeth Phase 2, Shantarshah, Bahadrabad, Haridwar, Uttarakhand – 249405, India.' },
      { p: 'By creating an account, accessing, or using the Connectiqo mobile application, website, or any related services (collectively, the "Platform"), you agree to be bound by these Terms and by our Privacy Policy, which is incorporated into these Terms by reference. If you do not agree to these Terms, you must not access or use the Platform.' },
      { p: 'These Terms apply to all individuals who use the Platform, whether as a User booking sessions, a Creator offering sessions, or a visitor browsing the Platform.' },
    ],
  },
  {
    id: 'definitions',
    title: '2. Definitions',
    body: [
      { p: 'Capitalized terms used in these Terms have the meanings given below, consistent with the definitions in our Privacy Policy.' },
      { ul: [
        '"Platform" — the Connectiqo mobile application, website (connectiqo.com), and all related products and services.',
        '"User" — any individual who registers for, browses, or uses the Platform, including to book a Session.',
        '"Creator" — a verified individual who offers paid or unpaid one-to-one Sessions through the Platform. Any User may apply to also become a Creator; the two roles are not mutually exclusive.',
        '"Session" — a scheduled one-to-one video (or audio) interaction between a User and a Creator, booked and conducted through the Platform.',
        '"Content" — any text, photograph, video, audio, profile information, message, review, or other material uploaded, transmitted, or made available through the Platform.',
        '"Recording" — a digital audio or audiovisual recording of a Session, created only where both participants have expressly consented through the Platform.',
      ] },
    ],
  },
  {
    id: 'eligibility',
    title: '3. Eligibility',
    body: [
      { p: 'The Platform is intended solely for individuals who are 13 years of age or older. By creating an account, you represent and warrant that you meet this age requirement. If you are between 13 and 18 years of age, you may only use features involving payments, KYC verification, or Creator payouts with the involvement or consent of a parent or legal guardian who agrees to be bound by these Terms on your behalf where required by applicable Indian law.' },
      { p: 'Connectiqo may request age or identity verification at any time, and may suspend or terminate an account where it reasonably believes these eligibility requirements are not met.' },
    ],
  },
  {
    id: 'accounts',
    title: '4. Account Registration & Security',
    body: [
      { p: 'To use most features of the Platform, you must create an account and provide accurate, current, and complete information. You are responsible for keeping your account information up to date.' },
      { p: 'You are solely responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify Connectiqo promptly if you suspect any unauthorized access to or use of your account.' },
      { p: 'You may not create more than one account for fraudulent purposes, impersonate another person, or transfer your account to another individual without Connectiqo’s prior written consent.' },
    ],
  },
  {
    id: 'platform-role',
    title: '5. Nature of the Platform',
    body: [
      { p: 'Connectiqo is a marketplace that connects Users seeking guidance, mentorship, coaching, or expertise with Creators offering one-to-one video Sessions on those topics.' },
      { p: 'Connectiqo is not a party to the relationship between a User and a Creator, and does not itself provide mentoring, coaching, educational, or professional advice. Connectiqo does not guarantee, endorse, or warrant the identity, qualifications, conduct, accuracy of advice, or outcome of any Session provided by a Creator. Any reliance you place on information or guidance provided during a Session is at your own risk.' },
      { p: 'Creator profiles, ratings, and reviews are provided for informational purposes and reflect the views of individual Users; they do not constitute a guarantee or endorsement by Connectiqo.' },
    ],
  },
  {
    id: 'creator-verification',
    title: '6. Becoming a Creator; Verification & KYC',
    body: [
      { p: 'Any User may apply to become a Creator by completing the Creator onboarding process, which may include providing a professional category, pricing, availability, qualifications, and other profile information. Submission of a Creator application does not guarantee approval, and Connectiqo may approve, reject, suspend, or remove Creator applications and accounts at its discretion, consistent with these Terms and applicable law.' },
      { p: 'Before a Creator can receive payouts, Connectiqo (or its payment processor) requires completion of identity verification ("KYC"), which may include a PAN card, Aadhaar or other government-issued identification, bank account verification, and tax information, in accordance with applicable law and our Privacy Policy. Payout timing, KYC thresholds, and settlement requirements are governed by our payment processor’s policies in addition to these Terms.' },
      { p: 'Creators are independent individuals, not employees, agents, or representatives of Connectiqo. Nothing in these Terms creates an employment, partnership, joint venture, or agency relationship between Connectiqo and any Creator.' },
    ],
  },
  {
    id: 'bookings-payments',
    title: '7. Bookings, Pricing & Payments',
    body: [
      { p: 'Session prices are set by each Creator. By booking a Session, you authorize Connectiqo and its payment processor to charge the applicable session price, and any platform fee disclosed at checkout, to your selected payment method.' },
      { p: 'All payments on the Platform are processed through Razorpay or another authorized third-party payment processor. Connectiqo does not store your complete debit card, credit card, or other payment instrument credentials.' },
      { p: 'A platform fee may be applied to bookings, as disclosed to you before you confirm payment. Prices, fees, and applicable taxes are shown at checkout and may vary by Creator, category, or session length.' },
      { p: 'You agree to pay all charges incurred through your account. If a payment cannot be processed for any reason (e.g. insufficient funds, expired card, or processor decline), your booking may be cancelled.' },
    ],
  },
  {
    id: 'cancellations-refunds',
    title: '8. Cancellations, Rescheduling & Refunds',
    body: [
      { p: 'Cancellation, rescheduling, and refund terms are presented to you at the time of booking and may vary depending on how far in advance a Session is cancelled, whether the Creator or the User initiates the cancellation, and the specific circumstances (e.g. technical failure, no-show).' },
      { p: 'Refunds, where applicable, are processed back to the original payment method through Razorpay and may take a number of business days to appear, depending on your bank or payment provider. Connectiqo reserves the right to withhold or deny a refund where there is reasonable evidence of abuse of the cancellation or refund process.' },
      { p: 'Repeated cancellations or no-shows by either a User or a Creator may result in restrictions on booking privileges or account suspension.' },
    ],
  },
  {
    id: 'creator-payouts',
    title: '9. Creator Payouts & Platform Fees',
    body: [
      { p: 'Creators earn the session price set by them, less the applicable platform fee and any payment-processing charges, for each completed Session. Payouts are made to the bank account or payout method configured in the Creator’s account settings, subject to successful completion of KYC verification.' },
      { p: 'Connectiqo reserves the right to withhold, delay, or reverse a payout where a Session is disputed, where fraud or policy violations are suspected, or where required by applicable law or our payment processor’s policies, pending investigation.' },
      { p: 'Connectiqo may change its platform fee structure from time to time; any such change will be communicated to Creators in advance and will apply prospectively to new bookings.' },
    ],
  },
  {
    id: 'sessions-recordings',
    title: '10. Live Sessions & Recordings',
    body: [
      { p: 'Sessions are conducted through the Platform’s integrated video communication technology. You are responsible for having a compatible device, a stable internet connection, and a private, appropriate environment for your Session.' },
      { p: 'A Session may be recorded only where both participants have expressly consented through the Platform before recording begins. By starting or joining a Session for which recording has been enabled, you consent to that recording.' },
      { p: 'Where a Session is recorded, only the User who booked the Session may download and retain the Recording through the Platform, unless Connectiqo introduces additional functionality in the future. You agree not to further distribute, publish, or share a Recording outside the Platform without the express permission of the other participant.' },
      { p: 'Connectiqo may access Recordings for quality assurance, customer support, dispute resolution, fraud prevention, platform security, and legal compliance, as described in our Privacy Policy.' },
    ],
  },
  {
    id: 'acceptable-use',
    title: '11. Acceptable Use & Community Guidelines',
    body: [
      { p: 'You agree not to, and not to assist or permit any third party to:' },
      { ul: [
        'harass, threaten, abuse, defame, or discriminate against any other User or Creator, whether during a Session, in chat, or elsewhere on the Platform;',
        'upload, transmit, or share Content that is unlawful, infringing, defamatory, obscene, or that you do not have the rights to share;',
        'attempt to circumvent Connectiqo’s booking or payment flow to arrange or pay for a Session off-platform;',
        'misrepresent your identity, qualifications, credentials, or affiliation with any organization;',
        'use the Platform to solicit, advertise, or promote unrelated products or services without authorization;',
        'attempt to access another User’s or Creator’s account, or to interfere with, disrupt, or reverse-engineer the Platform or its underlying technology;',
        'use automated means (bots, scrapers, or similar tools) to access or extract data from the Platform without prior written consent.',
      ] },
      { p: 'You may report abusive conduct or content through the reporting tools available on a profile, chat, or Session. Connectiqo may investigate reported violations and may warn, suspend, restrict, or terminate accounts found to violate these Terms, at its reasonable discretion.' },
    ],
  },
  {
    id: 'content-ip',
    title: '12. User Content & Intellectual Property',
    body: [
      { p: 'You retain ownership of the Content you upload to the Platform, including profile information, photographs, and Creator promotional videos. By uploading Content, you grant Connectiqo a non-exclusive, worldwide, royalty-free license to host, store, reproduce, and display that Content solely as necessary to operate, promote, and improve the Platform.' },
      { p: 'You represent that you own or have the necessary rights to any Content you upload, and that such Content does not infringe the intellectual property or other rights of any third party.' },
      { p: 'The Connectiqo name, logo, Platform design, and underlying software are the property of Connectiqo/HR Nexus and are protected by applicable intellectual property laws. Nothing in these Terms grants you any right, title, or license in Connectiqo’s trademarks, branding, or proprietary technology, except as expressly permitted for your ordinary use of the Platform.' },
    ],
  },
  {
    id: 'suspension-termination',
    title: '13. Suspension & Termination',
    body: [
      { p: 'You may delete your account at any time from your account settings. Account deletion is permanent and, once processed, cannot be undone, subject to the data retention obligations described in our Privacy Policy.' },
      { p: 'Connectiqo may suspend, restrict, or terminate your account or access to the Platform, with or without notice, where it reasonably believes you have violated these Terms, applicable law, or where necessary to protect the safety, security, or integrity of the Platform or its Users and Creators.' },
      { p: 'Sections of these Terms that by their nature should survive termination — including provisions relating to payments already due, intellectual property, disclaimers, limitation of liability, indemnification, and dispute resolution — will continue to apply after your account is closed.' },
    ],
  },
  {
    id: 'disclaimers-liability',
    title: '14. Disclaimers & Limitation of Liability',
    body: [
      { p: 'The Platform is provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement, except to the extent such warranties cannot be excluded under applicable law.' },
      { p: 'Connectiqo is not responsible for the advice, conduct, statements, or Content of any Creator or User, and does not guarantee that Sessions will be uninterrupted, error-free, or free of technical issues. You acknowledge that any decisions you make based on guidance received during a Session are made at your own discretion and risk.' },
      { p: 'To the maximum extent permitted by applicable law, Connectiqo, its owners, and its officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or goodwill, arising out of or in connection with your use of, or inability to use, the Platform, even if advised of the possibility of such damages.' },
      { p: 'Nothing in these Terms shall exclude or limit liability that cannot lawfully be excluded or limited under applicable Indian law, including liability arising from fraud or willful misconduct.' },
    ],
  },
  {
    id: 'indemnification',
    title: '15. Indemnification',
    body: [
      { p: 'You agree to indemnify and hold harmless Connectiqo, HR Nexus, and their respective owners, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of the Platform, your Content, your violation of these Terms, or your violation of any rights of another person or entity, to the extent permitted by applicable law.' },
    ],
  },
  {
    id: 'governing-law',
    title: '16. Governing Law & Dispute Resolution',
    body: [
      { p: 'These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles.' },
      { p: 'If a dispute arises out of or relating to these Terms or your use of the Platform, we encourage you to first contact us at the details provided below so that we may attempt to resolve the matter informally.' },
      { p: 'Subject to any mandatory legal requirements to the contrary, the courts having jurisdiction over Haridwar, Uttarakhand, India, shall have exclusive jurisdiction over any dispute arising out of or relating to these Terms.' },
    ],
  },
  {
    id: 'changes',
    title: '17. Changes to These Terms',
    body: [
      { p: 'Connectiqo may revise these Terms from time to time to reflect changes in applicable law, Platform features, or our business operations. Where changes are material, we will provide notice through the Platform, by email, or by updating the "Last Updated" date above.' },
      { p: 'Your continued access to or use of the Platform after any revised Terms take effect constitutes your acceptance of those Terms. If you do not agree with a material change, you should stop using the Platform and, where applicable, close your account.' },
    ],
  },
  {
    id: 'misc',
    title: '18. Miscellaneous',
    body: [
      { p: 'These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Connectiqo regarding your use of the Platform, and supersede any prior agreements on this subject.' },
      { p: 'If any provision of these Terms is found to be invalid or unenforceable, that provision will be modified or severed to the minimum extent necessary, without affecting the validity of the remaining provisions.' },
      { p: 'Connectiqo’s failure to enforce any provision of these Terms shall not be considered a waiver of that provision. You may not assign or transfer your rights or obligations under these Terms without Connectiqo’s prior written consent; Connectiqo may assign these Terms in connection with a merger, acquisition, or sale of assets.' },
      { p: 'Connectiqo shall not be liable for any delay or failure to perform resulting from causes beyond its reasonable control, including natural disasters, governmental action, internet or telecommunications failures, or similar force majeure events.' },
    ],
  },
  {
    id: 'contact',
    title: '19. Contact Us',
    body: [
      { p: 'If you have questions about these Terms, please contact us at:' },
      { p: 'Connectiqo, operated by HR Nexus (Partnership Firm). Registered Office: 307, Adjacent to Helipad, Opposite Seva Sadan, Patanjali Yogpeeth Phase 2, Shantarshah, Bahadrabad, Haridwar, Uttarakhand – 249405, India.' },
      { p: 'Email: contact@connectiqo.com' },
    ],
  },
]
