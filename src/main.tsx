import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About';
import NoMatch from './routes/NoMatch';

import App from './App'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='about' element={<About/>} />
        <Route path='*' element={<NoMatch/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
