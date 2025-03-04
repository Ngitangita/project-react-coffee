import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./app.css"
import { ThemeContext } from './components/context/ThemContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>,
)
