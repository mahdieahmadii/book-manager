import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Books } from './components/Books';
import { About } from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/books' element={<Books />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


