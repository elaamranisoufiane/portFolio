
import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import("./pages/index"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div className="h-full min-h-screen"> </div>}><MainPage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
