import LegalDocument from './LegalDocument'
import { COOKIE_META, COOKIE_SECTIONS } from '../content/cookiePolicyContent'

export default function CookiePolicy() {
  return <LegalDocument meta={COOKIE_META} sections={COOKIE_SECTIONS} />
}
