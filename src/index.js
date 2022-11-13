import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Books } from './components/Books';
import { About } from './components/About';
import { Book } from './components/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/books' element={<Books />} >
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>کتاب مورد نظر خود را انتخاب نمایید</p>
                </main>
              } />
            <Route path=':bookId' element={<Book />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p style={{ textAlign: "center" }}>آیتم مورد نظر یافت نشد</p>
            </main>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


