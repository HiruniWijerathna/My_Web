import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './component/Main/Main';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Main />} />
         
       
    
      </Routes>
    </div>
  );
}

export default App;
