import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'
import { useStorage } from '@vueuse/core'

const locale = useStorage('locale', 'en')

export const i18n = createI18n({
  legacy: false,
  locale: locale.value,
  fallbackLocale: 'es',
  messages: {
    es,
    en
  }
})