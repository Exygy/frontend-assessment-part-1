import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.scss"
import { Listings } from "./Listings"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Listings />
  </React.StrictMode>,
)
