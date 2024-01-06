import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterManager from './routes/router.tsx'
import BackToTop from './components/BackToTop/BackToTop.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BackToTop />
    <RouterManager />
  </React.StrictMode>,
)
