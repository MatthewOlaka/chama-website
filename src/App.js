import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages';
import DownloadPage from './pages/download';
import SuccessPage from './pages/success';
import FailPage from './pages/fail';

function App() {
  return (
  
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/download" element={<DownloadPage />}  />
        <Route exact path="/success" element={<SuccessPage />}  />
        <Route exact path="/fail" element={<FailPage />}  />
        
      </Routes>
  
  );
}

export default App;
