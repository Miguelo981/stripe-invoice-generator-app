import { persistentAtom } from '@nanostores/persistent'
import type { SiteData } from '@/models/invoice'

export const siteData = persistentAtom<SiteData>('site-data', {
    title: '',
    description: '',
    image: ''
}, {
    encode: JSON.stringify,
    decode: JSON.parse,
})