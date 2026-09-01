// Connectiqo Cookie Policy — content data
// Structure mirrors privacyPolicyContent.js. Combines the full legal draft prepared for
// Connectiqo's platform (web + mobile) with the concrete technical specifics of this
// website's actual implementation (Cloudflare, Google Analytics 4, the consent banner).
// Requires review by a qualified Indian technology lawyer before publication.

export const COOKIE_META = {
  documentName: 'Connectiqo Cookie Policy',
  version: '1.0',
  status: 'Final Draft (Subject to Legal Review)',
  effectiveDate: 'August 19, 2026',
  lastUpdated: 'August 19, 2026',
  owner: 'HR Nexus (Partnership Firm)',
}

export const COOKIE_SECTIONS = [
  {
    id: 'introduction',
    title: '1. Introduction & Scope',
    body: [
      { p: 'This Cookie Policy ("Policy") explains how HR Nexus, a partnership firm operating the Connectiqo Platform ("Connectiqo", "we", "us", or "our"), uses cookies and similar technologies when you access or use our website, web applications, mobile applications, and related digital services (together, the "Platform").' },
      { p: 'This Policy should be read together with the Connectiqo Terms of Use, Privacy Policy, Community Guidelines, Copyright Policy, Refund & Cancellation Policy, and other applicable Platform policies.' },
    ],
  },
  {
    id: 'what-are-cookies',
    title: '2. What Are Cookies & Similar Technologies',
    body: [
      { p: 'Cookies are small text files or similar identifiers that may be stored on your computer, mobile phone, tablet, or other device when you visit a website or use certain digital services. Cookies allow a website or application to recognize a device and remember certain information about a User or their activity.' },
      { p: 'In addition to traditional cookies, Connectiqo may use similar technologies such as Software Development Kits ("SDKs"), pixels, web beacons, local storage, device identifiers, session identifiers, application storage, tags, and similar technologies. For simplicity, this Policy refers to these collectively as "Cookies and Similar Technologies."' },
      { p: 'Cookies set by the website you are visiting are called "first-party cookies." Cookies set by a domain other than the one you are visiting are called "third-party cookies" — these typically enable features or functionality provided by a party other than the website owner, such as security services or analytics.' },
    ],
  },
  {
    id: 'why-we-use',
    title: '3. Why Connectiqo Uses Cookies',
    body: [
      { p: 'Connectiqo may use Cookies and Similar Technologies to operate the Platform, keep Users signed in, remember preferences, maintain security, prevent fraud, understand Platform usage, improve performance, troubleshoot technical problems, measure marketing performance, personalize certain experiences, and provide relevant features.' },
    ],
  },
  {
    id: 'categories',
    title: '4. Categories of Cookies',
    body: [
      { h3: 'Strictly Necessary Cookies' },
      { p: 'These Cookies may be necessary for the Platform to function, supporting login, Account authentication, security, Session management, Booking functionality, payment processes, fraud prevention, load balancing, and other essential Platform functions. Because these Cookies may be necessary for the Platform to operate, disabling them may cause certain features to stop working.' },
      { h3: 'Functional Cookies' },
      { p: 'Functional Cookies may allow Connectiqo to remember User preferences, such as language, region, interface preferences, Session settings, login preferences, and other selected settings.' },
      { h3: 'Analytics Cookies' },
      { p: 'Analytics Cookies may help Connectiqo understand how Users interact with the Platform, providing information such as pages visited, features used, approximate session duration, navigation patterns, error information, device type, browser information, and general Platform performance, used to improve usability, performance, features, navigation, and overall User experience.' },
      { h3: 'Performance Technologies' },
      { p: 'Connectiqo may use technologies that help identify slow pages, application errors, crashes, technical failures, performance problems, and infrastructure issues, helping Connectiqo maintain and improve the Platform.' },
      { h3: 'Security Cookies' },
      { p: 'Security-related Cookies and Similar Technologies may be used to authenticate Users, protect Accounts, detect suspicious activity, prevent unauthorized access and fraud, protect transactions, and maintain Platform security.' },
      { h3: 'Advertising and Marketing Technologies' },
      { p: 'Where applicable and permitted by Applicable Law, Connectiqo may use Cookies or Similar Technologies to measure advertising effectiveness, understand campaign performance, identify general audience trends, deliver relevant marketing, limit repetitive advertisements, or measure conversions. Where required, Connectiqo will obtain appropriate consent before using non-essential advertising technologies. As described in Section 5 below, the Connectiqo website does not currently use advertising, retargeting, or social-media tracking cookies.' },
    ],
  },
  {
    id: 'cookies-in-use',
    title: '5. Cookies Currently Used on This Website',
    body: [
      { p: 'While the categories above describe the technologies Connectiqo may use across the Platform, this section describes what is actually in use on the Connectiqo website (connectiqo.com) today, for transparency.' },
      { h3: 'Strictly Necessary / Security (Cloudflare)' },
      { p: 'This website is served through Cloudflare, a security and performance network. Cloudflare may set cookies such as __cf_bm and cf_clearance to distinguish real visitors from automated bots, mitigate abuse, and keep the site available and secure. These cookies are set at the network level as part of how the site is delivered to you, and are not controlled directly by Connectiqo\'s own code. Because they are strictly necessary for the site to function securely, they cannot be switched off through this website and do not require consent under most cookie laws.' },
      { h3: 'Analytics (Google Analytics)' },
      { p: 'We use Google Analytics (GA4) to understand how visitors use the website — pages viewed, time on site, and general traffic patterns — so we can improve it. Google Analytics may set cookies such as _ga and _ga_&lt;container-id&gt; to distinguish visitors and sessions. Information collected is processed in accordance with Google\'s privacy policy and, on our end, in accordance with the Connectiqo Privacy Policy.' },
      { h3: 'Local Storage (Cookie Preference)' },
      { p: 'When you interact with the cookie banner shown on this site, we store a small flag (cq_cookie_accepted) in your browser\'s local storage to remember that you\'ve seen the banner, so it isn\'t shown again on future visits. This is not a cookie in the strict technical sense, but is disclosed here for transparency since it serves a similar purpose.' },
      { p: 'We do not currently use advertising, retargeting, or social-media tracking cookies on this website. If this changes — for example, when Connectiqo\'s mobile application and in-Session features described elsewhere in this Policy go live — this section will be updated to reflect the technologies actually in use.' },
    ],
  },
  {
    id: 'third-party-technologies',
    title: '6. Third-Party Technologies',
    body: [
      { p: 'Connectiqo may use authorized third-party service providers that operate Cookies or Similar Technologies on or in connection with the Platform, supporting analytics, payments, security, communications, advertising, customer support, video functionality, performance monitoring, or other Platform services.' },
      { h3: 'Payment-Related Technologies' },
      { p: 'Payment providers, including Razorpay, may use Cookies or Similar Technologies to support payment processing, fraud detection, transaction security, authentication, and payment functionality. Connectiqo may receive transaction-related information as described in the Privacy Policy.' },
      { h3: 'Third-Party Privacy Policies' },
      { p: 'Third-party providers may process information according to their own privacy policies and terms. Connectiqo does not control every third party\'s independent privacy practices, and Users should review the applicable third-party privacy information where appropriate.' },
    ],
  },
  {
    id: 'booking-session-functionality',
    title: '7. Login, Booking & Session Functionality',
    body: [
      { p: 'Connectiqo may use Cookies or Similar Technologies to maintain authenticated sessions, allowing a User to remain logged in while navigating between Platform pages or features. Cookies or Similar Technologies may also be used to support Booking status, Session access, Creator availability, Mentee access, authentication, Session security, and related Platform functionality within the Connectiqo application.' },
    ],
  },
  {
    id: 'security-fraud',
    title: '8. Security & Fraud Prevention',
    body: [
      { p: 'Connectiqo may use device and session information to identify potentially suspicious activity, helping to detect Account takeover, fake Accounts, payment fraud, automated abuse, suspicious Bookings, promotional abuse, and other Platform manipulation.' },
    ],
  },
  {
    id: 'mobile-apps',
    title: '9. Mobile Applications & Device Information',
    body: [
      { p: 'Connectiqo mobile applications may use SDKs and similar technologies rather than traditional browser cookies. These technologies may perform functions similar to cookies, including authentication, analytics, crash reporting, security, performance monitoring, notifications, and feature functionality.' },
      { p: 'Certain technologies may collect information associated with a device, such as device type, operating system, application version, browser type, language, approximate location, IP address, device identifiers, and other technical information. The collection and use of such information is governed by the Connectiqo Privacy Policy and Applicable Law.' },
    ],
  },
  {
    id: 'personal-data',
    title: '10. Personal Data',
    body: [
      { p: 'Some Cookie information may constitute Personal Data under Applicable Law. Where this occurs, Connectiqo will process such information in accordance with the Connectiqo Privacy Policy and applicable legal requirements.' },
    ],
  },
  {
    id: 'consent',
    title: '11. Consent & Your Choices',
    body: [
      { p: 'Where Applicable Law requires consent before placing or using certain non-essential Cookies or Similar Technologies, Connectiqo requests consent through an appropriate mechanism — on this website, a cookie banner. Certain technologies may be necessary to provide requested Platform functionality; where legally permitted, Connectiqo may use these essential technologies without requiring separate consent because they are strictly necessary for the requested service.' },
      { p: 'On the Connectiqo website, when you first visit, a cookie banner gives you the option to Accept or Decline. Please note the practical effect of each choice, described honestly below:' },
      { ul: [
        'Strictly necessary cookies set by Cloudflare are required to deliver the website securely and cannot be disabled through the banner or through this website, regardless of your choice.',
        'Google Analytics is not loaded at all until you select "Accept." If you select "Decline," or simply close the banner without choosing, Google Analytics will not run and no analytics cookies will be set.',
        'Selecting "Accept" is remembered in your browser so the banner does not reappear on later visits. Selecting "Decline" is not separately remembered, so the banner may appear again on a future visit until you choose to accept.',
        'You can also prevent analytics cookies at the browser level at any time, or revoke a previous "Accept," using your browser\'s cookie or tracking-protection settings, or a browser extension such as Google\'s official Analytics opt-out add-on, as described in Section 12 below.',
      ] },
      { p: 'Where Connectiqo provides a Cookie Preference Center or similar tool in the future, Users may be able to accept non-essential cookies, reject non-essential cookies, manage categories, or change previously selected preferences.' },
    ],
  },
  {
    id: 'browser-controls',
    title: '12. Browser & Device Controls',
    body: [
      { p: 'Most web browsers allow you to control cookies through their settings, including viewing what cookies are stored, deleting them individually or entirely, blocking cookies from particular or all websites, and receiving warnings before cookies are stored. Because each browser is different, please check the "Help" menu of your browser, or visit your browser vendor\'s support pages, to learn how to change your cookie preferences. Please note that blocking all cookies may affect the functionality of this and other websites you visit.' },
      { p: 'To opt out of Google Analytics specifically across the websites you visit, Google provides a browser add-on at the Google Analytics Opt-out page. Depending on the operating system, Users may also be able to control certain tracking or advertising technologies through mobile device settings; the available controls may vary by device, operating system, application version, and jurisdiction.' },
      { p: 'Users may disable certain Cookies through browser or device settings; however, disabling essential Cookies may cause login problems, Booking problems, payment problems, security issues, loss of preferences, or other Platform functionality to stop working properly.' },
    ],
  },
  {
    id: 'deleting-cookies',
    title: '13. Deleting Cookies',
    body: [
      { p: 'Deleting Cookies does not necessarily delete all Personal Data held by Connectiqo. Account information, transaction information, Session information, and other Personal Data may be retained according to the Privacy Policy and Applicable Law.' },
    ],
  },
  {
    id: 'do-not-track',
    title: '14. Do Not Track Signals',
    body: [
      { p: 'Some browsers provide "Do Not Track" or similar settings. Because there is no universally consistent technical standard for responding to such signals, Connectiqo may not respond to every browser-level signal unless required by Applicable Law.' },
    ],
  },
  {
    id: 'analytics-marketing',
    title: '15. Analytics & Marketing Measurement',
    body: [
      { p: 'Connectiqo may use analytics technologies to understand which features are used, how Users navigate the Platform, technical performance, feature adoption, errors, and general usage patterns; analytics information may be aggregated or otherwise processed for Platform improvement.' },
      { p: 'Where marketing technologies are used, Connectiqo may measure advertisement impressions, clicks, campaign performance, referral activity, conversions, and general marketing effectiveness. Where permitted and applicable, Connectiqo may use information from Cookies and Similar Technologies to provide a more relevant Platform experience; personalization settings may vary by User, device, jurisdiction, and available Platform functionality.' },
    ],
  },
  {
    id: 'social-third-party-links',
    title: '16. Social Media Technologies & Third-Party Links',
    body: [
      { p: 'Connectiqo may provide integrations or sharing functionality involving third-party social platforms. Those platforms may use their own Cookies or Similar Technologies when Users interact with their services, and such processing is subject to the relevant third party\'s terms and privacy practices.' },
      { p: 'The Connectiqo Platform may contain links to third-party websites. A third-party website may use Cookies independently of Connectiqo, and Connectiqo is not responsible for the cookie practices of websites it does not control.' },
    ],
  },
  {
    id: 'lifespan',
    title: '17. Cookie Lifespan',
    body: [
      { p: 'Cookies may be Session Cookies, which generally expire when the relevant browser or session ends, or Persistent Cookies, which may remain on a device for a defined period or until deleted. The lifespan of a particular Cookie may depend on its purpose, the service provider, technical configuration, and Applicable Law.' },
    ],
  },
  {
    id: 'changes',
    title: '18. Changes to Cookies & This Policy',
    body: [
      { p: 'Connectiqo may change the Cookies and Similar Technologies used on the Platform from time to time because of new features, security improvements, analytics requirements, changes in third-party services, legal requirements, or operational needs.' },
      { p: 'Connectiqo may update this Cookie Policy from time to time to reflect changes in the cookies and technologies we use, or for legal or regulatory reasons. Where required by Applicable Law, Connectiqo will provide appropriate notice of material changes; the updated version will identify the applicable "Last Updated" date.' },
    ],
  },
  {
    id: 'relationship-with-other-policies',
    title: '19. Relationship With Other Policies',
    body: [
      { p: 'This Cookie Policy explains the use of Cookies and Similar Technologies. The Connectiqo Privacy Policy provides additional information concerning Personal Data collection, processing, sharing, retention, security, User rights, and data deletion.' },
      { p: 'This Policy forms part of the Connectiqo Platform rules and should be read together with the Terms of Use. If a provision conflicts with mandatory Applicable Law, the mandatory legal requirement shall prevail.' },
    ],
  },
  {
    id: 'no-guarantee',
    title: '20. No Absolute Guarantee',
    body: [
      { p: 'Connectiqo cannot guarantee that every browser, device, cookie, SDK, or similar technology will operate identically. Technical changes may affect how cookie controls operate.' },
    ],
  },
  {
    id: 'contact',
    title: '21. Contact Us',
    body: [
      { p: 'Questions concerning this Cookie Policy or your cookie preferences may be submitted through Connectiqo\'s official support or privacy contact channels.' },
      { p: 'Connectiqo, operated by HR Nexus (Partnership Firm). Registered Office: 307, Adjacent to Helipad, Opposite Seva Sadan, Patanjali Yogpeeth Phase 2, Shantarshah, Bahadrabad, Haridwar, Uttarakhand – 249405, India.' },
      { p: 'General Email: contact@connectiqo.com' },
      { p: 'Privacy / Cookie Email: privacy@connectiqo.com' },
    ],
  },
]
