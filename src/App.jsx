import React from 'react'
import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes'


function App() {
  return (
    <div className='App'>
       <div className="blur" style={{top: '5%', right: '0'}}></div>
       <div className="blur" style={{top: '20%', left: '-8rem'}}></div>
    <RouterProvider router={router} />
  </div>
  );
  
  
}

export default App
