import { env } from '@/env'

export function api(init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL

    const url = new URL(baseUrl)

    return fetch(url, init)
}