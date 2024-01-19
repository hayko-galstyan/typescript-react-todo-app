import React from 'react';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
// components
import Home from './components/Home';
import Tasks from './components/Tasks';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tasks/:date' element={<Tasks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
