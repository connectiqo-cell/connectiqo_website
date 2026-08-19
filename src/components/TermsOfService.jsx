import LegalDocument from './LegalDocument'
import { TERMS_META, TERMS_SECTIONS } from '../content/termsOfServiceContent'

export default function TermsOfService() {
  return <LegalDocument meta={TERMS_META} sections={TERMS_SECTIONS} />
}
