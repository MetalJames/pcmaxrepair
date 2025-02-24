import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import { ErrorBoundaryWrapper } from './components/common/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundaryWrapper>
      <App />
      </ErrorBoundaryWrapper>
    </HelmetProvider>
  </React.StrictMode>,
)
