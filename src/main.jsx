import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'  // ✅ Import global SCSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
