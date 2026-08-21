// Connectiqo Cookie Policy — content data
// Structure mirrors privacyPolicyContent.js. Original draft prepared for Connectiqo's actual
// setup (Cloudflare-proxied, Google Analytics 4) — requires legal review before publication.

export const COOKIE_META = {
  documentName: 'Connectiqo Cookie Policy',
  version: '1.0',
  status: 'Draft (Subject to Legal Review)',
  effectiveDate: 'August 19, 2026',
  lastUpdated: 'August 19, 2026',
  owner: 'HR Nexus (Partnership Firm)',
}

export const COOKIE_SECTIONS = [
  {
    id: 'introduction',
    title: '1. Introduction',
    body: [
      { p: 'This Cookie Policy explains how Connectiqo ("Connectiqo", "we", "our", or "us") uses cookies and similar technologies on the Connectiqo website (connectiqo.com), and forms part of our Privacy Policy.' },
      { p: 'By continuing to use this website, you agree to the use of cookies as described in this Policy, except where you have adjusted your browser or device settings to refuse them.' },
    ],
  },
  {
    id: 'what-are-cookies',
    title: '2. What Are Cookies',
    body: [
      { p: 'Cookies are small text files placed on your device by a website you visit. They are widely used to make websites work, work more efficiently, and to provide reporting information to the site owner.' },
      { p: 'Cookies set by the website you are visiting are called "first-party cookies". Cookies set by a domain other than the one you are visiting are called "third-party cookies" — third-party cookies enable features or functionality provided by a party other than the website owner, such as security services or analytics.' },
    ],
  },
  {
    id: 'cookies-we-use',
    title: '3. Cookies We Use',
    body: [
      { p: 'The Connectiqo website currently uses cookies (and the related browser storage technology, localStorage) in the following categories.' },
      { h3: 'Strictly Necessary / Security (Cloudflare)' },
      { p: 'This website is served through Cloudflare, a security and performance network. Cloudflare may set cookies such as __cf_bm and cf_clearance to distinguish real visitors from automated bots, mitigate abuse, and keep the site available and secure. These cookies are set at the network level as part of how the site is delivered to you, and are not controlled directly by Connectiqo\'s own code. Because they are strictly necessary for the site to function securely, they cannot be switched off through this website and do not require consent under most cookie laws.' },
      { h3: 'Analytics (Google Analytics)' },
      { p: 'We use Google Analytics (GA4) to understand how visitors use the website — pages viewed, time on site, and general traffic patterns — so we can improve it. Google Analytics may set cookies such as _ga and _ga_&lt;container-id&gt; to distinguish visitors and sessions. Information collected is processed in accordance with Google\'s privacy policy and, on our end, in accordance with our own Privacy Policy.' },
      { h3: 'Local Storage (Cookie Preference)' },
      { p: 'When you interact with the cookie banner shown on this site, we store a small flag (cq_cookie_accepted) in your browser\'s local storage to remember that you\'ve seen the banner, so it isn\'t shown again on future visits. This is not a cookie in the strict technical sense, but is disclosed here for transparency since it serves a similar purpose.' },
      { p: 'We do not currently use advertising, retargeting, or social-media tracking cookies on this website.' },
    ],
  },
  {
    id: 'consent-and-choices',
    title: '4. Consent and Your Choices',
    body: [
      { p: 'When you first visit the website, a cookie banner gives you the option to Accept or Decline. Please note the practical effect of each choice, described honestly below:' },
      { ul: [
        'Strictly necessary cookies set by Cloudflare are required to deliver the website securely and cannot be disabled through the banner or through this website, regardless of your choice.',
        'Google Analytics is not loaded at all until you select "Accept." If you select "Decline," or simply close the banner without choosing, Google Analytics will not run and no analytics cookies will be set.',
        'Selecting "Accept" is remembered in your browser so the banner does not reappear on later visits. Selecting "Decline" is not separately remembered, so the banner may appear again on a future visit until you choose to accept.',
        'You can also prevent analytics cookies at the browser level at any time, or revoke a previous "Accept," using your browser\'s cookie or tracking-protection settings, or a browser extension such as Google\'s official Analytics opt-out add-on, as described in Section 5 below.',
      ] },
    ],
  },
  {
    id: 'managing-cookies',
    title: '5. Managing Cookies Through Your Browser',
    body: [
      { p: 'Most web browsers allow you to control cookies through their settings, including viewing what cookies are stored, deleting them individually or entirely, and blocking cookies from particular or all websites.' },
      { p: 'Because each browser is different, please check the "Help" menu of your browser, or visit your browser vendor\'s support pages, to learn how to change your cookie preferences. Please note that blocking all cookies may affect the functionality of this and other websites you visit.' },
      { p: 'To opt out of Google Analytics specifically across the websites you visit, Google provides a browser add-on at the Google Analytics Opt-out page.' },
    ],
  },
  {
    id: 'changes',
    title: '6. Changes to This Cookie Policy',
    body: [
      { p: 'We may update this Cookie Policy from time to time to reflect changes in the cookies and technologies we use, or for legal or regulatory reasons. Material changes will be reflected by an updated "Last Updated" date at the top of this page.' },
    ],
  },
  {
    id: 'contact',
    title: '7. Contact Us',
    body: [
      { p: 'If you have questions about this Cookie Policy, please contact us at:' },
      { p: 'Connectiqo, operated by HR Nexus (Partnership Firm). Registered Office: 307, Adjacent to Helipad, Opposite Seva Sadan, Patanjali Yogpeeth Phase 2, Shantarshah, Bahadrabad, Haridwar, Uttarakhand – 249405, India.' },
      { p: 'Email: contact@connectiqo.com' },
    ],
  },
]
