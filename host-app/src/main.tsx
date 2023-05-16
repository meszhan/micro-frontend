import React from 'react'
import ReactDOM from 'react-dom/client'
import { bus, setupApp, preloadApp, startApp, destroyApp } from "wujie";


import App from './App.tsx'
import './index.css'

setupApp({name: 'child-app1', url: 'http://localhost:8001', el: '#child-app1'})
setupApp({name: 'child-app2', url: 'https://react.dev/', el: '#child-app2'})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
