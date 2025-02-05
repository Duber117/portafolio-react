import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'lenis/dist/lenis.css'
import './config/i18next.config.jsx'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from '../public/locales/es/welcome.json'
import global_en from '../public/locales/en/welcome.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    en: {
      welcome: global_en
    },
    es: {
      welcome: global_es
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)