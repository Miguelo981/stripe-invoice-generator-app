import { persistentAtom } from '@nanostores/persistent'

export const stripe = persistentAtom<{ token: string }>('stripe', {
    token: ''
}, {
    encode: JSON.stringify,
    decode: JSON.parse,
})