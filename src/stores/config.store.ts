import { persistentAtom } from '@nanostores/persistent'
import type { SiteConfig } from '@/models/invoice'

export const siteConfig = persistentAtom<SiteConfig>('config', {
    fiscalData: '',
    fromEmail: '',
}, {
    encode: JSON.stringify,
    decode: JSON.parse,
})