import React from 'react'
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/routes';




function App() {
  return (
    <div className='App'>
      
       {/* <div className="blur" style={{top: '5%', right: '0'}}></div>
       <div className="blur" style={{top: '20%', left: '-8rem'}}></div> */}
       <RouterProvider router={router}></RouterProvider>
    
  </div>
  );
  
  
}

export default App
