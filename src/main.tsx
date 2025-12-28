import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToDosProvider } from './store/todos.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    
    <ToDosProvider>

      <App />
      
    </ToDosProvider>
    </BrowserRouter>
  </StrictMode>,
)
