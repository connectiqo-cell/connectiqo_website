import LegalDocument from './LegalDocument'
import { PRIVACY_META, PRIVACY_SECTIONS } from '../content/privacyPolicyContent'

export default function PrivacyPolicy() {
  return <LegalDocument meta={PRIVACY_META} sections={PRIVACY_SECTIONS} />
}
