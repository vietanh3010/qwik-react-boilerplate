import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
    defaultLocale: { lang: 'vi-VN', currency: 'VND', timeZone: 'Asia/Bangkok' },
    supportedLocales: [
        { lang: 'vi-VN', currency: 'VND', timeZone: 'Asia/Bangkok' },
        { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' }
    ],
    assets: [
        'app' // Translations shared by the pages
    ]
};