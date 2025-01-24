import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/prism.js'
import './assets/jquery-2.1.4.min.js'
import './assets/desplegar.js'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
