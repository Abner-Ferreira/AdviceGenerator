import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextAdviceProvider from './context/ContextAdvice.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextAdviceProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextAdviceProvider>
)
