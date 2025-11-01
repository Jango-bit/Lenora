import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import favicon from "./assets/Logo.jpeg"; // path to your image


const link = document.createElement("link");
link.rel = "icon";
link.href = favicon;
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
