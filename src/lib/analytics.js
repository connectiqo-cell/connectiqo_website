const GA_ID = 'G-DEYVBC2W8W'
const CONSENT_KEY = 'cq_cookie_accepted'

let loaded = false

export function hasAnalyticsConsent() {
  return localStorage.getItem(CONSENT_KEY) === '1'
}

export function loadAnalytics() {
  if (loaded) return
  loaded = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}
