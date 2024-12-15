import { Provider } from './components/ui/provider.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Demo from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Demo />
    </Provider>
  </StrictMode>,
)
